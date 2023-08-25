import { VerticalProgressBar } from "./components/progress-chart";
import Navbar from "./components/navbar";
import RadialBarChartCard from "./components/radial-bar-chart-period";
import Sidebar from "./components/sidebar";
import SingleCard from "./components/single-card";
import { singleCard } from "./data/single-card";
import { LineChart } from "./components/line-chart";
import "./App.css";

const App = () => {
  return (
    <div className="flex bg-primary text-white text-sm">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <hr className="bg-[#4B5259] opacity-40" />
        <main className="p-4 px-8 flex-1 overflow-y-auto">
          <h1 className="font-bold text-2xl mb-3">Marketing Dashboard</h1>
          <p className="text-[#6C747D]">
            Home / <span className="text-[#0BB885]">Dashboard</span>
          </p>
          <div className="mt-5 flex gap-5 flex-wrap flex-1">
            {singleCard.map((card, index) => (
              <div key={index}>
                <SingleCard
                  title={card.title}
                  img={card.img}
                  value={card.value}
                />
              </div>
            ))}
          </div>
          <div className="flex flex-start pt-5 gap-5">
            <RadialBarChartCard />
            <VerticalProgressBar />
            <LineChart />
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
