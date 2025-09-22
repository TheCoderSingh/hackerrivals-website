import { useEffect } from 'react';
import { seoContent } from '../../constants/seo';

const SEOOptimizations = () => {
  useEffect(() => {
    // Add skip to main content link for accessibility
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = seoContent.accessibility.skipToMainContent;
    skipLink.className =
      'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-white px-4 py-2 rounded z-50';
    skipLink.setAttribute('tabindex', '0');
    document.body.insertBefore(skipLink, document.body.firstChild);

    // Optimize images for lazy loading
    const images = document.querySelectorAll('img');
    images.forEach((img) => {
      if (!img.hasAttribute('loading')) {
        img.setAttribute('loading', 'lazy');
      }
      if (!img.hasAttribute('decoding')) {
        img.setAttribute('decoding', 'async');
      }
    });

    // Add preload for critical CSS fonts
    const fontPreload = document.createElement('link');
    fontPreload.rel = 'preload';
    fontPreload.href = seoContent.fontPreload.href;
    fontPreload.as = 'style';
    fontPreload.crossOrigin = 'anonymous';
    document.head.appendChild(fontPreload);

    // Cleanup function
    return () => {
      if (skipLink.parentNode) {
        skipLink.parentNode.removeChild(skipLink);
      }
    };
  }, []);

  return null;
};

export default SEOOptimizations;
