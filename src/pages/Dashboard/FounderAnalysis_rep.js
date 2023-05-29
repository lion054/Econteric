import React from 'react';

import {
    Card,
    CardBody,
    Col,
    Container,
    Row
} from "reactstrap";



const FounderAnalysis = () => {
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
                                            <span className='btn btn-light text-uppercase'>Tweets Frequency</span>
                                            </div>


                                        </CardBody>
                                    </Card>
                                     <Card style={{height:"350px"}}>
                                        <CardBody>
                                            <div>
                                            <span className='btn btn-light text-uppercase'>Word Cloud</span>
                                            </div>
                                            

                                        </CardBody>
                                        </Card>
                                </Col>
                                <Col lg={8}>
                                    <Card style={{height:"350px"}}>
                                            <CardBody>
                                                <div>
                                                <span className='btn btn-light text-uppercase'>Total Retweets/Favourites</span>
                                                </div>
                                                

                                            </CardBody>
                                    </Card>
                                    <Card style={{height:"350px"}}>
                                        <CardBody>
                                            <div>
                                            <span className='btn btn-light text-uppercase'>Topic Analysis</span>
                                            </div>
                                            <div  class="table-responsive">
                                <table class="table table-bordered-0">
                                    <thead>
                                        <tr>
                                            <td><div className='d-flex justify-content-between'><span >$1.00</span><span className='text-success'>+0.37%</span></div></td>
                                            <td><div className='d-flex justify-content-between'><span >$1.09</span><span className='text-success'>+0.42%</span></div></td>
                                            <td><div className='d-flex justify-content-between'><span >$1.01</span><span className='text-danger'>-0.51%</span></div></td>
                                            <td><div className='d-flex justify-content-between'><span >$1.09</span><span className='text-success'>+0.42%</span></div></td>
                                            <td><div className='d-flex justify-content-between'><span >$1.01</span><span className='text-danger'>-0.51%%</span></div></td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Stable coin</td>
                                            <td>Kinder</td>
                                            <td>Exchanges</td>
                                            <td>Kinder</td>
                                            <td>Exchanges</td>
                                        </tr>
                                        <tr>
                                            <td>Virtue</td>
                                            <td>Polygon</td>
                                            <td>Returns</td>
                                            <td>Yearn</td>
                                            <td>Polygons</td>
                                        </tr>
                                        <tr>
                                            <td>Bitfinex</td>
                                            <td>Hodl</td>
                                            <td>Fantom</td>
                                            <td>Alchemix</td>
                                            <td>Hodl</td>
                                        </tr>
                                        <tr>
                                            <td>Mining</td>
                                            <td>Payscale</td>
                                            <td>Payscale</td>
                                            <td>Payscale</td>
                                            <td>Payscale</td>
                                        </tr>
                                       
                                    </tbody>
                                </table>
                           </div>
                                            

                                        </CardBody>
                                    </Card>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
                

            </div>
            
        </React.Fragment>
    );
}

export default FounderAnalysis;
