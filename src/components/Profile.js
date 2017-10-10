import React, {Component} from 'react';

export default class Profile extends Component{
   render(){
      const halo = "bhalon";
      return (
         <ul>
            <li>Budi Haryono</li>
            <li>SI/MI</li>
            <li>3121404039</li>
            <li>{halo}</li>
         </ul>
      );
   }
}