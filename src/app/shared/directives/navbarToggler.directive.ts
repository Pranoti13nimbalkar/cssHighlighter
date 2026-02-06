import { Directive, ElementRef, HostListener, Renderer2 } from "@angular/core";



@Directive({
    selector: '[appisOpenNavbar]'
})
 export class NavbarToggleDirective{
    isOpenMenu : boolean= false
constructor(private _eleRef: ElementRef,
    private _renderer : Renderer2
){}

@HostListener('click')
onClick(){
   this.isOpenMenu = !this.isOpenMenu;
   let colllaps = document.getElementById('navbarScroll');
   if(this.isOpenMenu){
    this._eleRef.nativeElement.classList.add('show') ;
    colllaps?.classList.add('show')
   }else{
        this._eleRef.nativeElement.classList.remove('show');
            colllaps?.classList.remove('show')
   }
}
 }