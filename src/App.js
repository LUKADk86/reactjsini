import React from 'react';
import ReactDOM from 'react-dom';

import './App.css';

export default class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state={color:" "};
    }

    choose(color){
      console.log(color);
        this.setState({color: color });
    }


    render() {

        return (
            <div>
            <div>
            <div className="blue" onClick = {(e)=> this.choose("blue")}></div>
        <div className="red" onClick = {()=> this.choose("red")}></div>
        </div>
        <div>
        <div className="yellow" onClick = {()=> this.choose("yellow")}></div>
        <div className="green" onClick = {()=> this.choose("green")}></div>
        </div>
        <div><Aff color={this.state.color}/></div>
        </div>
    );
    }
}


export class Aff extends React.Component {

    render() {
        return (
            <div className={this.props.color}></div>
    )
    }

}
ReactDOM.render(<Game />, document.getElementById('root'));
