import React, { useState } from 'react';

import { Document, Page } from "react-pdf";

export default function GetPdfPages(props) {
    const { pdf } = props;
  
    return Array.from(new Array(), (el, index) => (
          <Page key={`page_${index + 1}`} pageNumber={index + 1} />
        ));
  }

