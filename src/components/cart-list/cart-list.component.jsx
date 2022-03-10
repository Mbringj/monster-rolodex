import React from 'react';
import { Card } from '../cart/cart.component';
import './cart-list.style.css';

export const Cartlist = props => {
  return <div className="cart-list">
    {props.monsters.map(monster => {
      return <Card monster={monster} key={monster.id} className="card-container"/>;
    })}
  </div>
};