/** @jsx React.DOM */
var React = require('react');
var AppStore = require('../../stores/app-store');
var AddToCart = require('./app-addtocart');
var CatalogItem = require('./app-catalogitem');
var StoreWatchMixin =  require('../../mixins/StoreWatchMixin');

function getCatalog(){
    return {items: AppStore.getCatalog()}
}
var Catalog = React.createClass({
    mixins: [StoreWatchMixin(getCatalog)],
    render: function(){
        var items = this.state.items.map(function(item, index){
            return <CatalogItem item={item} />
        });
        return (
            <div className="row" key="2">
                {items}
            </div>
        )
    }
});

module.exports = Catalog;