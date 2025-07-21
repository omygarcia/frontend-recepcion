import React, { useEffect, useRef } from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const PdfArea = () => {
  const qrRef = useRef();

  const handleDownloadPdf = async () => {
    const qrElement = qrRef.current;

    const canvas = await html2canvas(qrElement);
    const imgData = canvas.toDataURL('image/png');

    const pdf = new jsPDF();
    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
    //pdf.save('qr-code.pdf');

    const pdfBlob = pdf.output('blob');
    const pdfUrl = URL.createObjectURL(pdfBlob);
    //window.open(pdfUrl, '_blank');
    //window.location.href = pdfUrl;
    window.location.replace(pdfUrl);
  };

  useEffect(()=>{
     handleDownloadPdf();
  },[]);
 

  return (
    <div>
      <div ref={qrRef} style={{ padding: '20px', background: '#fff' }}>
        <h2>Escanea este código QR</h2>
        <QRCodeCanvas value="https://tu-sitio.com" size={200} />
      </div>
      <button onClick={handleDownloadPdf} style={{ marginTop: '20px' }}>
        Descargar PDF
      </button>
    </div>
  );
};

export default PdfArea;