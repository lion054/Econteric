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
import PieChartMechDesign from "../AllCharts/apex/PieChartMechDesign1"
const MechanismDesign = (props) => {
    
    const map = React.createRef(null);
    return (
        <React.Fragment>
             <div className="page-content">
                <Container fluid>   
                   <Row>
                       <Col md="4">
                            <Card>
                                <CardBody>
                                <div className="pb-3 pt-2">
                                    <span className='btn btn-sm btn-light text-uppercase'>Governance</span>
                                </div>
                                <div className="pb-3 pt-2">
                                    <span style={{fontWeight:"600"}}>Latest IP Stats</span>
                                </div>
                                <Row>
                                    <Col md="8">
                                    <ul className="list-unstyled  pb-2 col-md-8">
                                        <li className="d-flex justify-content-between" >
                                            <span>GRO-001 (MIP40c3-SP23)</span> <span  className='text-success'>YES</span></li>
                                        <li className="d-flex justify-content-between ">
                                            <span>GRO-001 (MIP40c3-SP23)</span>
                                        <span className='text-danger'>NO</span></li>
                                    </ul>
                                    
                                    <div className='border-bottom'></div>
                                    <div className="pb-3 pt-2">
                                        <span style={{fontWeight:"600"}}>Latest IP Discussions</span>
                                    </div>
                                    <ul className="list-unstyled  p-2   col-md-8 ">
                                        <li className="d-flex justify-content-between" >
                                            <span>Somtext here</span> <span className='text-success'>YES</span></li>
                                        <li className="d-flex justify-content-between ">
                                            <span>Somtext here</span>
                                        <span  className='text-danger'>NO</span></li>
                                    </ul>
                                    </Col>
                                    <Col md="4">
                                        <div className='text-center' >
                                        <span className="" style={{height:"50px!important"}}>
                                            ---------------
                                        </span>
                                        </div>
                                    </Col>
                                </Row>
                               
                                
                                <div className='border-bottom'></div>
                                <div className="pb-2 pt-3">
                                    <span style={{fontWeight:"600"}}>Council Update</span>
                                </div>
                                <ul className="list-unstyled  p-2">
                                        <li className="d-flex flex-column justify-content-between mb-2  mt-2" >
                                        <small>19 hours ago </small>
                                        <span style={{fontWeight:"600", textDecoration:"underline"}}><a href='#'>Lorem ipsum</a></span></li>
                                        <li className="d-flex flex-column justify-content-between  mb-2" >
                                        <small>19 hours ago</small>
                                        <span style={{fontWeight:"600", textDecoration:"underline"}}>
                                            <a href='#'>Lorem ipsum dolor</a></span></li>
                                    </ul>
                                    
                                <div className='border-bottom'></div>
                                <div className="pb-3 pt-2">
                                    <span style={{fontWeight:"600"}}>Top Addressses</span>
                                </div>
                                <ul className="list-unstyled  p-2">
                                    <li className="d-flex justify-content-between" >
                                        <span>1. 0x0a3f6849f78076aefadf113f5bed87720274ddc0</span></li>
                                    <li className="d-flex justify-content-between ">
                                        <span>2. 0xbe8e3e3618f7474f8cb1d074a26affef007e98fb</span></li>
                                    <li className="d-flex justify-content-between ">
                                        <span>3. 0xc713e5e149d5d0715dcd1c156a020976e7e56b88</span></li>
                                </ul>
                                <span className='text-secondary'>Load more</span>
                                </CardBody>
                            </Card>
                       </Col>

                       <Col md="4">
                            <Card>
                                <CardBody>
                                <div className="pb-3 pt-2">
                                        <span className='btn btn-sm btn-light text-uppercase'>market structure</span>
                                 </div>
                                    <div className='d-flex flex-row justify-content-between  m-2'>
                                        <span className='d-flex flex-column'>
                                            <span>Price per Token</span>
                                            <span>$1.00 USD</span>
                                        </span> 
                                        <span className="" style={{height:"50px"}}>
                                            ---------------
                                        </span>
                                    </div>
                                <div className="table-responsive">
                                    <Table className="table table-sm table-borderless mb-0 rounded-0">
                                            <thead className='border-bottom'>
                                                <tr>
                                                <th>Asset type</th>
                                                <th>Stability Fee</th>
                                                <th>Min. C-ratio</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                            

                                                <tr>
                                                <th scope="row">ETH-A</th>
                                                <td>2.00%</td>
                                                <td>145%</td>
                                                </tr>
                                                <tr>
                                                <th scope="row">WBTC-A</th>
                                                <td>2.00%</td>
                                                <td>145%</td>
                                                </tr>
                                                <tr>
                                                <th scope="row">ETH-C</th>
                                                <td>0.50%</td>
                                                <td>170%</td>
                                                </tr>
                                                <tr>
                                                <th scope="row">ETH-B</th>
                                                <td>5.00%</td>
                                                <td>130%</td>
                                                </tr>
                                                <tr>
                                                <th scope="row">UNIV2DAIUSDC-A</th>
                                                <td>0.00%</td>
                                                <td>102%</td>
                                                </tr>
                                                <tr>
                                                <th scope="row">LINK-A</th>
                                                <td>1.00%</td>
                                                <td>165%</td>
                                                </tr>
                                            </tbody>
                                            </Table>
                                        </div>
                                        <div className="pb-3 pt-2">
                                            <span className='btn btn-sm btn-light text-uppercase'>Network Metrics</span>
                                        </div>
                                        <div className='' style={{height:"250px"}}>
                                                
                                        </div>
                                </CardBody>
                            </Card>
                       </Col>

                       
                       <Col md="4">
                            <Card>
                                <CardBody>
                                    <div className="pb-3 pt-2">
                                        <span className='btn btn-sm btn-light text-uppercase'>treasury managements</span>
                                    </div>
                                    <ul className="list-unstyled  p-2   col-md-8 ">
                                        <li className="d-flex justify-content-between" >
                                            <span>Fund in flow</span> <span style={{fontWeight:"600"}}>+15.89%</span></li>
                                        <li className="d-flex justify-content-between ">
                                            <span>Cash in flow</span>
                                        <span  style={{fontWeight:"600"}}>-2.76%</span></li>
                                        <li className="d-flex justify-content-between ">
                                            <span>Cash out flow</span>
                                        <span  style={{fontWeight:"600"}}>+19.88%</span></li>
                                    </ul>
                                </CardBody>
                            </Card>
                            <Card>
                                <CardBody>
                                    <div className="pb-3 pt-2">
                                        <span className='btn btn-sm btn-light text-uppercase'>Incentives</span>
                                    </div>
                                    To vote, MKR owners must "lock-up" tokens by transferring them into the Voting
                                    Contract. Votes are weighted based on the quantity of MKR locked in the contract.
                                    "Locked" MKR can be withdrawn at any time.
                                </CardBody>
                            </Card>
                            <Card>
                                <CardBody>
                                    <div className="pb-3 pt-2">
                                        <span className='btn btn-sm btn-light text-uppercase'>token ultility</span>
                                    </div>
                                   <div style={{height:"185px"}}>
                                       <PieChartMechDesign></PieChartMechDesign>
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

export default MechanismDesign;
