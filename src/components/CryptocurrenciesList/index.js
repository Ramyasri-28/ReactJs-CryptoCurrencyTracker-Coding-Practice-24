// Write your JS code here
import {Component} from 'react'

import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'

class CryptocurrenciesList extends Component {
  renderCryptocurrenciesHeader = () => (
    <div className="lists-header">
      <p className="coin-type-heading"> Coin Type </p>
      <div className="usd-euro-values-container">
        <p className="coin-value-heading"> USD </p>
        <p className="coin-value-heading"> EURO </p>
      </div>
    </div>
  )

  render() {
    const {cryptocurrenciesData} = this.props

    return (
      <div className="cryptocurrencies-container">
        <h1 className="heading"> Cryptocurrency Tracker </h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
          className="cryptocurrency-image"
        />
        <div className="cryptocurrencies-list-container">
          {this.renderCryptocurrenciesHeader()}
          <ul className="cryptocurrencies-list">
            {cryptocurrenciesData.map(eachCryptocurrency => (
              <CryptocurrencyItem
                key={eachCryptocurrency.id}
                cryptocurrencyDetails={eachCryptocurrency}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CryptocurrenciesList
