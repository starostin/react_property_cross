/** @jsx React.DOM */
var React = require('react');
var AddToCart = require('./app-addtocart');
var Link =  require('react-router').Link;
var Settings = require('./../../settings');

var CatalogItem = React.createClass({
    render: function(){
        var itemStyle = {
            borderBottom: '1px solid #ccc',
            paddingBottom: 15
        };
        return (
            <div className="col-sm-3" style={itemStyle}>
                <h4>{this.props.item.title}</h4>
                <img src={this.props.item.img} width="200px"/>
                <p>{this.props.item.summary}</p>
                <p>${this.props.item.cost} <span className="text-success">{this.props.item.inCart && '(' + this.props.item.qty + ' item in cart)'}</span> </p>
                <div className="btn-group btn-group-xs">
                    <Link to={Settings.serverUrl + '/item/' + this.props.item.id} className="btn btn-default">Learn More</Link>
                    <AddToCart item={this.props.item} />
                </div>
            </div>
        );
    }
});

module.exports = CatalogItem;