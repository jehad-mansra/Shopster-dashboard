import "./App.css";
import React, { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import { Footer, Navbar, Sidebar, ThemeSettings } from "./components";
import { Ecommerce, Orders, Employees, Area, Bar, Pie } from "./pages";
import { allData } from "./contexts/ContextProvider";

function App() {
  const {
    activeMenu,
    themeSettings,
    setThemeSettings,
    currentColor,
    currentMode,
  } = useContext(allData);
  

  return (
    <div className={currentMode === "Dark" ? "dark" : ""}>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
            <TooltipComponent content="settings" position="Top">
              <button
                type="button"
                className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
                style={{ background: currentColor, borderRadius: "50%" }}
                onClick={() => setThemeSettings(true)}
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              <Sidebar />
            </div>
          )}

          <div
            className={`dark:bg-main-dark-bg bg-gray-100 min-h-screen w-full ${
              activeMenu ? " md:ml-72" : "flex-2"
            }`}
          >
            <div className="fixed md:static bg-main dark:bg-main-dark-bg navbar w-full">
              <Navbar />
            </div>

            <div>
              {themeSettings && <ThemeSettings />}
              <Routes>
                {/* Dashboard */}

                <Route path="/" element={<Ecommerce />} />
                <Route path="/ecommerce" element={<Ecommerce />} />
                {/* Pages */}
                <Route path="/Orders" element={<Orders />} />
                <Route path="/Employees" element={<Employees />} />

                {/* charts */}

                <Route path="/pie" element={<Pie />} />
                <Route path="/area" element={<Area />} />
                <Route path="/bar" element={<Bar />} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
