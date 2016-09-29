import React, { Component } from 'react'
import Comments from './Comments'

export default class Article extends Component {

    constructor(props) {
        super()
        this.state = {
            isOpen: false,
            foo: 'bar'
        }
    }

/*
    state = {
        isOpen: false,
        foo: 'bar'
    }
*/
    showBody() {
      const { article } = this.props
      return (
        <section>
          {article.text}
          {article.comments ? <Comments comments={article.comments} /> : null}
        </section>
      )
    }

    render() {
        const { article } = this.props
        const { isOpen } = this.state
        console.log('---', this.state)

        const body = isOpen ? this.showBody() : null
        return (
            <div>
                <h3 onClick = {this.toggleOpen}>{article.title}</h3>
                {body}
            </div>
        )
    }

    toggleOpen = ev => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}

/*
export default (props) => {
    const { article } = props
    return (
        <div>
            <h3>{article.title}</h3>
            <section>{article.text}</section>
        </div>
    )
}*/
