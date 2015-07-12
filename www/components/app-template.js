/** @jsx React.DOM */
var React = require('react');
var Header = require('./header/app-header');
var addons = require('react-addons');
var TransitionGroup = require('react/lib/ReactCSSTransitionGroup');

var Template = React.createClass({
    render: function(){
        return (
            <div className="container">
                <Header />
                <TransitionGroup component="div" transitionName="example">
                    {React.cloneElement(this.props.children, {key: Math.random()})}
                </TransitionGroup>
            </div>
        );
    }
});

module.exports = Template;