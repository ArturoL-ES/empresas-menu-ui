import { Component, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
    { type: Component, args: [{
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
    'foo': [{ type: Input },],
};
var FooModule = /** @class */ (function () {
    function FooModule() {
    }
    return FooModule;
}());
FooModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ],
                declarations: [FooComponent],
                exports: [FooComponent]
            },] },
];
/**
 * @nocollapse
 */
FooModule.ctorParameters = function () { return []; };
/**
 * Generated bundle index. Do not edit.
 */
export { FooModule, FooComponent as ɵa };
//# sourceMappingURL=san-menu-ui.es5.js.map
