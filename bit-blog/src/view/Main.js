import React, { Component } from 'react';
import { BlogList } from './BlogList'
import { Author } from './partials/author/Author';
import { About } from './partials/about/About'
import { Switch, Route } from "react-router-dom"




class Main extends Component {
    render() {

        return (
            <Switch>
                <Route path='/about' component={About} />
                <Route path='/authors' component={Author} />
                <Route path='/' component={BlogList} />
            </Switch>
        );
    }
}

export { Main }

