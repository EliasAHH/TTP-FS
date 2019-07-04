import React, { Component } from 'react';
import Purchase from '../components/Purchase';
import StocksContainer from './StocksContainer';
import { connect } from 'react-redux';
import { fetchUser } from '../Redux/actioncreator/useractions';
import { getOwnedStocks } from '../Redux/actioncreator/stockactions';

class Profile extends Component {

  componentDidMount() {
      if(localStorage.getItem("token")) {
        this.props.fetchUser(localStorage.token)
        .then (() => this.props.getOwnedStocks(this.props.currentUser))
    }
  }


  render(){
    return(
      <div>
        <Purchase />
        <StocksContainer user={this.props.currentUser}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser
  }
}
export default connect(mapStateToProps,{ fetchUser,getOwnedStocks })(Profile);
