import React, { Component } from 'react';
import Header from './common/Header'
import { Main } from './Main'
import { Footer } from './common/Footer'
import { SinglePost } from './partials/singlePost/SinglePost'
import { Author } from './partials/author/author'
import { About } from './partials/about/About'
import { SingleAuthor } from './partials/author/SingleAuthor'




class App extends Component {
  render() {
    return (
      <div className='container'>
        <Header />
        <Main />
        <Footer />
      </div>

    );
  }
}


export default App;
