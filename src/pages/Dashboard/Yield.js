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
const Yield = (props) => {
    
    const map = React.createRef(null);
    return (
        <React.Fragment>
             <div className="page-content">
             <Container fluid>   
                   <Row>
                       <Col md="8">
                           <Row>
                               <Col>
                                    <Card style={{height:"300px"}}>
                                        <CardBody>
                                            
                                        </CardBody>
                                    </Card>
                               </Col>
                           </Row>
                           <Row>
                               <Col >
                                    <Card style={{height:"300px"}}>
                                        <CardBody>
                                            
                                        <div className="table-responsive col-md-4">
                                    <Table className="table table-sm table-borderless mb-0 rounded-0 ">
                                            <tbody>
                                            

                                                <tr>
                                                <th scope="row">UST 3mo</th>
                                                <td> 0,04%</td>
                                                <td>+0%</td>
                                                </tr>
                                                <tr>
                                                <th scope="row">UST 2yr</th>
                                                <td>0,23%</td>
                                                <td>+0.02%</td>
                                                </tr>
                                                <tr>
                                                <th scope="row">UST 10yr</th>
                                                <td>1,34%</td>
                                                <td>+0.03%</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Fed Funds (EFFR)</th>
                                                    <td>0,08%</td>
                                                    <td>+0%</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Real rate (10yr)</th>
                                                    <td>-0,09%</td>
                                                    <td>+0%</td>
                                                </tr>
                                            </tbody>
                                            </Table>
                                                </div>
                                        </CardBody>
                                    </Card>
                               </Col>
                           </Row>
                       </Col>

                       <Col md="4">
                            <Card style={{height:"600px"}}>
                                <CardBody>
                                <div className="pb-3 pt-2">
                                    <span className='btn btn-sm btn-light text-uppercase'>impermanent loss</span>
                                </div>

                                <div>
                                    <ul className="list-unstyled  p-2">
                                        <li className="d-flex justify-content-between m-2" >
                                            <span>Pool ROI</span> <span  style={{fontWeight:"600"}}>-0.55%</span></li>
                                        <li className="d-flex justify-content-between m-2">
                                            <span>HODL ROI</span>
                                        <span style={{fontWeight:"600"}}>-3.49%</span></li>
                                        <li className="d-flex justify-content-between m-2">
                                            <span>Impermanent Gain/Loss</span>
                                        <span style={{fontWeight:"600"}}>-11,23%</span></li>
                                        <li className="d-flex justify-content-between m-2">
                                            <span>Pool Net Gain</span>
                                        <span  style={{fontWeight:"600"}}>-0.005489 USD</span></li>
                                    </ul> 
                                </div>
                             







                                </CardBody>
                            </Card>
                       </Col>
                   </Row>
                </Container>
             </div>
        </React.Fragment>
    );
};

export default Yield;