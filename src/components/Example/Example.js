import React, { Component } from 'react'

export default class extends Component  {
  render() {
    return (
      <button>
        Button: { this.props.children }
      </button>
    )
  }
}
