import React from 'react'
import { Link } from 'react-router-dom'
const ProductsBlocked = () => {
    return (
        <div>
            <nav className="main-header navbar navbar-expand navbar-white navbar-light">
                {/* Left navbar links */}
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" data-widget="pushmenu" href="#" role="button"><i className="fas fa-bars" /></a>
                    </li>
                    <li className="nav-item d-none d-sm-inline-block">
                        <Link to="/" className="nav-link">Home</Link>
                    </li>

                </ul>
                {/* Right navbar links */}
                <ul className="navbar-nav ml-auto">
                    {/* Navbar Search */}
                    <li className="nav-item">
                        <a className="nav-link" data-widget="navbar-search" href="#" role="button">
                            <i className="fas fa-search" />
                        </a>
                        <div className="navbar-search-block">
                            <form className="form-inline">
                                <div className="input-group input-group-sm">
                                    <input className="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search" />
                                    <div className="input-group-append">
                                        <button className="btn btn-navbar" type="submit">
                                            <i className="fas fa-search" />
                                        </button>
                                        <button className="btn btn-navbar" type="button" data-widget="navbar-search">
                                            <i className="fas fa-times" />
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </li>
                    {/* Messages Dropdown Menu */}

                    {/* Notifications Dropdown Menu */}

                    <li className="nav-item">
                        <a className="nav-link" data-widget="fullscreen" href="#" role="button">
                            <i className="fas fa-expand-arrows-alt" />
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-widget="control-sidebar" data-slide="true" href="#" role="button">
                            <i className="fas fa-th-large" />
                        </a>
                    </li>
                </ul>
            </nav>
            <div>
                <aside className="main-sidebar sidebar-dark-primary elevation-4">
                    {/* Brand Logo */}
                    <a href="index3.html" className="brand-link">
                        <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{ opacity: '.8' }} />
                        <span className="brand-text font-weight-light">OKOFA</span>
                    </a>
                    {/* Sidebar */}
                    <div className="sidebar">
                        {/* Sidebar user panel (optional) */}
                        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                            <div className="image">
                                <img src="dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" />
                            </div>
                            <div className="info">
                                <a href="#" className="d-block">Admin</a>
                            </div>
                        </div>
                        {/* SidebarSearch Form */}
                        <div className="form-inline">
                            <div className="input-group" data-widget="sidebar-search">
                                <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search" />
                                <div className="input-group-append">
                                    <button className="btn btn-sidebar">
                                        <i className="fas fa-search fa-fw" />
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* Sidebar Menu */}
                        <nav className="mt-2">
                            <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                                {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
                                <li className="nav-item menu-open">
                                    <a href="#" className="nav-link active">
                                        <i className="nav-icon fas fa-tachometer-alt" />
                                        <p>
                                            Dashboard
                                            <i className="right fas fa-angle-left" />
                                        </p>
                                    </a>
                                    <ul className="nav nav-treeview">
                                        <li className="nav-item">
                                            <a href="./index.html" className="nav-link active">
                                                <i className="nav-icon far fa-circle nav-iconn" />
                                                <p>Dashboard</p>
                                            </a>
                                        </li>
                                        {/* <li className="nav-item">
              <a href="./index2.html" className="nav-link">
                <i className="nav-icon far fa-circle nav-iconn" />
                <p>Dashboard v2</p>
              </a>
            </li> */}
                                        {/* <li className="nav-item">
              <a href="./index3.html" className="nav-link">
                <i className="nav-icon far fa-circle nav-iconn" />
                <p>Dashboard v3</p>
              </a>
            </li> */}
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        <i className="nav-icon fas fa-chart-pie" />
                                        <p>
                                            Products
                                            <i className="right fas fa-angle-left" />
                                        </p>
                                    </a>
                                    <ul className="nav nav-treeview">
                                        <li className="nav-item">
                                            <Link to="/allproducts" className="nav-link">
                                                <i className="nav-icon far fa-circle nav-iconn" />
                                                <p>All Products</p>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/pendingapproval" className="nav-link">
                                                <i className="nav-icon far fa-circle nav-iconn" />
                                                <p>Pending Approval</p>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/productsblocked" className="nav-link">
                                                <i className="nav-icon far fa-circle nav-iconn" />
                                                <p>Products blocked
                                                </p>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                {/* <li className="nav-item">
                                <a href="#" className="nav-link">
                                    <i className="nav-icon fas fa-copy" />
                                    <p>
                                        Layout Options
                                        <i className="fas fa-angle-left right" />
                                        <span className="badge badge-info right">6</span>
                                    </p>
                                </a>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <a href="pages/layout/top-nav.html" className="nav-link">
                                            <i className="nav-icon far fa-circle nav-iconn" />
                                            <p>Top Navigation</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="pages/layout/top-nav-sidebar.html" className="nav-link">
                                            <i className="nav-icon far fa-circle nav-iconn" />
                                            <p>Top Navigation + Sidebar</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="pages/layout/boxed.html" className="nav-link">
                                            <i className="nav-icon far fa-circle nav-iconn" />
                                            <p>Boxed</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="pages/layout/fixed-sidebar.html" className="nav-link">
                                            <i className="nav-icon far fa-circle nav-iconn" />
                                            <p>Fixed Sidebar</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="pages/layout/fixed-sidebar-custom.html" className="nav-link">
                                            <i className="nav-icon far fa-circle nav-iconn" />
                                            <p>Fixed Sidebar <small>+ Custom Area</small></p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="pages/layout/fixed-topnav.html" className="nav-link">
                                            <i className="nav-icon far fa-circle nav-iconn" />
                                            <p>Fixed Navbar</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="pages/layout/fixed-footer.html" className="nav-link">
                                            <i className="nav-icon far fa-circle nav-iconn" />
                                            <p>Fixed Footer</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="pages/layout/collapsed-sidebar.html" className="nav-link">
                                            <i className="nav-icon far fa-circle nav-iconn" />
                                            <p>Collapsed Sidebar</p>
                                        </a>
                                    </li>
                                </ul>
                            </li> */}
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        <i className="nav-icon fas fa-chart-pie" />
                                        <p>
                                            Categories
                                            <i className="right fas fa-angle-left" />
                                        </p>
                                    </a>
                                    <ul className="nav nav-treeview">
                                        <li className="nav-item">
                                            <a href="#" className="nav-link">
                                                <i className="right fas fa-angle-left" />
                                                <p>All Categories</p>
                                            </a>
                                            <ul className="nav nav-treeview">
                                                <li className="nav-item">
                                                    <a href="#" className="nav-link">
                                                        <i className="right fas fa-angle-left" />
                                                        <p>Sub Categories</p>
                                                    </a>
                                                    <ul className="nav nav-treeview">
                                                        <li className="nav-item">
                                                            <a href="#" className="nav-link">
                                                                <i className="right fas fa-angle-left" />
                                                                <p>Sub Sub Categories</p>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>

                                            </ul>

                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        <i className="nav-icon fas fa-tree" />
                                        <p>
                                            Orders
                                            <i className="fas fa-angle-left right" />
                                        </p>
                                    </a>
                                    <ul className="nav nav-treeview">
                                        <li className="nav-item">
                                            <Link to="/allorders" className="nav-link">
                                                <i className="nav-icon far fa-circle nav-iconn" />
                                                <p>All Orders</p>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/orderdetails" className="nav-link">
                                                <i className="nav-icon far fa-circle nav-iconn" />
                                                <p>Order details
                                                </p>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/orderinvoice" className="nav-link">
                                                <i className="nav-icon far fa-circle nav-iconn" />
                                                <p>Order Invoice</p>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/pendingorders" className="nav-link">
                                                <i className="nav-icon far fa-circle nav-iconn" />
                                                <p>Pending orders</p>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/cancelledorders" className="nav-link">
                                                <i className="nav-icon far fa-circle nav-iconn" />
                                                <p>Cancelled Orders</p>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/return" className="nav-link">
                                                <i className="nav-icon far fa-circle nav-iconn" />
                                                <p>Return/Refund
                                                </p>
                                            </Link>
                                        </li>


                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        <i className="nav-icon fas fa-edit" />
                                        <p>
                                            Customers
                                            <i className="fas fa-angle-left right" />
                                        </p>
                                    </a>
                                    <ul className="nav nav-treeview">
                                        <li className="nav-item">
                                            <Link to="/customerslist" className="nav-link">
                                                <i className="nav-icon far fa-circle nav-iconn" />
                                                <p>Customers List</p>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/customerdetails" className="nav-link">
                                                <i className="nav-icon far fa-circle nav-iconn" />
                                                <p>Customer Details</p>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/customerblocked" className="nav-link">
                                                <i className="nav-icon far fa-circle nav-iconn" />
                                                <p>Customers Blocked</p>
                                            </Link>
                                        </li>

                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        <i className="nav-icon fas fa-table" />
                                        <p>
                                            Accounts
                                            <i className="fas fa-angle-left right" />
                                        </p>
                                    </a>
                                    <ul className="nav nav-treeview">
                                        <li className="nav-item">
                                            <Link to="/invoices" className="nav-link">
                                                <i className="nav-icon far fa-circle nav-iconn" />
                                                <p>Invoices</p>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/cancelledorders" className="nav-link">
                                                <i className="nav-icon far fa-circle nav-iconn" />
                                                <p>Cancelled Orders</p>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/refundrequested" className="nav-link">
                                                <i className="nav-icon far fa-circle nav-iconn" />
                                                <p>Refund Requested</p>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        <i className="nav-icon fas fa-table" />
                                        <p>
                                            Complaints
                                            <i className="fas fa-angle-left right" />
                                        </p>
                                    </a>
                                    <ul className="nav nav-treeview">
                                        <li className="nav-item">
                                            <Link to="/departmentlist" className="nav-link">
                                                <i className="nav-icon far fa-circle nav-iconn" />
                                                <p>List of departments </p>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/complaintlist" className="nav-link">
                                                <i className="nav-icon far fa-circle nav-iconn" />
                                                <p>List of complaints</p>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/resolvedcomplaints" className="nav-link">
                                                <i className="nav-icon far fa-circle nav-iconn" />
                                                <p>Resolved Complaints</p>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-header"><h5>Ambassador</h5></li>


                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        <i className="nav-icon fas fa-book" />
                                        <p>
                                            XYZ
                                            <i className="fas fa-angle-left right" />
                                        </p>
                                    </a>
                                    <ul className="nav nav-treeview">
                                        <li className="nav-item">
                                            <Link to="/usersregistered" className="nav-link">
                                                <i className="nav-icon far fa-circle nav-iconn" />
                                                <p>List of users registered</p>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/ambassador_inactivity" className="nav-link">
                                                <i className="nav-icon far fa-circle nav-iconn" />
                                                <p>Inactivity /Activity</p>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/profitsecured" className="nav-link">
                                                <i className="nav-icon far fa-circle nav-iconn" />
                                                <p>Profit secured</p>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/pendingdues" className="nav-link">
                                                <i className="nav-icon far fa-circle nav-iconn" />
                                                <p>Pending dues
                                                </p>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/duescollected" className="nav-link">
                                                <i className="nav-icon far fa-circle nav-iconn" />
                                                <p>Dues collected
                                                </p>
                                            </Link>
                                        </li>

                                    </ul>
                                </li>
                                <li className="nav-header"><h5>Seller</h5></li>


                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        <i className="nav-icon fas fa-tree" />
                                        <p>
                                            Register/Manage Profile

                                            <i className="fas fa-angle-left right" />
                                        </p>
                                    </a>
                                    <ul className="nav nav-treeview">
                                        <li className="nav-item">
                                            <Link to="/sellerlist" className="nav-link">
                                                <i className="nav-icon far fa-circle nav-iconn" />
                                                <p>Seller list
                                                </p>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/selleract" className="nav-link">
                                                <i className="nav-icon far fa-circle nav-iconn" />
                                                <p>Inactivity /Activity</p>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/kyc_pending" className="nav-link">
                                                <i className="nav-icon far fa-circle nav-iconn" />
                                                <p>KYC Pending
                                                </p>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/pendingdues" className="nav-link">
                                                <i className="nav-icon far fa-circle nav-iconn" />
                                                <p>Pending dues
                                                </p>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/sellerduescollected" className="nav-link">
                                                <i className="nav-icon far fa-circle nav-iconn" />
                                                <p>Dues collected
                                                </p>
                                            </Link>
                                        </li>

                                    </ul>
                                </li>
                                <li className="nav-header"><h5>Payment
                                    Settlement
                                </h5></li>


                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        <i className="nav-icon fas fa-edit" />
                                        <p>
                                            Admin
                                            <i className="fas fa-angle-left right" />
                                        </p>
                                    </a>
                                    <ul className="nav nav-treeview">
                                        <li className="nav-item">
                                            <Link to="/accountbalance" className="nav-link">
                                                <i className="nav-icon far fa-circle nav-iconn" />
                                                <p>Account Balance </p>
                                            </Link>

                                        </li>
                                        <li className="nav-item">
                                            <Link to="/userpendingdues" className="nav-link">
                                                <i className="nav-icon far fa-circle nav-iconn" />
                                                <p>Users pending dues </p>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/ambassadordues" className="nav-link">
                                                <i className="nav-icon far fa-circle nav-iconn" />
                                                <p>Ambassador Dues
                                                </p>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/duespaid" className="nav-link">
                                                <i className="nav-icon far fa-circle nav-iconn" />
                                                <p>Dues paid
                                                </p>
                                            </Link>
                                        </li>



                                    </ul>
                                </li>
                                <li className="nav-header"><h5>Logistics</h5></li>


                                <li className="nav-item">
                                    <Link to="/cost" className="nav-link">
                                        <i className="nav-icon far fa-circle nav-icon" />
                                        <p>Cost
                                        </p>
                                    </Link>

                                </li>
                                <li className="nav-header"><h5>Price </h5></li>


                                <li className="nav-item">
                                    <li className="nav-item">
                                        <Link to="/pricexquantity" className="nav-link">
                                            <i className="nav-icon far fa-circle nav-icon" />
                                            <p>Price x Quantity</p>
                                        </Link>
                                    </li>

                                </li>
                                <li className="nav-header"><h5>Warehouses</h5></li>


                                <li className="nav-item">


                                    <li className="nav-item">
                                        <Link to="/locatenearest" className="nav-link">
                                            <i className="nav-icon far fa-circle nav-icon" />
                                            <p>Locate Nearest</p>
                                        </Link>
                                    </li>
                                </li>

                            </ul>
                        </nav>
                        {/* /.sidebar-menu */}
                    </div>
                    {/* /.sidebar */}
                </aside>


            </div>
            <div className="content-wrapper">
                <div className="card-footer bg-transparent">
                    {/* Left col */}

                    {/* Custom tabs (Charts with tabs)*/}
                    <table class="table">

                        <thead>
                            <tr>
                                <th scope="col" colSpan="6" className="col-4 text-center">Top Ambassadors</th>
                            </tr>
                        </thead>
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">ProductID</th>
                                <th scope="col">Product Name</th>
                               

                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>#EODD61753832753b0</td>
                                <td>Admin</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>#EODD6175302cad557</td>
                                <td>Admin</td>
                                

                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td >#EODD6175302cad557</td>
                                <td>Admin</td>
                                

                            </tr>

                        </tbody>

                    </table>

                    {/* /.row */}
                </div>
            </div>
        </div>
    )
}

export default ProductsBlocked
