import Head from 'next/head';

import 'styles/globals.css';
import { Nav, RouteGuard } from 'components';

export default App;


function App({ Component, pageProps }) {

    return (
        <>
            <Head>

            </Head>

                    <RouteGuard>
                        <Component {...pageProps} />
                    </RouteGuard>

        </>
    );
}
