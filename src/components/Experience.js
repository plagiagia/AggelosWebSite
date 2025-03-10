import React from 'react';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      year: '2023',
      title: 'Solo Exhibition',
      location: 'Gallery Name, Location',
      description: 'Description of the exhibition, its theme, and significance in your artistic journey.'
    },
    {
      id: 2,
      year: '2021',
      title: 'Artist Residency',
      location: 'Program Name, Location',
      description: 'Details about the residency, what you focused on, and what you achieved during this period.'
    },
    {
      id: 3,
      year: '2020',
      title: 'Group Exhibition',
      location: 'Gallery/Event Name, Location',
      description: 'Information about the exhibition, the other artists involved, and the reception of your work.'
    },
    {
      id: 4,
      year: '2018',
      title: 'MFA in Fine Arts',
      location: 'University Name, Location',
      description: 'Details about your education, specialization, and notable projects or achievements.'
    }
  ];

  return (
    <section className="experience" id="experience">
      <div className="container">
        <div className="section-header">
          <h2>Experience & Education</h2>
        </div>
        <div className="timeline">
          {experiences.map(experience => (
            <div className="timeline-item" key={experience.id}>
              <div className="timeline-dot"></div>
              <div className="timeline-year">{experience.year}</div>
              <div className="timeline-content">
                <h3>{experience.title}</h3>
                <p>{experience.location}</p>
                <p>{experience.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;