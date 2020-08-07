import React, {Component} from 'react';
import {Row, Col} from 'antd';
import { Element } from 'react-scroll';
import SimpleImageSlider from "react-simple-image-slider";
import artefact from "../../../assets/images/artefact.jpg";
import artefact1 from "../../../assets/images/promo1.jpg";
import artefact2 from "../../../assets/images/service3.jpg";
import artefact3 from "../../../assets/images/artefact.jpg";
import '../index.scss';

class Artefacts extends Component {
    render() {
        const images = [
            { url: artefact },
            { url: artefact1 },
            { url: artefact2 },
            { url: artefact3 },
        ];
        return(
            <Element id='artefacts'>
                <div className="Artefacts-wrap">
                    <Row gutter={16}>
                        <Col md={24}>
                            <h2>Artefacts</h2>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col md={24}>
                            <div className="artefacts-text">
                                <p>
                                    We can do UI designs to fulfil the use case on “Finance Reporting” and “Margin Improvement”.
                                </p>
                            </div>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col md={24}>
                            <SimpleImageSlider
                                width={896}
                                height={504}
                                images={images}
                            />
                            {/*<img src={artefact} className="img-fluide img-round"/>*/}
                        </Col>
                    </Row>
                </div>
            </Element>
        )
    }
}

export default Artefacts;
