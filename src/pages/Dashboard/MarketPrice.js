
import React from 'react';
import { Card, CardBody, CardHeader, CardTitle, Col, Container, DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from 'reactstrap';
import { VectorMap } from "react-jvectormap";
import "../Maps/jquery-jvectormap.scss";
// import apexChart
import LineApexChart from "../AllCharts/apex/chartapex"
import DashedLine from "../AllCharts/apex/dashedLine"
import SplineArea from "../AllCharts/apex/SplineArea"
import Apaexlinecolumn from "../AllCharts/apex/apaexlinecolumn"
import ColumnWithDataLabels from "../AllCharts/apex/ColumnWithDataLabels"
import BarChart from "../AllCharts/apex/barchart"
import LineColumnArea from "../AllCharts/apex/LineColumnArea"
import RadialChart from "../AllCharts/apex/RadialChart"
import PieChart from "../AllCharts/apex/PieChart"
import DonutChart from "../AllCharts/apex/dountchart"

const MarketPrice = (props) => {
    const map = React.createRef(null);
    return (
        <React.Fragment>
             <div className="page-content">
                <div class="row">
                    <div class="col-md-4 p-2">
                        <Card>
                            <CardBody>
                            <div class="card-title">
                                <div class="btn btn-sm shadow-sm bg-light pt-1 pb-1 pl-2 pr-2"><h6 class=" text-uppercase">historical vs market volatility</h6></div>
                            </div>
                            <ul class="list-unstyled ">
                                <li class="d-flex justify-content-between mb-2"> <span class="">Market volatility</span> <span class="">1339.953181</span> </li>
                                <li class="d-flex justify-content-between  mb-2"><span class="">30D volatility</span> <span class="">487.7030001</span></li>
                            </ul>
                            <div dir="ltr">
                                <SplineArea />
                            </div>
                            </CardBody>
                        </Card>
                    </div>
                    <div class="col-md-4 p-2">
                        <Card>
                            <CardBody>
                            <div class="card-title">
                                <div class="btn btn-sm shadow-sm bg-light pt-1 pb-1 pl-2 pr-2"><h6 class=" text-uppercase">TRADING VOLUME</h6></div>
                            </div>
                            <ul class="list-unstyled ">
                                <li class="d-flex justify-content-between mb-2"> <span class="">Market Cap</span> <span class="">$6,479,806,374</span> </li>
                                <li class="d-flex justify-content-between  mb-2"><span class="">Trading volume</span> <span class="">507,893,635</span></li>
                            </ul>
                            <ul class="list-unstyled ">
                                <li class="d-flex justify-content-between mb-2"> <span class="">Market Cap</span> <span class="">$6,479,806,374</span> </li>
                                <li class="d-flex justify-content-between  mb-2"><span class="">Trading volume</span> <span class="">507,893,635</span></li>
                            </ul>
                            <div dir="ltr">
                                <SplineArea />
                            </div>
                            </CardBody>
                        </Card>
                    </div>
                    <div class="col-md-4 p-2">
                        <div class="card">
                            <div class="card-body">
                                    <div class="card-title">
                                        <div class="btn btn-sm shadow-sm bg-light pt-1 pb-1 pl-2 pr-2"><h6 class=" text-uppercase">CAGR</h6></div>
                                    </div>
                                    <form >
                                        <div class="row">
                                            <div class="col-md-6 p-1">
                                                <div class="form-group">
                                                    <label>Amount</label>
                                                    <select className="form-select">
                                                        <option>Select</option>
                                                        <option>Large select</option>
                                                        <option>Small select</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="col-md-6 p-1">
                                                <div class="form-group">
                                                <label>Type</label>
                                                    <select className="form-select">
                                                        <option>Exchange Stacking</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6 p-1">
                                                <div class="form-group">
                                                    <label>Term</label>
                                                    <select className="form-select">
                                                        <option>1 year</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="col-md-6 p-1">
                                                <div class="form-group">
                                                <label>Price</label>
                                                    <select className="form-select">
                                                        <option>price</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <hr></hr>
                                    </form>
                                    <div class=" container">
                                        <div class="row">
                                            <div class="col-md-4">
                                                <div>
                                                    <span class="">Total reward rate</span>
                                                    <h3 class="">5.26%</h3>
                                                </div>
                                        
                                            </div>
                                            <div class="col-md-4">
                                            <div>
                                                    <span class="">Est. monthly earning</span>
                                                    <h3 class="">$44.43</h3>
                                                </div>
                                            </div>
                                            <div class="col-md-4">
                                            <div>
                                                    <span class="">Est. yearly earning</span>
                                                    <h3 class="">$523.03</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4">

                        <Card>
                            <CardBody>
                            <div class="card-title">
                                <div class="btn btn-sm shadow-sm bg-light pt-1 pb-1 pl-2 pr-2"><h6 class=" text-uppercase">
                            MOVING AVERAGE PRICE</h6></div>
                            </div>
                            <div dir="ltr">
                            <DashedLine />
                            </div>
                            </CardBody>
                        </Card>
                        
                    </div>
                    <div class="col-md-3">
                    <div class="card">
                            <div class="card-body">
                            <div class="card-title">
                                        <div class="btn btn-sm bg-light shadow-sm pt-1 pb-1 pl-2 pr-2"><h6 class=" text-uppercase">VARIABLES AFFECTING PRICEs</h6></div>
                                    </div>
                            <ul class="list-unstyled ">
                                <li class="d-flex justify-content-between mb-2"> <span class="">ETH</span> <span class="">0.9414</span> </li>
                                <li class="d-flex justify-content-between  mb-2"><span class="">WETH</span> <span class="">0.9521</span></li>
                                <li class="d-flex justify-content-between  mb-2"><span class="">WBTC</span> <span class="">0.4272</span></li>
                                <li class="d-flex justify-content-between  mb-2"><span>USDC</span> <span class="">0.1189</span></li>
                                
                                <li class="d-flex justify-content-between  mb-2">
                                <span>YFI</span>
                                    <span class="">0.6953</span>
                            </li>
                                <li class="d-flex justify-content-between  mb-2">
                                <span>LINK</span>
                                <span class="">0.8383</span>
                                </li>
                                <li class="d-flex justify-content-between  mb-2">
                                <span>UNI</span>
                                <span class="">0.8162</span>
                                </li>
                            </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                    <div class="card">
                            <div class="card-body">
                            <div class="card-title">
                                <div class="btn btn-light btn-sm pr-2 pl-2 pt-1 pb-1"><h6 class="text-uppercase text-center">STAKING RETURNS</h6></div>
                            </div>
                            
                                <ul class="list-unstyled">
                                    <li class="d-flex justify-content-between mb-2"> <span class="">Nominal return</span> <span class="">N/A</span> </li>
                                    <li class="d-flex justify-content-between  mb-2"><span class="">Real return</span> <span class="">N/A</span></li>
                                    <li class="d-flex justify-content-between  mb-2"><span class="">Avg. return (YOY)</span> <span class="">N/A</span></li>
                                    <li class="d-flex justify-content-between  mb-2"><span>Participating</span> <span class="">N/A</span></li>
                                    
                                    <li class="d-flex justify-content-between  mb-2">
                                    <span>Average fee</span>
                                        <span class="">N/A</span>
                                </li>
                                    <li class="d-flex justify-content-between  mb-2">
                                    <span>Staked Value</span>
                                    <span class="">N/A</span>
                                    </li>
                                    <li class="d-flex justify-content-between  mb-2">
                                    <span>Complexity</span>
                                    <span class="">N/A</span>
                                    </li>

                                    <li class="d-flex justify-content-between  mb-2">
                                    <span>Risk</span>
                                    <span class="">N/A</span>
                                    </li>
                                    <li class="d-flex justify-content-between  mb-4">
                                    <span>Participating</span>
                                    <span class="">N/A</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-2">
                    <div class="card">
                            <div class="card-body">
                                <div class="card-title">
                                            <div class="btn btn-sm shadow-sm bg-light pt-1 pb-1 pl-2 pr-2"><h6 class=" text-uppercase">Stability Index</h6></div>
                                </div>
                                <ul class="list-unstyled">
                                <li class="pt-3 pb-2">
                                    <span>Second order Stability index</span>
                                    <h3>2.2</h3>
                                </li>
                                <li class="pb-2 pt-2">
                                    <span>Second order Stability index</span>
                                    <h3>1.00</h3>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                </div>
            </div>
        </React.Fragment>
    );
};

export default MarketPrice;