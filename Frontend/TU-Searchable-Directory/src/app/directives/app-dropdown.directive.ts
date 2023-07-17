import { Directive,HostListener, Input } from '@angular/core';

@Directive({
    selector: '[appDropdown]',
})
export class DropdownDirective {
    
    @Input('appDropdown') dropdownMenu: HTMLElement;
    isSelected: boolean = false;

    @HostListener('click') mouseClick(event:Event) {
        if(this.isSelected === true) {
            this.dropdownMenu.classList.remove('show');   
        } else {
            this.dropdownMenu.classList.add('show');
        }
        this.isSelected = !this.isSelected;
    }
}