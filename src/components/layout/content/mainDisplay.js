import React, { Component } from 'react'

import FormDisplay from '../form/FormDisplay'
import TableDisplay from '../form/TableDisplay'


import { Card } from 'antd';

class MainDisplay extends Component {
  render() {
    return (
      <React.Fragment>
        <Card
        title="All Users"
        style={{ width: '95vw', margin:'auto' }}
        >
          <TableDisplay />
        </Card>

      </React.Fragment>        
    )
  }
}


export default MainDisplay;