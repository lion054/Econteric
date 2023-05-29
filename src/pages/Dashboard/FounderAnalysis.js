import React, { useState, useEffect } from 'react';
import api from '../../apis/tweetApis';
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


//const baseURL = "https://jsonplaceholder.typicode.com/posts/1";
const FounderAnalysis = () => {

    const [tweets, setTweets] = useState([]);

    useEffect(() => {
        fetchTweets();
    }, []);

    const fetchTweets = async () => {
        api.get('/tweets/dai').then
            ((res) => {
                setTweets(res.data.statuses);

                console.log(res.data.statuses)
            }).catch((err) => {
                console.log(err)
            })

    }

    if (!tweets.length) {
        return null;
    }

    return (
        <React.Fragment>
            <div className="page-content">
                < Container fluid>
                    <Row>
                        < Col>
                            <Row>
                                <Col>

                                    <Card style={{ height: "350px", overflowY: 'scroll' }}>



                                        <CardBody>
                                            <div>
                                                <span className='btn btn-light text-uppercase'>Total Retweets/Favourites </span>
                                            </div>

                                            {tweets.map(tweet => (

                                                <div key={tweet.id}>
                                                    <span>

                                                    </span>
                                                    {tweet.retweet_count}
                                                </div>

                                            ))}

                                        </CardBody>

                                    </Card>
                                    <Card style={{ height: "350px" }}>
                                        <CardBody>
                                            <div>
                                                <span className='btn btn-light text-uppercase'>Word Cloud</span>
                                            </div>

                                        </CardBody>
                                    </Card>
                                </Col>
                                <Col lg={8}>
                                    <Card style={{ height: "350px", overflowY: 'scroll' }}>
                                        <CardBody>
                                            <div>
                                                <span className='btn btn-light text-uppercase'>Tweets Frequency</span>
                                            </div>

                                            {tweets.map(tweet => (

                                                <div key={tweet.id}>
                                                    <span>
                                                        <img src={tweet.user?.profile_image_url}></img>
                                                        <strong> {tweet.user?.name}</strong>
                                                    </span>
                                                    <div>
                                                        {tweet.text}</div>
                                                </div>

                                            ))}
                                        </CardBody>
                                    </Card>
                                    <Card style={{ height: "350px" }}>
                                        <CardBody>
                                            <div>
                                                <span className='btn btn-light text-uppercase'>Topic Analysis</span>
                                            </div>
                                            <div class="table-responsive">
                                                <table class="table table-bordered-0">
                                                    <thead>
                                                        <tr>
                                                            <td><div className='d-flex justify-content-between'><span >$1.00</span><span className='text-success'>+0.37%</span></div></td>
                                                            <td><div className='d-flex justify-content-between'><span >$1.09</span><span className='text-success'>+0.42%</span></div></td>
                                                            <td><div className='d-flex justify-content-between'><span >$1.01</span><span className='text-danger'>-0.51%</span></div></td>
                                                            <td><div className='d-flex justify-content-between'><span >$1.09</span><span className='text-success'>+0.42%</span></div></td>
                                                            <td><div className='d-flex justify-content-between'><span >$1.01</span><span className='text-danger'>-0.51%%</span></div></td>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>Stable coin</td>
                                                            <td>Kinder</td>
                                                            <td>Exchanges</td>
                                                            <td>Kinder</td>
                                                            <td>Exchanges</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Virtue</td>
                                                            <td>Polygon</td>
                                                            <td>Returns</td>
                                                            <td>Yearn</td>
                                                            <td>Polygons</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Bitfinex</td>
                                                            <td>Hodl</td>
                                                            <td>Fantom</td>
                                                            <td>Alchemix</td>
                                                            <td>Hodl</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Mining</td>
                                                            <td>Payscale</td>
                                                            <td>Payscale</td>
                                                            <td>Payscale</td>
                                                            <td>Payscale</td>
                                                        </tr>

                                                    </tbody>
                                                </table>
                                            </div>


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

export default FounderAnalysis;
