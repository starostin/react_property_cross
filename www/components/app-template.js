/** @jsx React.DOM */
var React = require('react/addons');
var Header = require('./header/app-header');
var addons = require('react-addons');
var TransitionGroup = require('react/lib/ReactCSSTransitionGroup');
var CSSTransitionGroup = React.addons.CSSTransitionGroup;
var cloneWithProps = React.addons.cloneWithProps;
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;

var Template = React.createClass({
    contextTypes: {
        router: React.PropTypes.func
    },
    render: function(){
        var name = this.context.router.getCurrentPath();
        return (
            <div className="container">
                <Header />
                <TransitionGroup component="div" transitionName="moveUp">
                    <RouteHandler key={name} />
                </TransitionGroup>
            </div>
        );
    }
});

module.exports = Template;