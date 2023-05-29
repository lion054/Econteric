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
import "../../assets/scss/custom/pages/_overview.scss";
import classnames from "classnames"
import DashedLine from "../AllCharts/apex/dashedLine"
import PieChart from "../AllCharts/apex/PieChart"
import LineChart from "../AllCharts/chartjs/linechart"
const Snapshot = (props) => {
    
    const map = React.createRef(null);
    return (
        <React.Fragment>=
                <div fluid className='_snapshot page-content'>   
                    <Row>
                        <Col md="8 p-1">
                            <Row >
                                <Col md="12">
                                    <Card className='snap-card p-2' id="snap-card1" style={{height:'227px'}}>
                                        <CardBody>
                                            <div className='d-flex flex-wrap align-items-center mb-4'>
                                            <div className='ms-auto'>
                                                    <div className='nav-btns1'>
                                                        <button type="button" className='btn btn-soft-secondary btn-sm border'>
                                                            <span className='box' style={{ backgroundColor:'#DA393A'}}></span>
                                                            <span className='fontWeight6'>UST</span>
                                                            <span className='fontWeight7 ' style={{ marginLeft:'5px'}} >X</span></button>
                                                        <button type="button" className='btn btn-soft-secondary btn-sm border'>
                                                            <span className='box' style={{ backgroundColor:'#00C99C'}}></span>
                                                            <span className='fontWeight6'>ETH</span>
                                                            <span className='fontWeight7 ' style={{ marginLeft:'5px'}}>X</span></button>
                                                        <button type="button" className='btn btn-soft-secondary btn-sm ' style={{backgroundColor:'#00C99C'}}>
                                                            <i className='dripicons-plus' ></i></button>
                                                
                                                    </div>
                                                </div>
                                                <div className='ms-auto'>
                                                    <div className='nav-btns1'>
                                                        <button type="button" className='btn btn-soft-secondary btn-sm'>1D</button>
                                                        <button type="button" className='btn btn-soft-secondary btn-sm'>5D</button>
                                                        <button type="button" className='btn btn-soft-secondary btn-sm'>1M</button>
                                                        <button type="button" className='btn btn-soft-white '>3M</button>
                                                        <button type="button" className='btn btn-soft-secondary btn-sm'>6M</button>
                                                        <button type="button" className='btn btn-soft-secondary btn-sm'>YTD</button>
                                                        <button type="button" className='btn btn-soft-secondary btn-sm'>1Y</button>
                                                        <button type="button" className='btn btn-soft-secondary btn-sm'>3Y</button>
                                                        <button type="button" className='btn btn-soft-secondary btn-sm'>All time</button>
                                                    </div>
                                                </div>
                                                <div>

                                                </div>
                                            </div>
                                        </CardBody>
                                    </Card>
                                </Col>
                            </Row>
                            <div className='m-2'></div>
                            <Row>
                                <Col>
                                    <Card className='snap-card p-2' id='key-data' >
                                        <CardBody>
                                        <div className="">
                                            <span className='btn btn-sm btn-light text-uppercase snap-text p-1'>KEY DATA</span>
                                        </div>
                                        <Row className='key-content'>
                                            <Col md="4">
                                                <div className="d-flex justify-content-between m-2 snap-text" >
                                                <span>Yield to token holder</span> <span style={{fontWeight:"600"}}>0.56%</span></div>
                                                <div className="d-flex justify-content-between m-2 snap-text">
                                                <span > Beta (1Y volatility)</span>
                                                <span style={{fontWeight:"600"}}>7.75%</span></div>
                                            </Col>
                                            <Col md="4">
                                            <div className=''>
                                                <div className="d-flex justify-content-between m-2 snap-text">
                                                <span>Vested supply</span>
                                                <span style={{fontWeight:"600"}}>117,450,338.19 ETH</span></div>
                                                <div className="d-flex justify-content-between m-2 snap-text">
                                                <span className=''> Avg. trade vol (1D)</span>
                                                <span style={{fontWeight:"600"}}>$694,310,029.32</span></div>
                                                </div>
                                            </Col>
                                            <Col md="4">
                                                <div className='border-right'>
                                                <div className="d-flex justify-content-between m-2 snap-text" >
                                                    <span>Active wallet</span> <span style={{fontWeight:"600"}}>267,899</span>
                                                </div>
                                                 <div className="d-flex justify-content-between snap-text">
                                                    <span className=''> Competitors</span>
                                                    <div className="" style={{fontWeight:"600"}}>
                                                        <span className='m-2'>USDC</span> 
                                                        <span className='m-2'>LUSD</span>
                                                        <span className='m-2'>UST</span>
                                                    </div>
                                                </div>
                                                </div>
                                            </Col>
                                        </Row>
                                        </CardBody>
                                    </Card>
                                </Col>
                            </Row>
                        </Col>
                        <Col md="4 p-1">
                           <Card className='snap-card p-2' >
                               <CardBody>
                                    <div className="">
                                        <span className='btn btn-sm btn-light text-uppercase snap-text p-1'> MARKET DESIGN</span>
                                    </div>
                                    <ul className="list-unstyled  pb-1 border-bottom snap-text">
                                        <li className="d-flex justify-content-between" >
                                        <span>DOD Transactions</span> <span style={{fontWeight:"600"}}>27%</span></li>
                                        <li className="d-flex justify-content-between ">
                                        <span>MOM Transactions</span>
                                        <span style={{fontWeight:"600"}}>40%</span></li>
                                    </ul>
                                    <div className="">
                                        <span className='btn btn-sm btn-light text-uppercase snap-text p-1'>MECHANISM DESIGN</span>
                                    </div>

                                    <ul className="list-unstyled  pb-1 border-bottom snap-text">
                                        <li className="d-flex justify-content-between">
                                        <span>Protocol C-Ratio</span>
                                        <span style={{fontWeight:"600"}}>250%</span></li>
                                    </ul>

                                    <div className="">
                                        <span className='btn btn-sm btn-light text-uppercase snap-text p-1'>TOKEN DESIGN</span>
                                    </div>

                                    <ul className="list-unstyled  pb-1 border-bottom snap-text">
                                        <li className="d-flex justify-content-between">
                                        <span>Inflation rate</span>
                                        <span style={{fontWeight:"600"}}>1.1%</span></li>
                                        <li className="d-flex justify-content-between ">
                                        <span>Circulating supply</span>
                                        <span style={{fontWeight:"600"}}>7%</span></li>
                                    </ul>

                                    <div className="">
                                        <span className='btn btn-sm btn-light text-uppercase snap-text p-1' >VALUATION</span>
                                    </div>
                                    <ul className="list-unstyled  pb-1 snap-text">
                                        <li className="d-flex justify-content-between" >
                                        <span>Market cap</span>
                                        <span style={{fontWeight:"600"}}>$13,835,213,111.56</span></li>
                                        <li className="d-flex justify-content-between " >
                                        <span>Token structure</span>
                                        <span style={{fontWeight:"600"}}>$694,310,029.32</span></li>
                                        <li className="d-flex justify-content-between" >
                                        <span>Next inflation</span>
                                        <span style={{fontWeight:"600"}}> N/A</span></li>
                                    </ul>
                               </CardBody>
                           </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col md="4 p-1">
                            <Card className='snap-card' >
                                <CardBody>
                                <div className="">
                                    <span className='btn btn-sm btn-light text-uppercase snap-text p-1' >LATEST NEWS</span>
                                </div>
                                <ul className="list-unstyled   snap-text">
                                        <li className="d-flex flex-column justify-content-between mb-2  mt-2" >
                                        <small>Bloomberg | Sep 12</small>
                                        <span style={{fontWeight:"600", textDecoration:"underline"}}><a href='#' className='text-uppercase'>UNI, SUSHI, MKR, Defi Tokens See 24 Hour Double-Digit Gain...</a></span></li>
                                        <li className="d-flex flex-column justify-content-between  mb-2" >
                                        <small>CNBC | Sep 11</small>
                                        <span style={{fontWeight:"600", textDecoration:"underline"}}>
                                            <a href='#' className='text-uppercase'>Senator Warren’s office confuses MakerDAO for failed 2016...</a></span></li>
                                        <li className="d-flex flex-column justify-content-between" >
                                        <small>Marketwatch.com | Sep 09</small>
                                        <span style={{fontWeight:"600", textDecoration:"underline"}}>
                                        <a href='#' className='text-uppercase'>MakerDAO Has Come Full Circle</a></span></li>
                                    </ul>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md="8 p-1">
                            <Card className='snap-card'>
                                <CardBody>
                                         <DashedLine/>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </div>
        </React.Fragment>
    );
};

export default Snapshot;