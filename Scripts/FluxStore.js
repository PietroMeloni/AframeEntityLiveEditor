
var AppDispatcher;
var EventEmitter;
var requirejs = require(['requirejs'], function(requirejs) {



    requirejs.config({
        //Pass the top-level main.js/index.js require
        //function to requirejs so that node modules
        //are loaded relative to the top-level JS file.
        nodeRequire: require
    });

    AppDispatcher = require("FluxDispatcher").UserActions;
    EventEmitter = requirejs("events").EventEmitter;
});

     // AppDispatcher = require("FluxDispatcher").UserActions;
     // EventEmitter = requirejs("events").EventEmitter;


    class AppStore extends EventEmitter {

        constructor() {
            super();
            this.dispatchToken = AppDispatcher.register(this.dispatcherCallback.bind(this))
        }

        emitChange(eventName) {
            this.emit(eventName);
        }


        addChangeListener(eventName, callback) {
            this.on(eventName, callback);
        }

        removeChangeListener(eventName, callback) {
            this.removeListener(eventName, callback);
        }

        dispatcherCallback(action) {
            switch (action.actionType) {
                case 'MODEL_DRAG':
                    this.submitArticle(action.value);
                    break;

                case 'MODEL_DROP':
                    this.removeArticle(action.value);
            }

            this.emitChange('STORE_' + action.actionType);

            return true;
        }
    }

// });
