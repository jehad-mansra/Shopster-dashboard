import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Page,
  Edit,
  Search,
  Inject,
  Toolbar,
  Sort,
  Filter,
  Selection,
} from "@syncfusion/ej2-react-grids";

import { ordersGrid, ordersData } from "../data/widget-init";

import { Header } from "../components";



const Orders = () => {
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Orders" />

      <GridComponent
        dataSource={ordersData}
        id="gridcomp"
        allowPaging
        allowSorting
        allowExcelExport
        allowPdfExport
        toolbar={["Delete", "Search"]}
        editSettings={{ allowDeleting: true, allowEditing: true }}
        width="auto"
      >
        <ColumnsDirective>
          {ordersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject
          services={[Page, Search, Toolbar, Sort, Selection, Edit, Filter]}
        />
      </GridComponent>
    </div>
  );
};

export default Orders;
