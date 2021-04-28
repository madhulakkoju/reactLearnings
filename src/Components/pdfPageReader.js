
import React, { useState } from "react";
import { Document, Page } from "react-pdf";
import ReactScrollWheelHandler from "react-scroll-wheel-handler";


export default function PageView(props){
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
        setPageNumber(1);
    }

    function up(){
        if(pageNumber <= 1)
            return;
        setPageNumber(prevPageNumber => prevPageNumber - 1);
    }

    function down(){
        if(pageNumber >= numPages)
            return;
        setPageNumber(prevPageNumber => prevPageNumber + 1);
    }

    const { pdf } = props;


    return (
        <div>
            <ReactScrollWheelHandler
                upHandler = {up}
                downHandler = {down}
                style={{
            width: "100%",
            height: "40vh",
            backgroundColor: "white",
            transition: "background-color.4s ease-out",
          }}
            >
            <h1>{pageNumber}</h1>
            <Document
                file={pdf}
                options={{ workerSrc: "/pdf.worker.js" }}
                onLoadSuccess={onDocumentLoadSuccess}
            >
                <Page pageNumber={pageNumber} />
            </Document>
            </ReactScrollWheelHandler>
        </div>
    );




}



















