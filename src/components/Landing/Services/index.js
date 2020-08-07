import React, {Component} from 'react';
import {Row, Col, Card} from 'antd';
import { Element } from 'react-scroll';
import '../index.scss';

class Services extends Component {
    render() {
        return(
            <Element id='services'>
                <div className="services-wrap">
                    <h2>Services</h2>
                    <div className="services-text">
                        We support program Sponsor, product Owner, Architect and data Engineers in business analysis, data discovery and UI design to make digital finance program successful for following:
                    </div>
                    <Row gutter={[16, 16]}>
                        <Col md={8}>
                            <Card style={{ width: 300 }}>
                                OPEX Analysis
                            </Card>
                        </Col>
                        <Col md={8}>
                            <Card style={{ width: 300 }}>
                                Margin Improvement
                            </Card>
                        </Col>
                        <Col md={8}>
                            <Card style={{ width: 300 }}>
                                Finance Key Figures
                            </Card>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col md={8}>
                            <Card style={{ width: 300 }}>
                                Cash Flow Statement
                            </Card>
                        </Col>
                        <Col md={8}>
                            <Card style={{ width: 300 }}>
                                Balance Sheet
                            </Card>
                        </Col>
                        <Col md={8}>
                            <Card style={{ width: 300 }}>
                                Income Statement
                            </Card>
                        </Col>
                    </Row>
                </div>
            </Element>
        )
    }
}

export default Services;
