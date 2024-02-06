import { Component, OnDestroy, OnInit } from "@angular/core";
import { ScrollControlService } from "src/app/services/scroll-control.service";

@Component({
    selector: 'app-loading-spinner',
    template: '<div class="spinner-wrapper"><div class="lds-ring"><div></div><div></div><div></div><div></div></div></div>',
    styleUrls: ['./loading-spinner.component.css']
})
export class LoadingSpinnerComponent implements OnInit, OnDestroy {
    constructor(private scrollControlService: ScrollControlService) {}
    ngOnInit(): void {
        this.scrollControlService.disableScroll();
    }
    ngOnDestroy(): void {
        this.scrollControlService.enableScroll();
    }
}