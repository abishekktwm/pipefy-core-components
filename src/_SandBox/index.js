import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import * as Components from '../index'

class SandBox extends Component {
  render() {
    return (
      <div>
        <h1> Teste aqui: </h1>
        <Components.Example>
          Click here!
        </Components.Example>
      </div>
    )
  }
}

ReactDOM.render(<SandBox />, document.getElementById('root'))

