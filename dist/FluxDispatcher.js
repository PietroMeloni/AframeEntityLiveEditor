'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Dispatcher = require('flux').Dispatcher;
var AppDispatcher = new Dispatcher();

var UserActions = function () {
    function UserActions() {
        _classCallCheck(this, UserActions);
    }

    _createClass(UserActions, [{
        key: 'modelDragStart',
        value: function modelDragStart(model) {
            AppDispatcher.dispatch({
                actionType: 'MODEL_DRAG',
                value: data
            });
        }
    }, {
        key: 'modelDrop',
        value: function modelDrop(model) {
            AppDispatcher.dispatch({
                actionType: 'MODEL_DROP',
                value: key
            });
        }
    }]);

    return UserActions;
}();
//# sourceMappingURL=FluxDispatcher.js.map