import React, { createContext, useState } from "react";
import axios from "axios";

// Create the context
export const allData = createContext({});

// Initial state for menu clicks
const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

export const ContextProvider = ({ children }) => {
  // State variables
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);
  const [screenSize, setScreenSize] = useState(undefined);
  const [currentColor, setCurrentColor] = useState(
    localStorage.getItem("ColorMod") || "#03C9D7"
  );
  const [currentMode, setCurrentMode] = useState(
    localStorage.getItem("themeMod") || "Light"
  );
  const [themeSettings, setThemeSettings] = useState(false);
  const [sparklineData, setSparklineData] = useState([]);
  const [pieChartData, setPieChartData] = useState([]);
  const [stackedChartData, setStackedChartData] = useState([]);
  const [areaCustomSeries, setAreaCustomSeries] = useState([]);
  const [barCustomSeries, setBarCustomSeries] = useState([]);

  // Set theme mode
  const setMod = (e) => {
    setCurrentMode(e.target.value);
    localStorage.setItem("themeMod", e.target.value);
    setThemeSettings(false);
  };

  // Set theme color
  const setColor = (color) => {
    setCurrentColor(color);
    localStorage.setItem("ColorMod", color);
    setThemeSettings(false);
  };

  // Handle menu click
  const handleClick = (clicked) =>
    setIsClicked({ ...initialState, [clicked]: true });

  // Fetch Sparkline Area Data
  const fetchSparklineAreaData = async () => {
    const res = await axios.get(
      "https://run.mocky.io/v3/344fb758-4358-4d36-8049-4ed6b2107d55"
    );

    setSparklineData(res.data.SparklineAreaData);
  };

  // Fetch Ecom Pie Chart Data
  const fetchEcomPieChartData = async () => {
    const res = await axios.get(
      "https://run.mocky.io/v3/cc1326df-2ae0-46b8-8ead-1c429122c75a"
    );

    setPieChartData(res.data.ecomPieChartData);
  };

  // Fetch Stacked Chart Data
  const fetchStackedChartData = async () => {
    const res = await axios.get(
      "https://run.mocky.io/v3/a3125cf2-acc6-471c-a4cc-97d7c30e2bec"
    );

    setStackedChartData(res.data.stackedCustomSeries);
  };

  // Fetch Area Custom Series Data
  const fetchAreaCustomSeries = async () => {
    const res = await axios.get(
      "https://run.mocky.io/v3/22611f0c-a101-459c-89ad-47ebafb3f31a"
    );

    setAreaCustomSeries(res.data.areaCustomSeries);
  };

  // Fetch Bar Custom Series Data
  const fetchBarCustomSeries = async () => {
    const res = await axios.get(
      "https://run.mocky.io/v3/226f7571-391d-4e53-9ba9-75cb49cb0f34"
    );

    setBarCustomSeries(res.data.barCustomSeries);
  };

  // Fetch Pie Chart Data
  const fetchPieChartData = async () => {
    const res = await axios.get(
      "https://run.mocky.io/v3/a7a292d7-ce4b-460e-b911-70ba60241756"
    );

    setPieChartData(res.data.pieChartData);
  };

  // Data to share with components
  const dataToShare = {
    activeMenu,
    setActiveMenu,
    isClicked,
    setIsClicked,
    handleClick,
    setScreenSize,
    screenSize,
    currentColor,
    currentMode,
    setCurrentMode,
    setCurrentColor,
    themeSettings,
    setThemeSettings,
    setColor,
    setMod,
    sparklineData,
    fetchEcomPieChartData,
    fetchSparklineAreaData,
    pieChartData,
    fetchStackedChartData,
    stackedChartData,
    areaCustomSeries,
    fetchAreaCustomSeries,
    fetchBarCustomSeries,
    barCustomSeries,
    fetchPieChartData,
  };

  // Provide data via context
  return <allData.Provider value={dataToShare}>{children}</allData.Provider>;
};
