(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core'], factory) :
	(factory((global['san-menu-ui'] = {}),global.ng.core));
}(this, (function (exports,core) { 'use strict';

var MenuComponent = /** @class */ (function () {
    function MenuComponent() {
        this.title = 'app';
    }
    return MenuComponent;
}());
MenuComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'app-menu',
                template: "\n    menu-works\n    {{foo}}\n    {{title}}\n  ",
                styles: ["\n\n  "]
            },] },
];
/**
 * @nocollapse
 */
MenuComponent.ctorParameters = function () { return []; };
MenuComponent.propDecorators = {
    'foo': [{ type: core.Input },],
    'title': [{ type: core.Input },],
};

exports.MenuComponent = MenuComponent;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=san-menu-ui.umd.js.map
