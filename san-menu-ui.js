import { Component, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

class FooComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
FooComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-foo',
                template: `
    <p>
      foo works!
    </p>
    {{foo}}
  `,
                styles: [`

  `]
            },] },
];
/**
 * @nocollapse
 */
FooComponent.ctorParameters = () => [];
FooComponent.propDecorators = {
    'foo': [{ type: Input },],
};

class FooModule {
}
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
FooModule.ctorParameters = () => [];

/**
 * Generated bundle index. Do not edit.
 */

export { FooModule, FooComponent as ɵa };
//# sourceMappingURL=san-menu-ui.js.map
