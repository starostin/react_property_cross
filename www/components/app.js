/** @jsx React.DOM */

var React = require('react');
var AppActions = require('../actions/app-actions');
var Catalog = require('../components/app-catalog');
var Cart = require('../components/app-cart');

var APP = React.createClass({
    render: function(){
        return (
            <div>
                <h1>Catalog</h1>
                <Catalog />
                <h1>Cart</h1>
                <Cart />
            </div>
        )
    }
});

module.exports = APP;