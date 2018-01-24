import { Component, Input } from '@angular/core';
var MenuComponent = /** @class */ (function () {
    function MenuComponent() {
        this.title = 'app';
    }
    return MenuComponent;
}());
MenuComponent.decorators = [
    { type: Component, args: [{
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
    'foo': [{ type: Input },],
    'title': [{ type: Input },],
};
/**
 * Generated bundle index. Do not edit.
 */
export { MenuComponent };
//# sourceMappingURL=san-menu-ui.es5.js.map
