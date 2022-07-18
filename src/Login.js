import React, { Fragment } from "react";

import push from './push'

class Login extends React.Component {



    render() {
        return (
            <Fragment>
                <p>{this.props.message}</p>
                <h2>Login Form</h2>
                <button onClick={(e) => push(e, "/product", { name: "smart phone", page: 2, size: 6 })}>Click</button>
            </Fragment>
        )
    }
}

export default Login;