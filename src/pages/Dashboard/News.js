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

const options = {
    chart: {
        height: 50,
        type: "line",
        toolbar: { show: false },
    },
    colors: ["#5156be"],
    stroke: {
        curve: 'smooth',
        width: 2,
    },
    xaxis: {
        labels: {
            show: false
        },
        axisTicks: {
            show: false
        },
        axisBorder: {
            show: false
        }
    },
    yaxis: {
        labels: {
            show: false
        }
    },
    tooltip: {
        fixed: {
            enabled: false
        },
        x: {
            show: false
        },
        y: {
            title: {
                formatter: function (seriesName) {
                    return ''
                }
            }
        },
        marker: {
            show: false
        }
    }
};

const News = () => {
    return (
        <React.Fragment>
            <div className="page-content">
                <MetaTags>
                    <title>Econteric</title>
                </MetaTags>
                <Container fluid>
                    {/* Render Breadcrumbs */}
                    {/* <Breadcrumbs title="Dashboard" breadcrumbItem="Dashboard" /> */}

                    <Row>
                        <Col lg={7}>
                            <Row>
                                <Col lg={6}>
                                <Card class="p-1">
                                <CardBody >
                                    <div class="card-title">
                                    <h6 className=" text-uppercase pt-1 pb-1 btn btn-sm bg-light">Headline News</h6>
                                    </div>
                                    <ul class="list-unstyled">
                                        <li class="d-flex flex-column pt-2">
                                        <small className="text-muted">Sep 12</small>
                                            <a href="#" >
UNI, SUSMakerDAO exec wants to circle back to Ethereum to address climate changeHI, MKR, Defi Tokens See 24 Hour Double-Digit Gain...</a>
                                        </li>
                                        <li class="d-flex flex-column pt-2">
                                        <small className="text-muted">Sep 11</small>
                                            <a href="#" >
MakerDAO founder's plans to address climate change and pivot back to ETH
</a>
                                        </li>
                                        <li class="d-flex flex-column pt-2">
                                        <small className="text-muted">Sep 08</small>
                                            <a href="#" >
What to expect from Cardano’s ‘djed’ step towards decentralization
</a>
                                        </li>
                                    </ul>
                                    
                                    <p className="card-text"></p>
                                    <p className="card-text">
                                        
                                    </p>
                                </CardBody>
                            </Card>

                                </Col>
                                <Col lg={6}>
                                <Card>
                                <CardBody>
                                <div class="card-title">
                                    <h6 className=" text-uppercase pt-1 pb-1 btn btn-sm bg-light">Latest Announcements</h6>
                                    </div>
                                    <p className="card-text">DAI Tokens Transfer Through Saber now
Allbridge extended its asset portfolio by adding the stablecoin, DAI, to the bridge In collaboration with the leading decentralized exchange (DEX) in the Solana ecosystem on Oct. 7.


</p>
                                    <p className="card-text">
                                        
The bridge enables the cross-chain transactions from Ethereum to Solana by wrapping it into an aeDAI token. This token can also be used to provide liquidity on the DEX's aeDAI - USD Coin (USDC) stablecoin pool.
                                    </p>
                                </CardBody>
                            </Card>

                                </Col>
                            </Row>
                            <Row>
                                <Col lg={6}>
                                <Card>
                                <CardBody>
                                <div class="card-title">
                                    <h6 className=" text-uppercase pt-1 pb-1 btn btn-sm bg-light">Google Trend</h6>
                                    </div>
                        
                 
                                        <div dir="ltr">
                                            <LineColumnArea />
                                        </div>
                
                                </CardBody>
                            </Card>

                                </Col>
                                <Col lg={6}>
                                <Card>
                                <CardBody>
                                <div class="card-title">
                                    <h6 className=" text-uppercase pt-1 pb-1 btn btn-sm bg-light">Headline News</h6>
                                    </div>
                                    <p className="card-text">This is a wider card with supporting text below as a
                                        natural lead-in to additional content. This content is a little bit
                                        longer.</p>
                                    <p className="card-text">
                                        <small className="text-muted">Last updated 3 mins ago</small>
                                    </p>
                                </CardBody>
                            </Card>

                                </Col>
                            </Row>

                        </Col>
                        <Col lg={5}>
                            <Row>
                                <Col lg={12}>
                                <Card>
                                <CardBody>
                                <div class="card-title">
                                    <h6 className=" text-uppercase pt-1 pb-1 btn btn-sm bg-light">IP PASSED</h6>
                                </div>
                                <ul class="list-unstyled">
                                    <li>
                                        <div class="row">
                                            <div class="col-md-6 p-1">
                                                <span class="col-6">
                                                Vault Onboarding, 6s Updates, and Reducing Vault Liquidation Ratios </span>
                                            </div>
                                            <div class="col-md-2 p-1">
                                                <span class="col-2">
                                                    <span class="d-flex justify-content-around">  
                                                        <span><i className="fas fa-comment-alt"></i> </span>
                                                        <span class=""><i className="far fa-thumbs-up"></i> </span>
                                                    </span>
                                                </span>
                                            </div>
                                            <div class="col-md-4 p-1">
                                            <a href="#" class="text-success">Product and Infrastructure</a>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="row">
                                            <div class="col-md-6 p-1">
                                                <span class="">
                                                Marketing spend </span>
                                            </div>
                                            <div class="col-md-2 p-1">
                                                <span class="col-2">
                                                    <span class="d-flex justify-content-around">  
                                                        <span><i className="fas fa-comment-alt"></i> </span>
                                                        <span class=""><i className="far fa-thumbs-up"></i> </span>
                                                    </span>
                                                </span>
                                            </div>
                                            <div class="col-md-4 p-1">
                                                <a href="#" class="text-success">Budget request</a>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="row">
                                            <div class="col-md-6 p-1">
                                                <span class="col-6">
                                                New business lines</span>
                                            </div>
                                            <div class="col-md-2 p-1">
                                                <span class="col-2">
                                                    <span class="d-flex justify-content-around">  
                                                        <span><i className="fas fa-comment-alt"></i> </span>
                                                        <span class=""><i className="far fa-thumbs-up"></i> </span>
                                                    </span>
                                                </span>
                                            </div>
                                            <div class="col-md-4 p-1">
                                            <a href="#" class="text-success">Business model changes</a>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="row">
                                            <div class="col-md-6 p-1">
                                                <span class="col-6">
                                                Defining Salary / Comp standards </span>
                                            </div>
                                            <div class="col-md-2 p-1">
                                                <span class="col-2">
                                                    <span class="d-flex justify-content-around">  
                                                        <span><i className="fas fa-comment-alt"></i> </span>
                                                        <span class=""><i className="far fa-thumbs-up"></i> </span>
                                                    </span>
                                                </span>
                                            </div>
                                            <div class="col-md-4 p-1">
                                            <a href="#" class="text-success">People</a>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="row">
                                            <div class="col-md-6 p-1">
                                                <span class="col-6">
                                                Increasing treasury amount</span>
                                            </div>
                                            <div class="col-md-2 p-1">
                                                <span class="col-2">
                                                    <span class="d-flex justify-content-around">  
                                                        <span><i className="fas fa-comment-alt"></i> </span>
                                                        <span class=""><i className="far fa-thumbs-up"></i> </span>
                                                    </span>
                                                </span>
                                            </div>
                                            <div class="col-md-4 p-1">
                                            <a href="#" class="text-success">Treasury Management</a>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="row">
                                            <div class="col-md-6 p-1">
                                                <span class="col-6">
                                                Fixing misplaced airdropped rewards </span>
                                            </div>
                                            <div class="col-md-2 p-1">
                                                <span class="col-2">
                                                    <span class="d-flex justify-content-around">  
                                                        <span><i className="fas fa-comment-alt"></i> </span>
                                                        <span class=""><i className="far fa-thumbs-up"></i> </span>
                                                    </span>
                                                </span>
                                            </div>
                                            <div class="col-md-4 p-1">
                                            <a href="#" class="text-success">Fixing errors</a>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="row">
                                            <div class="col-md-6 p-1">
                                                <span class="col-6">
                                                Extending existing token rewards</span>
                                            </div>
                                            <div class="col-md-2 p-1">
                                                <span class="col-2">
                                                    <span class="d-flex justify-content-around">  
                                                        <span><i className="fas fa-comment-alt"></i> </span>
                                                        <span class=""><i className="far fa-thumbs-up"></i> </span>
                                                    </span>
                                                </span>
                                            </div>
                                            <div class="col-md-4 p-1">
                                            <a href="#" class="text-success">Tokenomics</a>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="row">
                                            <div class="col-md-6 p-1">
                                                <span class="col-6">
                                                Changing proposal mechanisms </span>
                                            </div>
                                            <div class="col-md-2 p-1">
                                                <span class="col-2">
                                                    <span class="d-flex justify-content-around">  
                                                        <span><i className="fas fa-comment-alt"></i> </span>
                                                        <span class=""><i className="far fa-thumbs-up"></i> </span>
                                                    </span>
                                                </span>
                                            </div>
                                            <div class="col-md-4 p-1">
                                            <a href="#" class="text-success">Governing The DAO</a>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="row">
                                            <div class="col-md-6 p-1">
                                                <span class="col-6">
                                                Establish marketing working group</span>
                                            </div>
                                            <div class="col-md-2 p-1">
                                                <span class="col-2">
                                                    <span class="d-flex justify-content-around">  
                                                        <span><i className="fas fa-comment-alt"></i> </span>
                                                        <span class=""><i className="far fa-thumbs-up"></i> </span>
                                                    </span>
                                                </span>
                                            </div>
                                            <div class="col-md-4 p-1">
                                            <a href="#" class="text-success">Defining The DAO</a>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                    <p className="card-text">

                                    </p>
                                </CardBody>
                            </Card>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={12}>
                                <Card height={200}>
                                <CardBody>
                                    <h4 className="card-title">Card title</h4>
                                    <p className="card-text">This is a wider card with supporting text below as a
                                        natural lead-in to additional content. This content is a little bit
                                        longer.</p>
                                </CardBody>
                            </Card>
                                </Col>
                            </Row>
                        </Col>

                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
}

export default News;