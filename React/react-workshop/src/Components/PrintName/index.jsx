import React, { Component } from 'react'

export default class PrintName extends Component {
  render() {
    return (
        <>
    <p style={{ backgroundColor: "blue", color: "white" }}>{this.props.name}</p>
                <p style={{ backgroundColor: "green", color: "white" }}>{this.props.des}</p>
         </>
    );
  }
}
