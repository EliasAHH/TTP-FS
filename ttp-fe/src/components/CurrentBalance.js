import React from 'react';

const CurrentBalance = props => {
  if(props.balance) {
    return (
      <div className="balance">
        Current Balance: ${props.balance}
      </div>
    );
  }
}

export default CurrentBalance;
