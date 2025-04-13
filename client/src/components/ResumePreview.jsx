import React from 'react';
import ResumeTemplate from './ResumeTemplate';
import Template2 from '../templates/Template2';
import TemplateAshokV2 from '../templates/TemplateAshokV2';

const ResumePreview = ({ data, template, theme }) => {
  switch (template) {
    case 'template1':
      return <ResumeTemplate data={data} theme={theme} />;
    case 'template2':
      return <Template2 data={data} theme={theme} />;
    case 'templateAshokV2':
      return <TemplateAshokV2 data={data} theme={theme} />;
    default:
      return <ResumeTemplate data={data} theme={theme} />;
  }
};

export default ResumePreview;
