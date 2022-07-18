import styles from './SideBar.module.css'

import React, { Fragment } from "react";

class SideBar extends React.Component {
    render() {

        return (
            <Fragment>
                <div className={styles.card}>
                    <h2>About Me</h2>
                    <div className={styles.fakeimg}>Image</div>
                    <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
                </div>
                <div className={styles.card}>
                    <h3>Popular Post</h3>
                    <div className={styles.fakeimg}><p>Image</p></div>
                    <div className={styles.fakeimg}><p>Image</p></div>
                    <div className={styles.fakeimg}><p>Image</p></div>
                </div>
                <div className={styles.card}>
                    <h3>Follow Me</h3>
                    <p>Some text..</p>
                </div>

            </Fragment>
        )
    }
}

export default SideBar;