import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {country: countryAndCapitalsList[0].country}

  onChanging = event => {
    const selected = event.target.value
    const updateItem = countryAndCapitalsList.find(each => each.id === selected)
    this.setState({country: updateItem.country})
  }

  render() {
    const {country} = this.state
    // console.log(capital)
    return (
      <div className="container">
        <div className="card">
          <h1 className="heading">Countries And Capitals</h1>
          <div className="options-container">
            <select
              id="option-list"
              onChange={this.onChanging}
              className="options-list"
            >
              {countryAndCapitalsList.map(each => (
                <option className="option" value={each.id} key={each.id}>
                  {each.capitalDisplayText}
                </option>
              ))}
            </select>
            <label htmlFor="option-list" className="label">
              is Capital of which country?
            </label>
          </div>
          <p className="capital">{country}</p>
        </div>
      </div>
    )
  }
}
export default Capitals
