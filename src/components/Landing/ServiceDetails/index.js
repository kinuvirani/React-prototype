import React, {Component} from 'react';
import {Row, Col} from 'antd';
import { Element } from 'react-scroll';
import service1 from "../../../assets/images/service1.png";
import service2 from "../../../assets/images/service2.png";
import service3 from "../../../assets/images/service3.png";
import '../index.scss';

class ServiceDetails extends Component {
    render() {
        return(
            <div className="Business-wrap-container">
                <div className="container-space">
                    <Element id='service1'>
                        <Row gutter={16}>
                            <Col md={14}>
                                <div className="analysis-wrap">
                                <h2>Business Analysis</h2>
                                <p className="service-specifications">
                                    As a business analyst we specialise in below areas.
                                </p>
                                <ul>
                                    <li>Proof of Value & Proof of Concept</li>
                                    <li>Data accuracy & data reconcillation</li>
                                    <li>Map technical data to business view></li>
                                    <li>Trace data journey from business transaction to data table</li>
                                </ul>
                                </div>
                            </Col>
                            <Col md={10}>
                                <img className="img-fluide service-1" src={service1}/>
                            </Col>
                        </Row>
                    </Element>
                </div>
                <div className="container-space">
                    <Element id='service2'>
                        <Row gutter={16}>
                            <Col md={14}>
                                <img className="img-fluide service-2" src={service2} />
                            </Col>
                            <Col md={10}>
                                <div className="Discovery-wrap">
                                    <h2>Data Discovery</h2>
                                    <p>
                                        We specialise in data discovery exercise to find the most appropriate data sources and map the technical fields to business view for the undermentioned topics.
                                    </p>
                                </div>
                            </Col>
                        </Row>
                    </Element>
                </div>
                <div className="container-space">
                    <Element id='service3'>
                        <Row gutter={16}>
                            <Col md={14}>
                                <div className="Design-wrap">
                                    <h2>UI Design</h2>
                                    <p>
                                        We provide UI design for the undermentioned topics.
                                    </p>
                                </div>
                            </Col>
                            <Col md={10}>
                                <img className="img-fluide service-3" src={service3} />
                            </Col>
                        </Row>
                    </Element>
                </div>
            </div>
        )
    }
}

export default ServiceDetails;
