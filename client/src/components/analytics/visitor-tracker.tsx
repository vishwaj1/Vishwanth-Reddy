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

        // Check for token in both possible locations
        const token = import.meta.env.VITE_GITHUB_TOKEN;
        //console.log('Token:', import.meta.env.VITE_HELLO);
        
        if (!token) {
          console.error('GitHub token is not configured. Please check your .env file.');
          console.log('Available env vars:', import.meta.env);
          return;
        }

            // console.log('Visitor data:', visitorData);
            // console.log('GitHub Token available:', !!token);

        // Send data to your backend or analytics service
        const response = await fetch('https://api.github.com/gists', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Accept': 'application/vnd.github.v3+json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            description: 'Portfolio Visitor Log - ' + new Date().toLocaleDateString(),
            public: false,
            files: {
              [`visit-${new Date().toISOString().replace(/[:.]/g, '-')}.json`]: {
                content: JSON.stringify(visitorData, null, 2)
              }
            }
          })
        });

        // if (!response.ok) {
        //   const errorData = await response.json();
        //   console.error('Failed to log visit:', errorData);
        //   if (errorData.message === 'Bad credentials') {
        //     console.error('Please check your GitHub token configuration');
        //   }
        // } else {
        //   const gistData = await response.json();
        //   console.log('Successfully created gist:', gistData.html_url);
        // }
      } catch (error) {
        //console.error('Error tracking visit:', error);
      }
    };

    trackVisit();
  }, []);

  return null; // This component doesn't render anything
} 