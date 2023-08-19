import { Component,  ElementRef, HostListener, Input } from "@angular/core";

@Component({
    selector: 'div[togglleMenu]',
    template: `
    <div [class.change]="isMenu">
        <div class="bar1"></div>
        <div class="bar2"></div>
        <div class="bar3"></div>
    </div>      
    `,
    
})
export class ToggleMenu{

    //[class.change]="isMenu"

    @Input('isMenu')
    isMenu = false;

    constructor(private elementRef: ElementRef<HTMLElement>){}

    @HostListener('click')
    onClickToggleMenu(){
        //console.log('menu mobile')
        if (this.isMenu==true) {
            this.isMenu = false
        } else {
            this.isMenu = true
        }
        
    }
}