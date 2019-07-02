import React, { Component } from 'react';
import Purchase from '../components/Purchase';
import StocksContainer from './StocksContainer';



class Profile extends Component {
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
