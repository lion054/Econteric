import React from 'react';
import { Container, Row, Col, Card, CardBody } from 'reactstrap';
import "../Maps/jquery-jvectormap.scss";
const Estimates = (props) => {
    
    const map = React.createRef(null);
    return (
        <React.Fragment>
             <div className="page-content">
                <Container fluid>   
                    <Row>
                        <Col md="8">
                          
                        </Col>
                        <Col md="4">
                            <Card >
                                <CardBody>
                                <div className="d-flex justify-content-between">
                                    <span className='btn btn-sm btn-light text-uppercase' >FACTORS AFFECTING PRICES </span>
                                    <span>R2</span>
                                </div>
                                    <ul className="list-unstyled  pb-2" style={{fontSize:"13px"}}>
                                        <li className="d-flex justify-content-between  mb-2 mt-3 p-2 border rounded" >
                                        <span>WETH price</span>
                                        <span style={{fontWeight:"600"}}>0.952</span></li>
                                        <li className="d-flex justify-content-between   p-2 border rounded mb-2" >
                                        <span>LINK price</span>
                                        <span style={{fontWeight:"600"}}>0.8383</span></li>
                                        <li className="d-flex justify-content-between  mb-2  p-2 border rounded" >
                                        <span>UNI price</span>
                                        <span style={{fontWeight:"600"}}>0.8162</span></li>
                                        <li className="d-flex justify-content-between  mb-2  p-2 border rounded" >
                                        <span> YFI price</span>
                                        <span style={{fontWeight:"600"}}>0.6953</span></li>
                                        <li className="d-flex justify-content-between  mb-2  p-2 border rounded" >
                                        <span>WBTC price</span>
                                        <span style={{fontWeight:"600"}}> 0.4272</span></li>
                                        <li className="d-flex justify-content-between  p-2 border rounded" >
                                        <span>USDC price</span>
                                        <span style={{fontWeight:"600"}}>0.1189</span></li>
                                    </ul>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col md="4">
                            <Card style={{height:"300px"}}>
                                <CardBody>
                                <div className="d-flex justify-content-between">
                                    <span className='btn btn-sm btn-light text-uppercase' >BETA ANALYSIS </span>
                                    <span>R2</span>
                                </div>
                                    
                            <ul className='list-unstyled'>
                                <li className="d-flex justify-content-between  mb-2" >
                                <span>ETH</span>
                                <span style={{fontWeight:"600"}}>0,9429</span></li>
                                <li className="d-flex justify-content-between  mb-2" >
                                <span>30-Day high</span>
                                <span style={{fontWeight:"600"}}>55.20%</span></li>
                                <li className="d-flex justify-content-between  mb-2" >
                                <span>30-Day low</span>
                                <span style={{fontWeight:"600"}}>35.54%</span></li>
                            </ul>
                            <div style={{fontSize:"13px"}} className=''>Volatilitty</div>
                        
                                </CardBody>
                            </Card>
                            </Col>
                        <Col md="4">
                        <Card style={{height:"300px"}}>
                                <CardBody>
                                <div className="d-flex justify-content-between">
                                    <span className='btn btn-sm btn-light text-uppercase' >RATING </span>
                                    <span>R2</span>
                                </div>
                                    <ul className="list-unstyled  pb-2" style={{fontSize:"13px"}}>
                                        <li className="d-flex justify-content-between  mb-2 mt-3" >
                                        <span>Holders Making Money 
                                            at Current Price</span>
                                            <div className='d-flex justify-content-between'>
                                                <div className='d-flex flex-column justify-content-between m-2'>
                                                    <small>IN</small>
                                                    <span className='' style={{fontWeight:"600"}} className="text-success">71%</span>
                                                </div>
                                                <div className='d-flex flex-column justify-content-between  m-2'>
                                                    <small>AT</small>
                                                    <span style={{fontWeight:"600"}}>11%</span>
                                                </div>
                                                <div className='d-flex flex-column justify-content-between m-2'>
                                                    <small>OUT</small>
                                                    <span style={{fontWeight:"600"} } className="text-danger">18%</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="d-flex justify-content-between  mb-2" >
                                        <span>24 hour change</span>
                                        <span style={{fontWeight:"600"}}>-7.15%</span></li>
                                        <li className="d-flex justify-content-between  mb-2" >
                                        <span>24 hour volume</span>
                                        <span style={{fontWeight:"600"}}>$ 46,405,367,061</span></li>
                                        <li className="d-flex justify-content-between  mb-2" >
                                        <span>Price history (7D)</span>
                                        <span style={{fontWeight:"600"}}>---------------</span></li>
                                    </ul>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md="4">
                            <Card style={{height:"300px"}}>
                                <CardBody>
                                <div className="">
                                    <span className='btn btn-sm btn-light text-uppercase' >LATEST REPORTS</span>
                                </div>
                                <ul className="list-unstyled  pb-2">
                                        <li className="d-flex flex-column justify-content-between mb-2  mt-2" >
                                        <small>19 hours ago</small>
                                        <span style={{fontWeight:"600", textDecoration:"underline"}}>
                                            <a href='#'>Smart Chain Statistics</a></span></li>
                                        <li className="d-flex flex-column justify-content-between  mb-2" >
                                        <small>1 day ago</small>
                                        <span style={{fontWeight:"600", textDecoration:"underline"}}>
                                            <a href='#' >Ethereum Statistics</a></span></li>
                                        <li className="d-flex flex-column justify-content-between" >
                                        <small>2 days ago</small>
                                        <span style={{fontWeight:"600", textDecoration:"underline"}}>
                                        <a href='#' >Ethereum Cryptocurrency Prices</a></span></li>
                                        <li className="d-flex flex-column justify-content-between" >
                                        <small>3 days ago</small>
                                        <span style={{fontWeight:"600", textDecoration:"underline"}}>
                                        <a href='#' >Ethereum Statistics</a></span></li>
                                        <li className="d-flex flex-column justify-content-between" >
                                        <small>1 week ago</small>
                                        <span style={{fontWeight:"600", textDecoration:"underline"}}>
                                        <a href='#' >Ethereum Cryptocurrency Prices</a></span></li>
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

export default Estimates;