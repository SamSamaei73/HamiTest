import React from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import highcharts3d from "highcharts/highcharts-3d";
highcharts3d(Highcharts);

const PieChart = ({ chartTitle, xcatList, yTitle, xTitle, seriesList }) => {
  const pieOptions = {
    type: "pie",
    options3d: {
      enabled: true,
      alpha: 45,
      beta: 0,
    },
    title: {
      text: chartTitle, //"Browser market shares at a specific website, 2014",
    },
    accessibility: {
      point: {
        valueSuffix: "%",
      },
    },
    tooltip: {
      pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: "pointer",
        depth: 35,
        dataLabels: {
          enabled: true,
          format: "{point.name}",
        },
      },
    },
    series: [
      {
        type: "pie",
        name: "Browser share",
        data: seriesList,
        //  [
        //   ["Firefox", 45.0],
        //   ["IE", 26.8],
        //   {
        //     name: "Chrome",
        //     y: 12.8,
        //     sliced: true,
        //     selected: true,
        //   },
        //   ["Safari", 8.5],
        //   ["Opera", 6.2],
        //   ["Others", 0.7],
        // ],
      },
    ],
  };

  return (
    <HighchartsReact
      style={{ height: "100%" }}
      highcharts={Highcharts}
      options={pieOptions}
    />
  );
};

export default PieChart;
