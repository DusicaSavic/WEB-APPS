import React, { Component } from 'react';
import { BlogList } from './BlogList'
import { SingleAuthor } from './partials/author/SingleAuthor';
import { About } from './partials/about/About'
import { Switch, Route } from "react-router-dom"




class Main extends Component {
    render() {

        return (
            <Switch>
                <Route path='/blogs' component={BlogList} />
                <Route path='/single' component={SingleAuthor} />
            </Switch>
        );
    }
}

export { Main }

