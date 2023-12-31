import React from "react";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Page,
  Edit,
  Search,
  Inject,
  Toolbar,
} from "@syncfusion/ej2-react-grids";

import { employeesData, employeesGrid } from "../data/widget-init";

import { Header } from "../components";
function Employee() {
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Employee" />
      <GridComponent
        dataSource={employeesData}
        allowPaging
        allowSorting
        allowExcelExport
        allowPdfExport
        toolbar={["Search"]}
        width="auto"
    
      >
        <ColumnsDirective>
          {employeesGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Search, Toolbar, Edit]} />
      </GridComponent>
    </div>
  );
}

export default Employee;
