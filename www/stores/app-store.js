var AppDispatcher = require('../dispatcher/app-dispatcher');
var AppConstants = require('../constants/app-constants');
var assign = require('object-assign');
var EventEmitter = require('events').EventEmitter;

var CHANGE_EVENT = 'change';

var _catalog = [];
for (var i=0; i<9; i++){
    _catalog.push({
        id: 'Widget' + i,
        title: 'Widget #' + i,
        summary: 'This is widget!',
        description: 'Test test test',
        img: 'assets/product.jpg',
        cost: i
    })
}

var _carItems = [];

function _cartTotals(){
    var qty = 0, total = 0;
    _carItems.forEach(function(cartItem){
        qty+=cartItem.qty;
        total+=cartItem.qty*cartItem.cost;
    });
    return {qty: qty, total: total}
}

function _removeItem(index){
    _carItems[index].inCart = false;
    _carItems.splice(index, 1);
}

function _increaseItem(index){
    _carItems[index].qty++;
}

function _decreaseItem(index){
    if(_carItems[index].qty > 1){
        _carItems[index].qty--;
    }else{
        _removeItem(index)
    }
}

function _addItem(item){
    if(!item.inCart){
        item['qty'] = 1;
        item['inCart'] = true;
        _carItems.push(item);
    }else{
       _carItems.forEach(function(cartItem, i){
           if(cartItem.id === item.id){
               _increaseItem(i);
           }
       })
    }
}

var AppStore = assign({}, EventEmitter.prototype, {
    emitChange: function(){
        this.emit(CHANGE_EVENT)
    },
    addChangeListener: function(callback){
        this.on(CHANGE_EVENT, callback)
    },
    removeChangeListener: function(callback){
        this.removeListener(CHANGE_EVENT, callback)
    },
    getCart: function(){
        return _carItems;
    },
    getCatalog: function(){
        return _catalog;
    },
    getCartTotals: function(){
        return _cartTotals();
    },
    dispatcherIndex: AppDispatcher.register(function(payload){
        var action = payload.action;
        switch (action.actionType){
            case AppConstants.ADD_ITEM:
                _addItem(payload.action.item);
                AppStore.emitChange();
                break;
            case AppConstants.REMOVE_ITEM:
                _removeItem(payload.action.index);
                AppStore.emitChange();
                break;
            case AppConstants.INCREASE_ITEM:
                _increaseItem(payload.action.index);
                AppStore.emitChange();
                break;
            case AppConstants.DECREASE_ITEM:
                _decreaseItem(payload.action.index);
                AppStore.emitChange();
                break;
        }
        return true;
    })
});

module.exports = AppStore;