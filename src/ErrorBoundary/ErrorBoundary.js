import React, { Component } from 'react'

export default class extends Component {
    state = {
        hasError: false,
        errorMessage: ''
    }

    componentDidCatch = (error, info) => {
        this.setState({ hasError: true, errorMessage: error });
    }

    render() {

        if (this.state.hasError) {
            return (
                <h1>{this.state.errorMessage1}</h1>
            )
        } else {
            return this.props.children;
        }
    }
}
