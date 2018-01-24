import { Component, Input } from '@angular/core';

class MenuComponent {
    constructor() {
        this.title = 'app';
    }
}
MenuComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-menu',
                template: `
    menu-works
    {{foo}}
    {{title}}
  `,
                styles: [`

  `]
            },] },
];
/**
 * @nocollapse
 */
MenuComponent.ctorParameters = () => [];
MenuComponent.propDecorators = {
    'foo': [{ type: Input },],
    'title': [{ type: Input },],
};

/**
 * Generated bundle index. Do not edit.
 */

export { MenuComponent };
//# sourceMappingURL=san-menu-ui.js.map
