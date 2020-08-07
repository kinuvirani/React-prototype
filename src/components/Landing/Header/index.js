import React, {Component} from 'react';
import {Col, Menu, Row} from 'antd';
import Scroll from 'react-scroll';
import imgsrc from "../../../assets/images/logo.png";
import '../index.scss';

const { SubMenu } = Menu;
const ScrollLink = Scroll.Link;
class Header extends Component {
    state = {
        current: 'mail',
    };

    handleClick = e => {
        console.log('click ', e);
        this.setState({current: e.key});
    };

    render() {
        const {current} = this.state;
        return (
            <Row className="header-wrap">
                <Col md={12}>
                    <div className="logo-wrap">
                    <img src={imgsrc}/>
                    </div>
                </Col>
                <Col md={12}>
                    <div className="menu-item">
                        <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal">
                            <Menu.Item key="home">
                                HOME
                            </Menu.Item>
                            <SubMenu title="SERVICES">
                                <Menu.Item key="service1">
                                    <ScrollLink
                                        to="service1"
                                        spy={true}
                                        smooth={true}
                                        duration={500}
                                        className='some-class'
                                        activeClass='some-active-class'
                                    >
                                        Business Analysis
                                    </ScrollLink>
                                </Menu.Item>
                                <Menu.Item key="service2">
                                    <ScrollLink
                                        to="service2"
                                        spy={true}
                                        smooth={true}
                                        duration={500}
                                        className='some-class'
                                        activeClass='some-active-class'
                                    >
                                        Data Discovery
                                    </ScrollLink>
                                </Menu.Item>
                                <Menu.Item key="service3">
                                    <ScrollLink
                                        to="service3"
                                        spy={true}
                                        smooth={true}
                                        duration={500}
                                        className='some-class'
                                        activeClass='some-active-class'
                                    >
                                        UI Design
                                    </ScrollLink>
                                </Menu.Item>
                            </SubMenu>
                            <Menu.Item key="artefacts">
                                <ScrollLink
                                    to="artefacts"
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                    className='some-class'
                                    activeClass='some-active-class'
                                >
                                    ARTEFACTS
                                </ScrollLink>
                            </Menu.Item>
                            <Menu.Item key="contacts">
                                <ScrollLink
                                    to="contacts"
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                    className='some-class'
                                    activeClass='some-active-class'
                                >
                                    CONTACTS
                                </ScrollLink>
                            </Menu.Item>

                        </Menu>
                    </div>
                </Col>
            </Row>
        )
    }
}

export default Header;
