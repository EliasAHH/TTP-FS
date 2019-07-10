import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getHistory } from '../Redux/actioncreator/stockactions';

class Transactions extends Component {
  componentDidMount(){
    this.props.getHistory(this.props.currentUser.id)
  }
  render(){
    return(
      <div>
        Hello From Transactions
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUser:state.currentUser
  }
}

export default connect(mapStateToProps, { getHistory })(Transactions);
