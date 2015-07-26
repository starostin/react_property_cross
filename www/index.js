/** @jsx React.DOM */

var routes = require('./components/routes.js');
var React = require('react');
var Router = require('react-router');

//React.render(
//    <APP />,
//    document.getElementById('main')
//);
Router.run(routes, Router.HashLocation, function(Root) {
    React.render(<Root/>, document.getElementById('main'));
});