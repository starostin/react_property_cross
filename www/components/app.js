/** @jsx React.DOM */

var React = require('react');
var AppActions = require('../actions/app-actions');
var Catalog = require('./catalog/app-catalog');
var CatalogDetail = require('./product/app-catalogdetail');
var Cart = require('./cart/app-cart');
var Router = require('react-router-component');
var Template = require('./app-template');
var Settings = require('./../settings');

var Locations = Router.Locations;
var Location = Router.Location;

var APP = React.createClass({
    render: function(){
        console.log('--------------', Settings.serverUrl)
        return (
            <Template>
                <Locations>
                    <Location path={Settings.serverUrl + '/'} handler={Catalog}></Location>
                    <Location path={Settings.serverUrl + '/cart'} handler={Cart}></Location>
                    <Location path={Settings.serverUrl + '/item/:item'} handler={CatalogDetail}></Location>
                </Locations>
            </Template>
        )
    }
});

module.exports = APP;