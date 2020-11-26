import { ɵɵdefineInjectable, Injectable, Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

class MbComponentsService {
    constructor() { }
}
MbComponentsService.ɵprov = ɵɵdefineInjectable({ factory: function MbComponentsService_Factory() { return new MbComponentsService(); }, token: MbComponentsService, providedIn: "root" });
MbComponentsService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
MbComponentsService.ctorParameters = () => [];

class MbComponentsComponent {
    constructor() { }
    ngOnInit() {
    }
}
MbComponentsComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-mb-components',
                template: `
    <p>
      mb-components works!
    </p>
  `
            },] }
];
MbComponentsComponent.ctorParameters = () => [];

class ButtonComponent {
    constructor() { }
    ngOnInit() {
    }
}
ButtonComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-button',
                template: "<button>\n    <ng-content></ng-content>\n</button>>\n",
                styles: [""]
            },] }
];
ButtonComponent.ctorParameters = () => [];

class ButtonModule {
}
ButtonModule.decorators = [
    { type: NgModule, args: [{
                declarations: [ButtonComponent],
                imports: [
                    CommonModule
                ],
                exports: [ButtonComponent]
            },] }
];

class InputComponent {
    constructor() { }
    ngOnInit() {
    }
}
InputComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-input',
                template: "<input type=\"text\" placeholder=\"Write your text...\">\n",
                styles: [""]
            },] }
];
InputComponent.ctorParameters = () => [];

class InputModule {
}
InputModule.decorators = [
    { type: NgModule, args: [{
                declarations: [InputComponent],
                imports: [
                    CommonModule
                ],
                exports: [InputComponent]
            },] }
];

class MbComponentsModule {
}
MbComponentsModule.decorators = [
    { type: NgModule, args: [{
                declarations: [MbComponentsComponent],
                imports: [
                    ButtonModule,
                    InputModule
                ],
                exports: [MbComponentsComponent]
            },] }
];

/*
 * Public API Surface of mb-components
 */

/**
 * Generated bundle index. Do not edit.
 */

export { MbComponentsComponent, MbComponentsModule, MbComponentsService, ButtonModule as ɵa, ButtonComponent as ɵb, InputModule as ɵc, InputComponent as ɵd };
//# sourceMappingURL=mb-components.js.map
