/** @jsx React.DOM */

var React = require('react');
var AppActions = require('../actions/app-actions');

var APP = React.createClass({
    handleClick: function(){
        AppActions.addItem('1111')
    },
    render: function(){
        return <h1 onClick={this.handleClick}> My Flux App </h1>
    }
});

module.exports = APP;