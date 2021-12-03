
import { Router, Route, Routes } from "react-router-dom";

import Contact from './extras/Contact';
import AllProducts from "./extras/AllProducts";
import Cancelledorders from './extras/Cancelledorders';
import Complains from "./extras/Complains";
import Invoices from './extras/Invoices';
import Logistic from "./extras/Logistic";
import Orderdetails from './extras/Orderdetails';
import Orderinvoice from "./extras/Orderinvoice";
import PendingApproval from './extras/Pendingapproval';
import Pendingorders from "./extras/Pendingorders";
import Price from './extras/Price';
import ProductsBlocked from "./extras/ProductsBlocked";
import Refundrequests from './extras/Refundrequests';
import Resolvedcomplaints from "./extras/Resolvedcomplaints";
import Return from './extras/Return';
import Usersregistered from "./extras/Usersregistered";
import Warehouses from './extras/Warehouses';

import Ambassadoractivity from "./ambassador/Ambassadoractivity";
import Ambdues from './ambassador/AmbDues';
import ProfitsecuredAmb from "./ambassador/ProfitsecuredAmb";
import Ambduescollected from "./ambassador/Ambduescollected";

import Ambpending from "./admin/Ambpending";
import Balance from './admin/Balance';
import Duespaid from "./admin/Duespaid";
import Userpending from "./admin/Userpending";
import Customerblocked from './customer/Customerblocked';
import Customerdetails from "./customer/Customerdetails";
import Customerlist from "./customer/Customerlist";

import Manage from './seller/Manage';
import SellerAct from "./seller/SellerAct";
import Sellercollected from "./seller/Sellercollected";
import Sellerdues from './seller/Sellerdues';
import Sellerkyc from "./seller/Sellerkyc";
import Sellerlist from "./seller/Sellerlist";
import App1 from './App1';
import AllOrders from "./extras/AllOrders";
import Departmentlist from "./extras/Departmentlist";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<App1 />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/allproducts" element={<AllProducts />} />
        <Route path="/pendingapproval" element={<PendingApproval />} />
        <Route path="/productsblocked" element={<ProductsBlocked />} />
        <Route path="/allorders" element={<AllOrders />} />
        <Route path="/orderdetails" element={<Orderdetails />} />
        <Route path="/orderinvoice" element={<Orderinvoice />} />
        <Route path="/pendingorders" element={<Pendingorders />} />
        <Route path="/return" element={<Return />} />
        <Route path="/customerslist" element={<Customerlist />} />

        <Route path="/customerdetails" element={<Customerdetails />} />
        <Route path="/customerblocked" element={<Customerblocked />} />
        <Route path="/invoices" element={<Invoices />} />
        <Route path="/cancelledorders" element={<Cancelledorders />} />
        <Route path="/refundrequested" element={<Refundrequests />} />
        {/* <Route path="/departmentlist" element={<Departmentlist />} /> */}
        <Route path="/complaintlist" element={<Complains />} />
        <Route path="/resolvedcomplaints" element={<Resolvedcomplaints />} />
        <Route path="/usersregistered" element={<Usersregistered />} />
        <Route path="/ambassador_inactivity" element={<Ambassadoractivity />} />
        <Route path="/profitsecured" element={<ProfitsecuredAmb />} />

        <Route path="/pendingdues" element={<Ambpending />} />

        <Route path="/departmentlist" element={<Departmentlist />} />
        <Route path="/sellerlist" element={<Sellerlist />} />
        <Route path="/selleract" element={<SellerAct />} />
        <Route path="/kyc_pending" element={<Sellerkyc />} />

        <Route path="/pendingdues" element={<Sellerdues />} />

        <Route path="/sellerduescollected" element={<Sellercollected />} />
        <Route path="/duescollected" element={<Ambduescollected />} />
        <Route path="/accountbalance" element={<Balance />} />
        <Route path="/userpendingdues" element={<Userpending />} />
        <Route path="/ambassadordues" element={<Ambdues />} />
        <Route path="/duespaid" element={<Duespaid />} />
        <Route path="/cost" element={<Logistic />} />
        <Route path="/pricexquantity" element={<Price />} />
        <Route path="/locatenearest" element={<Warehouses />} />

      </Routes>
    </>
  );
}

export default App;




