import React from 'react';

const Skills = ({ data = {}, onChange, nextStep, prevStep }) => {
  const skills = data.technicalSkills || {
    languages: [],
    libraries: [],
    tools: []
  };

  const handleChange = (type, index, value) => {
    const updated = { ...skills };
    updated[type][index] = value;
    onChange('technicalSkills', updated);
  };

  const handleAdd = (type) => {
    const updated = { ...skills };
    updated[type].push('');
    onChange('technicalSkills', updated);
  };

  const handleRemove = (type, index) => {
    const updated = { ...skills };
    updated[type] = updated[type].filter((_, i) => i !== index);
    onChange('technicalSkills', updated);
  };

  const renderField = (label, type) => (
    <div style={{ marginBottom: '20px' }}>
      <h4>{label}</h4>
      {skills[type].map((item, index) => (
        <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
          <input
            type="text"
            placeholder={`${label} #${index + 1}`}
            value={item}
            onChange={(e) => handleChange(type, index, e.target.value)}
            style={{
              padding: '8px',
              marginRight: '10px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              width: '80%'
            }}
          />
          <button
            onClick={() => handleRemove(type, index)}
            style={{
              padding: '8px',
              backgroundColor: 'red',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            ❌
          </button>
        </div>
      ))}
      <button
        onClick={() => handleAdd(type)}
        style={{
          padding: '8px 16px',
          backgroundColor: 'blue',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        + Add {label}
      </button>
    </div>
  );

  return (
    <div style={{ padding: '20px' }}>
      <h2 style={{ marginBottom: '20px' }}>Technical Skills</h2>

      {renderField('Languages', 'languages')}
      <hr />
      {renderField('Libraries/Frameworks', 'libraries')}
      <hr />
      {renderField('Tools & Platforms', 'tools')}

      <div style={{ marginTop: '30px', display: 'flex', justifyContent: 'space-between' }}>
        <button
          onClick={prevStep}
          style={{
            padding: '10px 20px',
            backgroundColor: 'green',
            border: '1px solid #ccc',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          ⬅ Back
        </button>
        <button
          onClick={nextStep}
          style={{
            padding: '10px 20px',
            backgroundColor: 'green',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Next ➡
        </button>
      </div>
    </div>
  );
};

export default Skills;
