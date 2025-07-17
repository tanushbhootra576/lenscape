import React, { useEffect, useRef } from 'react';
import './Landing.css';
import { gsap } from 'gsap';

export default function LandingNew() {
    const overlayRef = useRef(null);
    const titleRef = useRef(null);
    const descRef = useRef(null);
    const btnsRef = useRef([]);
    const sunRef = useRef(null);
    const moonRef = useRef(null);
    const cloudRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(
            overlayRef.current,
            { y: 80, opacity: 0 },
            { y: 0, opacity: 1, duration: 1.2, ease: 'power3.out' }
        );
        gsap.fromTo(
            titleRef.current,
            { scale: 0.8, opacity: 0 },
            { scale: 1, opacity: 1, duration: 1, delay: 0.3, ease: 'back.out(1.7)' }
        );
        gsap.fromTo(
            descRef.current,
            { y: 40, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, delay: 0.7, ease: 'power2.out' }
        );
        gsap.fromTo(
            btnsRef.current,
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, delay: 1.1, stagger: 0.15, ease: 'power2.out' }
        );
        gsap.fromTo(
            sunRef.current,
            { y: -100, scale: 0.7, opacity: 0 },
            { y: 0, scale: 1, opacity: 1, duration: 1.2, delay: 0.7, ease: 'elastic.out(1, 0.7)' }
        );
        gsap.fromTo(
            moonRef.current,
            { x: 100, scale: 0.7, opacity: 0 },
            { x: 0, scale: 1, opacity: 1, duration: 1.2, delay: 1.1, ease: 'elastic.out(1, 0.7)' }
        );
        gsap.fromTo(
            cloudRef.current,
            { x: -120, opacity: 0 },
            { x: 0, opacity: 1, duration: 1.2, delay: 1.3, ease: 'power2.out' }
        );
    }, []);

    return (
        <section className="landing-hero">
            <div className="starfield"></div>
            <div className="landing-sky">
                <div className="sun" ref={sunRef}></div>
                <div className="moon" ref={moonRef}></div>
                <div className="cloud" ref={cloudRef}></div>
            </div>
            <div className="landing-overlay" ref={overlayRef}>
                <h1 className="landing-title" ref={titleRef}>
                    LenScapse
                </h1>
                <p className="landing-desc" ref={descRef}>
                    A visual journey through my lens.<br />
                    <span className="landing-highlight">
                        Where Every View Becomes a Memory
                    </span>
                </p>
                <a
                    href="/gallery"
                    className="button"
                    ref={el => (btnsRef.current[0] = el)}
                >
                    <span className="button__text">Gallery</span>
                    <span className="button__icon-wrapper">
                        <svg
                            viewBox="0 0 14 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="button__icon-svg"
                            width="16"
                            height="16"
                        >
                            <path
                                d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                                fill="currentColor"
                            />
                        </svg>
                        <svg
                            viewBox="0 0 14 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="button__icon-svg button__icon-svg--copy"
                            width="16"
                            height="16"
                        >
                            <path
                                d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                                fill="currentColor"
                            />
                        </svg>
                    </span>
                </a>
            </div>
        </section>
    );
}
