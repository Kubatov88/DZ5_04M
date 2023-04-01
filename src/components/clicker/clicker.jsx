import React from 'react'

// function Clicker({handleClick}) {
//     return (
//         <input type="number" onChange={handleClick} />
//     )
// }
class Clicker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            word: 'hello'
        }
        this.handleCountChange = this.handleCountChange.bind(this)
    }

    handleCountChange(e) {
        // console.log(this);
        this.setState({counter: +e.target.value})
    }

    handleCountChange2 = (e) => {
        this.setState({counter: Number(e.target.value)})
    }

    handleClick = (e) => {
        this.setState(previousState => ({counter: previousState.counter+1}),
            console.log("state change", this.state.counter)
        )
    }


    componentWillUnmount() {
        console.log("Unmount");
    }

    render() {
        return (
            <>
                <br />
                <span>Countrer: {this.state.counter}</span>
                <br />
                <input 
                    type="number"
                    // onChange={this.handleCountChange2} 
                    onChange={this.handleCountChange} 
                    placeholder='0'
                    value={this.state.counter===0 ? '' : this.state.counter}
                /> 
                <button onClick={this.handleClick}>+1</button>       
            </>
        )
    }
}

export default Clicker
