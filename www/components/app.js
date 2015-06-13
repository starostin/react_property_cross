/** @jsx React.DOM */

var React = require('react');
var AppActions = require('../actions/app-actions');
var Catalog = require('../components/ap-catalog');

var APP = React.createClass({
    render: function(){
        return (
            <div>
                <Catalog />
            </div>
        )
    }
});

module.exports = APP;