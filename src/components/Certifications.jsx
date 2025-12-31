import { certificationsData } from '../data/certifications';

const Certifications = () => {
    return (
        <section className="section certifications" id="certifications">
            <div className="container">
                <div className="section-header">
                    <span className="section-label">Achievements</span>
                    <h2 className="section-title">Certifications</h2>
                </div>
                <div className="certifications-grid">
                    {certificationsData.map(cert => (
                        <div key={cert.id} className="cert-card glass-card">
                            <div className="cert-icon">{cert.icon}</div>
                            <h3>{cert.title}</h3>
                            <p>{cert.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
