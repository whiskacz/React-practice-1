class Message extends React.Component {
constructor(props){
    super(props);
    this.state = {
        messgaeIsActive: false
    }
    this.handleMessageButton = this.handleMessageButton.bind(this)
}   

handleMessageButton(){
    this.setState({

        messgaeIsActive: !this.state.messgaeIsActive
    })
}

render(){
    console.log(this.state.messgaeIsActive)
    const text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere dicta rerum perferendis ex nihil sapiente delectus ipsum quae ducimus minus hic nulla, nobis quod tempore esse pariatur quidem voluptas necessitatibus?'


    return(
        <React.Fragment>
            <button onClick={this.handleMessageButton}>{this.state.messgaeIsActive? "Ukryj": "Pokaż"}</button>
            <p>{this.state.messgaeIsActive && text}</p>
        </React.Fragment>
    )
}



}

ReactDOM.render(<Message />, document.getElementById("root"))