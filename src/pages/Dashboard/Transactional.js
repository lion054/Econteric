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
    CardText,CardHeader, CardTitle, CardSubtitle, Table, DropdownItem, DropdownMenu, UncontrolledDropdown, Collapse } from 'reactstrap';
import { VectorMap } from "react-jvectormap";
import "../Maps/jquery-jvectormap.scss";
import classnames from "classnames"
import DashedLine from "../AllCharts/apex/dashedLine"
import PieChart from "../AllCharts/apex/PieChart"
const Transaction = (props) => {
    
    const map = React.createRef(null);
    return (
        <React.Fragment>
             <div className="page-content">
                <Container fluid>   
                    <Row>
                        <Col md="4">
                                <Row>
                                    <Col>
                                        <Card>
                                            <CardBody>
                                            <div className="pb-3 pt-3">
                                                <span className='btn btn-sm btn-light text-uppercase'>Transaction volume</span>
                                            </div>
                                            <ul className="list-unstyled  pb-3">
                                                <li className="d-flex justify-content-between mb-2" style={{fontWeight:"600"}}>
                                                <span>Transactional volume (mil) </span> <span>6,555,321</span></li>
                                                <li className="d-flex justify-content-between mb-2" style={{fontWeight:"600"}}>
                                                <span>Last 24H growth</span>
                                                <span>330.58%</span></li>
                                            </ul>

                                            <div className="pb-3 pt-3">
                                                <span className='btn btn-sm btn-light text-uppercase'>TRANSACTION QUANTITY</span>
                                            </div>
                                            <ul className="list-unstyled  pb-3 ">
                                                <li className="d-flex justify-content-between mb-2" style={{fontWeight:"600"}}>
                                                <span>Transactional volume (mil) </span> <span>6,432,352</span></li>
                                                <li className="d-flex justify-content-between mb-2" style={{fontWeight:"600"}}>
                                                <span>Last 24H growth</span>
                                                <span>27.45%</span></li>
                                            </ul>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Card>
                                            <CardBody>
                                                 
                                            </CardBody>
                                        </Card>
                                    </Col>
                                </Row>
                        </Col>
                        <Col md="8">
                            <Row>
                                <Col md="6">
                                    <Card>
                                        <CardBody>
                                            <div>
                                                <PieChart/>
                                            </div>
                                        </CardBody>
                                    </Card>
                                </Col>
                                <Col md="6">
                                    <Card>
                                        <CardBody>
                                            <div>
                                                <PieChart/>
                                            </div>
                                        </CardBody>
                                    </Card>
                                </Col>
                            </Row>
                            <Row>
                                <Col md="6">
                                    <Card>
                                        <CardBody>
                                            <div className="pb-3 pt-3 d-flex justify-content-between">
                                                <span className='btn btn-sm btn-light text-uppercase'>TOP protocol pairing</span>
                                                <span>24H transaction volume</span>
                                            </div>
                                            <ul className="list-unstyled  pb-3 ">
                                                <li className="mb-2" style={{fontWeight:"600"}}>
                                                <span>DAI/USDC </span> <span>$81,486</span></li>
                                                <li className="d-flex justify-content-between mb-2" style={{fontWeight:"600"}}>
                                                <span>DAI/USD</span>
                                                <span>$10,853,303</span></li>
                                                <li className="d-flex justify-content-between mb-2" style={{fontWeight:"600"}}>
                                                <span>DAI/WETH</span>
                                                <span>$28,817,130</span></li>
                                                <li className="d-flex justify-content-between mb-2" style={{fontWeight:"600"}}>
                                                <span>USTD/DAI</span>
                                                <span>$21,142,473</span></li>
                                                <li className="d-flex justify-content-between mb-2" style={{fontWeight:"600"}}>
                                                <span>MKR/DAI</span>
                                                <span>$36,893,205</span></li>
                                                <li className="d-flex justify-content-between mb-2" style={{fontWeight:"600"}}>
                                                <span>UNI/DAI</span>
                                                <span> $12,305,591</span></li>
                                            </ul>
                                        </CardBody>
                                    </Card>
                                </Col>
                                <Col md="6">
                                    <Card>
                                        <CardBody></CardBody>
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

export default Transaction;