import { experienceData } from '../data/experience';

const Experience = () => {
    return (
        <section className="section experience" id="experience">
            <div className="container">
                <div className="section-header">
                    <span className="section-label">Career journey</span>
                    <h2 className="section-title">Work Experience</h2>
                </div>
                <div className="timeline">
                    {experienceData.map(exp => (
                        <div key={exp.id} className="timeline-item glass-card">
                            <div className="timeline-dot"></div>
                            <div className="timeline-content">
                                <h3>{exp.title}</h3>
                                <p className="timeline-role">{exp.role}</p>
                                <p className="timeline-date">{exp.date}</p>
                                <ul className="timeline-achievements">
                                    {exp.achievements.map((achievement, index) => (
                                        <li key={index}>{achievement}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
