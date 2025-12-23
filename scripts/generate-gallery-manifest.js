import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Paths
const galleryFolder = path.join(__dirname, '../public/assets/img/image-gallery');
const manifestPath = path.join(__dirname, '../public/gallery-manifest.json');

// Supported image formats
const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp'];
// Supported video formats
const videoExtensions = ['.mp4', '.webm', '.mov', '.avi'];

function getFilesFromFolder(folderPath) {
  try {
    const files = fs.readdirSync(folderPath);
    return files.filter(file => {
      const ext = path.extname(file).toLowerCase();
      return imageExtensions.includes(ext) || videoExtensions.includes(ext);
    });
  } catch (error) {
    console.error('Error reading gallery folder:', error);
    return [];
  }
}

function generateManifest() {
  const files = getFilesFromFolder(galleryFolder);
  
  const galleryItems = files.map((file, index) => {
    const ext = path.extname(file).toLowerCase();
    const isImage = imageExtensions.includes(ext);
    const isVideo = videoExtensions.includes(ext);
    
    return {
      id: index + 1,
      type: isImage ? 'image' : isVideo ? 'video' : 'unknown',
      src: `/assets/img/image-gallery/${file}`,
      alt: file.replace(/\.[^/.]+$/, '').replace(/[-_]/g, ' '),
      category: 'gallery'
    };
  });

  const manifest = {
    lastUpdated: new Date().toISOString(),
    totalItems: galleryItems.length,
    images: galleryItems.filter(item => item.type === 'image').length,
    videos: galleryItems.filter(item => item.type === 'video').length,
    items: galleryItems
  };

  // Write manifest file
  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2), 'utf-8');
  
  console.log(`✅ Gallery manifest generated successfully!`);
  console.log(`   Total items: ${manifest.totalItems}`);
  console.log(`   Images: ${manifest.images}`);
  console.log(`   Videos: ${manifest.videos}`);
  console.log(`   Manifest saved to: ${manifestPath}`);
}

// Run the script
generateManifest();

