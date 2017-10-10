import React, { Component } from "react";

export default class Car extends Component{

    render(){
        // biar ga usah satu" nulis this.props 
        const {type, color, price} = this.props;
        return (
            <div>
                <p>Car: </p>
                <ul>
                    <li>{type}</li>
                    <li style={{color: color}}>{color}</li>
                    <li>{price}</li>
                </ul>
            </div>
        );
    }

}