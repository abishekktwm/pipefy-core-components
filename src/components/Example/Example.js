// @flow
import React, { Component } from 'react'
import PropTypes from 'prop-types'

const Props = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.any,
}

class Example extends Component  {
  render() {
    return (
      <button onClick={this.props.onClick}>
        3-Button: { this.props.children }
      </button>
    )
  }
}

Example.propTypes = Props

export default Example
