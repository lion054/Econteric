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
const TokenDesign = (props) => {
    
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
                                        
                                        <div className="pb-3 pt-2">
                                            <span className='btn btn-sm btn-light text-uppercase'> network analysis</span>
                                        </div>
                                        <Row>
                                            <Col md="6">
                                            
                                            <ul className="list-unstyled  p-2">
                                                <li className="d-flex justify-content-between m-2" >
                                                    <span>Token details</span> <span  style={{fontWeight:"600"}}>DAI</span></li>
                                                <li className="d-flex justify-content-between m-2" >
                                                    <span>Functional specification</span> <span  style={{fontWeight:"600"}}>Currency for transaction </span></li>
                                                <li className="d-flex justify-content-between m-2">
                                                    <span>Nature of token asset class</span>
                                                <span style={{fontWeight:"600"}}>Stable coin</span></li>
                                            </ul> 
                                                
                                            </Col>
                                            <Col md="6">
                                                <div className="d-flex flex-column ">
                                                    <small className='text-secondary'>How are token minted/issued</small>
                                                    <span style={{fontWeight:"500"}}>Minting upon collateral by other digital assets</span>
                                                </div>
                                                <div className="d-flex flex-column mt-3">
                                                    <small className='text-secondary'>Token destroyed</small>
                                                    <span style={{fontWeight:"500"}}>Burning upon redemption of underlying digital assets used as collaterals</span>
                                                </div>
                                            </Col>
                                        </Row>
                                        </CardBody>
                                    </Card>
                               </Col>
                           </Row>
                           <Row>
                               <Col md="5">
                                    <Card>
                                        <CardBody>
                                            <PieChart/>
                                        </CardBody>
                                    </Card>
                               </Col>
                               <Col md="7">
                                    <Card style={{height:"50px"}}>
                                        <CardBody>
                                            <div className='d-flex justify-content-between'>
                                                <span style={{fontWeight:"600"}}>Current circulating</span>
                                                <span style={{fontWeight:"600"}}>6,321,432</span>
                                            </div>
                                        </CardBody>
                                    </Card>
                                    <Card style={{height:"150px"}}>
                                        <CardBody>
                                        <div className="pb-3 pt-2">
                                            <span className='btn btn-sm btn-light text-uppercase'>liquidation mechanism</span>
                                        </div>
                                        <p>
                                            MakerDAO uses margin calls to add more collateral or to repay debt. 
                                            Vaults are also auctioned off and the amount is used to support liquidations. 
                                            C-ratio is set at 150% in general, but it changes with the collateral type.
                                        </p>
                                        </CardBody>
                                    </Card>
                                    <Card style={{height:"150px"}}>
                                        <CardBody>
                                        <div className="pb-3 pt-2">
                                            <span className='btn btn-sm btn-light text-uppercase'>
                                            insolvency solution</span>
                                        </div>
                                        <p>
                                            In case of insolvency, the protocol shuts down. 
                                            The undercollateralized vaults are auctioned out to others to purchase 
                                            the vaults. The auctioned amount is used to cover the debt. 
                                            MKR can also be minted and sold to cover outstanding debt.
                                        </p>
                                        </CardBody>
                                    </Card>
                               </Col>
                           </Row>
                       </Col>

                       <Col md="4">
                            <Card>
                                <CardBody>
                                <div className="pb-3 pt-2">
                                            <span className='btn btn-sm btn-light text-uppercase'>
                                            Recent change in DAI (24H)</span>
                                        </div>
                                        <div class="d-flex justify-content-between">
                                            <div >
                                                <span className='btn border text-center p-2 m-2' style={{fontWeight:"900!important", fontSize:"20px"}}>
                                                10K
                                                </span>
                                                <span className='m=2'>Burned</span>
                                            </div>

                                            <div >
                                                <span className='btn border text-center p-2 m-2' style={{fontWeight:"900!important", fontSize:"20px"}}>
                                                20K
                                                </span>
                                                <span className='m-2'>Minted</span>
                                            </div>
                                        </div>
                                        
                                </CardBody>
                            </Card>

                            <Card>
                                <CardBody>
                                <div className="pb-3 pt-2">
                                            <span className='btn btn-sm btn-light text-uppercase'>
                                            Token policy</span>
                                        </div>
                                       
                                        <div className='d-flex justify-content-between'>
                                                <span style={{fontWeight:"600"}}>Token Inflation rate</span>
                                                <span style={{fontWeight:"600"}}>250%</span>
                                            </div>

                                        <div style={{height:"120px"}}>

                                        </div>

                                        <div>
                                        <ul className="list-unstyled  p-2">
                                                <li className="d-flex justify-content-between m-2" >
                                                    <span>Stability index</span> <span  style={{fontWeight:"600"}}>250%</span></li>
                                                <li className="d-flex justify-content-between m-2" >
                                                    <span>Index againts time</span> <span  style={{fontWeight:"600"}}>250% </span></li>
                                            </ul> 
                                        </div>

                                        <div style={{height:"130px"}}>
                                            
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
export default TokenDesign;