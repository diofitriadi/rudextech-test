import ReactApexChart from "react-apexcharts";

export const LineChart = () => {
  const chartData = {
    options: {
      chart: {
        type: "line",
        zoom: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
      },
      xaxis: {
        show: false,
        labels: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      yaxis: {
        labels: {
          show: false,
        },
      },
      markers: {
        discrete: [
          {
            seriesIndex: 0,
            dataPointIndex: 5,
            fillColor: "#0BB885",
            strokeColor: "#000",
            size: 8,
            shape: "circle",
          },
        ],
      },
      stroke: {
        show: true,
        colors: ["#0BB885"],
        width: 5,
      },
      grid: {
        show: true,
        borderColor: "#0A1826",
        strokeDashArray: 10,
        xaxis: {
          lines: {
            show: true,
          },
        },
        yaxis: {
          lines: {
            show: false,
          },
        },
      },
    },
    axisTicks: {
      show: false,
    },
    legend: {
      show: false,
    },
    series: [
      {
        name: "Series A",
        data: [30, 40, 35, 50, 49, 60],
      },
    ],
  };

  return (
    <div className="bg-secondary rounded-lg shadow px-4">
      <p>PROFIT</p>
      <p>8,240000</p>
      <div className="pt-7 pr-4">
        <ReactApexChart
          options={chartData.options}
          series={chartData.series}
          type="line"
          height={140}
          width={140}
        />
      </div>
    </div>
  );
};
