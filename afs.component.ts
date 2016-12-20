import { Component } from '@angular/core';

@Component({
    selector: 'afs',
    moduleId: module.id,
    templateUrl: 'afs.component.html'
})

export class AfsComponent {
    time: Date;

    constructor() {
        this.time = new Date();
    }

    updateTime(): void {
        this.time = new Date();
    }
}