import React from "react";

import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import highcharts3d from "highcharts/highcharts-3d";
highcharts3d(Highcharts);

const Chart3D = ({ chartTitle, xcatList, yTitle, xTitle, seriesList }) => {
  const chartOptions = {
    chart: {
      renderTo: "container",
      type: "column",
      options3d: {
        enabled: true,
        alpha: 15,
        beta: 15,
        depth: 50,
        // viewDistance: 25,
      },
    },
    xAxis: {
      categories: xcatList,
      //  [
      //   "Toyota",
      //   "BMW",
      //   "Volvo",
      //   "Audi",
      //   "Peugeot",
      //   "Mercedes-Benz",
      //   "Volkswagen",
      //   "Polestar",
      //   "Kia",
      //   "Nissan",
      // ],
    },
    yAxis: {
      title: {
        enabled: false,
      },
    },
    tooltip: {
      headerFormat: "<b>{point.key}</b><br>",
      pointFormat: "امتیاز: {point.y}",
    },
    title: {
      text: chartTitle,
    },
    subtitle: {
      text:
        "Source: " +
        '<a href="https://hamitest.com"' +
        'target="_blank">سایت حامی تست</a>',
    },
    legend: {
      enabled: false,
    },
    plotOptions: {
      series: {
        dataLabels: {
          enabled: true,
        },
      },
      column: {
        depth: 25,
      },
    },
    series: [
      {
        data: seriesList, // [1318, 1073, 1060, 813, 775, 745],
        colorByPoint: true,
      },
    ],
  };

  return (
    <HighchartsReact
      style={{ height: "100%"  }}
      highcharts={Highcharts}
      options={chartOptions}
    />
  );
};

export default Chart3D;
