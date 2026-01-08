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

// Parse date from folder name (e.g., "29-12-2025" or "8-1-2026")
function parseDateFromFolder(folderName) {
  if (folderName.toLowerCase() === 'older') {
    return { date: new Date(0), label: 'Older' }; // Very old date for sorting
  }
  
  // Try to parse date formats like "29-12-2025" or "8-1-2026"
  const parts = folderName.split('-');
  if (parts.length === 3) {
    const day = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10) - 1; // Month is 0-indexed
    const year = parseInt(parts[2], 10);
    
    if (!isNaN(day) && !isNaN(month) && !isNaN(year)) {
      const date = new Date(year, month, day);
      if (!isNaN(date.getTime())) {
        // Format date label nicely
        const formattedDate = date.toLocaleDateString('en-GB', { 
          day: 'numeric', 
          month: 'long', 
          year: 'numeric' 
        });
        return { date, label: formattedDate };
      }
    }
  }
  
  // Fallback: use folder name as label
  return { date: new Date(0), label: folderName };
}

function getFilesFromFolder(folderPath, subfolder = '') {
  const items = [];
  
  try {
    const entries = fs.readdirSync(folderPath, { withFileTypes: true });
    
    for (const entry of entries) {
      const fullPath = path.join(folderPath, entry.name);
      
      if (entry.isDirectory()) {
        // Recursively scan subfolders
        const subfolderItems = getFilesFromFolder(fullPath, entry.name);
        items.push(...subfolderItems);
      } else if (entry.isFile()) {
        const ext = path.extname(entry.name).toLowerCase();
        if (imageExtensions.includes(ext) || videoExtensions.includes(ext)) {
          items.push({
            file: entry.name,
            folder: subfolder,
            path: fullPath
          });
        }
      }
    }
  } catch (error) {
    console.error(`Error reading folder ${folderPath}:`, error);
  }
  
  return items;
}

function generateManifest() {
  const fileEntries = getFilesFromFolder(galleryFolder);
  
  // Group items by folder/date
  const itemsByDate = {};
  
  fileEntries.forEach((entry, index) => {
    const ext = path.extname(entry.file).toLowerCase();
    const isImage = imageExtensions.includes(ext);
    const isVideo = videoExtensions.includes(ext);
    
    // Get date info from folder name
    const dateInfo = parseDateFromFolder(entry.folder || 'older');
    const dateKey = entry.folder || 'older';
    
    if (!itemsByDate[dateKey]) {
      itemsByDate[dateKey] = {
        dateInfo,
        items: []
      };
    }
    
    // Get file modification date
    let dateAdded = new Date().toISOString();
    try {
      const stats = fs.statSync(entry.path);
      dateAdded = stats.mtime.toISOString();
    } catch (error) {
      console.warn(`Could not get stats for ${entry.file}:`, error.message);
    }
    
    itemsByDate[dateKey].items.push({
      id: index + 1,
      type: isImage ? 'image' : isVideo ? 'video' : 'unknown',
      src: `/assets/img/image-gallery/${entry.folder ? entry.folder + '/' : ''}${entry.file}`,
      alt: entry.file.replace(/\.[^/.]+$/, '').replace(/[-_]/g, ' '),
      category: 'gallery',
      dateAdded: dateAdded,
      dateGroup: dateKey,
      dateLabel: dateInfo.label
    });
  });
  
  // Sort date groups by date (newest first)
  const sortedDateKeys = Object.keys(itemsByDate).sort((a, b) => {
    const dateA = itemsByDate[a].dateInfo.date;
    const dateB = itemsByDate[b].dateInfo.date;
    return dateB - dateA; // Descending order (newest first)
  });
  
  // Flatten items maintaining date group order
  const galleryItems = [];
  let idCounter = 1;
  
  sortedDateKeys.forEach(dateKey => {
    const group = itemsByDate[dateKey];
    // Sort items within each date group by modification date (newest first)
    group.items.sort((a, b) => {
      const dateA = new Date(a.dateAdded);
      const dateB = new Date(b.dateAdded);
      return dateB - dateA;
    });
    
    group.items.forEach(item => {
      item.id = idCounter++;
      galleryItems.push(item);
    });
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

