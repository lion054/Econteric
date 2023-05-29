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

const FundFlow = () => {
    return (
        <React.Fragment>
            <div className="page-content">
                < Container fluid>
                    <Row>
                        < Col>
                            <Row>
                                <Col>
                                    <Card style={{height:"350px"}}>
                                        <CardBody>
                                            <div>
                                            <span className='btn btn-light text-uppercase'>Protocol Revenue</span>
                                            </div>


                                        </CardBody>
                                    </Card>
                                     <Card style={{height:"350px"}}>
                                        <CardBody>
                                            <div>
                                            <span className='btn btn-light text-uppercase'>Protocol Expenses</span>
                                            </div>
                                            

                                        </CardBody>
                                        </Card>
                                        <Card style={{height:"350px"}}>
                                        <CardBody>
                                            <div>
                                            <span className='btn btn-light text-uppercase'>Net Revenue</span>
                                            </div>
                                            

                                        </CardBody>
                                        </Card>
                                </Col>
                                <Col>
                                    <Card style={{height:"350px"}}>
                                            <CardBody>
                                                <div>
                                                <span className='btn btn-light text-uppercase'>Sell Pressure Indicator</span>
                                                </div>
                                                <div className="d-flex justify-content-between  mt-3">
                                                    <span>Market volatility</span> <span>1339.953181</span>
                                            </div>
                                                

                                            </CardBody>
                                    </Card>
                                    <Card style={{height:"350px"}}>
                                        <CardBody>
                                            <div>
                                            <span className='btn btn-light text-uppercase'>Growth of smart contract activities</span>
                                            </div>
                                            

                                        </CardBody>
                                    </Card>
                                </Col>
                                <Col>
                                <Col>
                                    <Card style={{height:"350px"}}>
                                            <CardBody>
                                                <div>
                                                <span className='btn btn-light text-uppercase'>Participation in gov</span>
                                                </div>
                                                <div className="d-flex justify-content-between  mt-3">
                                                    <span>Circulating supply</span> <span>$81,486</span>
                                                </div>
                                                

                                            </CardBody>
                                    </Card>
                                    <Card style={{height:"350px"}}>
                                        <CardBody>
                                            <div>
                                            <span className='btn btn-light text-uppercase'>Token Usability</span>
                                            </div>
                                            <div className="d-flex justify-content-between  mt-3">
                                                    <span>Circulating supply[USD]</span> <span>$6,479,795,900</span>
                                            </div>
                                            <div className="d-flex justify-content-between  mt-3">
                                                    <span>Token circulating supply</span> <span>$6,479,795,900</span>
                                            </div>
                                            <div className="d-flex justify-content-between  mt-3">
                                                    <span>Protocols using token</span> <span>$3,120,494,938</span>
                                            </div>

                                        </CardBody>
                                    </Card>
                                </Col>
                                </Col>
                                
                            </Row>
                        </Col>
                    </Row>
                </Container>
                

            </div>
            
        </React.Fragment>
    );
}

export default FundFlow;
