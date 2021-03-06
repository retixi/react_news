import React from 'react';
import { Form, Input, Button, } from 'antd';
const FormItem = Form.Item;



class RegistrationForm extends React.Component {
    constructor() {
        super();
        this.state = {
            confirmDirty: false,
            autoCompleteResult: [],
            registatus : false

        };
    };




    handleSubmit = (e) => {

        var myFetchOptions = {
            method: 'GET'
        };
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err ) {
                fetch('http://127.0.0.1:3004/add?email='+values.email+'&password='+values.password,myFetchOptions).
                then(response=>response.json()).
                then(function (json) {
                        if(json)
                        {alert('用户'+values.email+'注册成功')
                        this.setRegistatus(true)
                        }
                        else
                        {alert('用户已存在')
                        this.setRegistatus(false)

                        }

                })
            }
        });
    }


    handleConfirmBlur = (e) => {
        const value = e.target.value;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    }
    checkPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && value !== form.getFieldValue('password')) {
            callback('Two passwords that you enter is inconsistent!');
        } else {
            callback();
        }
    }
    checkConfirm = (rule, value, callback) => {
        const form = this.props.form;
        if (value && this.state.confirmDirty) {
            form.validateFields(['confirm'], { force: true });
        }
        callback();
    }


    render() {
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 6 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 14 },
            },
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 14,
                    offset: 6,
                },
            },
        };




        return (
        <div style={{paddingTop: 10}}>
            <Form onSubmit={this.handleSubmit}>
                <FormItem
                    {...formItemLayout}
                    label="E-mail"
                    hasFeedback
                >
                    {getFieldDecorator('email', {
                        rules: [{
                            type: 'email', message: 'The input is not valid E-mail!',
                        }, {
                            required: true, message: 'Please input your E-mail!',
                        }],
                    })(
                        <Input />
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="Password"
                    hasFeedback
                >
                    {getFieldDecorator('password', {
                        rules: [{
                            required: true, message: 'Please input your password!',
                        }, {
                            validator: this.checkConfirm,
                        }],
                    })(
                        <Input type="password" />
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="Confirm Password"
                    hasFeedback
                >
                    {getFieldDecorator('confirm', {
                        rules: [{
                            required: true, message: 'Please confirm your password!',
                        }, {
                            validator: this.checkPassword,
                        }],
                    })(
                        <Input type="password" onBlur={this.handleConfirmBlur} />
                    )}
                </FormItem>
                <FormItem {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit" onClick={this.props.hidemodal} size="large">注册</Button>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Button type="dafault" onClick={this.props.hidemodal} size="large">取消</Button>

                </FormItem>
            </Form>
        </div>
        );
    }
}

const PcRegistrationForm1 = Form.create()(RegistrationForm);

export default PcRegistrationForm1;
