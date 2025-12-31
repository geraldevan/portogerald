const About = () => {
    return (
        <section className="section about" id="about">
            <div className="container">
                <div className="section-header">
                    <span className="section-label">Get to know me</span>
                    <h2 className="section-title">About Me</h2>
                </div>
                <div className="about-content">
                    <div className="about-info">
                        <div className="glass-card info-card">
                            <h3>Education</h3>
                            <div className="education-item">
                                <div className="edu-icon">🎓</div>
                                <div className="edu-details">
                                    <h4>University of Gunadarma</h4>
                                    <p className="edu-major">Informatics Engineering</p>
                                    <p className="edu-period">2021 – 2025</p>
                                    <div className="gpa-badge">
                                        <span>GPA: 3.78 / 4.00</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="glass-card info-card">
                            <h3>Contact Information</h3>
                            <div className="contact-grid">
                                <div className="contact-item">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path
                                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                            stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                            strokeLinejoin="round" />
                                    </svg>
                                    <div>
                                        <p className="contact-label">Email</p>
                                        <a href="mailto:geraldevan5588@gmail.com">geraldevan5588@gmail.com</a>
                                    </div>
                                </div>
                                <div className="contact-item">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path
                                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                            stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                            strokeLinejoin="round" />
                                    </svg>
                                    <div>
                                        <p className="contact-label">Phone</p>
                                        <a href="tel:+6281211331078">+62 812 1133 1078</a>
                                    </div>
                                </div>
                                <div className="contact-item">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path
                                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                            stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                            strokeLinejoin="round" />
                                        <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" stroke="currentColor" strokeWidth="2"
                                            strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <div>
                                        <p className="contact-label">Location</p>
                                        <p>Depok, Jawa Barat, Indonesia</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
