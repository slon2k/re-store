import React from 'react'
import ErrorIndicator from "../error-indicator";

export default class ErrorBoundry extends React.Component {
    state = {
        hasError: false
    }

    componentDidCatch(error, errorInfo) {
        console.log(errorInfo);
        this.setState({hasError: true});
    }

    render() {
        const {hasError} = this.state;
        if (hasError) {
            return <ErrorIndicator />
        }
        return this.props.children;
    }
}