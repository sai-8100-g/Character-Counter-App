import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

import './App.css'

class App extends Component {
  state = {
    wordsArray: [],
    searchInput: '',
  }

  onChangeUserInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onClickToShowWords = () => {
    const {searchInput} = this.state
    const count = searchInput.length
    const newWordObj = {
      id: uuidv4(),
      word: `${searchInput} : ${count}`,
    }
    this.setState(prevState => ({
      wordsArray: [...prevState.wordsArray, newWordObj],
      searchInput: '',
    }))
  }

  render() {
    const {searchInput, wordsArray} = this.state
    const showImage = wordsArray.length === 0
    return (
      <div className="main-container">
        <div className="inner-main-container">
          <div className="first-container">
            <div className="heading-container">
              <h1 className="count-heading">
                Count the characters like a Boss...
              </h1>
            </div>
            {showImage ? (
              <div className="img-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
                  alt="no user inputs"
                  className="no-user-inputs-img"
                />
              </div>
            ) : (
              <ul className="wordsUl">
                {wordsArray.map(eachObj => (
                  <li key={eachObj.id}>
                    <p>{eachObj.word}</p>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="second-container">
            <h1 className="counter-heading">Character Counter</h1>
            <form className="input-container">
              <input
                type="text"
                value={searchInput}
                className="user-input"
                placeholder="Enter the characters here"
                onChange={this.onChangeUserInput}
              />
              <button
                className="add-button"
                type="button"
                onClick={this.onClickToShowWords}
              >
                Add
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default App
