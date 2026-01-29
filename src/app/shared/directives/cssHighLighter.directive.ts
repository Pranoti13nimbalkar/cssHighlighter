import { Directive, ElementRef, Input, OnInit } from "@angular/core";



@Directive({
    selector : '[basicCss]'
})

export class CssHighLighterDirective implements OnInit {
    @Input() highlightClass!: string 
    @Input() newHighLightClass: string = 'alert-info'
constructor(private _eleRef:ElementRef){}


ngOnInit(): void {
    this._eleRef.nativeElement.style.backgroundColor= "Green";
    this._eleRef.nativeElement.style.color= "#fff";
     this._eleRef.nativeElement.classList.add(this.highlightClass)
     this._eleRef.nativeElement.classList.add('aler-info')

     this._eleRef.nativeElement.classList.add(this.newHighLightClass)
}

    
}
