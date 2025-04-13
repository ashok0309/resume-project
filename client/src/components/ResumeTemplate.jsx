import React from 'react';

const ResumeTemplate = ({ data, theme }) => {
  const { fullName, email, phone, education, experience, projects, skills } = data;

  const sectionStyle = {
    border: `1px solid ${theme.color}`,
    borderRadius: '8px',
    padding: '16px',
    marginBottom: '20px',
    backgroundColor: '#f9f9f9',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
  };

  const headingStyle = {
    marginBottom: '12px',
    borderBottom: `2px solid ${theme.color}`,
    paddingBottom: '6px',
    fontSize: '18px',
    color: theme.color,
  };

  return (
    <div style={{ fontFamily: theme.font, color: '#222', maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
      <h1 style={{ color: theme.color, marginBottom: '0.25rem' }}>{fullName}</h1>
      <p style={{ marginBottom: '1rem' }}>{email} | {phone}</p>

      <div style={sectionStyle}>
        <h3 style={headingStyle}>Education</h3>
        {education.map((edu, i) => (
          <div key={i}>
            <strong>{edu.degree}</strong> — {edu.institution}
            <p>{edu.startYear} - {edu.endYear}</p>
          </div>
        ))}
      </div>

      <div style={sectionStyle}>
        <h3 style={headingStyle}>Experience</h3>
        {experience.map((exp, i) => (
          <div key={i}>
            <strong>{exp.role}</strong> at {exp.company}
            <p>{exp.startYear} - {exp.endYear}</p>
            <p>{exp.description}</p>
          </div>
        ))}
      </div>

      <div style={sectionStyle}>
        <h3 style={headingStyle}>Projects</h3>
        {projects.map((proj, i) => (
          <div key={i}>
            <strong>{proj.title}</strong>
            <p>{proj.description}</p>
          </div>
        ))}
      </div>

      <div style={sectionStyle}>
        <h3 style={headingStyle}>Skills</h3>
        <ul style={{ margin: 0, paddingLeft: '20px' }}>
          {skills.map((skill, i) => (
            <li key={i}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ResumeTemplate;
