import React, { Component } from 'react';
import axios from 'axios';

import './FullPost.css';

class FullPost extends Component {
    
    state = {
        loadedPost: null
    }

    componentDidUpdate() {
    
        if(this.props.id > 0) {

            if(!this.state.loadedPost ||
               (this.state.loadedPost && 
               this.state.loadedPost.id !== this.props.id)) {

                axios.get('http://jsonplaceholder.typicode.com/posts/' + this.props.id)
                .then(response => {
                    this.setState({
                            loadedPost: response.data
                    })
                })
                .catch((error) => {

                });
            }
        }
    }
    
    deletePostHandler = () => {

        if(this.props.id > 0) {

            axios.delete(
                'http://jsonplaceholder.typicode.com/posts/' + this.props.id
            ).then((response) => {

            });
        }

    };

    render () {

        const myStyle = {
            textAlign: 'center'
        };

        let post = <p
                        style={myStyle}
                        >
                        Please select a Post!
                    </p>;

        if(this.props.id > 0) {
            post = <p
                        style={myStyle}
                        >
                        Loading...
                    </p>;
        }

        if(this.state.loadedPost) {
            post = (
                <div className="FullPost">
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body}</p>
                    <div className="Edit">
                        <button
                            onClick={this.deletePostHandler}
                            className="Delete"
                            >
                            Delete
                        </button>
                    </div>
                </div>
            );
        }

       

        
        return post;
    }
}

export default FullPost;