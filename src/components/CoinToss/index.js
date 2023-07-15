import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {totalCount: 0, heads: 0, tails: 0, value: 0}

  headsOrToss = () => {
    const tossResult = Math.floor(Math.random() * 2)

    if (tossResult === 0) {
      this.setState(prevState => ({
        value: tossResult,
        totalCount: prevState.totalCount + 1,
        heads: prevState.heads + 1,
      }))
    } else {
      this.setState(prevState => ({
        value: tossResult,
        totalCount: prevState.totalCount + 1,
        tails: prevState.tails + 1,
      }))
    }
  }

  render() {
    const {totalCount, heads, tails, value} = this.state
    return (
      <div className="main-container">
        <div className="card-container">
          <h1 className="main-heading">Coin Toss Game</h1>
          <p className="main-des">Heads (or) Tails</p>
          {value === 0 ? (
            <img
              src="https://assets.ccbp.in/frontend/react-js/heads-img.png"
              alt="toss result"
              className="img-toss"
            />
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/tails-img.png"
              alt="toss result"
              className="img-toss"
            />
          )}

          <br />
          <button type="button" onClick={this.headsOrToss}>
            Toss Coin
          </button>
          <div className="counts-edit">
            <p>Total:{totalCount}</p>
            <p>Heads:{heads}</p>
            <p>Tails:{tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
