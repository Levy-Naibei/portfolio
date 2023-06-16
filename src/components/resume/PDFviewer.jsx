// import React, { useState } from "react";
// import { Row } from "react-bootstrap";
// import { Document, Page } from "react-pdf";
// import "react-pdf/dist/esm/Page/AnnotationLayer.css";
// import resume from './../../../public/pdf/levynaibei_cv.pdf';

// console.log("---", resume)

// const PDFViewer = () => {
//     const [numPages, setNumPages] = useState(null);

//     const onDocLoadSuccess = () => {
//         setNumPages(numPages);
//     }

//     return (
//         <>
//             <Row className="resume">
//                 <Document
//                     file={resume}
//                     className="d-flex justify-content-center"
//                     onLoadSuccess={onDocLoadSuccess}>
//                     {/* {Array.from(new Array(pages), (el, index) => (
//               <Page key={`page_${index + 1}`} pageNumber={index + 1} scale={width > 786 ? 1.7 : 0.6} />
//             ))} */}
//                     {Array.from(new Array(numPages), (el, index) => (
//                         <Page key={`page_${index + 1}`} pageNumber={index + 1} />
//                     ))}
//                 </Document>
//             </Row>
//         </>
//     )
// }

// export default PDFViewer;
