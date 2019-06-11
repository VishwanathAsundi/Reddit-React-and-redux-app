import React, { Component } from 'react';

class Menu extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm bg-light">
                <ul className="navbar-nav btn-group-margin">
                    <li className="nav-item mr-3 my-2">
                        <button type="buttton" className="btn btn-primary"
                            onClick={(e) => this.props.getData("images")}>images</button>
                    </li>
                    <li className="nav-item mr-3  my-2">
                        <button type="buttton" className="btn btn-primary" onClick={(e) => this.props.getData("alternatives")}>Alternatives</button>
                    </li>
                    <li className="nav-item mr-3 my-2">
                        <button type="buttton" className="btn btn-primary"
                            onClick={(e) => this.props.getData("pics")}>Pics</button>
                    </li>
                    <li className="nav-item mr-3 my-2">
                        <button type="buttton" className="btn btn-primary"
                            onClick={(e) => this.props.getData("gifs")}>Gifs</button>
                    </li>
                    <li className="nav-item mr-3 my-2">
                        <button type="buttton" className="btn btn-primary"
                            onClick={(e) => this.props.getData("adviceanimals")}>Advice Animals</button>
                    </li>
                    <li className="nav-item mr-3 my-2">
                        <button type="buttton" className="btn btn-primary"
                            onClick={(e) => this.props.getData("cats")}>Cats</button>
                    </li>
                </ul>
            </nav>
        )
    }
}
export default Menu;