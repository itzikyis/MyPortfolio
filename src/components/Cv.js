import React, { useState } from 'react'
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import itCV from '../itzikCV.pdf'
import "../css/cv.css";
import NavBar from './Navbar';

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
                        options={{ workerSrc: "../pdf.worker.js" }}
                        onLoadSuccess={onDocumentLoadSuccess}
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