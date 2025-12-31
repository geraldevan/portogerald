import { skillsData } from '../data/skills';

const Skills = () => {
    return (
        <section className="section skills" id="skills">
            <div className="container">
                <div className="section-header">
                    <span className="section-label">What I can do</span>
                    <h2 className="section-title">Skills & Expertise</h2>
                </div>
                <div className="skills-grid">
                    {skillsData.map(category => (
                        <div key={category.id} className="skill-category glass-card">
                            <div className="skill-icon">{category.icon}</div>
                            <h3>{category.title}</h3>
                            <ul className="skill-list">
                                {category.skills.map((skill, index) => (
                                    <li key={index}>{skill}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
