import React from "react";
import PropTypes from "prop-types";

export default function HTML(props) {
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
        <link rel="stylesheet" href="vendor/bootstrap/css/bootstrap.min.css" />
        <link rel="stylesheet" href="vendor/bootstrap/css/bootstrap-theme.min.css" />
        <link rel="stylesheet" href="css/main.css" />
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
      <script src="vendor/modernizr/js/modernizr-2.8.3-respond-1.4.2.min.js" />
      <script src="vendor/pace/js/pace.min.js" />
      <script src="vendor/jquery/js/jquery-1.11.2.min.js" />
      <script src="vendor/bootstrap/js/bootstrap.min.js" />
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
