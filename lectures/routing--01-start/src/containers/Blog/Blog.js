import React, { Component } from 'react';
// import axios from 'axios';
// import axios from '../../axios';

import { Route, Link, NavLink, Switch, Redirect } from 'react-router-dom';

// import Post from '../../components/Post/Post';
// import FullPost from '../../components/FullPost/FullPost';
// import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';
import Posts from './Posts/Posts';
import asyncComponent from '../../hoc/asyncComponent';
//import NewPost from './NewPost/NewPost';

import FullPost from './FullPost/FullPost';

const AsyncNewPost = asyncComponent(() => {
    return import('./NewPost/NewPost');
});

class Blog extends Component {

    state = {
        auth: true
    };    

    // state = {
    //     posts: [],
    //     selectedPostId: null,
    //     error: false
    // }

    // componentDidMount () {
    //     axios.get( '/posts' )
    //         .then( response => {
    //             const posts = response.data.slice(0, 4);
    //             const updatedPosts = posts.map(post => {
    //                 return {
    //                     ...post,
    //                     author: 'Max'
    //                 }
    //             });
    //             this.setState({posts: updatedPosts});
    //             // console.log( response );
    //         } )
    //         .catch(error => {
    //             // console.log(error);
    //             this.setState({error: true});
    //         });
    // }

    // postSelectedHandler = (id) => {
    //     this.setState({selectedPostId: id});
    // }

    render () {
        // let posts = <p style={{textAlign: 'center'}}>Something went wrong!</p>;
        // if (!this.state.error) {
        //     posts = this.state.posts.map(post => {
        //         return <Post 
        //             key={post.id} 
        //             title={post.title} 
        //             author={post.author}
        //             clicked={() => this.postSelectedHandler(post.id)} />;
        //     });
        // }

        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li>
                                <NavLink
                                    to="/posts"
                                    activeClassName="my-active"
                                    activeStyle={{
                                        textDecoration: 'underline'
                                    }}
                                    >
                                    Posts
                                </NavLink>
                            </li>
                           {/*  <li>
                                <NavLink
                                    to="/"
                                    exact
                                    activeClassName="my-active"
                                    activeStyle={{
                                        textDecoration: 'underline'
                                    }}
                                    >
                                    Posts
                                </NavLink>
                            </li> */}
                            <li>
                                <NavLink
                                    to={{
                                        pathname: '/new-post',
                                        hash: '#something',
                                        search: '?quick-submit=true',
                                    }}
                                    activeClassName="my-active"
                                    >
                                    New Post
                                </NavLink>
                            </li>
                            {/* <li>
                                <Link
                                    to="/"
                                    >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={{
                                        pathname: '/new-post',
                                        hash: '#something',
                                        search: '?quick-submit=true'
                                    }}
                                    >
                                    New Post
                                </Link> */}
                                {/* <Link
                                    to={{
                                        pathname: this.props.match.url + '/new-post',
                                        hash: '#something',
                                        search: '?quick-submit=true'
                                    }}
                                    >
                                    New Post
                                </Link>
                            </li> */}
                        </ul>
                    </nav>
                </header>
                {/* <Route 
                    path="/"
                    exact
                    render={
                        () => <h1>Home</h1>
                    }                
                /> */}
                
                <Switch>
                    {
                        this.state.auth
                            ?   <Route
                                    path="/new-post"
                                    // component={NewPost}
                                    component={AsyncNewPost}
                                />
                            : null
                    }
                    {/* <Route
                        path="/:id"
                        exact
                        component={FullPost}
                    /> */}
                    <Route
                        path="/posts"
                        component={Posts}
                    />
                    {/* <Route
                        path="/"
                        component={Posts}
                    /> */}
                    {/* <Redirect
                        from="/"
                        to="/posts"
                    /> */}
                    <Route
                        render={() => {
                            return <h1>Output not found</h1>
                        }}
                    />

                </Switch>

                {/* <section className="Posts">
                    {posts}
                </section> */}
                {/* <section>
                    <FullPost id={this.state.selectedPostId} />
                </section>
                <section>
                    <NewPost />
                </section> */}
            </div>
        );
    }
}

export default Blog;