import React, { Component } from 'react';

class Menu extends Component {
    render() {
        return (
            <nav class="navbar navbar-expand-sm bg-light">
                <ul class="navbar-nav btn-group-margin">
                    <li class="nav-item mr-3 my-2">
                        <button type="buttton" className="btn btn-primary"
                            onClick={(e) => this.props.getData("images")}>images</button>
                    </li>
                    <li class="nav-item mr-3  my-2">
                        <button type="buttton" className="btn btn-primary" onClick={(e) => this.props.getData("alternatives")}>Alternatives</button>
                    </li>
                    <li class="nav-item mr-3 my-2">
                        <button type="buttton" className="btn btn-primary"
                            onClick={(e) => this.props.getData("pics")}>Pics</button>
                    </li>
                    <li class="nav-item mr-3 my-2">
                        <button type="buttton" className="btn btn-primary"
                            onClick={(e) => this.props.getData("gifs")}>Gifs</button>
                    </li>
                    <li class="nav-item mr-3 my-2">
                        <button type="buttton" className="btn btn-primary"
                            onClick={(e) => this.props.getData("adviceanimals")}>Advice Animals</button>
                    </li>
                    <li class="nav-item mr-3 my-2">
                        <button type="buttton" className="btn btn-primary"
                            onClick={(e) => this.props.getData("cats")}>Cats</button>
                    </li>
                </ul>
            </nav>
        )
    }
}
export default Menu;