import {Component, OnInit} from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({selector: 'app-data', templateUrl: './data.page.html', styleUrls: ['./data.page.scss']})
export class DataPage implements OnInit {
    color : any = "light";
    col : any = "dark";

    constructor(private nav : NavController) {}

    ngOnInit() {}
    changeMode() {
        if (this.color == 'light') {
            this.color = 'dark';
        } else {
            this.color = 'light';
        }


        if (this.col == 'dark') {
            this.col = 'light';
        } else {
            this.col = 'dark';
        }
    }

    back() {
        this.nav.pop();
    }

}
