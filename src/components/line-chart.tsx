import ReactApexChart from "react-apexcharts";

export const LineChart = () => {
  const chartData: ApexCharts.ApexOptions = {
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
    <div className="bg-secondary rounded-lg shadow px-4 h-[230px]">
      <div className="flex flex-col mb-7 mt-5 text-base">
        <p>Profit</p>
        <p className="mt-2 text-2xl font-medium text-green">8,24000</p>
      </div>
      <div className="-mt-9 pr-4">
        <ReactApexChart
          options={chartData}
          series={chartData.series}
          type="line"
          height={140}
          width={140}
        />
      </div>
    </div>
  );
};
