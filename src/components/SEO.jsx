import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { SITE_URL } from '../config/siteConfig';

const SEO = ({ 
  title = 'Al-Khalid Trust Pakistan | Supporting Poor, Needy & Widows',
  description = 'Al-Khalid Trust Pakistan - Established 20 March 2020. Supporting poor, needy individuals and widows through food distribution, monthly grocery support, business setup, and water projects.',
  keywords = 'Al-Khalid Trust Pakistan, charity, welfare, food distribution, Ramzan, donation, Rawalpindi, Pakistan, poor support, widows support',
  image = '/assets/img/logo/logoo.png',
  type = 'website'
}) => {
  const location = useLocation();

  useEffect(() => {
    // Update document title
    document.title = title;

    // Update or create meta tags
    const updateMetaTag = (name, content, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Basic meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updateMetaTag('author', 'Al-Khalid Trust Pakistan');
    updateMetaTag('robots', 'index, follow');
    updateMetaTag('language', 'English');
    updateMetaTag('revisit-after', '7 days');

    // Open Graph tags
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:image', `${SITE_URL}${image}`, true);
    updateMetaTag('og:url', `${SITE_URL}${location.pathname}`, true);
    updateMetaTag('og:type', type, true);
    updateMetaTag('og:site_name', 'Al-Khalid Trust Pakistan', true);
    updateMetaTag('og:locale', 'en_US', true);

    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', `${SITE_URL}${image}`);

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', `${SITE_URL}${location.pathname}`);

  }, [title, description, keywords, image, type, location.pathname]);

  return null;
};

export default SEO;

