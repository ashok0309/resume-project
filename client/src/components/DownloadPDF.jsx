import React from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const DownloadPDF = ({ elementId }) => {
  const handleDownload = () => {
    const input = document.getElementById(elementId);

    html2canvas(input, {
      scale: 2,
      scrollY: -window.scrollY, // 🔧 Important fix to avoid offset
      useCORS: true,
    }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'pt', 'a4');

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save('resume.pdf');
    });
  };

  return (
    <button onClick={handleDownload} className="btn btn-primary">
      Download as PDF
    </button>
  );
};

export default DownloadPDF;
