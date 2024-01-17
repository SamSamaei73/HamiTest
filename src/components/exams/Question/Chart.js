import React from "react";
import Highcharts from "highcharts";
import {
  HighchartsProvider,
  HighchartsChart,
  Chart,
  XAxis,
  YAxis,
  Title,
  Subtitle,
  Legend,
  LineSeries,
} from "react-jsx-highcharts";

const plotOptions = {
  categories: ["D", "I", "S", "C"],
};

const SimpleLine = (props) => (
  <div className="app">
    <HighchartsProvider Highcharts={Highcharts}>
      <HighchartsChart plotOptions={plotOptions}>
        <Chart />

        <Title>{props.Title}</Title>

        <Subtitle>{props.Subtitle} </Subtitle>

        <Legend layout="vertical" align="right" verticalAlign="middle" />

        <XAxis categories={plotOptions.categories}>
          <XAxis.Title>معیارها</XAxis.Title>
        </XAxis>

        <YAxis>
          {!props.both ? (
            <LineSeries name={props.name[0]} data={props.data} />
          ) : (
            <span>
              <LineSeries name={props.name[0]} data={props.data[0]} />
              <LineSeries name={props.name[1]} data={props.data[1]} />
            </span>
          )}
        </YAxis>
      </HighchartsChart>
    </HighchartsProvider>
  </div>
);

export default SimpleLine;