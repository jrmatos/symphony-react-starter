import React, { Component } from 'react'
import './index.css'

import Button from '@material-ui/core/Button'

class Posts extends Component {
  render () {
    const { posts, getPosts } = this.props

    const listItems = posts.map((post, i) => {
      return (
        <div>
          <p>userId: {post.userId}</p>
          <p>id: {post.id}</p>
          <p>title: {post.title}</p>
          <p>body: {post.body}</p>
          <hr />
        </div>
      )
    })

    return (
      <div styleName='Posts'>
        <ul>
          {listItems}
        </ul>
        <Button
          variant='contained'
          onClick={
            () => { getPosts() }
          }>
          Get Posts!
        </Button>
      </div>
    )
  }
}

export default Posts
