import React, { Component } from "react";

export default class Task2 extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            list: [
                {
                    id: 1,
                    text: "hidden text 1"
                },
                {
                    id: 2,
                    text: "hidden text 2"
                },
                {
                    id: 3,
                    text: "hidden text 3"
                },
            ],
            text: ''
        };
    }

    hoverHandler(index) {
        this.setState({text: this.state.list[index].text});
    };

    leaveMouseHandler() {
        this.setState({text: ''});
    };

    render() {
        const { list, text } = this.state;
        const listItems = list.map((item, index) => <li className="element" key={item.id} onMouseOver={this.hoverHandler.bind(this, index)} onMouseOut={this.leaveMouseHandler.bind(this)}>id - {item.id}</li>)
        return <div> 
                 <ul>{listItems}</ul>
                 <div className="text">{text}</div>
               </div>
    };
}
