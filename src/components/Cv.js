import React, { useState } from 'react'
import { Document, Page } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import itCV from '../itzikCV.pdf'
import "../css/cv.css";
import NavBar from './Navbar';
import { pdfjs } from 'react-pdf';
//pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


const Cv = (props) => {
    const [numPages, setNumPages] = useState(null);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    const { pdf } = props;
    return (
        <div>
            <NavBar />
            <div className="App">
                <div className="all-page-container">
                    <Document
                        file={itCV}
                        options={{
                            cMapUrl: `//cdn.jsdelivr.net/npm/pdfjs-dist@${pdfjs.version}/cmaps/`,
                            cMapPacked: true,
                          }}
                        onLoadSuccess={onDocumentLoadSuccess}
                        onLoadError={console.error}
                    >
                        {Array.from(new Array(numPages), (el, index) => (
                            <Page key={`page_${index + 1}`} pageNumber={index + 1} />
                        ))}
                    </Document>
                </div>
            </div>
        </div>
    );
}

export default Cv;