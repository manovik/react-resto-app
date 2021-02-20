import React from 'react';
import cartIcon from './shopping-cart-solid.svg';
import { Link } from "react-router-dom";
import {connect} from 'react-redux'
import './app-header.scss';

const AppHeader = ({total}) => {
    return (
        <header className="header">
            <Link className="header__link" to="/" href="#">
                Menu
            </Link>
            <Link className="header__link" to="/cart">
                <img className="header__cart" src={cartIcon} alt="cart"></img>
                Total: {total} $
            </Link>
        </header>
    )
};

const mapStateToProps = (state) => {
    return {
      ...state
    };
  };

export default connect(mapStateToProps)(AppHeader);