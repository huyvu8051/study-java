import React, { Fragment } from "react";

class Home extends React.Component {
    render() {
        return (
            <Fragment>
                <h1><b>Home page</b></h1>
                <h2>{this.props.name}</h2>
                <h3>{this.props.university}</h3>
                <h4>{this.props.age}</h4>

            </Fragment>
        )
    }
}

export default Home;