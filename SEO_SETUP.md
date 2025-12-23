# SEO Setup Guide for Al-Khalid Trust Pakistan

## ✅ What Has Been Added

1. **SEO Component** (`src/components/SEO.jsx`)
   - Dynamic meta tags for each page
   - Open Graph tags for social media sharing
   - Twitter Card tags
   - Canonical URLs

2. **Enhanced index.html**
   - Comprehensive meta tags
   - Open Graph tags
   - Twitter Card tags
   - Canonical URL

3. **robots.txt** (`public/robots.txt`)
   - Allows search engines to crawl your site
   - Points to sitemap

4. **sitemap.xml** (`public/sitemap.xml`)
   - Lists all important pages
   - Helps search engines discover your content

## 🔧 Important: Update Your Domain

**✅ EASY WAY: Update in ONE file only!**

Just update the `SITE_URL` in `src/config/siteConfig.js`:

```javascript
export const SITE_URL = 'https://al-khalid-trust-pk.vercel.app'; // Change this to your domain
```

Then run:
```bash
npm run generate-seo
```

This will automatically update:
- `public/sitemap.xml`
- `public/robots.txt`

**Note:** The `index.html` file still needs manual update for initial meta tags, but the SEO component handles dynamic updates automatically.

## 📝 Next Steps

### 1. Update Domain URLs
Replace `https://your-domain.vercel.app` with your actual Vercel URL in all files mentioned above.

### 2. Submit to Google Search Console
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add your property (your Vercel domain)
3. Verify ownership
4. Submit your sitemap: `https://your-domain.vercel.app/sitemap.xml`

### 3. Submit to Bing Webmaster Tools
1. Go to [Bing Webmaster Tools](https://www.bing.com/webmasters)
2. Add your site
3. Submit your sitemap

### 4. Add Structured Data (Optional but Recommended)
Consider adding JSON-LD structured data for:
- Organization
- LocalBusiness (since you have a physical address)
- Charity/Nonprofit

### 5. Improve SEO Further
- Add alt text to all images (already done in most places)
- Ensure all pages have unique titles and descriptions
- Add internal linking between related pages
- Create quality content regularly
- Get backlinks from other websites

## 📊 SEO Checklist

- ✅ Meta tags (title, description, keywords)
- ✅ Open Graph tags
- ✅ Twitter Card tags
- ✅ Canonical URLs
- ✅ robots.txt
- ✅ sitemap.xml
- ✅ Mobile-friendly (responsive design)
- ✅ Fast loading (Vercel handles this)
- ⚠️ **Update domain URLs** (REQUIRED)
- ⚠️ Submit to search engines (RECOMMENDED)

## 🎯 Keywords to Target

Your site is optimized for:
- Al-Khalid Trust Pakistan
- charity Pakistan
- welfare organization Rawalpindi
- food distribution Pakistan
- Ramzan charity
- donation Pakistan
- widows support
- poor support Pakistan

## 📱 Social Media Sharing

When someone shares your website on Facebook, Twitter, or other platforms, it will show:
- Your logo image
- Page title
- Page description
- Proper preview cards

Make sure to update the domain URLs for this to work correctly!

