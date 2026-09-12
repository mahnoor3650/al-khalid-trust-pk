import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase, GALLERY_BUCKET, GALLERY_TABLE } from '../lib/supabaseClient';
import { useAuth } from '../hooks/useAuth';
import SEO from '../components/SEO';

const AdminDashboard = () => {
  const { session } = useAuth();
  const navigate = useNavigate();

  const [items, setItems] = useState([]);
  const [loadingItems, setLoadingItems] = useState(true);
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');
  const [deletingId, setDeletingId] = useState(null);

  const fetchItems = async () => {
    setLoadingItems(true);
    const { data, error } = await supabase
      .from(GALLERY_TABLE)
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      setError('Could not load uploaded media.');
    } else {
      setItems(data || []);
    }
    setLoadingItems(false);
  };

  useEffect(() => {
    (async () => {
      await fetchItems();
    })();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/admin/login', { replace: true });
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file) {
      setError('Please choose an image or video file first.');
      return;
    }

    setError('');
    setUploading(true);

    const isVideo = file.type.startsWith('video/');
    const isImage = file.type.startsWith('image/');

    if (!isVideo && !isImage) {
      setError('Only image or video files are allowed.');
      setUploading(false);
      return;
    }

    const safeName = file.name.replace(/[^a-zA-Z0-9.\-_]/g, '_');
    const storagePath = `${Date.now()}-${safeName}`;

    const { error: uploadError } = await supabase.storage
      .from(GALLERY_BUCKET)
      .upload(storagePath, file, { cacheControl: '3600', upsert: false });

    if (uploadError) {
      setError(`Upload failed: ${uploadError.message}`);
      setUploading(false);
      return;
    }

    const { data: publicUrlData } = supabase.storage
      .from(GALLERY_BUCKET)
      .getPublicUrl(storagePath);

    const { error: insertError } = await supabase.from(GALLERY_TABLE).insert({
      type: isVideo ? 'video' : 'image',
      storage_path: storagePath,
      url: publicUrlData.publicUrl,
      alt: file.name,
      created_by: session?.user?.id,
    });

    if (insertError) {
      setError(`Saved file but failed to record it: ${insertError.message}`);
      setUploading(false);
      return;
    }

    setFile(null);
    e.target.reset?.();
    setUploading(false);
    fetchItems();
  };

  const handleDelete = async (item) => {
    if (!window.confirm('Delete this media permanently?')) return;

    setDeletingId(item.id);
    setError('');

    const { error: storageError } = await supabase.storage
      .from(GALLERY_BUCKET)
      .remove([item.storage_path]);

    if (storageError) {
      setError(`Failed to delete file: ${storageError.message}`);
      setDeletingId(null);
      return;
    }

    const { error: dbError } = await supabase
      .from(GALLERY_TABLE)
      .delete()
      .eq('id', item.id);

    if (dbError) {
      setError(`File removed but failed to update record: ${dbError.message}`);
      setDeletingId(null);
      return;
    }

    setItems((prev) => prev.filter((i) => i.id !== item.id));
    setDeletingId(null);
  };

  return (
    <main>
      <SEO title="Admin Dashboard | Al-Khalid Trust Pakistan" />
      <section className="section-padding30 bg-gray-50 min-h-[70vh]">
        <div className="container-custom">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 sm:mb-8">
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-heading">
              Gallery Admin
            </h1>
            <button onClick={handleLogout} className="btn btn-secondary w-full sm:w-auto">
              Log Out
            </button>
          </div>

          {/* Upload Form */}
          <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 mb-8 sm:mb-10">
            <h2 className="text-lg sm:text-xl font-semibold text-heading mb-4">
              Upload New Media
            </h2>
            <form onSubmit={handleUpload} className="space-y-4">
              <div>
                <label htmlFor="file" className="block text-sm font-medium text-heading mb-1">
                  Image or Video File
                </label>
                <input
                  id="file"
                  type="file"
                  accept="image/*,video/*"
                  onChange={(e) => setFile(e.target.files?.[0] || null)}
                  className="w-full text-sm file:mr-3 file:py-2 file:px-4 file:rounded-md file:border-0 file:bg-theme-primary file:text-white file:cursor-pointer"
                />
              </div>

              {error && <p className="text-red-600 text-sm break-words">{error}</p>}

              <button
                type="submit"
                disabled={uploading}
                className="btn btn-primary w-full sm:w-auto disabled:opacity-60"
              >
                {uploading ? 'Uploading...' : 'Upload'}
              </button>
            </form>
          </div>

          {/* Existing Media */}
          <div>
            <h2 className="text-lg sm:text-xl font-semibold text-heading mb-4">
              Uploaded Media ({items.length})
            </h2>

            {loadingItems ? (
              <div className="text-center py-12">
                <i className="fas fa-spinner fa-spin text-3xl text-theme-primary"></i>
              </div>
            ) : items.length === 0 ? (
              <p className="text-body">No media uploaded yet.</p>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white rounded-lg shadow-md overflow-hidden"
                  >
                    <div className="h-28 sm:h-40 bg-gray-100">
                      {item.type === 'image' ? (
                        <img
                          src={item.url}
                          alt={item.alt}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <video
                          src={item.url}
                          className="w-full h-full object-cover"
                          muted
                        />
                      )}
                    </div>
                    <div className="p-2 sm:p-3">
                      <button
                        onClick={() => handleDelete(item)}
                        disabled={deletingId === item.id}
                        className="text-red-600 text-xs sm:text-sm hover:underline disabled:opacity-60"
                      >
                        {deletingId === item.id ? 'Deleting...' : 'Delete'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default AdminDashboard;
