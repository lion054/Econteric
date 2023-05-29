import React,  { useState } from 'react';
import MetaTags from "react-meta-tags";
import { 
    Container,
    Row, 
    Col, 
    Card, 
    CardBody,
    Nav,
    NavItem, 
    NavLink,
    TabContent, 
    TabPane,
    CardText,CardHeader, CardTitle, CardSubtitle, Table, DropdownItem, DropdownMenu, UncontrolledDropdown } from 'reactstrap';

import { VectorMap } from "react-jvectormap";
import "../Maps/jquery-jvectormap.scss";
import classnames from "classnames"
import LineChart from "../AllCharts/chartjs/linechart"
const MarketSentiments2 = (props) => {
    const map = React.createRef(null);
    return (
        <React.Fragment>
             <div className="page-content">
             
            <Container fluid>   
                <Row>
                    <Col md="6">
                        <Row>
                            <Col> 
                                <Card style={{height:"350px"}}> 
                                    <CardBody>
                                    <div className="p-3">
                                        <span className='btn btn-light text-uppercase'>Reserve stablecoins</span>
                                    </div> 
                                    <ul className="list-unstyled  pb-3 col-md-8">
                                    <li className="d-flex justify-content-between mb-2" style={{fontWeight:"600"}}>
                                    <span>7-day average </span> <span>4.12%</span></li>
                                    <li className="d-flex justify-content-between mb-2" style={{fontWeight:"600"}}>
                                    <span>30-day average</span>
                                    <span>4.11%</span></li>
                                    <li className="d-flex justify-content-between mb-2" style={{fontWeight:"600"}}>
                                    <span>60-day average</span>
                                    <span>4.12%</span></li>
                                    <li className="d-flex justify-content-between mb-2" style={{fontWeight:"600"}}>
                                    <span>All time</span>
                                    <span>6.44%</span></li>
                                </ul>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                        <Row>
                            <Col> 
                                <Card style={{height:"350px"}}> 
                                    <CardBody>
                                    <div className="p-3">
                                        <span className='btn btn-light text-uppercase'>Spot-rate ẽchange</span>
                                    </div> 
                                <ul className="list-unstyled pb-3 col-md-8">
                                    <li className="d-flex justify-content-between mb-2" style={{fontWeight:"600"}}>
                                    <span>7-day average </span> <span>4.12%</span></li>
                                    <li className="d-flex justify-content-between mb-2" style={{fontWeight:"600"}}>
                                    <span>30-day average</span>
                                    <span>4.11%</span></li>
                                    <li className="d-flex justify-content-between mb-2" style={{fontWeight:"600"}}>
                                    <span>60-day average</span>
                                    <span>4.12%</span></li>
                                    <li className="d-flex justify-content-between mb-2" style={{fontWeight:"600"}}>
                                    <span>All time</span>
                                    <span>6.44%</span></li>
                                </ul>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                    <Col md="6">
                        <Row>
                            <Col> 
                                <Card style={{height:"350px"}}> 
                                    <CardBody>
                                    <div className="p-3">
                                        <span className='btn btn-light text-uppercase'>Algo Stablecoins</span>
                                    </div> 
                                    <div className="table-responsive">
                                    
                                        <Table className="table table-borderless mb-0 rounded-0">
                                            <thead className='border-bottom'>
                                                <tr>
                                                <th>Coin</th>
                                                <th>Price</th>
                                                <th>Exchanges</th>
                                                <th>Market Cap</th>
                                                <th>30D Circulation</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                <th scope="row">Tether</th>
                                                <td>$0.999957</td>
                                                <td>417</td>
                                                <td>$71,502,189,887</td>
                                                <td>-------------</td>
                                                </tr>
                                                <tr>
                                                <th scope="row">Binance USD</th>
                                                <td>$0.995509</td>
                                                <td>99	</td>
                                                <td>$14,137,663,264</td>
                                                <td>-------------</td>
                                                </tr>
                                                <tr>
                                                <th scope="row">Dai</th>
                                                <td>$0.997865	</td>
                                                <td>213</td>
                                                <td>$7,790,831,422	</td>
                                                <td>-------------</td>
                                                </tr>
                                                <tr>
                                                <th scope="row">Terra USD</th>
                                                <td>$1.00	</td>
                                                <td>16</td>
                                                <td>$2,818,944,363	</td>
                                                <td>-------------</td>
                                                </tr>
                                            
                                            </tbody>
                                            </Table>
                                    </div>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                        <Row>
                            <Col> 
                                <Card style={{height:"350px"}}> 
                                    <CardBody>
                                    <div className="p-3">
                                        <span className='btn btn-light text-uppercase'>leveraged EXchange</span>
                                    </div> 
                                    <ul className="list-unstyled  pb-3 col-md-8">
                                        <li className="d-flex justify-content-between mb-2" style={{fontWeight:"600"}}>
                                        <span>7-day average </span> <span>4.12%</span></li>
                                        <li className="d-flex justify-content-between mb-2" style={{fontWeight:"600"}}>
                                        <span>30-day average</span>
                                        <span>4.11%</span></li>
                                        <li className="d-flex justify-content-between mb-2" style={{fontWeight:"600"}}>
                                        <span>60-day average</span>
                                        <span>4.12%</span></li>
                                        <li className="d-flex justify-content-between mb-2" style={{fontWeight:"600"}}>
                                        <span>All time</span>
                                        <span>6.44%</span></li>
                                    </ul>
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
};

export default MarketSentiments2;