import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './About.css';

export default function About() {
    const overlayRef = useRef(null);
    const titleRef = useRef(null);
    const missionRef = useRef(null);
    const galleryRef = useRef(null);
    const joinRef = useRef(null);
    const teamRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(overlayRef.current, { y: 80, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: 'power3.out' });
        gsap.fromTo(titleRef.current, { scale: 0.8, opacity: 0 }, { scale: 1, opacity: 1, duration: 1, delay: 0.2, ease: 'back.out(1.7)' });
        gsap.fromTo(missionRef.current, { x: -60, opacity: 0 }, { x: 0, opacity: 1, duration: 1, delay: 0.5, ease: 'power2.out' });
        gsap.fromTo(galleryRef.current, { scale: 0.8, opacity: 0 }, { scale: 1, opacity: 1, duration: 1, delay: 1.2, ease: 'power2.out' });
        gsap.fromTo(teamRef.current, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, delay: 1.4, ease: 'power2.out' });
        gsap.fromTo(joinRef.current, { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 1, delay: 1.7, ease: 'power2.out' });
    }, []);

    const teamMembers = [
        {
            name: 'Tanush',
            role: 'Founder & Creator',
            img: '/LenScapeLogo.png',
            social: 'https://www.linkedin.com/in/tanushbhootra576',
        },

    ];
    const allImages = Array.from({ length: 39 }, (_, i) => `/images/img${i + 1}.jpg`);
    const gallery = allImages.sort(() => Math.random() - 0.5).slice(0, 10);


    return (
        <section className="about-hero">
            <br />
            <br />

            <div className="about-floating-elem circle1"></div>
            <div className="about-floating-elem circle2"></div>
            <div className="about-floating-elem circle3"></div>
            <div className="about-main-grid">
                <aside className="about-side-panel">
                    <h2 className="about-side-title">Our Mission</h2>
                    <p className="about-side-text">
                        LenScape is a creative community dedicated to capturing and sharing the beauty of the world through the lens—sky, sun, moon, nature, and more. We believe every photo tells a story and every story inspires.
                    </p>
                    <div className="about-facts-col">
                        <div className="about-fact"><span className="about-fact-icon">🌌</span><span className="about-fact-label">Astro & Night Photography</span></div>
                        <div className="about-fact"><span className="about-fact-icon">🌿</span><span className="about-fact-label">Nature & Macro Shots</span></div>
                        <div className="about-fact"><span className="about-fact-icon">🎨</span><span className="about-fact-label">Creative Edits</span></div>
                        <div className="about-fact"><span className="about-fact-icon">🤝</span><span className="about-fact-label">Community Colab</span></div>
                    </div>
                </aside>
                <main className="about-main-content">
                    <h1 className="about-title" ref={titleRef}>
                        About <span style={{ color: '#00ffb4' }}>LenScape</span>
                    </h1>
                    <div className="about-gallery-preview" ref={galleryRef}>
                        <h2 className="about-gallery-title">Gallery Preview</h2>
                        <div className="about-gallery-images">
                            <div className="about-gallery-scroll">
                                {gallery.concat(gallery).map((src, i) => (
                                    <img key={i} src={src} alt={`Preview ${i}`} className="about-gallery-img" />
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="about-team-section">
                        <div ref={teamRef}>
                            {teamMembers.map((member, i) => (
                                <div className="about-team-card" key={i}>
                                    <img src={member.img} alt={member.name} className="about-team-img" />
                                    <div className="about-team-info">
                                        <div className="about-team-name">{member.name}</div>
                                        <div className="about-team-role">{member.role}</div>
                                        <a href={member.social} className="about-team-social" target='_blank'>Connect</a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="about-join-card" ref={joinRef}>
                        <h2 className="about-join-title">Join the LenScape Community</h2>
                        <p className="about-join-text">
                            Capture. Share. Inspire. Follow LenScape on Instagram and be part of our visual journey.
                        </p>
                        <a href="https://www.instagram.com/lenscape576?igsh=dTlsb3Zlb3c0eXcw" target="_blank" rel="noopener noreferrer" className="about-join-btn">
                            📸 Follow LenScape on Instagram
                        </a>
                    </div>
                </main>
            </div>
        </section>
    );
}
