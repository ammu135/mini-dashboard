import { trigger, animate, transition, style, query, group } from '@angular/animations';

export const slideAnimation =
    trigger('slideAnimation', [
        transition('Info => Table', [
            query(':enter, :leave',
                style({ position: 'fixed', width: '100%' }),
                { optional: true }),
            group([
                query(':enter', [
                    style({ transform: 'translateX(-100%)' }),
                    animate('0.5s ease-in-out',
                        style({ transform: 'translateX(0%)' }))
                ], { optional: true }),
                query(':leave', [
                    style({ transform: 'translateX(0%)' }),
                    animate('0.5s ease-in-out',
                        style({ transform: 'translateX(100%)' }))
                ], { optional: true }),
            ])
        ]),

        transition('Table => Info', [
            query(':enter, :leave',
                style({ position: 'fixed', width: '100%' }),
                { optional: true }),
            group([
                query(':enter', [
                    style({ transform: 'translateX(100%)' }),
                    animate('0.5s ease-in-out',
                        style({ transform: 'translateX(0%)' }))
                ], { optional: true }),
                query(':leave', [
                    style({ transform: 'translateX(0%)' }),
                    animate('0.5s ease-in-out',
                        style({ transform: 'translateX(-100%)' }))
                ], { optional: true }),
            ])
        ]),

    ]);