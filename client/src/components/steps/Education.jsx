import React from "react";

const Education = ({ data = {}, onChange, nextStep, prevStep }) => {
  const educationList = data.education || [];

  return (
    <div style={{ padding: '20px' }}>
      <h2>Education</h2>

      {educationList.map((edu, index) => (
        <div key={index} style={{ marginBottom: '15px' }}>
          <input
            type="text"
            placeholder="Institution"
            value={edu.institution}
            onChange={(e) => {
              const newEdu = [...educationList];
              newEdu[index].institution = e.target.value;
              onChange('education', newEdu);
            }}
            style={{ marginRight: '10px' }}
          />
          <input
            type="text"
            placeholder="Degree"
            value={edu.degree}
            onChange={(e) => {
              const newEdu = [...educationList];
              newEdu[index].degree = e.target.value;
              onChange('education', newEdu);
            }}
            style={{ marginRight: '10px' }}
          />
          <input
            type="text"
            placeholder="Year"
            value={edu.year}
            onChange={(e) => {
              const newEdu = [...educationList];
              newEdu[index].year = e.target.value;
              onChange('education', newEdu);
            }}
          />
        </div>
      ))}

      <div style={{ margin: '20px 0' }}>
        <button
          onClick={() => {
            const newEdu = [...educationList, { institution: '', degree: '', year: '' }];
            onChange('education', newEdu);
          }}
          style={{ marginBottom: '20px', background:'blue'}}
        >
          + Add Education
        </button>
      </div>

      <div style={{ display: 'flex', gap: '10px' }}>
        <button onClick={prevStep}>⬅Back</button>
        <button onClick={nextStep}>Next➡</button>
      </div>
    </div>
  );
};

export default Education;
