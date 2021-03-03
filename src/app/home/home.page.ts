import {Component} from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({selector: 'app-home', templateUrl: 'home.page.html', styleUrls: ['home.page.scss']})
export class HomePage {
    cc : any = [
        {
            ep: "ตอนที่ 1"
        },
        {
            ep: "ตอนที่ 2"
        },
        {
            ep: "ตอนที่ 3"
        },
        {
            ep: "ตอนที่ 4"
        }, {
            ep: "ตอนที่ 5"
        }, {
            ep: "ตอนที่ 6"
        }, {
            ep: "ตอนที่ 7"
        }, {
            ep: "ตอนที่ 8"
        }, {
            ep: "ตอนที่ 9"
        }, {
            ep: "ตอนที่ 10"
        }, {
            ep: "ตอนที่ 11"
        }, {
            ep: "ตอนที่ 12"
        },
    ]
    constructor(public nav : NavController) {}


    go() {
        this.nav.navigateForward('data');
    }
}
