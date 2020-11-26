import { NgModule } from '@angular/core';
import { MbComponentsComponent } from './mb-components.component';
import { ButtonModule } from './button/button.module';
import { InputModule } from './input/input.module';
export class MbComponentsModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWItY29tcG9uZW50cy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vLi4vcHJvamVjdHMvbWItY29tcG9uZW50cy9zcmMvIiwic291cmNlcyI6WyJsaWIvbWItY29tcG9uZW50cy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBWW5ELE1BQU0sT0FBTyxrQkFBa0I7OztZQVI5QixRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFLENBQUMscUJBQXFCLENBQUM7Z0JBQ3JDLE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLFdBQVc7aUJBQ1o7Z0JBQ0QsT0FBTyxFQUFFLENBQUMscUJBQXFCLENBQUM7YUFDakMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWJDb21wb25lbnRzQ29tcG9uZW50IH0gZnJvbSAnLi9tYi1jb21wb25lbnRzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCdXR0b25Nb2R1bGUgfSBmcm9tICcuL2J1dHRvbi9idXR0b24ubW9kdWxlJztcbmltcG9ydCB7IElucHV0TW9kdWxlIH0gZnJvbSAnLi9pbnB1dC9pbnB1dC5tb2R1bGUnO1xuXG5cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbTWJDb21wb25lbnRzQ29tcG9uZW50XSxcbiAgaW1wb3J0czogW1xuICAgIEJ1dHRvbk1vZHVsZSxcbiAgICBJbnB1dE1vZHVsZVxuICBdLFxuICBleHBvcnRzOiBbTWJDb21wb25lbnRzQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBNYkNvbXBvbmVudHNNb2R1bGUgeyB9XG4iXX0=