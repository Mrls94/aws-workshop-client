import React, { Component } from 'react'

class ListItem extends Component {
  render () {
    return (
      <div>
        <tr>
          <th>{this.props.post.id}</th>
          <th>{this.props.post.title}</th>
        </tr>
      </div>
    )
  }
}

export default ListItem