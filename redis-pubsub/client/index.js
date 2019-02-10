import React from "react";
import ReactDOM from "react-dom";
import io from "socket.io-client"

class App extends React.Component {

    constructor() {
        super()
        this.state = {
            msg: [],
            value: ""
        }
        this.socket = io()
    }

    

    componentDidMount() {
        this.socket.on("chat message", msg => this.setState({msg: [...this.state.msg, msg]}))
    }

    handleChange(e) {
        this.setState({value: e.target.value})
    }

    handleSubmit() {
        this.socket.emit("chat message", this.state.value)
        this.setState({value: ""})
    }

    msgList() {
        return this.state.msg.map((m, i) => <li key={i}>{m}</li>)
    }

    render() {
        return (
            <div>
                <input type="text" value={this.state.value} onChange={e => this.handleChange(e)} />
                <button onClick={() => this.handleSubmit()}>送信</button>
                <ul>{this.msgList()}</ul>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));