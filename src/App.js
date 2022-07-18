import logo from './logo.svg';
import './App.css';
import React, { Fragment } from 'react';


import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Login from './Login';
import TopNav from './TopNav';
import Product from './Product';
import NotFound from './404';


import styles from './App.module.css'
import SideBar from './SideBar';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      components: new Map([
        ['/', Home],
        ['/login', Login],
        ['/product', Product],
        ['/not-found', NotFound],
      ]),

    }
  }
  // truyền props sau khi assign vào var, có thể dùng coppy(nhưng mà cách này nó tốn bộ nhớ vcl?), hoặc là cái 'views' mình để nó là thằng viewFactory, còn vụ return (history) thì làm riêng :D

  getComponentByPath(path) {
    var view = this.state.components.get(path);
    if (view === null || view === undefined) return this.state.components.get("/not-found");
    return view;
  }

  render() {

    // window.history.pushState("object or string", "Title", "/" + this.state.path);
    var query = new URLSearchParams(window.location.search)
    var queryObj = Object.fromEntries(query.entries())

    var props = {
      fullname: "Huy",
      university: "HUTECH",
      age: 21,
      ...queryObj
    }
    // console.log(props);

    
    var path = window.location.pathname;
    var comp = this.getComponentByPath(path);

    var view = new comp(props);

    return (
      <Fragment>
        <Header logo={logo} onChange={this.state.eventHandler} />

        <TopNav />
        <div className={styles.row}>
          <div className={styles.leftcolumn}>
            {view.render()}
          </div>

          <div className={styles.rightcolumn}>
            <SideBar />
          </div>
        </div>

        <Footer />
      </Fragment>
    )
  }
}


export default App
