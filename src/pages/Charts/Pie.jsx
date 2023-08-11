import React, { useContext, useEffect } from "react";

import { ChartsHeader, Pie as PieChart } from "../../components";
import { allData } from "../../contexts/ContextProvider";

const Pie = () => {
  const { fetchPieChartData, pieChartData } = useContext(allData);

  useEffect(() => {
    fetchPieChartData();
  }, []);

  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <ChartsHeader category="Pie" title="Project Cost Breakdown" />
      <div className="w-full">
        <PieChart
          id="chart-pie"
          data={pieChartData}
          legendVisiblity
          height="full"
        />
      </div>
    </div>
  );
};

export default Pie;
