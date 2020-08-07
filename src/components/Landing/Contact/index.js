import React, {Component} from 'react';
import {Form, Input, Button} from 'antd';
import { Element } from 'react-scroll';
import '../index.scss';

class Contact extends Component {
    render() {
        const layout = {
            labelCol: { span: 8 },
            wrapperCol: { span: 16 },
        };
        return(
            <Element id='contacts'>
                <div className="contact-wrap">
                    <h2>Contact Us</h2>
                    <div className="services-text">
                        <Form name="nest-messages">
                            <Form.Item name={['user', 'name']} label="Name" rules={[{ required: true }]}>
                                <Input />
                            </Form.Item>
                            <Form.Item name={['user', 'email']} label="Email" rules={[{ required: true, type: 'email' }]}>
                                <Input />
                            </Form.Item>
                            <Form.Item name={['user', 'message']} label="Message">
                                <Input.TextArea />
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" htmlType="submit">
                                    Submit
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                </div>
            </Element>
        )
    }
}

export default Contact;
