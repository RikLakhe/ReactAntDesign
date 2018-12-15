import React, {Component} from 'react'
import uuid from 'uuid';
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import {Form, Input, Card} from 'antd';
import {getUser} from '../../../store/actions/usersActions'
const FormItem = Form.Item;

class Form extends Component {
  

  render() {
    const { getFieldProps, getFieldError } = this.props;
    const errors = getFieldError('email');
    return (<div>
      <div>email:</div>
      <div>
        <input {...getFieldProps('email', {
          rules: [{
            type: 'email',
          }],
        })}
        /></div>
      
    </div>);
  }
}


const NewForm = connect((state) => {
  return {
    formState: {
      email: state.form.email,
    },
  };
})(createForm({
  mapPropsToFields(props) {
    console.log('mapPropsToFields', props);
    return {
      email: createFormField(props.formState.email),
    };
  },
  onFieldsChange(props, fields) {
    console.log('onFieldsChange', fields);
    props.dispatch({
      type: 'save_fields',
      payload: fields,
    });
  },
})(Form));



export default connect(null, {getUser})(Demo);