import React, { Component } from 'react'
import Display from '../Display/Display';

export default class Dashboard extends Component {
  state = {
    balls: 0,
    strikes: 0
  }
  strike = e => {
    e.preventDefault()
    if(this.state.strikes < 3) {
      this.setState(prevState => {
        return {
          strikes: prevState.strikes + 1
        }
      }) 
    } else if (this.state.strikes >= 3) {
      this.setState({
        strikes: 0,
        balls: 0
      })
    }
  }
  ball = e => {
    e.preventDefault()
    if (this.state.balls < 4) {
      this.setState(prevState => {
        return {
          balls: prevState.balls + 1
        }
      })
    } else if (this.state.balls >= 4) {
      this.setState({
        strikes: 0,
        balls: 0
      })
    }
  }
  foul = e => {
    e.preventDefault()
    if (this.state.strikes >= 2) {
      return;
    } else {
      this.setState(prevState => {
        return {
          strikes: prevState.strikes + 1
        }
      })
    }
  }
  hit = e => {
    e.preventDefault()
    this.setState({
      balls: 0,
      strikes: 0
    })
  }
  render() {
    return (
      <div>
        <Display stats={this.state}/>
        <button onClick={this.strike}>Strike</button>
        <button onClick={this.ball}>Ball</button>
        <button onClick={this.foul}>Foul</button>
        <button onClick={this.hit}>Hit</button>
      </div>
    )
  }
}
