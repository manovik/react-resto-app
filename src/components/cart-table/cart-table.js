import React from "react";
import { connect } from "react-redux";
import { deleteFromCart, removeAllCartItems, showOrderStatus } from "../../actions";
import RestoService from '../../services/resto-service'
import "./cart-table.scss";

const CartTable = ({ items, total, orderStatus, deleteFromCart, removeAllCartItems, showOrderStatus }) => {

  const sendOrder = new RestoService();

  if (items.length === 0) {
    return (
      <>
        <div className="cart__title">Ваш заказ:</div>
        <div className="cart__list">
          <div className="cart__item">
            {
              orderStatus 
              ? <div className="cart__item-title">Ваш заказ отправлен!</div>
              : <div className="cart__item-title">Пока здесь пусто...</div>
            }
          </div>
        </div>
      </>
    );
  }

  const handleClick = () => {
    const data = {
      items,
      total
    }
    sendOrder.postCartItems(data);
    removeAllCartItems();
    setTimeout(showOrderStatus, 4000);
  }

  return (
    <>
      <div className="cart__title">Ваш заказ:</div>
      <div className="cart__list">
        {items.map((item) => {
          const { title, id, price, url, count } = item;
          return (
            <div key={id} className="cart__item">
              <img src={url} className="cart__item-img" alt={title}></img>
              <div className="cart__item-title">{title}</div>
              <div className="cart__item-price">{price}$</div>
              <div onClick={() => deleteFromCart(id)} className="cart__close">
                &times;
              </div>
              <div className="cart__item-count">{count}</div>
            </div>
          );
        })}
        <div onClick={handleClick} className="cart__submit-btn">Make Order</div>
      </div>
    </>
  );
};

const mapStateToProps = ({ items, total, orderStatus }) => {
  return {
    items,
    total,
    orderStatus
  };
};
const mapDispatchToProps = {
  deleteFromCart,
  removeAllCartItems, 
  showOrderStatus
};

export default connect(mapStateToProps, mapDispatchToProps)(CartTable);
