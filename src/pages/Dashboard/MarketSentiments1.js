import React,  { useState } from 'react';
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
    CardText,Table } from 'reactstrap';
import "../Maps/jquery-jvectormap.scss";
import classnames from "classnames"
import DashedLine from "../AllCharts/apex/dashedLine"

const MarketSentiments1 = (props) => {
    const [activeTabSegChart, setactiveTabSegChart] = useState("2")
    const toggleSegChart = tab => {
        if (activeTabSegChart !== tab) {
            setactiveTabSegChart(tab)
        }
    }
    const map = React.createRef(null);
    return (
        <React.Fragment>
             <div className="page-content">
             
            <Container fluid>   

                <Row>
                    <Col md="6">
                        <Card style={{minHeight:"540px"}}> 
                            <CardBody>
                                <div >
                                    <Nav pills className="navtab-bg nav-justified text-center">
                                        <NavItem>
                                            <NavLink
                                                style={{ cursor: "pointer" }}
                                                className={classnames({
                                                    active: activeTabSegChart === "1",
                                                })}
                                                onClick={() => {
                                                    toggleSegChart("1")
                                                }}
                                            >
                                                7D
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                style={{ cursor: "pointer" }}
                                                className={classnames({
                                                    active: activeTabSegChart === "2",
                                                })}
                                                onClick={() => {
                                                    toggleSegChart("2")
                                                }}
                                            >
                                                30D
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                style={{ cursor: "pointer" }}
                                                className={classnames({
                                                    active: activeTabSegChart === "3",
                                                })}
                                                onClick={() => {
                                                    toggleSegChart("3")
                                                }}
                                            >
                                                60D
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                style={{ cursor: "pointer" }}
                                                className={classnames({
                                                    active: activeTabSegChart === "4",
                                                })}
                                                onClick={() => {
                                                    toggleSegChart("4")
                                                }}
                                            >
                                                90D
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                style={{ cursor: "pointer" }}
                                                className={classnames({
                                                    active: activeTabSegChart === "5",
                                                })}
                                                onClick={() => {
                                                    toggleSegChart("5")
                                                }}
                                            >
                                                All Time
                                            </NavLink>
                                        </NavItem>
                                    </Nav>

                                    <TabContent activeTab={activeTabSegChart} className="p-3 text-muted">
                                        <TabPane tabId="1">
                                            <Row>
                                                <Col sm="12">
                                                    <CardText className="mb-0">
                                                       <DashedLine/>
                                                    </CardText>
                                                </Col>
                                            </Row>
                                        </TabPane>
                                        <TabPane tabId="2">
                                            <Row>
                                                <Col sm="12">
                                                    <CardText className="mb-0">
                                                        <DashedLine/>
                                                    </CardText>
                                                </Col>
                                            </Row>
                                        </TabPane>
                                        <TabPane tabId="3">
                                            <Row>
                                                <Col sm="12">
                                                    <CardText className="mb-0">
                                                    <DashedLine/>
                                                    </CardText>
                                                </Col>
                                            </Row>
                                        </TabPane>

                                        <TabPane tabId="4">
                                            <Row>
                                                <Col sm="12">
                                                    <CardText className="mb-0">
                                                        <DashedLine/>
                                                    </CardText>
                                                </Col>
                                            </Row>
                                        </TabPane>
                                        <TabPane tabId="5">
                                            <Row>
                                                <Col sm="12">
                                                    <CardText className="mb-0">
                                                        <DashedLine/>
                                                    </CardText>
                                                </Col>
                                            </Row>
                                        </TabPane>
                                    </TabContent>
                            </div>
                                <div>
                                <ul className="list-unstyled  pb-3 col-md-8 p-3">
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
                                </div>
                            </CardBody>
                        </Card>
                        
                    </Col>
                    <Col md="6">
                    <Card style={{minHeight:"540px"}}> 
                            <CardBody>
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
                                        <tr>
                                        <th scope="row">Terra USD</th>
                                        <td>$1.00	</td>
                                        <td>16</td>
                                        <td>$2,818,944,363	</td>
                                        <td>-------------</td>
                                        </tr>
                                        <tr>
                                        <th scope="row">TrueUSD</th>
                                        <td>$0.996037</td>
                                        <td>154</td>
                                        <td>$1,186,659,144</td>
                                        <td>-------------</td>
                                        </tr>
                                        <tr>
                                        <th scope="row">TrueUSD</th>
                                        <td>$0.996037</td>
                                        <td>154</td>
                                        <td>$1,186,659,144</td>
                                        <td>-------------</td>
                                        </tr>
                                    </tbody>
                                    </Table>
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

export default MarketSentiments1;