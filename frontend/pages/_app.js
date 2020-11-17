import App from 'next/app';
import Page from '../public/components/Page'

class Myapp extends App {
    render() {
        const { Component } = this.props;

        return (
                <Page>
                    <Component />
                </Page>
          
        )
    }
}

export default Myapp;