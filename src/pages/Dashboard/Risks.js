import React from 'react';
import MetaTags from 'react-meta-tags';

import ReactApexChart from "react-apexcharts"

//import Breadcrumbs
import Breadcrumbs from "../../components/Common/Breadcrumb";

import {
    Card,
    CardBody,
    Col,
    Container,
    Row
} from "reactstrap";

import CountUp from "react-countup";

/** import Mini Widget data */
import Bootstrap from "../../assets/scss/bootstrap.scss";
import { WidgetsData } from "../../common/data/dashboard";
import WalletBalance from './WalletBalance';
import InvestedOverview from './InvestedOverview';
import MarketOverview from './MarketOverview';
import Locations from './Locations';
import Trading from './Trading';
import Transactions from './Transactions';
import RecentActivity from './RecentActivity';
import NewSlider from './NewSlider';

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

const Risks = () => {
    return (
        <React.Fragment>
           <div className="page-content">
                <div class="row">
                    
                    <div class="col-md-6">
                        <Card>
                            <CardBody>
                            <div class="card-title">
                                <div class="btn btn-sm shadow-sm bg-light pt-1 pb-1 pl-2 pr-2"><h6 class=" text-uppercase">SUMMARY ON DAILY RETURNS</h6></div>
                            </div>
                           <div  class="table-responsive">
                                <table class="table table-bordered-0">
                                    <thead>
                                        <tr>
                                            <td>Income Stream</td>
                                            <td>All time</td>
                                            <td>1 years</td>
                                            <td>180 days</td>
                                            <td>90 days</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Mean</td>
                                            <td>1281.472</td>
                                            <td>N/A</td>
                                            <td>N/A</td>
                                            <td>N/A</td>
                                        </tr>
                                        <tr>
                                            <td>Standard Error</td>
                                            <td>45.9263169</td>
                                            <td>N/A</td>
                                            <td>N/A</td>
                                            <td>N/A</td>
                                        </tr>
                                        <tr>
                                            <td>Median</td>
                                            <td>556.222985</td>
                                            <td>N/A</td>
                                            <td>N/A</td>
                                            <td>N/A</td>
                                        </tr>
                                        <tr>
                                            <td>Mode</td>
                                            <td>452.804967</td>
                                            <td>N/A</td>
                                            <td>N/A</td>
                                            <td>N/A</td>
                                        </tr>
                                        <tr>
                                            <td>Standard Deviation</td>
                                            <td>1248.48646</td>
                                            <td>N/A</td>
                                            <td>N/A</td>
                                            <td>N/A</td>
                                        </tr>
                                        <tr>
                                            <td>Sample Variance</td>
                                            <td>1558718.45</td>
                                            <td>N/A</td>
                                            <td>N/A</td>
                                            <td>N/A</td>
                                        </tr>
                                        <tr>
                                            <td>Mean</td>
                                            <td>1281.472</td>
                                            <td>N/A</td>
                                            <td>N/A</td>
                                            <td>N/A</td>
                                        </tr>
                                        <tr>
                                            <td>Kurtosis</td>
                                            <td>0.83858669</td>
                                            <td>N/A</td>
                                            <td>N/A</td>
                                            <td>N/A</td>
                                        </tr>
                                        <tr>
                                            <td>Skewness</td>
                                            <td>1.36865864</td>
                                            <td>N/A</td>
                                            <td>N/A</td>
                                            <td>N/A</td>
                                        </tr>
                                        <tr>
                                            <td>Range</td>
                                            <td>5863.51544</td>
                                            <td>N/A</td>
                                            <td>N/A</td>
                                            <td>N/A</td>
                                        </tr>
                                    </tbody>
                                </table>
                           </div>
                           </CardBody>

                        </Card>
                            
                     </div>
                     <div class="col-md-6">
                                <Card>
                                    <CardBody>
                                    <div class="card-title">
                                        <h6 className=" text-uppercase pt-1 pb-1 btn btn-sm bg-light">Gini Coeffecient</h6>
                                        </div>
                                    <div dir="ltr">
                                            <LineColumnArea />
                                        </div>
                                    </CardBody>
                                </Card>
                            </div>    ZX

                </div>
            </div>
            
        </React.Fragment>
    );
}

export default Risks;