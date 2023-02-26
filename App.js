class App extends React.Component {

state = {
    text: ""
}
handleClick = () => {
    const letter = "pawko"
    this.setState({
        text : this.state.text + letter
    })

}
render() {
    return(
        <React.Fragment>
            <button onClick={this.handleClick}>Dodaj "A"</button>
            <h1>{this.state.text}</h1>
        </React.Fragment>
    )
}

}
ReactDOM.render(<App/>, document.getElementById("root"))