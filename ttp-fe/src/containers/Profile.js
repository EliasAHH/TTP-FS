import React, { Component } from 'react';
import Purchase from '../components/Purchase';
import StocksContainer from './StocksContainer';
import { connect } from 'react-redux';
import { fetchUser } from '../Redux/actioncreator/useractions';



class Profile extends Component {

  componentDidMount() {
      if(localStorage.getItem("token")) {
        this.props.fetchUser(localStorage.token)
    }
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

export default connect(null,{ fetchUser })(Profile);
