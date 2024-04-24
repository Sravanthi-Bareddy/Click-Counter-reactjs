import {Component} from 'react'
import './index.css'

class Counter extends Component {
  state = {count: 0}
  onClickMe = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="heading">
          The Button has been clicked <span className="text">{count}</span>times
        </h1>
        <p className="description">Click the button to increase the count</p>
        <button className="click-me-btn" onClick={this.onClickMe}>
          Click Me!
        </button>
      </div>
    )
  }
}
export default Counter
