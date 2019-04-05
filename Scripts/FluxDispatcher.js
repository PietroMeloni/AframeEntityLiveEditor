var AppDispatcher;
var Dispatcher;
var requirejs = require(['requirejs'], function(requirejs) {



    requirejs.config({
        //Pass the top-level main.js/index.js require
        //function to requirejs so that node modules
        //are loaded relative to the top-level JS file.
        nodeRequire: require
    });
    Dispatcher = requirejs("flux").Dispatcher;
    AppDispatcher = new Dispatcher();

});
    class UserActions {

        modelDragStart(model) {
            AppDispatcher.dispatch({
                actionType: 'MODEL_DRAG',
                value: data
            });
        }

        modelDrop(model)
        {
            AppDispatcher.dispatch({
                actionType: 'MODEL_DROP',
                value: key
            });
        }
    }




// if (typeof define !== 'function') {
//     var define = require('amdefine')(module);
// }
//
// define(function (require) {


// });



