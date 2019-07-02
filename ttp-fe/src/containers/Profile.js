import React, { Component } from 'react';
import Purchase from '../components/Purchase';
import StocksContainer from './StocksContainer';



class Profile extends Component {

  componentDidMount() {
    console.log("I'll leave this here for now");
  }


  render(){
    return(
      <div>
        <Purchase />
        <StocksContainer/>
      </div>
    );
  }
}

export default Profile;
