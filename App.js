class CounterApp extends React.Component{
state = {
    count: 0,
    score: 0,
}

calculator(type, number){
    if(type === "addition"){
        this.setState(prevState =>({
            count : prevState.count + number,
            score : prevState.score + number,
    }))}
        
    else if(type === "subtraction"){
        this.setState(prevState =>({
            count : prevState.count + number,
            score : prevState.score - number,
}))}  
    else {
        this.setState(prevState =>({
            count : prevState.count + number,
            score : 0,
        }

        ))
    }

        }
render(){
    return(
        <>
        <button onClick = {this.calculator.bind(this, "addition", 1)}>+1</button>
        <button onClick = {this.calculator.bind(this, "subtraction", 1)}>-1</button>
        <button onClick = {this.calculator.bind(this, "reset", 0)}>RESET</button>
        <p>LICZNIK : {this.state.count}</p>
        <p>WYNIK : {this.state.score}</p>   
        </>
    )
}

}
ReactDOM.render(<CounterApp />, document.getElementById("root"))