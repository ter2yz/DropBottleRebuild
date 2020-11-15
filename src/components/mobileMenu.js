import React, { Component } from 'react';
import { stack as Menu } from 'react-burger-menu';

export default class MobileMenu extends Component {
    showSettings(event) {
        event.preventDefault();
    }


    render() {
        var styles = {
            bmBurgerButton: {
                position: 'fixed',
                width: '2rem',
                height: '1.6rem',
                right: '2rem',
                top: '1.45rem'
            },
            bmBurgerBars: {
                background: '#373a47'
            },
            bmBurgerBarsHover: {
                background: '#a90000'
            },
            bmCrossButton: {
                height: '24px',
                width: '24px'
            },
            bmCross: {
                background: '#bdc3c7'
            },
            bmMenuWrap: {
                position: 'fixed',
                height: '100%'
            },
            bmMenu: {
                background: '#373a47',
                padding: '2.5em 1.5em 0',
                fontSize: '1.15em'
            },
            bmMorphShape: {
                fill: '#373a47'
            },
            bmItemList: {
                color: '#b8b7ad',
                padding: '0.8em'
            },
            bmItem: {
                display: 'inline-block'
            },
            bmOverlay: {
                background: 'rgba(0, 0, 0, 0.3)'
            }
        }
        return (
            <Menu styles={styles} burgerButtonClassName={"block md:hidden"} itemListClassName={"flex flex-col items-start"} right>
                <a id="home" className="menu-item uppercase mb-2 focus:outline-none" href="#">Home</a>
                <a id="about" className="menu-item uppercase mb-2 focus:outline-none" href="#">Shop</a>
                <a id="contact" className="menu-item uppercase mb-2 focus:outline-none" href="#">Contact</a>
                <a id="faqs" className="menu-item uppercase mb-2 focus:outline-none" href="#">FAQS</a>
                <a id="recipes" className="menu-item uppercase mb-2 focus:outline-none" href="#">Recipes</a>
            </Menu>
        )
    }
}
