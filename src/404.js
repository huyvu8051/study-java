import styles from './404.module.css'

import React, { Fragment } from "react";

class NotFound extends React.Component {
    render() {

        return (
            <Fragment>
                <h1 style={styles.notFound}>404: Page not found</h1>

            </Fragment>
        )
    }
}

export default NotFound;