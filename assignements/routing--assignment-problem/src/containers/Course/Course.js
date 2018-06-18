import React, { Component } from 'react';

//const queryString = require('query-string');

import queryString from 'query-string';


class Course extends Component {

    getTitle() {
        //const parsed = queryString.parse(this.props.location.search);
        //return parsed.title;

        const query = new URLSearchParams(this.props.location.search);
        return query.has('title')
            ? query.get('title')
            : 'No title available!'
    }

    render () {
        return (

            <div>
                <h1>{this.getTitle()}</h1>
                <p>You selected the Course with ID: {this.props.match.params.id}</p>
            </div>
        );
    }
}

export default Course;