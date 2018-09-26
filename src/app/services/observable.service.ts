import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ObservableService {

    data: Observable<any>;

    constructor() {
    }

    test() {
        this.data = new Observable(observer => {
            setTimeout(() => {
                observer.next(1);
            }, 5000);

            setTimeout(() => {
                observer.next(2);
            }, 10000);

            setTimeout(() => {
                observer.next(3);
            }, 15000);

            setTimeout(() => {
                observer.next({ name: 'Amitabh' });
            }, 20000);
        });

        return this.data;
    }

    ///////////////////////
    //   LAMBDA EXAMPLES

    // 1. Anonymous Function
    // f = function() {
    //     // some code
    // };

    // 2. Lambda example
    // (x, y) => {
    //     a = x + 5;
    //     b = y -10;

    //     return a + b;
    // };

    //3. Lambda - parameterless
    // () => {
    //     //Some Code
    // }

    //4. Lambda - single parameter
    // myparam => {
    //     //Some code
    // }

    //5. Lambda - only one expression statement and it returns

    // param => expression


}

