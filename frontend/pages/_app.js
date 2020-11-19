import App from 'next/app';
import Page from '../public/components/Page';
import { ApolloProvider } from 'react-apollo';
import withData from '../lib/withData';

class Myapp extends App {

    static async getInitialProps({ Component, ctx }) {
        let pageProps = {};
        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }
        //this exposes the query to the user
        pageProps.query = ctx.query;
        return { pageProps };
    }
    render() {
        const { Component, apollo, pageProps } = this.props;
        return (
            <ApolloProvider client={this.props.apollo}>
                <Page>
                    <Component {...pageProps} />
                </Page>
            </ApolloProvider>

        )
    }
}

export default withData(Myapp);