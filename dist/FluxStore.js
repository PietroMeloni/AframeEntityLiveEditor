'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AppDispatcher = require('./FluxDispatcher.js').AppDispatcher;
var EventEmitter = require('events').EventEmitter;

var AppStore = function (_EventEmitter) {
    _inherits(AppStore, _EventEmitter);

    function AppStore() {
        _classCallCheck(this, AppStore);

        var _this = _possibleConstructorReturn(this, (AppStore.__proto__ || Object.getPrototypeOf(AppStore)).call(this));

        _this.dispatchToken = AppDispatcher.register(_this.dispatcherCallback.bind(_this));
        return _this;
    }

    _createClass(AppStore, [{
        key: 'emitChange',
        value: function emitChange(eventName) {
            this.emit(eventName);
        }
    }, {
        key: 'addChangeListener',
        value: function addChangeListener(eventName, callback) {
            this.on(eventName, callback);
        }
    }, {
        key: 'removeChangeListener',
        value: function removeChangeListener(eventName, callback) {
            this.removeListener(eventName, callback);
        }
    }, {
        key: 'dispatcherCallback',
        value: function dispatcherCallback(action) {
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
    }]);

    return AppStore;
}(EventEmitter);
//# sourceMappingURL=FluxStore.js.map