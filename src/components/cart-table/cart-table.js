import React from "react";
import { connect } from "react-redux";
import { deleteFromCart } from "../../actions";
import "./cart-table.scss";

const CartTable = ({ items, deleteFromCart }) => {
  if (items.length === 0) {
    return (
      <>
        <div className="cart__title">Ваш заказ:</div>
        <div className="cart__list">
          <div className="cart__item">
            <div className="cart__item-title">Пока здесь пусто...</div>
            <div className="cart__item-price"></div>
          </div>
        </div>
      </>
    );
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
      </div>
    </>
  );
};

const mapStateToProps = ({ items }) => {
  return {
    items,
  };
};
const mapDispatchToProps = {
  deleteFromCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(CartTable);
