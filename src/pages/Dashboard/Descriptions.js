import React from 'react';
import { Container, Row, Col, Card, CardBody } from 'reactstrap';
import "../Maps/jquery-jvectormap.scss";
import DashedLine from "../AllCharts/apex/dashedLine"
const Descriptions = (props) => {
    
    const map = React.createRef(null);
    return (
        <React.Fragment>
                <Container fluid className='page-content'>   
                    <Row>
                        <Col md="9">
                            <Row>
                                <Col md="6">
                                    <Card style={{height:"500px"}}>
                                        <CardBody>
                                            <div>
                                                <DashedLine/>
                                            </div>
                                            <div>
                                                <p style={{fontSize:"13px"}}>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vulputate lacus volutpat lobortis. Maecenas pharetra tellus id non nunc, sed curabitur tincidunt vitae. In ornare vestibulum malesuada eleifend dignissim. Nulla augue sit faucibus tortor, facilisi pretium risus. 
                                                </p>
                                            </div>
                                        </CardBody>
                                    </Card>
                                </Col>
                                <Col md="6">
                                    <Card style={{height:"500px"}}>
                                        <CardBody>
                                            <div className='d-flex justify-content-between p-4'>
                                                <span>Name</span>
                                                <span>ETH</span>
                                            </div>
                                            <div className='border-top d-flex justify-content-between p-4'>
                                                <span>Smart Contract Address</span>
                                                <button className='btn btn-sm border'>
                                                    Copy
                                                </button>
                                            </div>
                                            <div className='border-top d-flex justify-content-between p-4'>
                                                <span>Total return 
                                                since inception </span>
                                                <span>7,75%</span>
                                            </div> 
                                            <div className='border-top d-flex justify-content-between p-4'>
                                                <span>Websites</span>
                                                <button className='btn btn-sm border'>Open</button>
                                            </div>
                                            <div className='border-top d-flex flex-column justify-content-between p-4'>
                                                <span>Social Media</span>
                                                <div className=''>
                                                    <i className='m-2 fab fa-facebook'></i>
                                                    <i className='m-2 fab fa-twitter'></i>
                                                    <i className='m-2 fab fa-instagram'></i>
                                                </div>
                                            </div>
                                        </CardBody>
                                    </Card>
                                </Col>
                            </Row>
                        </Col>
                        <Col md="3">
                        <Card style={{height:"500px"}}>
                                <CardBody>
                                    <div className="pb-3 pt-2">
                                        <span className='btn btn-sm btn-light text-uppercase'> OBJECTIVE OF PROTOCOL</span>
                                    </div>
                                    <ul className="list-unstyled  pb-2 border-bottom ">
                                        <li> <span> DEFI lending</span></li>
                                    </ul>
                                    <div className="">
                                        <span className='btn btn-sm btn-light text-uppercase'>OBJECTIVE OF TOKEN</span>
                                    </div>

                                    <ul className="list-unstyled  pb-2 border-bottom ">
                                        <li className="d-flex justify-content-between mt-2 mb-2">
                                        <span> To support the stability of DAI token</span></li>
                                        <li className="d-flex justify-content-between">
                                        <span>Enable governance for the Dai Credit System</span></li>
                                    </ul>

                                    <div className="">
                                        <span className='btn btn-sm btn-light text-uppercase'>TOKEN ASSET CLASS</span>
                                    </div>

                                    <ul className="list-unstyled  pb-2 border-bottom ">
                                        <li className="d-flex justify-content-between mt-2 mb-2">
                                        <span>Enable governance for the Dai Credit System</span></li>
                                        <li className="d-flex justify-content-between ">
                                        <span>Circulating supply</span></li>
                                    </ul>

                                    <div className="">
                                        <span className='btn btn-sm btn-light text-uppercase' >VALUATION</span>
                                    </div>
                                    <ul className="list-unstyled  pb-2">
                                        <li className="d-flex justify-content-between mt-2 mb-2" >
                                        <span>Currency for transaction</span>
                                        <span style={{fontWeight:"600"}}>USD</span></li>
                                        <li className="d-flex justify-content-between mb-2 " >
                                        <span>Token to represent asset for transaction</span>
                                        <span style={{fontWeight:"600"}}>ETH</span></li>
                                        <li className="d-flex justify-content-between mb-2" >
                                        <span>Token to incentivise more transaction,
                                    independent of trade</span>
                                        <span style={{fontWeight:"600"}}> N/A</span></li>
                                    </ul>
                                    
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col md="4" >
                        <Card style={{height:"220px"}}>
                                <CardBody>
                                <div className="">
                                        <span className='btn btn-sm btn-light text-uppercase' >
                                MARKET DESIGN</span>
                                    </div>
                                    <ul className="list-unstyled  pb-2">
                                        <li className="d-flex justify-content-between mt-2 mb-2" >
                                        <span>Proportion of market cap</span>
                                        <span style={{fontWeight:"600"}}>0.19%</span></li>
                                        <li className="d-flex justify-content-between mb-2 " >
                                        <span>Number of wallets</span>
                                        <span style={{fontWeight:"600"}}>0.09210526316</span></li>
                                        <li className="d-flex justify-content-between mb-2" >
                                        <span>TNumber of transactions</span>
                                        <span style={{fontWeight:"600"}}>0.2745098039</span></li>
                                        <li className="d-flex justify-content-between mb-2 " >
                                        <span>Aggregated size of transactions</span>
                                        <span style={{fontWeight:"600"}}>4.305808833</span></li>
                                        <li className="d-flex justify-content-between mb-2" >
                                        <span> Number of traders</span>
                                        <span style={{fontWeight:"600"}}>0.09210526316</span></li>
                                    </ul>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md="4">
                            <Card style={{height:"220px"}}>
                                <CardBody>
                                <div className="">
                                    <span className='btn btn-sm btn-light text-uppercase' >
                                    MECHANISM DESIGN</span>
                                </div>
                                <ul className="list-unstyled  pb-2">
                                    <li className="d-flex justify-content-between mt-2 mb-2" >
                                    <span>Price of token</span>
                                    <span style={{fontWeight:"600"}}>$2642.53</span></li>
                                    <li className="d-flex justify-content-between mb-2 " >
                                    <span> Value accrued</span>
                                    <span style={{fontWeight:"600"}}>$2642.53</span></li>
                                    <li className="d-flex justify-content-between mb-2" >
                                        <span>Fees accrued </span>
                                        <div className='d-flex justify-content-between'>
                                            <div className='d-flex flex-column justify-content-between m-2'>
                                                <small>DAY</small>
                                                <span className='' style={{fontWeight:"600"}}>71%</span>
                                            </div>
                                            <div className='d-flex flex-column justify-content-between  m-2'>
                                                <small>WEEK</small>
                                                <span style={{fontWeight:"600"}}>11%</span>
                                            </div>
                                            <div className='d-flex flex-column justify-content-between m-2'>
                                                <small>YEAR</small>
                                                <span style={{fontWeight:"600"}}>18%</span>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md="4">
                            <Card style={{height:"220px"}}>
                                <CardBody>
                                <div className="">
                                    <span className='btn btn-sm btn-light text-uppercase' >
                                    TOKEN DESIGN</span>
                                </div>
                                <ul className="list-unstyled  pb-2">
                                    <li className="d-flex justify-content-between mt-2 mb-2" >
                                    <span>C-ratio</span>
                                    <span style={{fontWeight:"600"}}>155%</span></li>
                                    <li className="d-flex justify-content-between mb-2 " >
                                    <span>Token policy</span>
                                    <span style={{fontWeight:"600"}}>Token yield for staking</span></li>
                                    <li className="d-flex justify-content-between mb-2" >
                                    <span>Concentration by large holders</span>
                                    <span style={{fontWeight:"600"}}>12%</span></li>
                                    <li className="d-flex justify-content-between mb-2 " >
                                    <span>Total exchanges inflows (7D)</span>
                                    <span style={{fontWeight:"600"}}>$7,405,367,061</span></li>
                                    <li className="d-flex justify-content-between mb-2" >
                                    <span>Total exchanges outflows (7D)</span>
                                    <span style={{fontWeight:"600"}}>$7,531,342,043</span></li>
                                    </ul>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
        </React.Fragment>
    );
};

export default Descriptions;