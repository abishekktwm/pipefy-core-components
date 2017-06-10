// @flow

import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import { Example } from '../index'

class SandBox extends Component {
  render() {
    return (
      <div>
        <h1> Teste aqui: </h1>
        <Example>Click here!</Example>
      </div>
    )
  }
}

ReactDOM.render(<SandBox />, document.getElementById('root'))

