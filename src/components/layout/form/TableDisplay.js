import React, {Component} from 'react'

import axios from 'axios';

import {Table, Spin, Icon,Card} from 'antd'

// async function getUsers(){   try{     const res = await
// axios.get('https://jsonplaceholder.typicode.com/users');
// console.log(res.data);     return res.data;   }catch(e){     console.log(e);
//  return null;   } }

class TableDisplay extends Component {
    constructor() {
        super();
        this.state = {
            users: [],
            loadDataSource: false
        }
    }
    async componentDidMount() {
        const res = await axios.get('https://jsonplaceholder.typicode.com/users');
        this.setState({users: res.data, loadDataSource: true});

    }
    render() {
        let dataSource = this.state.users;

        let loadDataSource = this.state.loadDataSource;
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
            }
        ];
        return (
            <Card
                title="All User"
                style={{
                width: '95vw',
                margin: 'auto'
            }}>
                {(loadDataSource)
                    ? <Table dataSource={dataSource} columns={columns}/>
                    : <Icon
                        type="loading"
                        style={{
                        fontSize: 24,
                        margin:'auto'
                    }}
                        spin/>}

            </Card>
        )
    }
}

export default TableDisplay;