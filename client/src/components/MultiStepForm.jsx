import React, { useState } from 'react';
import PersonalInfo from './steps/PersonalInfo';
import Education from './steps/Education';
import Experience from './steps/Experience';
import Skills from './steps/Skills';
import Projects from './steps/Projects'; // ✅ New Step Added
import axios from 'axios';

const MultiStepForm = ({ resumeData, setResumeData, theme, setTheme, onComplete }) => {
  const [step, setStep] = useState(1);

  // Move to next form step
  const nextStep = () => setStep((prev) => prev + 1);

  // Go back to previous step
  const prevStep = () => setStep((prev) => prev - 1);

  // Handles updating resume data when any field is changed
  const handleChange = (field, value) => {
    setResumeData({ ...resumeData, [field]: value });
  };

  // Handles theme font/color changes
  const handleThemeChange = (e) => {
    const { name, value } = e.target;
    setTheme({ ...theme, [name]: value });
  };

  // Final step: Submit data to backend
  const handleSubmit = async () => {
    try {
      await axios.post('http://localhost:5000/api/resumes', {
        ...resumeData,
        theme
      });
      alert('✅ Resume submitted successfully!');
      onComplete(); // Navigate to preview page
    } catch (error) {
      console.error('❌ Error submitting resume:', error);
      alert('Something went wrong while saving your resume.');
    }
  };

  return (
    <div className="container" style={{ padding: '20px' }}>
      {/* Step 1: Personal Info */}
      {step === 1 && (
        <PersonalInfo
          data={resumeData}
          onChange={handleChange}
          nextStep={nextStep}
        />
      )}

      {/* Step 2: Education */}
      {step === 2 && (
        <Education
          data={resumeData}
          onChange={handleChange}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      )}

      {/* Step 3: Experience */}
      {step === 3 && (
        <Experience
          data={resumeData}
          onChange={handleChange}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      )}

      {/* Step 4: Skills */}
      {step === 4 && (
        <Skills
          data={resumeData}
          onChange={handleChange}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      )}

      {/* Step 5: Projects */}
      {step === 5 && (
        <Projects
          data={resumeData}
          onChange={handleChange}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      )}

      {/* Step 6: Theme customization + Submit */}
      {step === 6 && (
        <div style={{ marginTop: '20px' }}>
          <h3 style={{ marginBottom: '20px' }}>🎨 Customize Your Resume Theme</h3>

          <label style={{ display: 'block', marginBottom: '10px' }}>Font Style:</label>
          <select
            name="font"
            value={theme.font}
            onChange={handleThemeChange}
            style={{
              padding: '8px',
              marginBottom: '20px',
              width: '100%',
              borderRadius: '4px',
              border: '1px solid #ccc'
            }}
          >
            <option value="Arial">Arial</option>
            <option value="Georgia">Georgia</option>
            <option value="Courier New">Courier New</option>
          </select>

          <label style={{ display: 'block', marginBottom: '10px' }}>Primary Color:</label>
          <input
            type="color"
            name="color"
            value={theme.color}
            onChange={handleThemeChange}
            style={{
              padding: '8px',
              marginBottom: '20px',
              borderRadius: '4px',
              width: '100px',
              border: '1px solid #ccc'
            }}
          />

          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <button
              onClick={prevStep}
              style={{
                padding: '10px 20px',
                backgroundColor: 'blue',
                border: '1px solid #ccc',
                borderRadius: '4px',
                cursor: 'pointer',
                marginRight: '10px'
              }}
            >
              ⬅ Back
            </button>
            <button
              onClick={handleSubmit}
              style={{
                padding: '10px 20px',
                backgroundColor: 'green',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              ✅ Submit
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MultiStepForm;
