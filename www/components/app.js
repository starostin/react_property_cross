/** @jsx React.DOM */

var React = require('react');
var AppActions = require('../actions/app-actions');
var Catalog = require('./catalog/app-catalog');
var CatalogDetail = require('./product/app-catalogdetail');
var Cart = require('./cart/app-cart');
var Router = require('react-router-component');
var Template = require('./app-template');

var Locations = Router.Locations;
var Location = Router.Location;

var APP = React.createClass({
    render: function(){
        return (
            <Template>
                <Locations>
                    <Location path="/" handler={Catalog}></Location>
                    <Location path="/cart" handler={Cart}></Location>
                    <Location path="item/:item" handler={CatalogDetail}></Location>
                </Locations>
            </Template>
        )
    }
});

module.exports = APP;