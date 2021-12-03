import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { Chart } from 'react-charts'


const Home = () => {

    return (
        <div>
            <div className="content-wrapper">
                {/* Content Header (Page header) */}
                <div className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1 className="m-0">Dashboard</h1>
                            </div>{/* /.col */}
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                                    <li className="breadcrumb-item active">Dashboard </li>
                                </ol>
                            </div>{/* /.col */}
                        </div>{/* /.row */}
                    </div>{/* /.container-fluid */}
                </div>
                {/* /.content-header */}
                {/* Main content */}
                <section className="content">
                    <div className="container-fluid">
                        {/* Small boxes (Stat box) */}
                        <div className="row">
                            <div className="col-lg-3 col-6">
                                {/* small box */}
                                <div className="small-box bg-info">
                                    <div className="inner">
                                        <h3>150</h3>
                                        <p>Total Customers</p>
                                        <h4>32</h4>
                                        <p>Customers Joined This Week</p>
                                    </div>
                                    <div className="icon">
                                        <i className="ion ion-bag" />
                                    </div>
                                    <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
                                </div>
                            </div>
                            {/* ./col */}
                            <div className="col-lg-3 col-6">
                                {/* small box */}
                                <div className="small-box bg-success">
                                    <div className="inner">
                                        <h3>53<sup style={{ fontSize: 20 }}></sup></h3>
                                        <p>Total orders </p>
                                        <h4>32</h4>
                                        <p>Orders This Week</p>

                                    </div>
                                    <div className="icon">
                                        <i className="ion ion-stats-bars" />
                                    </div>
                                    <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-6">
                                {/* small box */}
                                <div className="small-box bg-danger">
                                    <div className="inner">
                                        <h3>65</h3>
                                        <p>Total Sale Amount</p>
                                        <h4>32</h4>
                                        <p>Sale This Week</p>
                                    </div>
                                    <div className="icon">
                                        <i className="ion ion-pie-graph" />
                                    </div>
                                    <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
                                </div>
                            </div>
                            {/* ./col */}
                            <div className="col-lg-3 col-6">
                                {/* small box */}
                                <div className="small-box bg-warning">
                                    <div className="inner">
                                        <h3>44</h3>
                                        <p>User Registrations</p>
                                        <h4>32</h4>
                                        <p>New Users Joined</p>
                                    </div>
                                    <div className="icon">
                                        <i className="ion ion-person-add" />
                                    </div>
                                    <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
                                </div>
                            </div>
                            {/* ./col */}

                            {/* ./col */}
                        </div>
                        <div className="row">

                            {/* ./col */}


                            {/* ./col */}
                            <div className="col-lg-3 col-6">
                                {/* small box */}
                                <div className="small-box bg-danger">
                                    <div className="inner">
                                        <h3>65</h3>
                                        <p>Total number of ambassadors</p>

                                    </div>
                                    <div className="icon">
                                        <i className="ion ion-pie-graph" />
                                    </div>
                                    <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-6">
                                {/* small box */}
                                <div className="small-box bg-warning">
                                    <div className="inner">
                                        <h3>53<sup style={{ fontSize: 20 }}></sup></h3>
                                        <p>Users active now</p>
                                    </div>
                                    <div className="icon">
                                        <i className="ion ion-stats-bars" />
                                    </div>
                                    <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
                                </div>
                            </div>
                            {/* ./col */}
                        </div>

                        {/* /.row */}
                        {/* Main row */}
                        <div className="row">
                            {/* Left col */}
                            <section className="col-lg-7 connectedSortable">
                                {/* Custom tabs (Charts with tabs)*/}
                                <div className="card">
                                    <div className="card-header">
                                        <h3 className="card-title">
                                            <i className="fas fa-chart-pie mr-1" />
                                            Sales
                                        </h3>
                                        <div className="card-tools">
                                            <ul className="nav nav-pills ml-auto">
                                                <li className="nav-item">
                                                    <a className="nav-link active" href="#revenue-chart" data-toggle="tab">Area</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" href="#sales-chart" data-toggle="tab">Donut</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>{/* /.card-header */}

                                    <div className="card-body">
                                        <div className="tab-content p-0">
                                            {/* Morris chart - Sales */}
                                            <div className="chart tab-pane active" id="revenue-chart" style={{ position: 'relative', height: 300 }}>
                                                <canvas id="revenue-chart-canvas" height={300} style={{ height: 300 }} />
                                            </div>
                                            <div className="chart tab-pane" id="sales-chart" style={{ position: 'relative', height: 300 }}>
                                                <canvas id="sales-chart-canvas" height={300} style={{ height: 300 }} />
                                            </div>
                                        </div>
                                    </div>{/* /.card-body */}

                                </div>
                                {/* /.card */}



                                {/* TO DO List */}

                                {/* /.card */}
                            </section>
                            {/* /.Left col */}
                            {/* right col (We are only adding the ID to make the widgets sortable)*/}

                            {/* right col */}
                            <section className="col-lg-5 connectedSortable">
                                {/* Map card */}
                                <div className="card bg-gradient-success">
                                    <div className="card-header border-0">

                                        {/* card tools */}

                                        {/* /.card-tools */}
                                    </div>

                                    {/* /.card-body*/}
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
                                                    <th scope="col">AmbasadorID</th>
                                                    <th scope="col">Ambassador Name</th>
                                                    <th scope="col">Region</th>

                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="row">1</th>
                                                    <td>#EODD61753832753b0</td>
                                                    <td>Admin</td>
                                                    <td>2</td>

                                                </tr>
                                                <tr>
                                                    <th scope="row">2</th>
                                                    <td>#EODD6175302cad557</td>
                                                    <td>Admin</td>
                                                    <td>2</td>

                                                </tr>
                                                <tr>
                                                    <th scope="row">3</th>
                                                    <td >#EODD6175302cad557</td>
                                                    <td>Admin</td>
                                                    <td>1</td>

                                                </tr>

                                            </tbody>

                                        </table>

                                        {/* /.row */}
                                    </div>
                                </div>
                                {/* /.card */}
                                {/* solid sales graph */}

                                {/* /.card */}
                                {/* Calendar */}

                                {/* /.card */}
                            </section>
                        </div>


                        <div className="card bg-gradient-primary">

                            {/* Left col */}
                            <section >
                                {/* Custom tabs (Charts with tabs)*/}
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col" colSpan="6">Latest Orders</th>
                                        </tr>
                                    </thead>
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">OrderID</th>
                                            <th scope="col">Customer Name</th>
                                            <th scope="col">Total Qty.</th>
                                            <th scope="col">Total Amt.</th>
                                            <th scope="col">Order Date</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>#EODD61753832753b0</td>
                                            <td>Admin</td>
                                            <td>2</td>
                                            <td>₹19719.44792</td>
                                            <td>24/10/2021</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>#EODD6175302cad557</td>
                                            <td>Admin</td>
                                            <td>2</td>
                                            <td>₹19719.44792</td>
                                            <td>24/10/2021</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td >#EODD6175302cad557</td>
                                            <td>Admin</td>
                                            <td>1</td>
                                            <td>₹19719.44792</td>
                                            <td>24/10/2021</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </section>
                            {/* /.Left col */}
                            {/* right col (We are only adding the ID to make the widgets sortable)*/}

                            {/* right col */}
                        </div>

                        {/* /.row (main row) */}
                    </div>{/* /.container-fluid */}
                </section>
                {/* /.content */}
            </div>

        </div>
    )
}

export default Home
