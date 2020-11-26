(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('mb-components', ['exports', '@angular/core', '@angular/common'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['mb-components'] = {}, global.ng.core, global.ng.common));
}(this, (function (exports, i0, common) { 'use strict';

    var MbComponentsService = /** @class */ (function () {
        function MbComponentsService() {
        }
        return MbComponentsService;
    }());
    MbComponentsService.ɵprov = i0.ɵɵdefineInjectable({ factory: function MbComponentsService_Factory() { return new MbComponentsService(); }, token: MbComponentsService, providedIn: "root" });
    MbComponentsService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    MbComponentsService.ctorParameters = function () { return []; };

    var MbComponentsComponent = /** @class */ (function () {
        function MbComponentsComponent() {
        }
        MbComponentsComponent.prototype.ngOnInit = function () {
        };
        return MbComponentsComponent;
    }());
    MbComponentsComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'lib-mb-components',
                    template: "\n    <p>\n      mb-components works!\n    </p>\n  "
                },] }
    ];
    MbComponentsComponent.ctorParameters = function () { return []; };

    var ButtonComponent = /** @class */ (function () {
        function ButtonComponent() {
        }
        ButtonComponent.prototype.ngOnInit = function () {
        };
        return ButtonComponent;
    }());
    ButtonComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'lib-button',
                    template: "<button>\n    <ng-content></ng-content>\n</button>>\n",
                    styles: [""]
                },] }
    ];
    ButtonComponent.ctorParameters = function () { return []; };

    var ButtonModule = /** @class */ (function () {
        function ButtonModule() {
        }
        return ButtonModule;
    }());
    ButtonModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [ButtonComponent],
                    imports: [
                        common.CommonModule
                    ],
                    exports: [ButtonComponent]
                },] }
    ];

    var InputComponent = /** @class */ (function () {
        function InputComponent() {
        }
        InputComponent.prototype.ngOnInit = function () {
        };
        return InputComponent;
    }());
    InputComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'lib-input',
                    template: "<input type=\"text\" placeholder=\"Write your text...\">\n",
                    styles: [""]
                },] }
    ];
    InputComponent.ctorParameters = function () { return []; };

    var InputModule = /** @class */ (function () {
        function InputModule() {
        }
        return InputModule;
    }());
    InputModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [InputComponent],
                    imports: [
                        common.CommonModule
                    ],
                    exports: [InputComponent]
                },] }
    ];

    var MbComponentsModule = /** @class */ (function () {
        function MbComponentsModule() {
        }
        return MbComponentsModule;
    }());
    MbComponentsModule.decorators = [
        { type: i0.NgModule, args: [{
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

    exports.MbComponentsComponent = MbComponentsComponent;
    exports.MbComponentsModule = MbComponentsModule;
    exports.MbComponentsService = MbComponentsService;
    exports.ɵa = ButtonModule;
    exports.ɵb = ButtonComponent;
    exports.ɵc = InputModule;
    exports.ɵd = InputComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=mb-components.umd.js.map
