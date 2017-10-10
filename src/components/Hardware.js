import React, { Component } from "react";

export default class Hardware extends Component{

    render(){
        return (
            <div>
                <p>Hardware</p>
                <ul>
                    <li>{this.props.motherboard}</li>
                </ul>
            </div>
        );
    }

}