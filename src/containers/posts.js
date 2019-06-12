import React, { Component } from 'react';
import Menu from './menu';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { fetchData } from '../store/actions/index';
import isImageUrl from 'is-image-url';


class Posts extends Component {
    componentDidMount() {
        this.props.getPosts("images");
    }
    render() {
        return (
            <div className="container">
                <Menu
                    getData={this.props.getPosts}
                />
                <div className="posts-holder">
                    <div className="row">
                        {this.props.loader ?
                            <div className="loader mx-auto">
                                <img src="/images/Spinner-1s-200px.gif" alt="img-redundant-alt" />
                                <p>Loading please wait...</p>
                            </div>
                            :
                            (this.props.postData) && this.props.postData.map((post, i) => {
                                return (isImageUrl(post.data.url)) ?
                                    <div key={i} className="each-post">
                                        <div className="img-post">
                                            <div className="image-box">
                                                <div style={{ backgroundImage: `url(${post.data.url})`, width: '100%', height: '200px', backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}></div>
                                                <div className="comments">
                                                    <ul>
                                                        <li>
                                                            <i className="far fa-comment"></i>
                                                            <span> {post.data.num_comments}</span>
                                                        </li>
                                                        <li>
                                                            <i className="far fa-thumbs-up"></i>
                                                            <span> {post.data.ups}</span></li>
                                                        <li>
                                                            <i className="far fa-thumbs-down"></i>
                                                            <span> {post.data.downs} </span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="post-text">
                                            <p>{post.data.title}</p>
                                        </div>
                                    </div>
                                    : ''
                            })}
                    </div>
                </div>
            </div>
        )
    }
}
Posts.propType = {
    postData: PropTypes.array,
    loader: PropTypes.boolean
}
const mapStateToProps = state => {
    return {
        postData: state.postData,
        loader: state.loader
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getPosts: (type) => dispatch(fetchData(type)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);