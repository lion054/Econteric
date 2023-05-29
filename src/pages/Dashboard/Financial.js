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
    CardText,
    Table,
} from 'reactstrap';
import "../Maps/jquery-jvectormap.scss";
import classnames from "classnames"
import LineChart from "../AllCharts/chartjs/linechart"
const Financial = (props) => {
    const [activeTabFin, setactiveTabFin] = useState("1")
    const toggleFin = tab => {
        if (activeTabFin !== tab) {
            setactiveTabFin(tab)
        }
    }


    const [activeTabFinChart, setactiveTabFinChart] = useState("")
    const toggleFinChart = tab => {
        if (activeTabFinChart !== tab) {
            setactiveTabFinChart(tab)
        }
    }
    const map = React.createRef(null);
    return (
        <React.Fragment>
             <div className="page-content">
             <MetaTags>
                <title>Financial | Econteric</title>
            </MetaTags>
            <Container fluid>   

                <Row>
                    <Col md="8">
                    <Row> 
                        <Col>
                            <Card style={{height:"300px"}}>
                                <CardBody>
                                    <Row>
                                    <Col md="6">
                                    <div className="p-3">
                                        <span className='btn btn-light text-uppercase'>Demand</span>
                                    </div> 
                                        <ul class="list-unstyled pt-3 text-dark">
                                            <li class="d-flex justify-content-between mb-2"><span style={{fontWeight:"600"}}>C-ratio</span> <span>220.72%</span></li>
                                            <li class="d-flex justify-content-between  mb-2">
                                            <span style={{fontWeight:"600"}}>Stability fee</span>
                                            <span>0.5 - 5.0%</span></li>
                                            <li class="d-flex justify-content-between  mb-2">
                                            <span style={{fontWeight:"600"}}>Dai supply</span>
                                            <span>$7,348,986,146</span></li>
                                            <li class="d-flex justify-content-between  mb-2">
                                            <span style={{fontWeight:"600"}}>Dai savings rate</span>
                                            <span>0.1%</span></li>
                            
                                        </ul>
                                    </Col>
                                    <Col md="6">
                                    <div className="p-3">
                                        <span className='btn btn-light text-uppercase'>SUPPLY</span>
                                    </div>
                                        <ul class="list-unstyled p-3 text-dark">
                                        <li class="d-flex justify-content-between  mb-2"><span style={{fontWeight:"600"}}>Burn rate</span><span>250%</span></li>
                                            <li class="d-flex justify-content-between  mb-2">
                                            <span style={{fontWeight:"600"}}>Total supply</span>
                                            <span>$7,348,986,146</span></li>
                                            <li class="d-flex justify-content-between  mb-2">
                                            <span style={{fontWeight:"600"}}>Max supply</span>
                                            <span>$7,348,986,146</span></li>
                                            <li class="d-flex justify-content-between  mb-2">
                                            <span style={{fontWeight:"600"}}>24H value transacted</span>
                                            <span>$857,531,057</span></li>
                                            <li class="d-flex justify-content-between  mb-2">
                                            <span style={{fontWeight:"600"}}>24H transaction Count</span>
                                            <span>$857,531,057</span></li>
                                        </ul>
                                    </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                        <Row>
                            <Col md="12">
                                <Card style={{height:"450px"}}>
                                    <CardBody>
                                    <div>
                        <div className="p-3">
                            <span className='btn btn-light text-uppercase'>Quantintative CashFlow</span>
                        </div>
                        <Card>
                                <CardBody>
                                    <Nav tabs>
                                        <NavItem>
                                            <NavLink
                                                style={{ cursor: "pointer" }}
                                                className={classnames({
                                                    active: activeTabFin === "1",
                                                })}
                                                onClick={() => {
                                                    toggleFin("1")
                                                }}
                                            >
                                                Cashflow analysis
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                style={{ cursor: "pointer" }}
                                                className={classnames({
                                                    active: activeTabFin === "2",
                                                })}
                                                onClick={() => {
                                                    toggleFin("2")
                                                }}
                                            >
                                                Variable affecting cashflow 
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                style={{ cursor: "pointer" }}
                                                className={classnames({
                                                    active: activeTabFin === "3",
                                                })}
                                                onClick={() => {
                                                    toggleFin("3")
                                                }}
                                            >
                                                Cashflow to token holder
                                            </NavLink>
                                        </NavItem>
                                    </Nav>

                                    <TabContent activeTab={activeTabFin} className="p-3 text-muted">
                                        <TabPane tabId="1">
                                            <Row>
                                                <Col sm="12">
                                                    <CardText className="mb-0">
                                                    <div className="table-responsive">
                                                            <Table className="table table-borderless mb-0 rounded-0">
                                                            <thead className='border-bottom'>
                                                                <tr>
                                                                <th>Income Stream</th>
                                                                <th>1/2021</th>
                                                                <th>2/2021</th>
                                                                <th>3/2021</th>
                                                                <th>4/2021</th>
                                                                <th>5/2021</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                            

                                                                <tr>
                                                                <th scope="row">Interest</th>
                                                                <td>503483</td>
                                                                <td>4813382</td>
                                                                <td>8119713</td>
                                                                <td>10292895</td>
                                                                <td>13252689</td>
                                                                </tr>
                                                                <tr>
                                                                <th scope="row">Trading</th>
                                                                <td>48445</td>
                                                                <td>197651</td>
                                                                <td>407721</td>
                                                                <td>159281</td>
                                                                <td>1221449</td>
                                                                </tr>
                                                                <tr>
                                                                <th scope="row">Liquidation</th>
                                                                <td>516681</td>
                                                                <td>1638984</td>
                                                                <td>205623</td>
                                                                <td>2263621</td>
                                                                <td>9410268</td>
                                                                </tr>
                                                            </tbody>
                                                            </Table>
                                                        </div>
                                                    </CardText>
                                                </Col>
                                            </Row>
                                        </TabPane>
                                        <TabPane tabId="2">
                                            <Row>
                                                <Col sm="12">
                                                    <CardText className="mb-0">
                                                    <div className='pb-3'>
                                                    <Row> 
                                                        <Col md="6">
                                                            <ul class="list-unstyled pt-3 text-dark">
                                                                <li class="d-flex justify-content-between mb-2"><span style={{fontWeight:"600"}}> ETH-A stability fee
                                                       </span> <span>2%</span></li>
                                                                <li class="d-flex justify-content-between  mb-2"><span style={{fontWeight:"600"}}>
                                                        ETH-C stability fee</span>
                                                                <span>0.5</span></li>
                                                                <li class="d-flex justify-content-between  mb-2">
                                                                <span style={{fontWeight:"600"}}>WBTC-A stability fee</span>
                                                                <span>2%</span></li>
                                                                <li class="d-flex justify-content-between  mb-2">
                                                                <span style={{fontWeight:"600"}}>Dai savings rate</span>
                                                                <span>0.1%</span></li>
                                                            </ul>
                                                        </Col>
                                                        <Col md="6">
                                                            <ul class="list-unstyled p-3 text-dark">
                                                                <li class="d-flex justify-content-between"><span style={{fontWeight:"500"}}>Report #1</span> <span style={{fontWeight:"600"}}>N/A</span></li>
                                                                <li class="d-flex justify-content-between"><span style={{fontWeight:"500"}}>Report #2</span> <span style={{fontWeight:"600"}}>N/A</span></li>
                                                            </ul>
                                                        </Col>
                                                    </Row>
                                                    </div>
                                                    </CardText>
                                                </Col>
                                            </Row>
                                        </TabPane>
                                        <TabPane tabId="3">
                                            <div className='pb-3'>
                                            <Row> 
                                                <Col md="6">
                                                    <ul class="list-unstyled pt-3 text-dark">
                                                        <li class="d-flex justify-content-between mb-2"><span style={{fontWeight:"600"}}>Variable 1</span> <span>250%</span></li>
                                                        <li class="d-flex justify-content-between  mb-2"><span style={{fontWeight:"600"}}>Variable 2</span>
                                                        <span>NA</span></li>
                                                        <li class="d-flex justify-content-between  mb-2">
                                                        <span style={{fontWeight:"600"}}>Variable 3</span>
                                                        <span>NA</span></li>
                                                    </ul>
                                                </Col>
                                                <Col md="6">
                                                    <ul class="list-unstyled p-3 text-dark">
                                                        <li class="d-flex justify-content-between"><span style={{fontWeight:"600"}}>Report Analysis</span> <span><button className='btn btn-sm border'>show</button></span></li>

                                                    </ul>
                                                </Col>
                                            </Row>
                                            </div>
                                            <Row>
                                                <Col sm="12">
                                                    <CardText className="mb-0">
                                                    <div className="table-responsive">
                                                            <Table className="table table-borderless mb-0 rounded-0">
                                                            <thead className='border-bottom'>
                                                                <tr>
                                                                <th>Income Stream</th>
                                                                <th>1/2021</th>
                                                                <th>2/2021</th>
                                                                <th>3/2021</th>
                                                                <th>4/2021</th>
                                                                <th>5/2021</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                <th scope="row"> Interest expense</th>
                                                                <td>0</td>
                                                                <td>9.60177</td>
                                                                <td>156.075</td>
                                                                <td>669.587</td>
                                                                <td>687.023</td>
                                                                </tr>
                                                            </tbody>
                                                            </Table>
                                                        </div>
                                                    </CardText>
                                                </Col>
                                            </Row>
                                        </TabPane>
                                    </TabContent>
                                </CardBody>
                            </Card>
                      
                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                        
                    </Col>
                    <Col md="4">
                        <Card>
                            <CardBody>
                            <div className="p-3">
                                <span className='btn btn-light text-uppercase'>Variables affecting cashflow</span>
                            </div> 
                                <ul className="list-unstyled  border-bottom pb-3">
                                    <li className="d-flex justify-content-between mb-2" style={{fontWeight:"600"}}>
                                    <span>30D volatility </span> <span>0.00291</span></li>
                                    <li className="d-flex justify-content-between mb-2" style={{fontWeight:"600"}}>
                                    <span>30D High</span>
                                    <span>0.93%</span></li>
                                    <li className="d-flex justify-content-between mb-2" style={{fontWeight:"600"}}>
                                    <span>30D Low</span>
                                    <span>-0.94%</span></li>
                                    <li className="d-flex justify-content-between mb-2" style={{fontWeight:"600"}}>
                                    <span>Standart deviation</span>
                                    <span>0.01066</span></li>
                                </ul>

                                <Card>
                                <CardBody>
                                    <Nav pills className="navtab-bg nav-justified text-center">
                                        <NavItem>
                                            <NavLink
                                                style={{ cursor: "pointer" }}
                                                className={classnames({
                                                    active: activeTabFinChart === "5",
                                                })}
                                                onClick={() => {
                                                    toggleFinChart("5")
                                                }}
                                            >
                                                1M
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                style={{ cursor: "pointer" }}
                                                className={classnames({
                                                    active: activeTabFinChart === "6",
                                                })}
                                                onClick={() => {
                                                    toggleFinChart("6")
                                                }}
                                            >
                                                3M
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                style={{ cursor: "pointer" }}
                                                className={classnames({
                                                    active: activeTabFinChart === "7",
                                                })}
                                                onClick={() => {
                                                    toggleFinChart("7")
                                                }}
                                            >
                                                6M
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                style={{ cursor: "pointer" }}
                                                className={classnames({
                                                    active: activeTabFinChart === "8",
                                                })}
                                                onClick={() => {
                                                    toggleFinChart("8")
                                                }}
                                            >
                                                All Time
                                            </NavLink>
                                        </NavItem>
                                    </Nav>

                                    <TabContent activeTab={activeTabFinChart} className="p-3 text-muted">
                                        <TabPane tabId="5">
                                            <Row>
                                                <Col sm="12">
                                                    <CardText className="mb-0">
                                                       <LineChart/>
                                                    </CardText>
                                                </Col>
                                            </Row>
                                        </TabPane>
                                        <TabPane tabId="6">
                                            <Row>
                                                <Col sm="12">
                                                    <CardText className="mb-0">
                                                        <LineChart/>
                                                    </CardText>
                                                </Col>
                                            </Row>
                                        </TabPane>
                                        <TabPane tabId="7">
                                            <Row>
                                                <Col sm="12">
                                                    <CardText className="mb-0">
                                                    <LineChart/>
                                                    </CardText>
                                                </Col>
                                            </Row>
                                        </TabPane>

                                        <TabPane tabId="8">
                                            <Row>
                                                <Col sm="12">
                                                    <CardText className="mb-0">
                                                        <LineChart/>
                                                    </CardText>
                                                </Col>
                                            </Row>
                                        </TabPane>
                                    </TabContent>
                                </CardBody>
                            </Card>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
             </div>
           
        </React.Fragment>
    );
};

export default Financial;