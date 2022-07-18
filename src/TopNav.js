import React from "react";
import push from './push'

import styles from "./TopNav.module.css"

class Header extends React.Component {

    render() {
        return (
            <div className={styles.topnav}>
                <a onClick={(e) => { push(e, "/") }} href="/">Home</a>
                <a onClick={(e) => { push(e, "/product", { name: "smart phone", page: 2, size: 6 }) }} href="/product">Products</a>
                <a onClick={(e) => { push(e, "/login", { message: "please login <3" }) }} href="/login">Login</a>
                <a href="/">Link</a>
            </div>
        );
    }
}

export default Header;