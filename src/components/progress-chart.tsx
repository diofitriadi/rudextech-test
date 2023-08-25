import { dummyProgressData, totalValue } from "../data/progress-bar";

export const VerticalProgressBar = () => {
  return (
    <div className="flex flex-col  bg-secondary rounded-lg shadow p-4 h-[230px]">
      <div className="flex flex-col mb-7 mt-1 text-base">
        <p>Orders</p>
        <p className="mt-2 text-2xl font-medium text-orange">{totalValue}</p>
      </div>
      <div className="flex flex-row gap-5 items-center">
        {dummyProgressData.map((data) => (
          <div
            key={data.id}
            className="w-3 h-20 bg-[#2E4B85]  rounded-2xl overflow-hidden flex flex-col justify-end"
          >
            <div
              className="bg-orange h-full"
              style={{ height: `${data.percentage}%` }}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};
