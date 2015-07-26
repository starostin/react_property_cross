/** @jsx React.DOM */
var React = require('react');
var Link = require('react-router').Link;
var AppStore = require('../../stores/app-store');
var StoreWatchMixin =  require('../../mixins/StoreWatchMixin');
var Settings = require('./../../settings');

function CartTotals(){
    return AppStore.getCartTotals();
}

var CartSummary = React.createClass({
    mixins: [StoreWatchMixin(CartTotals)],
    render: function(){
        return (
            <div>
                <Link to={Settings.serverUrl + '/cart'} className="btn btn-success pull-right">
                    Cart Items: {this.state.qty} / ${this.state.total}
                </Link>
            </div>
        );
    }
});

module.exports = CartSummary;