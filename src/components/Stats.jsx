import { useEffect, useRef, useState } from 'react';
import { animateCounter } from '../utils/animateCounter';

const Stats = () => {
    const [animated, setAnimated] = useState(false);
    const statsRef = useRef(null);
    const numberRefs = useRef([]);

    const stats = [
        { icon: '🎓', target: 3.78, label: 'GPA Score' },
        { icon: '💼', target: 8, label: 'Projects Completed' },
        { icon: '⚡', target: 6, label: 'Years Experience' },
        { icon: '📜', target: 7, label: 'Certifications' },
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting && !animated) {
                        setAnimated(true);
                        numberRefs.current.forEach((ref, index) => {
                            if (ref) {
                                setTimeout(() => {
                                    animateCounter(ref, stats[index].target);
                                }, index * 150);
                            }
                        });
                    }
                });
            },
            { threshold: 0.3 }
        );

        if (statsRef.current) {
            observer.observe(statsRef.current);
        }

        return () => {
            if (statsRef.current) {
                observer.unobserve(statsRef.current);
            }
        };
    }, [animated]);

    return (
        <section className="stats-section" ref={statsRef}>
            <div className="container">
                <div className="stats-grid">
                    {stats.map((stat, index) => (
                        <div key={index} className="stat-card glass-card">
                            <div className="stat-icon">{stat.icon}</div>
                            <div className="stat-number" ref={el => numberRefs.current[index] = el}>
                                0
                            </div>
                            <div className="stat-label">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
