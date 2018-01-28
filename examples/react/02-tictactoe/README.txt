* Must use a local web server *
Examples use the client-side Babel library (unpkg.com/...babel.min.js). Babel loads files via HTTP, so if the HTML page is loaded via file:// the browser blocks otehr loads due to Same Origin Policy. 

Start a local web server in this directory and access the files via http:// instead.
