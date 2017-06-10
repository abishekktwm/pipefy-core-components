// @flow

import React, { Component } from 'react'

type Props = {
  onClick: () => void,
  children: any
};

export default class extends Component  {
  props: Props;

  render() {
    return (
      <button onClick={this.props.onClick}>
        Button: { this.props.children }
      </button>
    )
  }
}
