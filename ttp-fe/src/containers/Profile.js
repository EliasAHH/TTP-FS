import React, { Component } from 'react';
import Purchase from '../components/Purchase';
import StocksContainer from './StocksContainer';
import CurrentBalance from '../components/CurrentBalance';
import { connect } from 'react-redux';
import { fetchUser } from '../Redux/actioncreator/useractions';
import { getOwnedStocks, getCurrentValues } from '../Redux/actioncreator/stockactions';

class Profile extends Component {

  componentDidMount() {
      if(localStorage.getItem("token")) {
        this.props.fetchUser(localStorage.token)
        .then (() => this.props.getOwnedStocks(this.props.currentUser))
          .then(() => {
            if(this.props.ownedStocks.length > 0) {
              this.props.getCurrentValues(this.props.ownedStocks)
            }
          })
        }
      }


  render(){

    const getUserBalance = () => {
      if (this.props.currentUser !== null) {
        return <CurrentBalance balance={this.props.currentUser.balance} />
      } else {
        return (
          <div>
            loading balance. Please Wait.
          </div>
        )
      }
    }


    return(
      <div>
        {getUserBalance()}
        <Purchase />
        <StocksContainer user={this.props.currentUser} stocksInfo={this.props.stocksUpdatedInfo}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser,
    ownedStocks: state.ownedStocks,
    stocksUpdatedInfo: state.stocksUpdatedInfo
  }
}
export default connect(mapStateToProps,{ fetchUser,getOwnedStocks,getCurrentValues })(Profile);
