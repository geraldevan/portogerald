import { useEffect, useRef } from 'react';

const Hero = () => {
    const shapesRef = useRef([]);

    useEffect(() => {
        let mouseX = 0;
        let mouseY = 0;
        let currentX = 0;
        let currentY = 0;

        const handleMouseMove = (e) => {
            mouseX = e.clientX / window.innerWidth;
            mouseY = e.clientY / window.innerHeight;
        };

        const animateShapes = () => {
            currentX += (mouseX - currentX) * 0.1;
            currentY += (mouseY - currentY) * 0.1;

            shapesRef.current.forEach((shape, index) => {
                if (shape) {
                    const speed = (index + 1) * 0.3;
                    const x = (currentX - 0.5) * speed * 50;
                    const y = (currentY - 0.5) * speed * 50;
                    shape.style.transform = `translate(${x}px, ${y}px)`;
                }
            });

            requestAnimationFrame(animateShapes);
        };

        window.addEventListener('mousemove', handleMouseMove);
        animateShapes();

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    const handleDownloadCV = (e) => {
        e.preventDefault();
        const notification = document.createElement('div');
        notification.style.cssText = `
      position: fixed;
      top: 100px;
      left: 50%;
      transform: translateX(-50%);
      background: linear-gradient(135deg, #00D9FF, #0066FF);
      color: white;
      padding: 1rem 2rem;
      border-radius: 12px;
      font-weight: 600;
      z-index: 10000;
      box-shadow: 0 8px 32px rgba(0, 217, 255, 0.4);
      animation: slideDown 0.3s ease-out;
    `;
        notification.textContent = 'CV download feature - Please contact for latest CV';

        document.body.appendChild(notification);

        setTimeout(() => {
            notification.style.animation = 'slideUp 0.3s ease-out';
            setTimeout(() => {
                notification.remove();
            }, 300);
        }, 3000);
    };

    return (
        <section className="hero" id="home">
            <div className="floating-shapes">
                <div className="shape shape-1" ref={el => shapesRef.current[0] = el}></div>
                <div className="shape shape-2" ref={el => shapesRef.current[1] = el}></div>
                <div className="shape shape-3" ref={el => shapesRef.current[2] = el}></div>
                <div className="shape shape-4" ref={el => shapesRef.current[3] = el}></div>
            </div>
            <div className="hero-container">
                <div className="hero-content">
                    <div className="hero-label">
                        <span className="status-dot"></span>
                        <span>Available for opportunities</span>
                    </div>
                    <h1 className="hero-title">
                        Hi, I'm <span className="gradient-text">Gerald Loppies</span>
                    </h1>
                    <div className="hero-roles">
                        <span className="role-item">IoT Developer</span>
                        <span className="separator">•</span>
                        <span className="role-item">IT Support</span>
                        <span className="separator">•</span>
                        <span className="role-item">Data Analyst</span>
                        <span className="separator">•</span>
                        <span className="role-item">UI/UX Designer</span>
                    </div>
                    <p className="hero-description">
                        Fresh Graduate in Informatics with strong expertise in IT Support and hands-on experience in IoT
                        system development, prototyping, computer vision, and UI/UX design.
                    </p>
                    <div className="hero-buttons">
                        <a href="#contact" className="btn btn-primary">
                            <span>Contact Me</span>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M4 10h12m0 0l-5-5m5 5l-5 5" stroke="currentColor" strokeWidth="2"
                                    strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </a>
                        <a href="#projects" className="btn btn-secondary">
                            <span>View Projects</span>
                        </a>
                        <a href="#" className="btn btn-outline" onClick={handleDownloadCV}>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M10 3v10m0 0l-4-4m4 4l4-4m5-1v8a2 2 0 01-2 2H3a2 2 0 01-2-2v-8"
                                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span>Download CV</span>
                        </a>
                    </div>
                </div>
                <div className="hero-visual">
                    <div className="glass-card hero-card">
                        <div className="card-glow"></div>
                        <div className="profile-placeholder">
                            <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
                                <circle cx="100" cy="100" r="95" stroke="url(#grad1)" strokeWidth="2" />
                                <circle cx="100" cy="80" r="30" fill="url(#grad1)" />
                                <path d="M50 150c0-27.614 22.386-50 50-50s50 22.386 50 50" fill="url(#grad1)" />
                                <defs>
                                    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" style={{ stopColor: '#00D9FF', stopOpacity: 1 }} />
                                        <stop offset="100%" style={{ stopColor: '#0066FF', stopOpacity: 1 }} />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
