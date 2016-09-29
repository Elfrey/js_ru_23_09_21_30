import React, { Component } from 'react'
import CommentItem from './CommentItem'


export default class CommentList extends Component {
  constructor() {
    super()
    this.state = {
      hover: false,
      isOpen: false
    }
  }

  showComments = () => {
    const { comments } = this.props

    return (
      <ul style={styles.comments}>
        {comments.map(comment => (
          <li style={styles.item}>
            <CommentItem comment={comment} key={comment.id} />
          </li>
        ))}
      </ul>
    )
  }

  render() {
    const { isOpen, hover } = this.state



    // <section style = {{display: isOpen ? 'block' : 'none'}}>{article.text}</section>
    return (
      <div style={styles.container}>
        <span
          style={hover ? styles.buttonHover : styles.button}
          onClick={this.toggleOpen}
          onMouseEnter={() => {
            this.setState({
              hover: true
            })
          }}
          onMouseLeave={() => {
            this.setState({
              hover: false
            })
          }}
        >
          {isOpen ? ('Hide comments') : ('Show comments')}
        </span>
        {isOpen ? this.showComments() : null}
      </div>
    )
  }

  toggleOpen = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
}

const styles = {
  container: {
    marginTop: 20
  },
  button: {
    display: 'inline-block',
    lineHeight: 1.1,
    borderBottom: '1px dashed #000',
    cursor: 'pointer',
  },
  buttonHover: {
    display: 'inline-block',
    lineHeight: 1.1,
    borderBottom: '1px dashed transparent',
    cursor: 'pointer',
  },
  comments: {
    marginTop: 10,
  },
  item: {
    marginBottom: 20,
  }
}
