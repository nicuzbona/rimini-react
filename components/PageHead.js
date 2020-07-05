import React, { Component, Fragment } from "react";
import Head from "next/head";

import { Image } from "grommet";

export default class PageHead extends Component {
    render() {
        return (
            <Fragment>
                <Head>
                    <style
                        dangerouslySetInnerHTML={{
                            __html: `
                    @font-face {
                        font-family: 'Futura';
                        src: url('/fonts/futura-medium.ttf') format('truetype');
                    }
                `,
                        }}
                    />

                    <title>Floadting Dots</title>
                    <meta
                        name="description"
                        content="Floating Dots Oficial Website "
                    />
                    <meta charSet="utf-8" />
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                    <link rel="stylesheet" type="text/css" href="/style.css" />
                    <link rel="icon" href="/favicon.ico" />
                    <script
                        async
                        src="https://www.googletagmanager.com/gtag/js?id=UA-78808747-1"></script>
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `window.dataLayer = window.dataLayer || [];
					 function gtag(){dataLayer.push(arguments);}
					 gtag('js', new Date());
					 gtag('config', 'UA-78808747-1');`,
                        }}></script>

                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
					(function(h,o,t,j,a,r){
					   h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
					   h._hjSettings={hjid:255130,hjsv:6};
					   a=o.getElementsByTagName('head')[0];
					   r=o.createElement('script');r.async=1;
					   r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
					   a.appendChild(r);
					   })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`,
                        }}></script>
                    <script
                        type="text/javascript"
                        id="cookieinfo"
                        src="//cookieinfoscript.com/js/cookieinfo.min.js"
                        data-bg="#7c5e49"
                        data-fg="#FFFFFF"
                        data-link="#F1D600"
                        data-moreinfo="/policies"
                        data-message='This site uses cookies. By continuing to use this site, closing this banner, or clicking "I Agree", you agree to the use of cookies. Read our cookies policy for more information.If you decline, your information won’t be tracked when you visit this website. A single cookie will be used in your browser to remember your preference not to be tracked.'
                        data-cookie="CookieInfoScript"
                        data-text-align="left"
                        data-close-text="I Agree"></script>
                </Head>
            </Fragment>
        );
    }
}
