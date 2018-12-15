import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom';

import {connect} from 'react-redux'

import {getUsers} from '../../../store/actions/usersActions'
import {deleteUser} from '../../../store/actions/usersActions'

import {Table, Popconfirm, Button, Card} from 'antd'

// async function getUsers(){   try{     const res = await
// axios.get('https://jsonplaceholder.typicode.com/users');
// console.log(res.data);     return res.data;   }catch(e){     console.log(e);
// return null;   } }

class TableDisplay extends Component {
    constructor() {
        super();
        this.state = {}
    }

    handledDelete = (key) => {
        this
            .props
            .deleteUser(key);
    }

    componentDidMount() {
        // const res = await axios.get('https://jsonplaceholder.typicode.com/users');
        // this.setState({users: res.data, loadDataSource: true});
        this
            .props
            .getUsers();

    }
    render() {
        let dataSource = this.props.users;

        const columns = [
            {
                title: 'Name',
                dataIndex: 'name',
                key: 'name'
            }, {
                title: 'UserName',
                dataIndex: 'username',
                key: 'username'
            }, {
                title: 'Phone',
                dataIndex: 'phone',
                key: 'phone'
            }, {
                title: 'operation',
                dataIndex: 'operation',
                render: (text, record) => (
                    <React.Fragment>

                        <Link to={`/edituser/${record.key}`}>
                            <Button type="primary"  shape="circle" icon="edit"/>
                        </Link>

                        <Popconfirm
                            title="Sure to delete?"
                            onConfirm={() => this.handledDelete(record.key)}>
                            <Button type="danger"  shape="circle" icon="close"/>
                        </Popconfirm>
                    </React.Fragment>
                )
            }
        ];
        return (
            <Card
                title="All User"
                style={{
                width: '95vw',
                margin: 'auto'
            }}>

                <Table dataSource={dataSource} columns={columns}/>

            </Card>
        )
    }
}
TableDisplay.propTypes = {
    users: PropTypes.array.isRequired,
    getUsers: PropTypes.func.isRequired,
    deleteUser: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({users: state.users.users})

export default connect(mapStateToProps, {getUsers,deleteUser})(TableDisplay);