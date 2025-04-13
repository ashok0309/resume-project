import React from 'react';

const Projects = ({ data = {}, onChange, nextStep, prevStep }) => {
  const projects = data.projects || [];

  const handleAddProject = () => {
    const updated = [
      ...projects,
      { title: '', description: '', technologies: '' },
    ];
    onChange('projects', updated);
  };

  const handleChange = (index, field, value) => {
    const updated = [...projects];
    updated[index][field] = value;
    onChange('projects', updated);
  };

  const handleRemove = (index) => {
    const updated = projects.filter((_, i) => i !== index);
    onChange('projects', updated);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2 style={{ marginBottom: '20px' }}>Projects</h2>

      {projects.map((proj, index) => (
        <div key={index} style={{ marginBottom: '20px' }}>
          <input
            type="text"
            placeholder="Project Title"
            value={proj.title}
            onChange={(e) => handleChange(index, 'title', e.target.value)}
            style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
          />
          <textarea
            placeholder="Description"
            value={proj.description}
            onChange={(e) => handleChange(index, 'description', e.target.value)}
            style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
            rows={4}
          />
          <input
            type="text"
            placeholder="Technologies Used"
            value={proj.technologies}
            onChange={(e) => handleChange(index, 'technologies', e.target.value)}
            style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
          />
          <button onClick={() => handleRemove(index)} style={{ marginBottom: '10px', backgroundColor: 'red', color: '#fff', padding: '5px 10px', border: 'none' }}>
            ❌ Remove
          </button>
          <hr />
        </div>
      ))}

      <button onClick={handleAddProject} style={{ padding: '8px 12px', marginBottom: '20px',background:'blue' }}>
        + Add Project
      </button>

      <div style={{ marginTop: '20px' }}>
        <button onClick={prevStep} style={{ marginRight: '10px', padding: '8px 16px' }}>
          ⬅ Back
        </button>
        <button onClick={nextStep} style={{ padding: '8px 16px' }}>
          Next ➡
        </button>
      </div>
    </div>
  );
};

export default Projects;
