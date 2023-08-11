import React, { useContext, useEffect, useState } from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  LineSeries,
  DateTime,
  Legend,
  Tooltip,
} from "@syncfusion/ej2-react-charts";
import { LinePrimaryXAxis, LinePrimaryYAxis } from "../../data/widget-init";
import { allData } from "../../contexts/ContextProvider";
import axios from "axios";

function LineChart({selectedValue}) {
  const [lineCustomData, setLineCustomData] = useState([]);
  const { currentMode } = useContext(allData);

  const fetchLineCustomData = async () => {


    const apiUrlMap = {
      "March 2021": "https://run.mocky.io/v3/bb70b0f9-1039-4507-b6b7-6bf29e6ff8cf",
      "April 2021": "https://run.mocky.io/v3/dea13d1a-1af9-47c8-8777-8567d287224f",
      "May 2021": "https://run.mocky.io/v3/ddc6cf53-c320-487a-81dd-275c17b3474b",
    };

    const apiUrl = apiUrlMap[selectedValue] ;

    if (apiUrl) {
      try {
        const res = await axios.get(apiUrl);
        setLineCustomData(res.data.lineCustomSeries);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
  };


  // // Use the useEffect hook to fetch and update data on component mount

  useEffect(() => {
    fetchLineCustomData(); // Fetch and process data based on selectedValue
  }, [selectedValue]); // Trigger useEffect when selectedValue changes

  return (
    <ChartComponent
      id="line-chart"
      height="420px"
      primaryXAxis={LinePrimaryXAxis}
      primaryYAxis={LinePrimaryYAxis}
      chartArea={{ border: { width: 0 } }}
      tooltip={{ enable: true }}
      background={currentMode === "Dark" ? "#33373E" : "#fff"}
      legendSettings={{ background: "white" }}
    >
      <Inject services={[LineSeries, DateTime, Legend, Tooltip]} />

      <SeriesCollectionDirective>
        {lineCustomData?.map((item, index) => (
          <SeriesDirective key={index} {...item} />
        ))}
      </SeriesCollectionDirective>
    </ChartComponent>
  );
}

export default LineChart;
