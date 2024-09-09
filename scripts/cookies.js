
  document.addEventListener('DOMContentLoaded', function() {
    // Check if consent has already been given
    const consentGiven = localStorage.getItem('cookieConsent');
    if (consentGiven === 'accepted') {
      loadGoogleAnalytics();
    } else if (consentGiven === 'rejected') {
      // Don't load Google Analytics
    } else {
      // Show the cookie banner
      document.getElementById('cookie-banner').style.display = 'block';
    }

    // Handle 'Accept' button click
    document.getElementById('accept-cookies').addEventListener('click', function() {
      localStorage.setItem('cookieConsent', 'accepted');
      loadGoogleAnalytics();
      hideBanner();
    });

    // Handle 'Reject' button click
    document.getElementById('reject-cookies').addEventListener('click', function() {
      localStorage.setItem('cookieConsent', 'rejected');
      hideBanner();
    });

    function hideBanner() {
      document.getElementById('cookie-banner').style.display = 'none';
    }

    function loadGoogleAnalytics() {
      const script = document.createElement('script');
      script.async = true;
      script.src = 'https://www.googletagmanager.com/gtag/js?id=G-4024TESCJ5';
      document.head.appendChild(script);

      script.onload = function() {
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-4024TESCJ5');
      };
    }
  });

