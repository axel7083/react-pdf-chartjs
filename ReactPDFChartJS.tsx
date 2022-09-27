import React from 'react';
import {View, Image} from '@react-pdf/renderer';
import {ChartJSNodeCanvas} from 'chartjs-node-canvas';
import {ChartConfiguration} from 'chart.js';
import {Style} from '@react-pdf/types/style';

type ReactPDFChartProps = {
    configuration: ChartConfiguration,
    resolution: {
        width: number,
        height: number
    },
    backgroundColour?: string,
    style?: Style,
    keepAspectRatio?: boolean
}

const ReactPDFChartJS = ({style, configuration, resolution, backgroundColour, keepAspectRatio = false}: ReactPDFChartProps) => {
    const chartJSNodeCanvas = new ChartJSNodeCanvas({
        width: resolution.width,
        height: resolution.height,
        backgroundColour
    });
    const content = chartJSNodeCanvas.renderToBufferSync(configuration);

    return (
        <View style={style}>
            <Image style={{objectFit: keepAspectRatio?'contain':'auto'}} src={content}/>
        </View>
    );
}

export {ReactPDFChartJS, ReactPDFChartProps};