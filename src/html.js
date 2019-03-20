import React from 'react';
import PropTypes from 'prop-types';
import { withPrefix } from 'gatsby';

export default function HTML(props) {
  const scriptUrls = {
    bootstrapCss:
      withPrefix('vendor/bootstrap/css/bootstrap.min.css'),
    bootstrapThemeCss:
      withPrefix('vendor/bootstrap/css/bootstrap-theme.min.css'),
    bootstrapJs:
      withPrefix('vendor/bootstrap/js/bootstrap.min.js'),
    mainCss:
      withPrefix('css/main.css'),
    paceJs:
      withPrefix('vendor/pace/js/pace.min.js'),
  };

  return (
    <html
      {...props.htmlAttributes}
      lang="en"
    >
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link rel="stylesheet" href={scriptUrls.bootstrapCss} />
        <link rel="stylesheet" href={scriptUrls.bootstrapThemeCss} />
        <link rel="stylesheet" href={scriptUrls.mainCss} />
        <link
          href="https://fonts.googleapis.com/css?family=Raleway"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Crimson+Text"
          rel="stylesheet"
          type="text/css"
        />
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.png" />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <noscript key="noscript" id="gatsby-noscript">
          This app works best with JavaScript enabled.
        </noscript>
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
          className="gatsby__body"
        />
        {props.postBodyComponents}
      </body>
      <script src={scriptUrls.paceJs} />
      <script
        src="http://code.jquery.com/jquery-2.2.4.min.js"
        integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44="
        crossOrigin="anonymous"
      />
      <script src={scriptUrls.bootstrapJs} />
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
};
