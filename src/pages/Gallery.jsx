import { useState, useEffect, useRef } from 'react';
import SEO from '../components/SEO';

// Video Thumbnail Component - Shows video first frame as thumbnail
const VideoThumbnail = ({ src, alt }) => {
  const videoRef = useRef(null);
  const [frameLoaded, setFrameLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedMetadata = () => {
      // Seek to 0.1 seconds to show a frame (not just black screen)
      video.currentTime = 0.1;
    };

    const handleSeeked = () => {
      setFrameLoaded(true);
    };

    const handleError = () => {
      setFrameLoaded(true); // Show video anyway even if there's an error
    };

    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    video.addEventListener('seeked', handleSeeked);
    video.addEventListener('error', handleError);

    // Load video metadata
    video.load();

    return () => {
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      video.removeEventListener('seeked', handleSeeked);
      video.removeEventListener('error', handleError);
    };
  }, [src]);

  return (
    <div className="relative w-full">
      <video
        ref={videoRef}
        src={src}
        preload="metadata"
        muted
        playsInline
        className="w-full h-auto object-cover"
        style={{ pointerEvents: 'none' }}
        aria-label={alt}
      />
      {!frameLoaded && (
        <div className="absolute inset-0 bg-gray-800/50 flex items-center justify-center">
          <i className="fas fa-spinner fa-spin text-white text-2xl"></i>
        </div>
      )}
    </div>
  );
};

const Gallery = () => {
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [filter, setFilter] = useState('all'); // 'all', 'image', 'video'
  const [galleryItems, setGalleryItems] = useState([]);
  const [loading, setLoading] = useState(true);

  // Load gallery items from manifest file
  useEffect(() => {
    const loadGalleryManifest = async () => {
      try {
        const response = await fetch('/gallery-manifest.json');
        if (response.ok) {
          const manifest = await response.json();
          let items = manifest.items || [];
          
          // Sort by date (newest first) - fallback in case manifest wasn't sorted
          items.sort((a, b) => {
            const dateA = a.dateAdded ? new Date(a.dateAdded) : new Date(0);
            const dateB = b.dateAdded ? new Date(b.dateAdded) : new Date(0);
            return dateB - dateA; // Descending order (newest first)
          });
          
          setGalleryItems(items);
        } else {
          console.warn('Gallery manifest not found. Run: npm run generate-gallery');
          setGalleryItems([]);
        }
      } catch (error) {
        console.error('Error loading gallery manifest:', error);
        setGalleryItems([]);
      } finally {
        setLoading(false);
      }
    };

    loadGalleryManifest();
  }, []);

  const filteredItems = filter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.type === filter);

  const openLightbox = (item) => {
    setSelectedMedia(item);
  };

  const closeLightbox = () => {
    setSelectedMedia(null);
  };

  return (
    <main>
      <SEO
        title="Gallery | Al-Khalid Trust Pakistan"
        description="View photos and videos from Al-Khalid Trust Pakistan's welfare activities, food distribution programs, community support initiatives, and Ramzan activities."
        keywords="gallery, photos, videos, activities, food distribution, Ramzan, community support, charity work"
      />
      {/* Hero Banner */}
      <section
        className="slider-area2 relative h-[400px] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/img/hero/h1_hero22.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container-custom relative z-10 h-full flex items-center">
          <div className="text-center w-full">
            <h2 className="text-4xl lg:text-5xl font-bold text-white">
              Gallery
            </h2>
            <p className="text-white text-lg mt-4">
              Our Activities & Programs in Pictures
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery-area section-padding30 bg-gray-50">
        <div className="container-custom">
          {/* Loading State */}
          {loading && (
            <div className="text-center py-16">
              <i className="fas fa-spinner fa-spin text-4xl text-theme-primary mb-4"></i>
              <p className="text-lg text-body">Loading gallery...</p>
            </div>
          )}

          {/* Filter Buttons */}
          {!loading && (
            <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              onClick={() => setFilter('all')}
              className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                filter === 'all'
                  ? 'bg-theme-primary text-white'
                  : 'bg-white text-heading hover:bg-theme-primary hover:text-white'
              }`}
            >
              All Media
            </button>
            <button
              onClick={() => setFilter('image')}
              className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                filter === 'image'
                  ? 'bg-theme-primary text-white'
                  : 'bg-white text-heading hover:bg-theme-primary hover:text-white'
              }`}
            >
              <i className="fas fa-image mr-2"></i>Images
            </button>
            <button
              onClick={() => setFilter('video')}
              className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                filter === 'video'
                  ? 'bg-theme-primary text-white'
                  : 'bg-white text-heading hover:bg-theme-primary hover:text-white'
              }`}
            >
              <i className="fas fa-video mr-2"></i>Videos
            </button>
          </div>
          )}

          {/* Masonry Gallery Grid - Responsive CSS Columns masonry layout */}
          {!loading && (
            <>
              {filteredItems.length > 0 ? (
                <div className="gallery-masonry">
                  {filteredItems.map((item) => (
                    <div
                      key={item.id}
                      className="gallery-item cursor-pointer group mb-5 break-inside-avoid"
                      onClick={() => openLightbox(item)}
                    >
                      <div className="relative overflow-hidden rounded-lg shadow-md hover:shadow-2xl transition-all duration-300 group-hover:scale-[1.02]">
                        {item.type === 'image' ? (
                          <img
                            src={item.src}
                            alt={item.alt}
                            className="w-full h-auto object-cover"
                            loading="lazy"
                          />
                        ) : (
                          <div className="relative">
                            <VideoThumbnail src={item.src} alt={item.alt} />
                            <div className="absolute inset-0 bg-black/30 flex items-center justify-center pointer-events-none">
                              <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                                <i className="fas fa-play text-theme-primary text-2xl ml-1"></i>
                              </div>
                            </div>
                          </div>
                        )}
                        {/* Overlay on hover */}
                        <div 
                          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          style={{ background: "linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent)" }}
                        >
                          <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                            <div className="flex items-center gap-2">
                              {item.type === 'image' ? (
                                <i className="fas fa-image"></i>
                              ) : (
                                <i className="fas fa-video"></i>
                              )}
                              <span className="text-sm font-semibold">Click to view</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <i className="fas fa-images text-6xl text-gray-300 mb-4"></i>
                  <p className="text-xl text-body">No {filter === 'all' ? 'media' : filter + 's'} found</p>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedMedia && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-theme-primary transition text-3xl z-10"
          >
            <i className="fas fa-times"></i>
          </button>
          
          <div className="max-w-6xl w-full max-h-[90vh] overflow-auto" onClick={(e) => e.stopPropagation()}>
            {selectedMedia.type === 'image' ? (
              <img
                src={selectedMedia.src}
                alt={selectedMedia.alt}
                className="w-full h-auto rounded-lg"
              />
            ) : (
              <video
                src={selectedMedia.src}
                controls
                autoPlay
                className="w-full h-auto rounded-lg"
              >
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        </div>
      )}
    </main>
  );
};

export default Gallery;

