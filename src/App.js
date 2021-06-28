import React, { Component } from 'react'
import Counter from './components/Counter'

export class App extends Component {
    state = {
        show:false
    }
    handleShow = () => {
        this.setState({ show: !this.state.show });
    }
    render() {
        return (
            <div>
                <button onClick={this.handleShow}>{this.state.show ? "hide" : "show"}</button>
               {this.state.show ? <Counter/> : "click the button "}
            </div>
        )
    }
}

export default App

