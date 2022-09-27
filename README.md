# react-pdf-chartjs

Installation

``
npm i react-pdf-chartjs
``

## Example

````typescript jsx
import React from 'react';
import ReactPDF from '@react-pdf/renderer';
import { Document, Page} from '@react-pdf/renderer';
import { ChartConfiguration } from 'chart.js';
import {Chart} from 'react-pdf-chartjs';

const configuration: ChartConfiguration = {
    // see https://www.chartjs.org/docs/latest/configuration/
};

// Create Document Component
const MyDocument = () => (
    <Document>
        <Page size="A4">
            <Chart resolution={{width: 500, height: 500}} configuration={configuration}/>
        </Page>
    </Document>
);

ReactPDF.render(<MyDocument />, `./example.pdf`);
````