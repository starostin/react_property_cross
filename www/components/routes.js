/** @jsx React.DOM */

var React = require('react');
var AppActions = require('../actions/app-actions');
var Catalog = require('./catalog/app-catalog');
var CatalogDetail = require('./product/app-catalogdetail');
var Cart = require('./cart/app-cart');
var Router = require('react-router');
var Template = require('./app-template');
var Settings = require('./../settings');

var Locations = Router.Locations;
var Location = Router.Location;
var Route = Router.Route;

// declare our routes and their hierarchy
var routes = (
    <Route name="template" handler={Template}>
        <Route path={Settings.serverUrl + '/'} handler={Catalog}/>
        <Route path={Settings.serverUrl + '/cart'} handler={Cart}/>
        <Route path={Settings.serverUrl + '/item/:item'} handler={CatalogDetail}/>
    </Route>
);


module.exports = routes;