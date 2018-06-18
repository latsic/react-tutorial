import React, { Component } from 'react';

import { NavLink, Route, matchPath } from 'react-router-dom';

import './Courses.css';
import Course from '../Course/Course';
import UnknownRoute from '../../components/UnknownRoute/UnknownRoute';

class Courses extends Component {
    state = {
        courses: [
            { id: 1, title: 'Angular - The Complete Guide' },
            { id: 2, title: 'Vue - The Complete Guide' },
            { id: 3, title: 'PWA - The Complete Guide' }
        ]
    }

    render () {

        let courseElem = null;
        const match = matchPath(this.props.location.pathname, {
            path: '/Courses/:id'
        });

        if(match) {

            courseElem = this.state.courses.some(item => {
                console.log('equals', item.id, this.props.match.params.id);
                console.log('props', this.props);

                return match.params.id == item.id;
            })
            ?   (<Route
                    path="/Courses/:id"
                    search='?title=:coursetitle'
                    component={Course}
                    >
                </Route>)
            :   (<UnknownRoute></UnknownRoute>);
        }

        return (
            <div>
                <h1>Amazing Udemy Courses</h1>
                <section className="Courses">
                    
                    
                        {
                        this.state.courses.map( course => {
                            return (
                                <NavLink
                                    className="nav-item"
                                    to={{
                                        pathname: this.props.match.url + "/" + course.id,
                                        search: '?title=' + course.title
                                    }}
                                    key={course.id}
                                    >
                                    <article
                                        className="Course"
                                        // key={course.id}
                                        >
                                        {course.title}
                                    </article>
                                </NavLink>
                            );
                        } )
                        }                                                          
                </section>
                <div>
                    {courseElem}
                </div>
                {/* <div>

                    {
                        this.state.courses.some(item => {
                            return item.id == this.props.match.params.id;
                        })
                        ?   <Route
                                path="/Courses/:id"
                                search='?title=:coursetitle'
                                component={Course}
                                >
                            </Route>
                        :   <UnknownRoute>
                    }
                </div> */}

            </div>
        );
    }
}

export default Courses;