import React, { useEffect } from 'react';

const InstagramFeedWidget = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://static.elfsight.com/platform/platform.js';
        script.async = true;
        script.defer = true;
        script.dataset.useServiceCore = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div class="elfsight-app-9fcf1f42-3c82-4529-9f90-ddfeecaaef8f" data-elfsight-app-lazy></div>
    );
};

export default InstagramFeedWidget;
