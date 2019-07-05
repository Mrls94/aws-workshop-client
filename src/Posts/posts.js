import React, { Component } from 'react'
import Create from './create/create'
import List from './list/list'

class Posts extends Component {
  render () {
    return (
      <div>
        <Create />
        <List />
      </div>
    )
  }
}

export default Posts