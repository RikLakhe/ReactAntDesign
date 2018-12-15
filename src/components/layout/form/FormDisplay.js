import React, {Component} from 'react'
import uuid from 'uuid';
import PropTypes from 'prop-types'   
import { connect } from 'react-redux';
import {Form, Button, Input, Card} from 'antd';
import {addUser} from '../../../store/actions/usersActions'
const FormItem = Form.Item;

class FormDisplay extends Component {
    // constructor(props) {     super(props); }

    state = {
        confirmDirty: false,
        key: '',
        name: '',
        userName: '',
        userPhone: ''
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
                const newUser = {
                    key : uuid(),
                    name : values.name,
                    phone : values.userPhone,
                    username : values.userName
                }
                this.props.addUser(newUser);
                console.log(newUser);
            });
        this.props.history.push('/users');
    }

    handleConfirmBlur = (e) => {
        const value = e.target.value;
        this.setState({
            confirmDirty: this.state.confirmDirty || !!value
        });
    }
    // compareToFirstPassword = (rule, value, callback) => {     const form =
    // this.props.form;     if (value && value !== form.getFieldValue('password')) {
    //         callback('Two passwords that you enter is inconsistent!');     } else
    // {         callback();     } } validateToNextPassword = (rule, value,
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

                    <FormItem {...formItemLayout} label="Name">{getFieldDecorator('name', {
                            rules: [
                                {
                                    required: true,
                                    message: 'Please input your Name!'
                                }
                            ]
                        })(<Input/>)}
                    </FormItem>
                    <FormItem {...formItemLayout} label="Username">{getFieldDecorator('userName', {
                            rules: [
                                {
                                    required: true,
                                    message: 'Please input your username!'
                                }
                            ]
                        })(<Input/>)}
                    </FormItem>
                    <FormItem {...formItemLayout} label="Phone">{getFieldDecorator('userPhone', {
                            rules: [
                                {
                                    required: true,
                                    message: 'Please input your Phone!'
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

WrapperdFormDisplay.propTypes={
    addUser:PropTypes.func.isRequired
}

export default connect(null,{addUser})(WrapperdFormDisplay);