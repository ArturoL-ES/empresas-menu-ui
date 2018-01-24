(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/common'], factory) :
	(factory((global['san-menu-ui'] = {}),global.ng.core,global.ng.common));
}(this, (function (exports,core,common) { 'use strict';

var FooComponent = /** @class */ (function () {
    function FooComponent() {
    }
    /**
     * @return {?}
     */
    FooComponent.prototype.ngOnInit = function () {
    };
    return FooComponent;
}());
FooComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'app-foo',
                template: "\n    <p>\n      foo works!\n    </p>\n    {{foo}}\n  ",
                styles: ["\n\n  "]
            },] },
];
/**
 * @nocollapse
 */
FooComponent.ctorParameters = function () { return []; };
FooComponent.propDecorators = {
    'foo': [{ type: core.Input },],
};
var FooModule = /** @class */ (function () {
    function FooModule() {
    }
    return FooModule;
}());
FooModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [
                    common.CommonModule
                ],
                declarations: [FooComponent],
                exports: [FooComponent]
            },] },
];
/**
 * @nocollapse
 */
FooModule.ctorParameters = function () { return []; };

exports.FooModule = FooModule;
exports.ɵa = FooComponent;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=san-menu-ui.umd.js.map
