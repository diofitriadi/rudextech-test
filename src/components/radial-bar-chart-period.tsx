import ReactApexChart from "react-apexcharts";
import { radialBarDataByPeriod } from "../data/chart-data";
import { useState } from "react";

type Period = "this_week" | "last_week" | "last_2_week" | "last_month";

const RadialBarChartCard = () => {
  const [selectedPeriod, setSelectedPeriod] = useState<Period>("this_week");
  const selectedChartData = radialBarDataByPeriod[selectedPeriod];

  const options: ApexCharts.ApexOptions = {
    series: [selectedChartData[0].percentage, selectedChartData[1].percentage],
    plotOptions: {
      radialBar: {
        dataLabels: {
          show: false,
        },
        track: {
          background: "#1F2849",
          margin: 10,
        },
        hollow: {
          size: "15%",
        },
      },
    },

    stroke: {
      show: true,
      lineCap: "round",
      curve: "smooth",
    },
    fill: {
      colors: ["#0BB885", "#FF814A"],
    },
  };

  return (
    <div className="bg-secondary rounded-lg shadow min-w-[295px] h-[230px]">
      <div className="flex justify-between items-center px-5 pt-5 pb-2">
        <p className="text-base font-bold">Earnings</p>
        <select
          className="bg-secondary text-white rounded-md px-2 text-xs outline-none"
          value={selectedPeriod}
          onChange={(e) => setSelectedPeriod(e.target.value as Period)}
        >
          <option value="this_week">This Week</option>
          <option value="last_week">Last Week</option>
          <option value="last_2_week">2 Weeks Ago</option>
          <option value="last_month">Last Month</option>
        </select>
      </div>
      <div className="flex justify-center">
        <div className=" w-[250px] h-[250px] -mt-3 -mr-2 -ml-20">
          <ReactApexChart
            options={options}
            series={options.series}
            type="radialBar"
          />
        </div>
        <div className="mt-7 -ml-8">
          {selectedChartData.map((dataPoint, index) => (
            <div
              key={index}
              className="text-white text-xs mb-8 flex items-center gap-2"
            >
              <div
                className={`w-2 h-2 rounded-full mr-2 ${
                  dataPoint.name === "Total Sales"
                    ? "bg-[#0BB885]"
                    : "bg-[#FF814A]"
                }`}
              ></div>
              <div>
                <p className=" mt-0 mb-1">{dataPoint.name}</p>
                <p className="text-gray-400 text-xs">
                  Value: {dataPoint.value}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RadialBarChartCard;
