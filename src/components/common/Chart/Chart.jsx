import { forwardRef } from "react";
import { Line } from "react-chartjs-2";
import "./Chart.scss";

export const Chart = forwardRef(({ plot }, ref) => {
    return (
        <div className="chart__wrapper">
            <Line ref={ref} data={plot} options={{ maintainAspectRatio: false }}/>
        </div>
    );
});
