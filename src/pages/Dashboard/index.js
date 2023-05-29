
import React, {useState} from 'react';
import { Card, CardBody, CardHeader,Collapse,  CardTitle,Row, Nav, NavLink, NavItem, CardText,TabPane,TabContent, Col, Container, DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from 'reactstrap';
//import { VectorMap } from "react-jvectormap";
import "../Maps/jquery-jvectormap.scss";
// import apexChart
/*import LineApexChart from "../AllCharts/apex/chartapex"
import DashedLine from "../AllCharts/apex/dashedLine"
import SplineArea from "../AllCharts/apex/SplineArea"
import Apaexlinecolumn from "../AllCharts/apex/apaexlinecolumn"
import ColumnWithDataLabels from "../AllCharts/apex/ColumnWithDataLabels"
import BarChart from "../AllCharts/apex/barchart"
import LineColumnArea from "../AllCharts/apex/LineColumnArea"
import RadialChart from "../AllCharts/apex/RadialChart"
import PieChart from "../AllCharts/apex/PieChart"
import DonutChart from "../AllCharts/apex/dountchart"*/
import PieChart from "../AllCharts/apex/PieChart"
import classnames from "classnames"

const MarketPrice = (props) => {
    const [activeTab, setactiveTab] = useState("1")
    const toggle = tab => {
        if (activeTab !== tab) {
            setactiveTab(tab)
        }
    }
    const [activeTabToken, setactiveTabToken] = useState("tok_1")
    const toggleToken = tab => {
        if (activeTabToken !== tab) {
            setactiveTabToken(tab)
        }
    }

    const [activeTabMech, setactiveMech] = useState("5")
    const toggleMech = tab => {
        if (activeTabMech !== tab) {
            setactiveMech(tab)
        }
    }


    const [col_acc0, set_col_acc0] = useState(false)
    const [col_acc1, set_col_acc1] = useState(false)
    const [col_acc2, set_col_acc2] = useState(false)
    const [col_acc3, set_col_acc3] = useState(false)
    const [col_acc4, set_col_acc4] = useState(false)
    const [col_acc5, set_col_acc5] = useState(false)
    const [col_acc6, set_col_acc6] = useState(false)
    const [col_acc7, set_col_acc7] = useState(false)
    const [col_acc9, set_col_acc8] = useState(false)
    const t_col_acc0 = () => {
        set_col_acc0(!col_acc0)
        set_col_acc7(false)
        set_col_acc1(false)
        set_col_acc2(false)
        set_col_acc3(false)
        set_col_acc4(false)
        set_col_acc5(false)
        set_col_acc6(false)
    }

    const t_col_acc1 = () => {
        set_col_acc1(!col_acc1)
        set_col_acc0(false)
        set_col_acc7(false)
        set_col_acc2(false)
        set_col_acc3(false)
        set_col_acc4(false)
        set_col_acc5(false)
        set_col_acc6(false)
    }

    const t_col_acc2 = () => {
        set_col_acc2(!col_acc2)
        set_col_acc0(false)
        set_col_acc1(false)
        set_col_acc7(false)
        set_col_acc3(false)
        set_col_acc4(false)
        set_col_acc5(false)
        set_col_acc6(false)
    }
    const t_col_acc3 = () => {
        set_col_acc3(!col_acc3)
        set_col_acc0(false)
        set_col_acc1(false)
        set_col_acc2(false)
        set_col_acc7(false)
        set_col_acc4(false)
        set_col_acc5(false)
        set_col_acc6(false)
    }
    const t_col_acc4 = () => {
        set_col_acc4(!col_acc4)
        set_col_acc0(false)
        set_col_acc1(false)
        set_col_acc2(false)
        set_col_acc3(false)
        set_col_acc7(false)
        set_col_acc5(false)
        set_col_acc6(false)
    }
    const t_col_acc5 = () => {
        set_col_acc5(!col_acc5)
        set_col_acc0(false)
        set_col_acc1(false)
        set_col_acc2(false)
        set_col_acc3(false)
        set_col_acc4(false)
        set_col_acc7(false)
        set_col_acc6(false)
    }
    const t_col_acc6 = () => {
        set_col_acc6(!col_acc6)
        set_col_acc0(false)
        set_col_acc1(false)
        set_col_acc2(false)
        set_col_acc3(false)
        set_col_acc4(false)
        set_col_acc5(false)
        set_col_acc7(false)
    }
    const t_col_acc7 = () => {
        set_col_acc7(!col_acc7)
        set_col_acc0(false)
        set_col_acc1(false)
        set_col_acc2(false)
        set_col_acc3(false)
        set_col_acc4(false)
        set_col_acc5(false)
        set_col_acc6(false)
    }
    const map = React.createRef(null);
    return (
        <React.Fragment>
             <div className="page-content">
                <div class="row">
                    <div class="col-md-5 p-2">
                        <Card>
                            <CardHeader>
                            <CardTitle className="h4">DOWNLOAD REPORT</CardTitle>
                            </CardHeader>
                            <CardBody>
                                <PieChart/>
                            </CardBody>
                        </Card>
                    </div>
                    <div class="col-md-7 p-2">
                        <Card >
                            <CardHeader>
                                <CardTitle className="h4">PROTOCOL</CardTitle>
                            </CardHeader>
                            <CardBody>

                        <div class="row">
                            <div class="col-md-6 p-2">
                                <Card>
                                    <CardBody>
                                        <div
                                            className="accordion accordion-flush"
                                            id="accordionFlushExample"
                                        >
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="headingFlushOne">
                                                    <button
                                                        className={classnames(
                                                            "accordion-button",
                                                            "fw-medium",
                                                            { collapsed: !col_acc0 }
                                                        )}
                                                        type="button"
                                                        onClick={t_col_acc0}
                                                        style={{ cursor: "pointer" }}
                                                    >
                                                        P 
                                                    </button>
                                                </h2>

                                                <Collapse
                                                    isOpen={col_acc0}
                                                    className="accordion-collapse"
                                                >
                                                    <div className="accordion-body">
                                                        <div className="text-muted">
                                                            <strong className="text-dark">
                                                                This is the first item's accordion body.
                                                            </strong>{" "}
                                                            It is hidden by default, until the collapse
                                                            plugin adds the appropriate classes that we use
                                                            to style each element. These classes control the
                                                            overall appearance, as well as the showing and
                                                            hiding via CSS transitions. You can modify any
                                                            of this with custom CSS or overriding our
                                                            default variables. It's also worth noting that
                                                            just about any HTML can go within the{" "}
                                                            <code>.accordion-body</code>, though the
                                                            transition does limit overflow.
                                                        </div>
                                                    </div>
                                                </Collapse>
                                            </div>
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="headingFlushTwo">
                                                    <button
                                                        className={classnames(
                                                            "accordion-button",
                                                            "fw-medium",
                                                            { collapsed: !col_acc1 }
                                                        )}
                                                        type="button"
                                                        onClick={t_col_acc1}
                                                        style={{ cursor: "pointer" }}
                                                    >
                                                        R
                                                    </button>
                                                </h2>

                                                <Collapse
                                                    isOpen={col_acc1}
                                                    className="accordion-collapse"
                                                >
                                                    <div className="accordion-body">
                                                        <div className="text-muted">
                                                            <strong className="text-dark">
                                                                This is the second item's accordion body.
                                                            </strong>{" "}
                                                            It is hidden by default, until the collapse
                                                            plugin adds the appropriate classes that we use
                                                            to style each element. These classes control the
                                                            overall appearance, as well as the showing and
                                                            hiding via CSS transitions. You can modify any
                                                            of this with custom CSS or overriding our
                                                            default variables. It's also worth noting that
                                                            just about any HTML can go within the{" "}
                                                            <code>.accordion-body</code>, though the
                                                            transition does limit overflow.
                                                        </div>
                                                    </div>
                                                </Collapse>
                                            </div>
                                            <div className="accordion-item">
                                                <h2
                                                    className="accordion-header"
                                                    id="headingFlushThree"
                                                >
                                                    <button
                                                        className={classnames(
                                                            "accordion-button",
                                                            "fw-medium",
                                                            { collapsed: !col_acc2 }
                                                        )}
                                                        type="button"
                                                        onClick={t_col_acc2}
                                                        style={{ cursor: "pointer" }}
                                                    >
                                                        O
                                                    </button>
                                                </h2>
                                                <Collapse
                                                    isOpen={col_acc2}
                                                    className="accordion-collapse"
                                                >
                                                    <div className="accordion-body">
                                                        <div className="text-muted">
                                                            <strong className="text-dark">
                                                                This is the third item's accordion body.
                                                            </strong>{" "}
                                                            It is hidden by default, until the collapse
                                                            plugin adds the appropriate classes that we use
                                                            to style each element. These classes control the
                                                            overall appearance, as well as the showing and
                                                            hiding via CSS transitions. You can modify any
                                                            of this with custom CSS or overriding our
                                                            default variables. It's also worth noting that
                                                            just about any HTML can go within the{" "}
                                                            <code>.accordion-body</code>, though the
                                                            transition does limit overflow.
                                                        </div>
                                                    </div>
                                                </Collapse>
                                            </div>
                                            <div className="accordion-item">
                                                <h2
                                                    className="accordion-header"
                                                    id="headingFlushThree"
                                                >
                                                    <button
                                                        className={classnames(
                                                            "accordion-button",
                                                            "fw-medium",
                                                            { collapsed: !col_acc3 }
                                                        )}
                                                        type="button"
                                                        onClick={t_col_acc3}
                                                        style={{ cursor: "pointer" }}
                                                    >
                                                        T
                                                    </button>
                                                </h2>
                                                <Collapse
                                                    isOpen={col_acc3}
                                                    className="accordion-collapse"
                                                >
                                                    <div className="accordion-body">
                                                        <div className="text-muted">
                                                            <strong className="text-dark">
                                                                This is the third item's accordion body.
                                                            </strong>{" "}
                                                            It is hidden by default, until the collapse
                                                            plugin adds the appropriate classes that we use
                                                            to style each element. These classes control the
                                                            overall appearance, as well as the showing and
                                                            hiding via CSS transitions. You can modify any
                                                            of this with custom CSS or overriding our
                                                            default variables. It's also worth noting that
                                                            just about any HTML can go within the{" "}
                                                            <code>.accordion-body</code>, though the
                                                            transition does limit overflow.
                                                        </div>
                                                    </div>
                                                </Collapse>
                                            </div>
                                        </div>
                                    </CardBody>
                                </Card>
                            </div>
                            <div class="col-md-6 p-2">
                            <Card>
                                    <CardBody>
                                        <div
                                            className="accordion accordion-flush"
                                            id="accordionFlushExample"
                                        >
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="headingFlushOne">
                                                    <button
                                                        className={classnames(
                                                            "accordion-button",
                                                            "fw-medium",
                                                            { collapsed: !col_acc4 }
                                                        )}
                                                        type="button"
                                                        onClick={t_col_acc4}
                                                        style={{ cursor: "pointer" }}
                                                    >
                                                        O
                                                    </button>
                                                </h2>

                                                <Collapse
                                                    isOpen={col_acc4}
                                                    className="accordion-collapse"
                                                >
                                                    <div className="accordion-body">
                                                        <div className="text-muted">
                                                            <strong className="text-dark">
                                                                This is the first item's accordion body.
                                                            </strong>{" "}
                                                            It is hidden by default, until the collapse
                                                            plugin adds the appropriate classes that we use
                                                            to style each element. These classes control the
                                                            overall appearance, as well as the showing and
                                                            hiding via CSS transitions. You can modify any
                                                            of this with custom CSS or overriding our
                                                            default variables. It's also worth noting that
                                                            just about any HTML can go within the{" "}
                                                            <code>.accordion-body</code>, though the
                                                            transition does limit overflow.
                                                        </div>
                                                    </div>
                                                </Collapse>
                                            </div>
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="headingFlushTwo">
                                                    <button
                                                        className={classnames(
                                                            "accordion-button",
                                                            "fw-medium",
                                                            { collapsed: !col_acc5 }
                                                        )}
                                                        type="button"
                                                        onClick={t_col_acc5}
                                                        style={{ cursor: "pointer" }}
                                                    >
                                                        C
                                                    </button>
                                                </h2>

                                                <Collapse
                                                    isOpen={col_acc5}
                                                    className="accordion-collapse"
                                                >
                                                    <div className="accordion-body">
                                                        <div className="text-muted">
                                                            <strong className="text-dark">
                                                                This is the second item's accordion body.
                                                            </strong>{" "}
                                                            It is hidden by default, until the collapse
                                                            plugin adds the appropriate classes that we use
                                                            to style each element. These classes control the
                                                            overall appearance, as well as the showing and
                                                            hiding via CSS transitions. You can modify any
                                                            of this with custom CSS or overriding our
                                                            default variables. It's also worth noting that
                                                            just about any HTML can go within the{" "}
                                                            <code>.accordion-body</code>, though the
                                                            transition does limit overflow.
                                                        </div>
                                                    </div>
                                                </Collapse>
                                            </div>
                                            <div className="accordion-item">
                                                <h2
                                                    className="accordion-header"
                                                    id="headingFlushThree"
                                                >
                                                    <button
                                                        className={classnames(
                                                            "accordion-button",
                                                            "fw-medium",
                                                            { collapsed: !col_acc6 }
                                                        )}
                                                        type="button"
                                                        onClick={t_col_acc6}
                                                        style={{ cursor: "pointer" }}
                                                    >
                                                        O
                                                    </button>
                                                </h2>
                                                <Collapse
                                                    isOpen={col_acc6}
                                                    className="accordion-collapse"
                                                >
                                                    <div className="accordion-body">
                                                        <div className="text-muted">
                                                            <strong className="text-dark">
                                                                This is the third item's accordion body.
                                                            </strong>{" "}
                                                            It is hidden by default, until the collapse
                                                            plugin adds the appropriate classes that we use
                                                            to style each element. These classes control the
                                                            overall appearance, as well as the showing and
                                                            hiding via CSS transitions. You can modify any
                                                            of this with custom CSS or overriding our
                                                            default variables. It's also worth noting that
                                                            just about any HTML can go within the{" "}
                                                            <code>.accordion-body</code>, though the
                                                            transition does limit overflow.
                                                        </div>
                                                    </div>
                                                </Collapse>
                                            </div>
                                            <div className="accordion-item">
                                                <h2
                                                    className="accordion-header"
                                                    id="headingFlushThree"
                                                >
                                                    <button
                                                        className={classnames(
                                                            "accordion-button",
                                                            "fw-medium",
                                                            { collapsed: !col_acc7 }
                                                        )}
                                                        type="button"
                                                        onClick={t_col_acc7}
                                                        style={{ cursor: "pointer" }}
                                                    >
                                                        L
                                                    </button>
                                                </h2>
                                                <Collapse
                                                    isOpen={col_acc7}
                                                    className="accordion-collapse"
                                                >
                                                    <div className="accordion-body">
                                                        <div className="text-muted">
                                                            <strong className="text-dark">
                                                                This is the third item's accordion body.
                                                            </strong>{" "}
                                                            It is hidden by default, until the collapse
                                                            plugin adds the appropriate classes that we use
                                                            to style each element. These classes control the
                                                            overall appearance, as well as the showing and
                                                            hiding via CSS transitions. You can modify any
                                                            of this with custom CSS or overriding our
                                                            default variables. It's also worth noting that
                                                            just about any HTML can go within the{" "}
                                                            <code>.accordion-body</code>, though the
                                                            transition does limit overflow.
                                                        </div>
                                                    </div>
                                                </Collapse>
                                            </div>
                                        </div>
                                    </CardBody>
                                </Card>
                            </div>
                        </div>
                        
                    </CardBody>
                    </Card>
                        
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4 p-2">
                    <Card>
                                <CardHeader>
                                    <CardTitle className="h4">Market</CardTitle>                                </CardHeader>
                                <CardBody>
                                    <Nav tabs>
                                        <NavItem>
                                            <NavLink
                                                style={{ cursor: "pointer" }}
                                                className={classnames({
                                                    active: activeTab === "1",
                                                })}
                                                onClick={() => {
                                                    toggle("1")
                                                }}
                                            >
                                                Tab1
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                style={{ cursor: "pointer" }}
                                                className={classnames({
                                                    active: activeTab === "2",
                                                })}
                                                onClick={() => {
                                                    toggle("2")
                                                }}
                                            >
                                                Tab2
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                style={{ cursor: "pointer" }}
                                                className={classnames({
                                                    active: activeTab === "3",
                                                })}
                                                onClick={() => {
                                                    toggle("3")
                                                }}
                                            >
                                                Tab3
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                style={{ cursor: "pointer" }}
                                                className={classnames({
                                                    active: activeTab === "4",
                                                })}
                                                onClick={() => {
                                                    toggle("4")
                                                }}
                                            >
                                                Tab4
                                            </NavLink>
                                        </NavItem>
                                    </Nav>

                                    <TabContent activeTab={activeTab} className="p-3 text-muted">
                                        <TabPane tabId="1">
                                            <Row>
                                                <Col sm="12">
                                                    <CardText className="mb-0">
                                                        Raw denim you probably haven't heard of them jean
                                                        shorts Austin. Nesciunt tofu stumptown aliqua, retro
                                                        synth master cleanse. Mustache cliche tempor,
                                                        williamsburg carles vegan helvetica. Reprehenderit
                                                        butcher retro keffiyeh dreamcatcher synth. Cosby
                                                        sweater eu banh mi, qui irure terry richardson ex
                                                        squid. Aliquip placeat salvia cillum iphone. Seitan
                                                        aliquip quis cardigan american apparel, butcher
                                                        voluptate nisi qui.
                                                    </CardText>
                                                </Col>
                                            </Row>
                                        </TabPane>
                                        <TabPane tabId="2">
                                            <Row>
                                                <Col sm="12">
                                                    <CardText className="mb-0">
                                                        Food truck fixie locavore, accusamus mcsweeney's
                                                        marfa nulla single-origin coffee squid. Exercitation
                                                        +1 labore velit, blog sartorial PBR leggings next
                                                        level wes anderson artisan four loko farm-to-table
                                                        craft beer twee. Qui photo booth letterpress,
                                                        commodo enim craft beer mlkshk aliquip jean shorts
                                                        ullamco ad vinyl cillum PBR. Homo nostrud organic,
                                                        assumenda labore aesthetic magna delectus mollit.
                                                        Keytar helvetica VHS salvia yr, vero magna velit
                                                        sapiente labore stumptown. Vegan fanny pack odio
                                                        cillum wes anderson 8-bit.
                                                    </CardText>
                                                </Col>
                                            </Row>
                                        </TabPane>
                                        <TabPane tabId="3">
                                            <Row>
                                                <Col sm="12">
                                                    <CardText className="mb-0">
                                                        Etsy mixtape wayfarers, ethical wes anderson tofu
                                                        before they sold out mcsweeney's organic lomo retro
                                                        fanny pack lo-fi farm-to-table readymade. Messenger
                                                        bag gentrify pitchfork tattooed craft beer, iphone
                                                        skateboard locavore carles etsy salvia banksy hoodie
                                                        helvetica. DIY synth PBR banksy irony. Leggings
                                                        gentrify squid 8-bit cred pitchfork. Williamsburg
                                                        banh mi whatever gluten-free, carles pitchfork
                                                        biodiesel fixie etsy retro mlkshk vice blog.
                                                        Scenester cred you probably haven't heard of them,
                                                        vinyl craft beer blog stumptown. Pitchfork
                                                        sustainable tofu synth chambray yr.
                                                    </CardText>
                                                </Col>
                                            </Row>
                                        </TabPane>
                                        <TabPane tabId="4">
                                            <Row>
                                                <Col sm="12">
                                                    <CardText className="mb-0">
                                                        Trust fund seitan letterpress, keytar raw denim
                                                        keffiyeh etsy art party before they sold out master
                                                        cleanse gluten-free squid scenester freegan cosby
                                                        sweater. Fanny pack portland seitan DIY, art party
                                                        locavore wolf cliche high life echo park Austin.
                                                        Cred vinyl keffiyeh DIY salvia PBR, banh mi before
                                                        they sold out farm-to-table VHS viral locavore cosby
                                                        sweater. Lomo wolf viral, mustache readymade
                                                        thundercats keffiyeh craft beer marfa ethical. Wolf
                                                        salvia freegan, sartorial keffiyeh echo park vegan.
                                                    </CardText>
                                                </Col>
                                            </Row>
                                        </TabPane>
                                    </TabContent>
                                </CardBody>
                    </Card>
                    </div>
                    <div class="col-md-4 p-2">
                    <Card>
                                <CardHeader>
                                    <CardTitle className="h4">Mechanism</CardTitle>
                                </CardHeader>
                                <CardBody>
                                    <Nav pills className="navtab-bg nav-justified">
                                        <NavItem>
                                            <NavLink
                                                style={{ cursor: "pointer" }}
                                                className={classnames({
                                                    active: activeTabMech === "5",
                                                })}
                                                onClick={() => {
                                                    toggleMech("5")
                                                }}
                                            >
                                                P
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                style={{ cursor: "pointer" }}
                                                className={classnames({
                                                    active: activeTabMech === "6",
                                                })}
                                                onClick={() => {
                                                    toggleMech("6")
                                                }}
                                            >
                                                R
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                style={{ cursor: "pointer" }}
                                                className={classnames({
                                                    active: activeTabMech === "7",
                                                })}
                                                onClick={() => {
                                                    toggleMech("7")
                                                }}
                                            >
                                                O
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                style={{ cursor: "pointer" }}
                                                className={classnames({
                                                    active: activeTabMech === "8",
                                                })}
                                                onClick={() => {
                                                    toggleMech("8")
                                                }}
                                            >
                                                T
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                style={{ cursor: "pointer" }}
                                                className={classnames({
                                                    active: activeTabMech === "9",
                                                })}
                                                onClick={() => {
                                                    toggleMech("9")
                                                }}
                                            >
                                                O
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                style={{ cursor: "pointer" }}
                                                className={classnames({
                                                    active: activeTabMech === "10",
                                                })}
                                                onClick={() => {
                                                    toggleMech("10")
                                                }}
                                            >
                                                C
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                style={{ cursor: "pointer" }}
                                                className={classnames({
                                                    active: activeTabMech === "11",
                                                })}
                                                onClick={() => {
                                                    toggleMech("11")
                                                }}
                                            >
                                                O
                                            </NavLink>
                                        </NavItem>
                                    </Nav>

                                    <TabContent activeTab={activeTabMech} className="p-3 text-muted">
                                        <TabPane tabId="5">
                                            <Row>
                                                <Col sm="12">
                                                    <CardText className="mb-0">
                                                        Raw denim you probably haven't heard of them jean
                                                        shorts Austin. Nesciunt tofu stumptown aliqua, retro
                                                        synth master cleanse. Mustache cliche tempor,
                                                        williamsburg carles vegan helvetica. Reprehenderit
                                                        butcher retro keffiyeh dreamcatcher synth. Cosby
                                                        sweater eu banh mi, qui irure terry richardson ex
                                                        squid. Aliquip placeat salvia cillum iphone. Seitan
                                                        aliquip quis cardigan american apparel, butcher
                                                        voluptate nisi qui.
                                                    </CardText>
                                                </Col>
                                            </Row>
                                        </TabPane>
                                        <TabPane tabId="6">
                                            <Row>
                                                <Col sm="12">
                                                    <CardText className="mb-0">
                                                        Food truck fixie locavore, accusamus mcsweeney's
                                                        marfa nulla single-origin coffee squid. Exercitation
                                                        +1 labore velit, blog sartorial PBR leggings next
                                                        level wes anderson artisan four loko farm-to-table
                                                        craft beer twee. Qui photo booth letterpress,
                                                        commodo enim craft beer mlkshk aliquip jean shorts
                                                        ullamco ad vinyl cillum PBR. Homo nostrud organic,
                                                        assumenda labore aesthetic magna delectus mollit.
                                                        Keytar helvetica VHS salvia yr, vero magna velit
                                                        sapiente labore stumptown. Vegan fanny pack odio
                                                        cillum wes anderson 8-bit.
                                                    </CardText>
                                                </Col>
                                            </Row>
                                        </TabPane>
                                        <TabPane tabId="7">
                                            <Row>
                                                <Col sm="12">
                                                    <CardText className="mb-0">
                                                        Etsy mixtape wayfarers, ethical wes anderson tofu
                                                        before they sold out mcsweeney's organic lomo retro
                                                        fanny pack lo-fi farm-to-table readymade. Messenger
                                                        bag gentrify pitchfork tattooed craft beer, iphone
                                                        skateboard locavore carles etsy salvia banksy hoodie
                                                        helvetica. DIY synth PBR banksy irony. Leggings
                                                        gentrify squid 8-bit cred pitchfork. Williamsburg
                                                        banh mi whatever gluten-free, carles pitchfork
                                                        biodiesel fixie etsy retro mlkshk vice blog.
                                                        Scenester cred you probably haven't heard of them,
                                                        vinyl craft beer blog stumptown. Pitchfork
                                                        sustainable tofu synth chambray yr.
                                                    </CardText>
                                                </Col>
                                            </Row>
                                        </TabPane>

                                        <TabPane tabId="8">
                                            <Row>
                                                <Col sm="12">
                                                    <CardText className="mb-0">
                                                        Trust fund seitan letterpress, keytar raw denim
                                                        keffiyeh etsy art party before they sold out master
                                                        cleanse gluten-free squid scenester freegan cosby
                                                        sweater. Fanny pack portland seitan DIY, art party
                                                        locavore wolf cliche high life echo park Austin.
                                                        Cred vinyl keffiyeh DIY salvia PBR, banh mi before
                                                        they sold out farm-to-table VHS viral locavore cosby
                                                        sweater. Lomo wolf viral, mustache readymade
                                                        thundercats keffiyeh craft beer marfa ethical. Wolf
                                                        salvia freegan, sartorial keffiyeh echo park vegan.
                                                    </CardText>
                                                </Col>
                                            </Row>
                                        </TabPane>
                                        <TabPane tabId="9">
                                            <Row>
                                                <Col sm="12">
                                                    <CardText className="mb-0">
                                                        Trust fund seitan letterpress, keytar raw denim
                                                        keffiyeh etsy art party before they sold out master
                                                        cleanse gluten-free squid scenester freegan cosby
                                                        sweater. Fanny pack portland seitan DIY, art party
                                                        locavore wolf cliche high life echo park Austin.
                                                        Cred vinyl keffiyeh DIY salvia PBR, banh mi before
                                                        they sold out farm-to-table VHS viral locavore cosby
                                                        sweater. Lomo wolf viral, mustache readymade
                                                        thundercats keffiyeh craft beer marfa ethical. Wolf
                                                        salvia freegan, sartorial keffiyeh echo park vegan.
                                                    </CardText>
                                                </Col>
                                            </Row>
                                        </TabPane>
                                        <TabPane tabId="10">
                                            <Row>
                                                <Col sm="12">
                                                    <CardText className="mb-0">
                                                        Trust fund seitan letterpress, keytar raw denim
                                                        keffiyeh etsy art party before they sold out master
                                                        cleanse gluten-free squid scenester freegan cosby
                                                        sweater. Fanny pack portland seitan DIY, art party
                                                        locavore wolf cliche high life echo park Austin.
                                                        Cred vinyl keffiyeh DIY salvia PBR, banh mi before
                                                        they sold out farm-to-table VHS viral locavore cosby
                                                        sweater. Lomo wolf viral, mustache readymade
                                                        thundercats keffiyeh craft beer marfa ethical. Wolf
                                                        salvia freegan, sartorial keffiyeh echo park vegan.
                                                    </CardText>
                                                </Col>
                                            </Row>
                                        </TabPane>
                                        <TabPane tabId="11">
                                            <Row>
                                                <Col sm="12">
                                                    <CardText className="mb-0">
                                                        Trust fund seitan letterpress, keytar raw denim
                                                        keffiyeh etsy art party before they sold out master
                                                        cleanse gluten-free squid scenester freegan cosby
                                                        sweater. Fanny pack portland seitan DIY, art party
                                                        locavore wolf cliche high life echo park Austin.
                                                        Cred vinyl keffiyeh DIY salvia PBR, banh mi before
                                                        they sold out farm-to-table VHS viral locavore cosby
                                                        sweater. Lomo wolf viral, mustache readymade
                                                        thundercats keffiyeh craft beer marfa ethical. Wolf
                                                        salvia freegan, sartorial keffiyeh echo park vegan.
                                                    </CardText>
                                                </Col>
                                            </Row>
                                        </TabPane>
                                    </TabContent>
                                </CardBody>
                            </Card>
                    </div>
                    <div class="col-md-4 p-2">
                    <Card>
                                <CardHeader>
                                    <CardTitle className="h4">Token</CardTitle>
                                </CardHeader>
                                <CardBody>
                                    <Nav tabs>
                                        <NavItem>
                                            <NavLink
                                                style={{ cursor: "pointer" }}
                                                className={classnames({
                                                    active: activeTabToken === "tok_1",
                                                })}
                                                onClick={() => {
                                                    toggleToken("tok_1")
                                                }}
                                            >
                                                Tab1
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                style={{ cursor: "pointer" }}
                                                className={classnames({
                                                    active: activeTabToken === "tok_2",
                                                })}
                                                onClick={() => {
                                                    toggleToken("tok_2")
                                                }}
                                            >
                                                Tab2
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                style={{ cursor: "pointer" }}
                                                className={classnames({
                                                    active: activeTabToken === "tok_3",
                                                })}
                                                onClick={() => {
                                                    toggleToken("tok_3")
                                                }}
                                            >
                                                Tab3
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                style={{ cursor: "pointer" }}
                                                className={classnames({
                                                    active: activeTabToken === "tok_4",
                                                })}
                                                onClick={() => {
                                                    toggleToken("tok_4")
                                                }}
                                            >
                                                Tab4
                                            </NavLink>
                                        </NavItem>
                                    </Nav>

                                    <TabContent activeTab={activeTabToken} className="p-3 text-muted">
                                        <TabPane tabId="tok_1">
                                            <Row>
                                                <Col sm="12">
                                                    <CardText className="mb-0">
                                                        Raw denim you probably haven't heard of them jean
                                                        shorts Austin. Nesciunt tofu stumptown aliqua, retro
                                                        synth master cleanse. Mustache cliche tempor,
                                                        williamsburg carles vegan helvetica. Reprehenderit
                                                        butcher retro keffiyeh dreamcatcher synth. Cosby
                                                        sweater eu banh mi, qui irure terry richardson ex
                                                        squid. Aliquip placeat salvia cillum iphone. Seitan
                                                        aliquip quis cardigan american apparel, butcher
                                                        voluptate nisi qui.
                                                    </CardText>
                                                </Col>
                                            </Row>
                                        </TabPane>
                                        <TabPane tabId="tok_2">
                                            <Row>
                                                <Col sm="12">
                                                    <CardText className="mb-0">
                                                        Food truck fixie locavore, accusamus mcsweeney's
                                                        marfa nulla single-origin coffee squid. Exercitation
                                                        +1 labore velit, blog sartorial PBR leggings next
                                                        level wes anderson artisan four loko farm-to-table
                                                        craft beer twee. Qui photo booth letterpress,
                                                        commodo enim craft beer mlkshk aliquip jean shorts
                                                        ullamco ad vinyl cillum PBR. Homo nostrud organic,
                                                        assumenda labore aesthetic magna delectus mollit.
                                                        Keytar helvetica VHS salvia yr, vero magna velit
                                                        sapiente labore stumptown. Vegan fanny pack odio
                                                        cillum wes anderson 8-bit.
                                                    </CardText>
                                                </Col>
                                            </Row>
                                        </TabPane>
                                        <TabPane tabId="tok_3">
                                            <Row>
                                                <Col sm="12">
                                                    <CardText className="mb-0">
                                                        Etsy mixtape wayfarers, ethical wes anderson tofu
                                                        before they sold out mcsweeney's organic lomo retro
                                                        fanny pack lo-fi farm-to-table readymade. Messenger
                                                        bag gentrify pitchfork tattooed craft beer, iphone
                                                        skateboard locavore carles etsy salvia banksy hoodie
                                                        helvetica. DIY synth PBR banksy irony. Leggings
                                                        gentrify squid 8-bit cred pitchfork. Williamsburg
                                                        banh mi whatever gluten-free, carles pitchfork
                                                        biodiesel fixie etsy retro mlkshk vice blog.
                                                        Scenester cred you probably haven't heard of them,
                                                        vinyl craft beer blog stumptown. Pitchfork
                                                        sustainable tofu synth chambray yr.
                                                    </CardText>
                                                </Col>
                                            </Row>
                                        </TabPane>
                                        <TabPane tabId="tok_4">
                                            <Row>
                                                <Col sm="12">
                                                    <CardText className="mb-0">
                                                        Trust fund seitan letterpress, keytar raw denim
                                                        keffiyeh etsy art party before they sold out master
                                                        cleanse gluten-free squid scenester freegan cosby
                                                        sweater. Fanny pack portland seitan DIY, art party
                                                        locavore wolf cliche high life echo park Austin.
                                                        Cred vinyl keffiyeh DIY salvia PBR, banh mi before
                                                        they sold out farm-to-table VHS viral locavore cosby
                                                        sweater. Lomo wolf viral, mustache readymade
                                                        thundercats keffiyeh craft beer marfa ethical. Wolf
                                                        salvia freegan, sartorial keffiyeh echo park vegan.
                                                    </CardText>
                                                </Col>
                                            </Row>
                                        </TabPane>
                                    </TabContent>
                                </CardBody>
                    </Card>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default MarketPrice;