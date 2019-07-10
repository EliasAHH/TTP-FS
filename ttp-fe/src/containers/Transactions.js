import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getHistory } from '../Redux/actioncreator/stockactions';
import History from './History';
import '../stylesheets/Transactions.scss';

class Transactions extends Component {
  componentDidMount(){
    if(this.props.currentUser) {
      this.props.getHistory(this.props.currentUser.id)
    }
  }
  render(){
    return(
      <div className="transactions">
        <h1> Transactions </h1>
        <div className="content">
          <History
            transactions={this.props.transactions}
          />
        </div>
      </div>
    );
  }
}



const mapStateToProps = state => {
  return {
    currentUser:state.currentUser,
    transactions:state.transactions
  }
}

export default connect(mapStateToProps, { getHistory })(Transactions);
