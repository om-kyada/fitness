import React from "react";
import PropTypes from "prop-types";
import { scalePoint } from "d3-scale";

import { ChartCanvas, Chart } from "react-stockcharts";
import { BarSeries } from "react-stockcharts/lib/series";
import { XAxis, YAxis } from "react-stockcharts/lib/axes";
import { fitWidth } from "react-stockcharts/lib/helper";
import {
    CrossHairCursor,
    // MouseCoordinateX,
    // MouseCoordinateY
} from "react-stockcharts/lib/coordinates";

const StockBarChart = ({ data: unsortedData, type = "svg", width, ratio }) => {
    const data = unsortedData.slice();
    const barWidth = 60;
    const spacing = 20;
    const canvasWidth = unsortedData.length * (barWidth + spacing);
    const chartHeight = 1061;
    return (
        <div
            style={{
                width: "100%",
                overflowX: "auto",
                // border: "1px solid #ccc",
                paddingBottom: "10px",
            }}
        >
            <ChartCanvas
                ratio={ratio}
                width={canvasWidth}
                height={chartHeight}
                margin={{ left: 80, right: 10, top: 20, bottom: 30 }}
                type={type}
                xExtents={(list) => list.map((d) => d.x)}
                data={data}
                mouseMoveEvent={true}
                panEvent={true}
                zoomEvent={true}
                clamp={false}
                xAccessor={(d) => d.x}
                yAccessor={(d) => d.y}
                xScale={scalePoint()}
                yScale={scalePoint()}
                padding={1}
            >
                <Chart id={1} height={861} yExtents={(d) => [0, d.y1 + d.y2 + d.y3]} >
                    <XAxis axisAt="bottom" orient="bottom" />
                    <YAxis axisAt="left" orient="left" />
                    <BarSeries
                        yAccessor={(d) => d.y3}
                        fill="rgba(0, 255, 0, 0.5)"
                        width={barWidth}
                    />
                    <BarSeries
                        yAccessor={(d) => d.y1}
                        fill="rgba(255, 99, 132, 0.7)"
                        width={barWidth}
                    />
                    <BarSeries
                        yAccessor={(d) => d.y2}
                        fill="rgba(54, 162, 235, 0.7)"
                        width={barWidth}
                    />
                </Chart>
                <CrossHairCursor />
            </ChartCanvas>
        </div>
    );
};

StockBarChart.propTypes = {
    data: PropTypes.array.isRequired,
    width: PropTypes.number.isRequired,
    ratio: PropTypes.number.isRequired,
    type: PropTypes.oneOf(["svg", "hybrid"]),
};

StockBarChart.defaultProps = {
    type: "svg",
};
const FittedStockBarChart = fitWidth(StockBarChart);

export default FittedStockBarChart;