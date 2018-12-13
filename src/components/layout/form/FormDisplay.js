import React, {Component} from 'react'

import {Form, Button, Input,Card} from 'antd';

const FormItem = Form.Item;

class FormDisplay extends Component {
    // constructor(props) {     super(props); }

    state = {
        confirmDirty: false,
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        password: ''
    }

    handleSubmit = (e) => {
        e.preventDefault();

        this
            .props
            .form
            .validateFieldsAndScroll((err, values) => {
                if (!err) {
                    console.log('Received values of form: ', values);
                }
                this.state.email = values.email;
                this.state.firstName = values.firstName;
                this.state.lastName = values.lastName;
                this.state.phone = values.phone;
                this.state.password = values.password;
            });
        console.log('submited', this.state);
    }

    handleConfirmBlur = (e) => {
        const value = e.target.value;
        this.setState({
            confirmDirty: this.state.confirmDirty || !!value
        });
    }
    // compareToFirstPassword = (rule, value, callback) => {     const form =
    // this.props.form;     if (value && value !== form.getFieldValue('password')) {
    //         callback('Two passwords that you enter is inconsistent!');     }
    // else {         callback();     } } validateToNextPassword = (rule, value,
    // callback) => {     const form = this.props.form;     if (value &&
    // this.state.confirmDirty) {         form.validateFields(['confirm'], {force:
    // true});     }     callback(); }

    render() {
        const {getFieldDecorator} = this.props.form;
        const formItemLayout = {
            labelCol: {
                xs: {
                    span: 24
                },
                sm: {
                    span: 8
                }
            },
            wrapperCol: {
                xs: {
                    span: 24
                },
                sm: {
                    span: 16
                }
            }
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0
                },
                sm: {
                    span: 16,
                    offset: 8
                }
            }
        };
        return (
            <Card
                title="Add User"
                style={{
                width: '95vw',
                margin: 'auto'
            }}>
                <Form onSubmit={this.handleSubmit}>
                    <FormItem {...formItemLayout} label="E-mail">{getFieldDecorator('email', {
                            rules: [
                                {
                                    type: 'email',
                                    message: 'The input is not valid E-mail!'
                                }, {
                                    required: true,
                                    message: 'Please input your E-mail!'
                                }
                            ]
                        })(<Input/>)}
                    </FormItem>
                    <FormItem {...formItemLayout} label="First Name">{getFieldDecorator('firstName', {
                            rules: [
                                {
                                    required: true,
                                    message: 'Please input your First Name!'
                                }
                            ]
                        })(<Input/>)}
                    </FormItem>
                    <FormItem {...formItemLayout} label="Last Name">{getFieldDecorator('lastName', {
                            rules: [
                                {
                                    required: true,
                                    message: 'Please input your Last Name!'
                                }
                            ]
                        })(<Input/>)}
                    </FormItem>
                    <FormItem {...formItemLayout} label="Phone">{getFieldDecorator('phone', {
                            rules: [
                                {
                                    required: true,
                                    message: 'Please input your Phone!'
                                }
                            ]
                        })(<Input/>)}
                    </FormItem>
                    <FormItem {...formItemLayout} label="Password">{getFieldDecorator('password', {
                            rules: [
                                {
                                    required: true,
                                    message: 'Please input your Password!'
                                }
                            ]
                        })(<Input/>)}
                    </FormItem>
                    <FormItem {...tailFormItemLayout}>
                        <Button type="primary" htmlType="submit">Register</Button>
                    </FormItem>
                </Form>
            </Card>
        )
    }
}

const WrapperdFormDisplay = Form.create()(FormDisplay);

export default WrapperdFormDisplay;