import React from 'react';

const Experience = ({ data = {}, onChange, nextStep, prevStep }) => {
  const experienceList = data.experience || [];

  const handleAddExperience = () => {
    const newExperience = [...experienceList, { company: '', role: '', duration: '' }];
    onChange('experience', newExperience);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Experience</h2>

      {experienceList.map((exp, index) => (
        <div key={index} style={{ marginBottom: '15px' }}>
          <input
            type="text"
            placeholder="Company"
            value={exp.company}
            onChange={(e) => {
              const updated = [...experienceList];
              updated[index].company = e.target.value;
              onChange('experience', updated);
            }}
            style={{ marginRight: '10px' }}
          />
          <input
            type="text"
            placeholder="Role"
            value={exp.role}
            onChange={(e) => {
              const updated = [...experienceList];
              updated[index].role = e.target.value;
              onChange('experience', updated);
            }}
            style={{ marginRight: '10px' }}
          />
          <input
            type="text"
            placeholder="Duration"
            value={exp.duration}
            onChange={(e) => {
              const updated = [...experienceList];
              updated[index].duration = e.target.value;
              onChange('experience', updated);
            }}
          />
          <hr style={{ marginTop: '10px', marginBottom: '10px' }} />
        </div>
      ))}

      <div style={{ marginBottom: '20px',  }}>
        <button onClick={handleAddExperience}
        style={{ marginBottom: '20px', background:'blue'}}>+ Add Experience</button>
      </div>

      <div style={{ display: 'flex', gap: '10px' }}>
        <button onClick={prevStep}>⬅ Back</button>
        <button onClick={nextStep}>Next ➡</button>
      </div>
    </div>
  );
};

export default Experience;
