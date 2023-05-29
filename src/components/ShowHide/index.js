// Write your code here
import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {isClickedOne: false, isClickedTwo: false}

  isClickedFirstName = () => {
    this.setState(previousState => ({
      isClickedOne: !previousState.isClickedOne,
    }))
  }

  isClickedLastName = () => {
    this.setState(previousState => ({
      isClickedTwo: !previousState.isClickedTwo,
    }))
  }

  render() {
    const {isClickedOne} = this.state
    const {isClickedTwo} = this.state

    return (
      <div className="bg-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="lower-section">
          <div className="hide-part">
            <button
              type="button"
              className="button"
              onClick={this.isClickedFirstName}
            >
              Show/Hide Firstname
            </button>
            {isClickedOne && <p className="text">Joe</p>}
          </div>
          <div>
            <button
              type="button"
              className="button"
              onClick={this.isClickedLastName}
            >
              Show/Hide Lastname
            </button>
            {isClickedTwo && <p className="text">Jonas</p>}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
