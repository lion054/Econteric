/* eslint-disable no-unused-vars */
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
const MarketDesign = (props) => {
    
    const map = React.createRef(null);
    return (
        <React.Fragment>
             <div className="page-content">
                <Container fluid>   
                   <Row>
                       <Col md="8">
                           <Row>
                               <Col>
                                    <Card>
                                        <CardBody>
                                            <Row>
                                                <Col md="3">
                                                
                                                <div className="pb-3 pt-2">
                                                    <span className='btn btn-sm btn-light text-uppercase'>market concentration</span>
                                                </div>
                                                <ul className="list-unstyled  p-2   ">
                                                    <li className="d-flex justify-content-between mb-2" >
                                                        <span>Concentration</span> <span  style={{fontWeight:"600"}}>0.12% </span></li>
                                                    <li className="d-flex justify-content-between mb-2">
                                                        <span>Proportion of market cap</span>
                                                    <span style={{fontWeight:"600"}}>0.19%</span></li>
                                                    <li className="d-flex justify-content-between mb-2">
                                                        <span>Gini coefficient</span>
                                                    <span style={{fontWeight:"600"}}>0.98</span></li>
                                                    <li className="d-flex justify-content-between mb-2">
                                                        <span>Large Transactions</span>
                                                    <span  style={{fontWeight:"600"}}>-2.08%</span></li>
                                                </ul>
                                                </Col>
                                                <Col md="9">
                                                
                                                </Col>
                                            </Row>
                                        </CardBody>
                                    </Card>
                               </Col>
                           </Row>
                           <Row>
                               <Col md="8">
                                    <Card style={{height:"300px"}}>
                                        <CardBody>
                                                
                                        <div className="pb-3 pt-2">
                                            <span className='btn btn-sm btn-light text-uppercase'>Growth metrics</span>
                                        </div>

                                            <div className="table-responsive">
                                    <Table className="table table-sm table-borderless mb-0 rounded-0">
                                            <thead className='border-bottom'>
                                                <tr>
                                                <th>Growth metrics</th>
                                                <th>Daily</th>
                                                <th>MOM</th>
                                                <th>QOQ</th>
                                                <th>Annual</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                            

                                                <tr>
                                                <th scope="row">Number of wallets</th>
                                                <td>0.09210</td>
                                                <td>0.09210</td>
                                                <td>0.09210</td>
                                                <td>0.09210</td>
                                                </tr>
                                                <tr>
                                                <th scope="row">Number of transactions</th>
                                                <td>0.27450</td>
                                                <td>0.27450</td>
                                                <td>0.27450</td>
                                                <td>0.27450</td>
                                                </tr>
                                                <tr>
                                                <th scope="row">Aggregated size of transactions</th>
                                                <td>4.30580</td>
                                                <td>4.30580</td>
                                                <td>4.30580</td>
                                                <td>4.30580</td>
                                                </tr>
                                                <tr>
                                                <th scope="row">Number of traders</th>
                                                <td>0.09210</td>
                                                <td>0.09210</td>
                                                <td>0.09210</td>
                                                <td>0.09210</td>
                                                </tr>
                                            </tbody>
                                            </Table>
                                                </div>
                                        </CardBody>
                                    </Card>
                               </Col>
                               <Col md="4">
                                    <Card style={{height:"300px"}}>
                                        <CardBody>
                                            <div className="pb-3 pt-2">
                                                <span className='btn btn-sm btn-light text-uppercase'>market demand metrics</span>
                                            </div>
                                            <ul className="list-unstyled  p-2">
                                                <li className="d-flex justify-content-between m-2" >
                                                    <span>MOM</span> <span  style={{fontWeight:"600"}}>0.09210526316</span></li>
                                                <li className="d-flex justify-content-between m-2">
                                                    <span>QOQ</span>
                                                <span style={{fontWeight:"600"}}>0.2745098039</span></li>
                                                <li className="d-flex justify-content-between m-2">
                                                    <span>Daily</span>
                                                <span style={{fontWeight:"600"}}>4.305808833</span></li>
                                                <li className="d-flex justify-content-between m-2">
                                                    <span>Annual</span>
                                                <span  style={{fontWeight:"600"}}>0.09210526316</span></li>
                                            </ul> 
                                        </CardBody>
                                    </Card>
                               </Col>
                           </Row>
                       </Col>

                       <Col md="4">
                            <Card style={{height:"560px"}}>
                                <CardBody>
                                   <div className="pb-3 pt-2">
                                        <span className='btn btn-sm btn-light text-uppercase'> NETWORK GRAPH</span>
                                    </div>
                                    <div style={{height:"300px"}}></div>
                                    <ul className="list-unstyled  p-2">
                                        <li className="d-flex justify-content-between m-2" >
                                            <span>Unique Addresses Used</span> <span  style={{fontWeight:"600"}}>692,529</span></li>
                                        <li className="d-flex justify-content-between m-2">
                                            <span>Confirmed Transactions Per Day</span>
                                        <span style={{fontWeight:"600"}}>244,931</span></li>
                                        <li className="d-flex justify-content-between m-2">
                                            <span>Confirmed Payments Per Day</span>
                                        <span style={{fontWeight:"600"}}>622,739</span></li>
                                        <li className="d-flex justify-content-between m-2">
                                            <span>Output Value Per Day</span>
                                        <span  style={{fontWeight:"600"}}>4,509,432,435</span></li>
                                        <li className="d-flex justify-content-between m-2">
                                            <span>Estimated Transaction Value</span>
                                        <span  style={{fontWeight:"600"}}>108,204,424</span></li>
                                    </ul> 
                                </CardBody>
                            </Card>
                       </Col>
                   </Row>
                </Container>
             </div>
        </React.Fragment>
    );
};

export default MarketDesign;
