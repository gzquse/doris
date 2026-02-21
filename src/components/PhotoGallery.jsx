import { useState } from 'react'
import './PhotoGallery.css'

// Images from public/images/ (JPG for browser compatibility)
const defaultImages = [
  { src: '/doris/images/IMG_6740.jpg', alt: 'Our Memory 1' },
  { src: '/doris/images/IMG_6769.jpg', alt: 'Our Memory 2' },
  { src: '/doris/images/IMG_6838.jpg', alt: 'Our Memory 3' },
  { src: '/doris/images/IMG_6914.jpg', alt: 'Our Memory 4' },
]

export default function PhotoGallery({ images = defaultImages }) {
  const [lightboxIndex, setLightboxIndex] = useState(null)

  const openLightbox = (index) => setLightboxIndex(index)
  const closeLightbox = () => setLightboxIndex(null)

  const handleKeyDown = (e) => {
    if (lightboxIndex === null) return
    if (e.key === 'Escape') closeLightbox()
    if (e.key === 'ArrowRight' && lightboxIndex < images.length - 1) {
      setLightboxIndex(lightboxIndex + 1)
    }
    if (e.key === 'ArrowLeft' && lightboxIndex > 0) {
      setLightboxIndex(lightboxIndex - 1)
    }
  }

  return (
    <section id="gallery" className="photo-gallery">
      <div className="gallery-inner">
        <h2 className="section-title">Our Moments</h2>
        <p className="gallery-hint">Four of our moments</p>
        <div className="gallery-grid">
          {images.map((img, index) => (
            <button
              key={index}
              className="gallery-item"
              onClick={() => openLightbox(index)}
              aria-label={`View ${img.alt}`}
            >
              <img src={img.src} alt={img.alt} loading="lazy" />
            </button>
          ))}
        </div>
      </div>

      {lightboxIndex !== null && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <button
            className="lightbox-close"
            onClick={closeLightbox}
            aria-label="Close viewer"
          >
            Close
          </button>
          {lightboxIndex > 0 && (
            <button
              className="lightbox-nav lightbox-prev"
              onClick={(e) => { e.stopPropagation(); setLightboxIndex(lightboxIndex - 1) }}
              aria-label="Previous photo"
            >
              Previous
            </button>
          )}
          <img
            src={images[lightboxIndex]?.src}
            alt={images[lightboxIndex]?.alt}
            onClick={(e) => e.stopPropagation()}
          />
          {lightboxIndex < images.length - 1 && (
            <button
              className="lightbox-nav lightbox-next"
              onClick={(e) => { e.stopPropagation(); setLightboxIndex(lightboxIndex + 1) }}
              aria-label="Next photo"
            >
              Next
            </button>
          )}
        </div>
      )}
    </section>
  )
}
