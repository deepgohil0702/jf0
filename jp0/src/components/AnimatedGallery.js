import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const AnimatedGallery = () => {
  const galleryRef = useRef(null);
  const titleRef = useRef(null);

  // Array of image URLs - Add your images here
  const images = [
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800&h=600&fit=crop',
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate title
      gsap.from(titleRef.current, {
        duration: 1,
        y: -50,
        opacity: 0,
        ease: "power3.out"
      });

      // Animate gallery items
      gsap.from(".gallery-item", {
        duration: 0.8,
        y: 50,
        opacity: 0,
        stagger: 0.1,
        ease: "power3.out",
        delay: 0.3
      });

      // Hover animations
      const items = galleryRef.current.querySelectorAll('.gallery-item');
      items.forEach(item => {
        const img = item.querySelector('img');
        const overlay = item.querySelector('.overlay');
        
        item.addEventListener('mouseenter', () => {
          gsap.to(img, { scale: 1.1, duration: 0.3 });
          gsap.to(overlay, { opacity: 1, duration: 0.3 });
        });
        
        item.addEventListener('mouseleave', () => {
          gsap.to(img, { scale: 1, duration: 0.3 });
          gsap.to(overlay, { opacity: 0, duration: 0.3 });
        });
      });
    }, galleryRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-background from-slate-900 via-purple-900 to-slate-900 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Title */}


        {/* Gallery Grid */}
        <div 
          ref={galleryRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="gallery-item relative group cursor-pointer rounded-2xl overflow-hidden shadow-2xl bg-white/10 backdrop-blur-sm border border-white/20"
            >
              <div className="aspect-w-16 aspect-h-9 relative overflow-hidden">
                <img
                  src={image}
                  alt={`Gallery item ${index + 1}`}
                  className="w-full h-96 object-cover transition-transform duration-300"
                  loading="lazy"
                />
                
                {/* Overlay */}
                <div className="overlay absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 flex items-end justify-center pb-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-2">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </div>
                    <p className="text-white text-sm font-medium">View Image</p>
                  </div>
                </div>
              </div>
              
              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center mt-16">
          <p className="text-white/60 text-sm">
            Hover over images to see them come to life
          </p>
        </div>
      </div>
    </div>
  );
};

export default AnimatedGallery;