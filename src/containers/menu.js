import React, { Component } from 'react';

class Menu extends Component {
    render() {
        const array = ["images", "alternatives", "pics", "gifs", "adviceanimals", "cats"];
        const listItems = array.map((element, i) => {
            return (
                <li key={i} className="nav-item mr-3 my-2">
                    <button type="buttton" className="btn btn-primary"
                        onClick={(e) => this.props.getData(element)}>{element}</button>
                </li>
            )
        });
        return (
            <nav className="navbar navbar-expand-sm bg-light">
                <ul className="navbar-nav btn-group-margin">
                    {listItems}
                </ul>
            </nav>
        )
    }
}
export default Menu;