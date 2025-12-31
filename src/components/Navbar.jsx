import { useState, useEffect } from 'react';
import { useScrollPosition } from '../hooks/useScrollPosition';
import { smoothScroll } from '../utils/smoothScroll';

const Navbar = () => {
    const scrollPosition = useScrollPosition();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    const navLinks = [
        { href: '#home', label: 'Home' },
        { href: '#about', label: 'About' },
        { href: '#skills', label: 'Skills' },
        { href: '#projects', label: 'Projects' },
        { href: '#experience', label: 'Experience' },
        { href: '#certifications', label: 'Certifications' },
        { href: '#contact', label: 'Contact' },
    ];

    useEffect(() => {
        const sections = document.querySelectorAll('section[id]');
        const scrollPos = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                setActiveSection(sectionId);
            }
        });
    }, [scrollPosition]);

    const handleLinkClick = (e, href) => {
        e.preventDefault();
        smoothScroll(href);
        setMobileMenuOpen(false);
    };

    return (
        <nav className={`navbar ${scrollPosition > 50 ? 'scrolled' : ''}`} id="navbar">
            <div className="nav-container">
                <div className="nav-logo">
                    <span className="logo-text">Gerald<span className="accent">.</span></span>
                </div>
                <ul className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`} id="navMenu">
                    {navLinks.map(link => (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                className={`nav-link ${activeSection === link.href.substring(1) ? 'active' : ''}`}
                                onClick={(e) => handleLinkClick(e, link.href)}
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
                <div
                    className={`hamburger ${mobileMenuOpen ? 'active' : ''}`}
                    id="hamburger"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
