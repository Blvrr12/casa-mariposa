  import { useEffect } from 'react';

  function ReseñasGoogle() {
    useEffect(() => {
      if (!document.querySelector("script[src='https://widgets.sociablekit.com/google-reviews/widget.js']")) {
        const script = document.createElement('script');
        script.src = 'https://widgets.sociablekit.com/google-reviews/widget.js';
        script.defer = true;
        script.async = true;
        document.body.appendChild(script);
      }
    }, []);

    return (
      <section className="py-16 text-center font-serif bg-white/40 backdrop-blur-sm">
        <h2 className="text-3xl font-bold mb-6">Opiniones de nuestros huéspedes</h2>
        
        <div className="sk-ww-google-reviews" data-embed-id="25545036"></div>
      </section>
    );
  }

  export default ReseñasGoogle;
