import { useEffect } from 'react';

interface VisitorData {
  timestamp: string;
  userAgent: string;
  referrer: string;
  path: string;
  ip?: string;
}

export function VisitorTracker() {
  useEffect(() => {
    const trackVisit = async () => {
      try {
        console.log('Starting visitor tracking...');
        const visitorData: VisitorData = {
          timestamp: new Date().toISOString(),
          userAgent: navigator.userAgent,
          referrer: document.referrer,
          path: window.location.pathname
        };

        // Initialize Umami
        const script = document.createElement('script');
        script.defer = true;
        script.src = 'https://analytics.umami.is/script.js';
        script.setAttribute('data-website-id', '8241cef4-439b-4211-aa36-26842bf4eb25'); // Replace with your website ID
        document.head.appendChild(script);

        // Log visit data to console for development
        if (import.meta.env.DEV) {
          console.log('Visitor data:', visitorData);
        }

      } catch (error) {
        console.error('Error tracking visit:', error);
      }
    };

    trackVisit();
  }, []);

  return null; // This component doesn't render anything
} 