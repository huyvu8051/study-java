import React from "react";

import styles from "./Header.module.css"

class Header extends React.Component {

    render() {
        return (
            <div className={styles.header}>
                <h1>My Website</h1>
                <p>Resize the browser window to see the effect.</p>
            </div>
        );
    }
}

export default Header;