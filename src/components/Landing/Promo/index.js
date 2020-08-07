import React, {Component} from 'react';
import {Button, Col, Row} from 'antd';
import imgsrc from '../../../assets/images/promo1.jpg'
import '../index.scss';

class Promo extends Component {
    render() {
        return (
            <div className="promo-wrap">
                <Row gutter={24}>
                    <Col md={13}>
                        <img className="img-fluide img-round" src={imgsrc} height="100%"/>
                    </Col>
                    <Col md={11}>
                        <div className="promo-text-wrap">
                            <div>
                                <h4 className="promo-text">
                                    Bring your digital “Finance Reporting” and “Margin Improvement” program to life
                                </h4>
                                <Button type={"primary"} className="btn-custom">
                                    Learn More
                                </Button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Promo;
