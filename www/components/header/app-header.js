/** @jsx React.DOM */
var React = require('react');
var CartSummary = require('./app-cartsummary');

var Header = React.createClass({
    render: function(){
        return (
            <div className="row">
                <div className="cal-sm-6"><h1>Lets Shop</h1></div>
                <div className="cal-sm-2 cal-sm-push">
                    <br />
                    <CartSummary />
                </div>
            </div>
        );
    }
});

module.exports = Header;