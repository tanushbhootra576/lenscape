import React, { useEffect, useState } from 'react';
import './Gallery.css';

const imageList = Array.from({ length: 39 }, (_, i) => `img (${i + 1}).jpg`);

export default function Gallery() {
    const [selectedImages, setSelectedImages] = useState([]);
    const [fullImage, setFullImage] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const shuffled = [...imageList].sort(() => Math.random() - 0.5).slice(0, 10);
        setSelectedImages(shuffled);

        const timer = setTimeout(() => {
            setLoading(false);
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="gallery-container">

            <div className="about-floating-elem circle1"></div>
            <div className="about-floating-elem circle2"></div>
            <div className="about-floating-elem circle3"></div>
            {loading && (
                <div className="overlay-loader">
                    <div className="overlay-text">Loading Gallery...</div>
                </div>
            )}

            <h1 className="gallery-title">VisualGrid </h1>
            <div className="gallery-grid">
                {selectedImages.map((img, index) => (
                    <div key={index} className="gallery-item" onClick={() => setFullImage(img)}>
                        <img src={`/images/${img}`} alt="" className="gallery-image" />
                    </div>
                ))}
            </div>

            <a
                href="https://www.instagram.com/lenscape576?igsh=dTlsb3Zlb3c0eXcw"
                target="_blank"
                rel="noopener noreferrer"
                className="gallery-insta-button"
            >
                📸 View All Photos on Instagram
            </a>
            <br /><br /><br />
            {fullImage && (
                <div className="fullscreen-view" onClick={() => setFullImage(null)}>
                    <img src={`/images/${fullImage}`} alt="" className="fullscreen-img" />
                    <button className="fullscreen-close" onClick={() => setFullImage(null)}>×</button>
                </div>
            )}
        </div>
    );
}
