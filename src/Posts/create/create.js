import React, { Component } from 'react'
import axios from 'axios'


class Create extends Component {
  constructor(props){
    super(props)
    this.state = {
      post_title: ''
    }
  }

  createPost(){
    axios.post(process.env.REACT_APP_API_URL,
      {
        post_params: {
          title: this.state.post_title
        }
      }
      ).then( response => {
      alert('Post created, refresh list')
    })
  }

  changeValue(event){
    this.setState({post_title: event.target.value})
  }
  render () {
    return (
      <div>
        Create
        <input type="text" value={this.state.post_title} onChange={(event) => this.changeValue(event)}></input>
        <button onClick={() => this.createPost()}>Submit</button>
      </div>
    )
  }
}

export default Create