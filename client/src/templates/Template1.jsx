import React from 'react';

const Template1 = ({ data={}, theme }) => {
  const {
    fullName,
    email,
    phone,
    github,
    linkedin,
    education = [],
    experience = [],
    projects = [],
    technicalSkills = {},
    achievements = []
  } = data;

  const { languages = [], libraries = [], tools = [] } = technicalSkills;
  return (
    <div style={{ fontFamily: theme.font, color: theme.color }}>
      <h1>{data.fullName}</h1>
      <p>{data.email} | {data.phone}</p>

      <h2>Education</h2>
      <ul>
        {data.education.map((edu, index) => (
          <li key={index}>{edu.degree}, {edu.institution} ({edu.year})</li>
        ))}
      </ul>

      <h2>Experience</h2>
      <ul>
        {data.experience.map((exp, index) => (
          <li key={index}>{exp.role} @ {exp.company} ({exp.duration})</li>
        ))}
      </ul>
      
     {/* Technical Skills */}
     <div style={sectionStyle}>
        <h3 style={titleStyle}>TECHNICAL SKILLS</h3>
        <p><strong>Languages:</strong> {languages.join(', ')}</p>
        <p><strong>Libraries/Frameworks:</strong> {libraries.join(', ')}</p>
        <p><strong>Tools & Platforms:</strong> {tools.join(', ')}</p>
      </div>
    </div>
  );
};

export default Template1;

