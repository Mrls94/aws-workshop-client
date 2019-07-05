import React, { Component } from 'react'
import ListItem from './list_item'
import axios from 'axios'

class List extends Component {
  constructor(props){
    super(props)

    this.state = {
      posts: []
    }
  }

  refreshList(){
    axios.get(process.env.REACT_APP_API_URL).then( response => {
      this.setState({posts: response.data})
    })
  }

  render () {
    return (
      <div>
        List
        <button onClick={() => this.refreshList()}>
          reload
        </button>
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>Title</th>
            </tr>
          </thead>
          <tbody>
            { this.state.posts.map( post => (
              <ListItem post={post}/>
            )) }
          </tbody>
        </table>
      </div>
    )
  }
}

export default List