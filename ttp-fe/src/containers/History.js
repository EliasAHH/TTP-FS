import React from 'react';
import Order from '../components/Order';

const History = props => {
  const renderOrder = () => {
    if(props.transactions) {
      return props.transactions.map(order =><Order key={order.id} order={order}/>)
    }
  }

  return (
    <div className="history">
      <div className="orders">
        {renderOrder()}
      </div>
    </div>

  );
}
export default History;
