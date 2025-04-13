import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import MultiStepForm from './components/MultiStepForm';
import ResumePreview from './components/ResumePreview';
import TemplateSelector from './components/TemplateSelector';
import DownloadPDF from './components/DownloadPDF';

const App = () => {
  const navigate = useNavigate();

  const [resumeData, setResumeData] = useState({
    fullName: '',
    email: '',
    phone: '',
    education: [],
    experience: [],
    projects: [],
    skills: [],
  });

  const [template, setTemplate] = useState('template1');
  const [theme, setTheme] = useState({
    font: 'Arial',
    color: '#000000',
  });

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/form"
          element={
            <MultiStepForm
              resumeData={resumeData}
              setResumeData={setResumeData}
              theme={theme}
              setTheme={setTheme}
              onComplete={() => navigate('/preview')}
            />
          }
        />

        <Route
          path="/preview"
          element={
            <div style={{ padding: '20px' }}>
              <TemplateSelector selected={template} onChange={setTemplate} />
              
              {/* 🟩 Capture target */}
              <div
                id="resume-preview"
                style={{
                  width: '794px', // A4 width in pixels at 96dpi
                  minHeight: '1123px', // A4 height in pixels at 96dpi
                  padding: '20px',
                  backgroundColor: '#fff',
                  margin: '0 auto',
                }}
              >
                <ResumePreview
                  data={resumeData}
                  template={template}
                  theme={theme}
                />
              </div>

              <br />
              <DownloadPDF elementId="resume-preview" />
            </div>
          }
        />

        <Route
          path="/templates"
          element={
            <div style={{ padding: '20px' }}>
              <TemplateSelector selected={template} onChange={setTemplate} />
            </div>
          }
        />
      </Routes>
    </>
  );
};

export default App;
