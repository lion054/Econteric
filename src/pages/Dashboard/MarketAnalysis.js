import React from 'react';

import {
    Card,
    CardBody,
    Col,
    Container,
    Row
} from "reactstrap";

const MarketAnalysis = () => {
    return (
        <React.Fragment>
            <div className="page-content">
                < Container fluid>
                    <Row>
                        < Col>
                            <Row>
                                <Col>
                                    <Card style={{height:"350px"}}>
                                        <CardBody>
                                            <div>
                                            <span className='btn btn-light text-uppercase'>Sentiment Scores</span>
                                            </div>


                                        </CardBody>
                                    </Card>
                                     <Card style={{height:"350px"}}>
                                        <CardBody>
                                            <div>
                                            <span className='btn btn-light text-uppercase'>Polarity Distribution</span>
                                            </div>
                                            

                                        </CardBody>
                                        </Card>
                                </Col>
                                <Col>
                                    <Card style={{height:"350px"}}>
                                            <CardBody>
                                                <div>
                                                <span className='btn btn-light text-uppercase'>Moving Average Price</span>
                                                </div>
                                                

                                            </CardBody>
                                    </Card>
                                    <Card style={{height:"350px"}}>
                                        <CardBody>
                                            <div>
                                            <span className='btn btn-light text-uppercase'>Boxplot</span>
                                            </div>
                                            

                                        </CardBody>
                                    </Card>
                                </Col>
                                <Col>
                                <Col>
                                    <Card style={{height:"350px"}}>
                                            <CardBody>
                                                <div>
                                                <span className='btn btn-light text-uppercase'>Word Cloud[Positive]</span>
                                                </div>
                                                

                                            </CardBody>
                                    </Card>
                                    <Card style={{height:"350px"}}>
                                        <CardBody>
                                            <div>
                                            <span className='btn btn-light text-uppercase'>Word Cloud[Negative]</span>
                                            </div>
                                            

                                        </CardBody>
                                    </Card>
                                </Col>
                                </Col>
                                
                            </Row>
                        </Col>
                    </Row>
                </Container>
                

            </div>
            
        </React.Fragment>
    );
}

export default MarketAnalysis;
