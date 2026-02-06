import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from "@angular/core";
import { SubscriptionLoggable } from "rxjs/internal/testing/SubscriptionLoggable";


@Directive({
    selector: '[appLowercase]'
})

export class LowerCaseDirective implements OnInit{
    
constructor(private _eleRef: ElementRef,
    private _rendrer: Renderer2
){}

    ngOnInit(): void {
        
    }

@HostListener('keyup')
 onSearch(){
   let val=  (this._rendrer.selectRootElement(this._eleRef.nativeElement).value as string).toLowerCase()
   this._eleRef.nativeElement.value = val
   console.log(val);
 }


 @HostListener('keyup', ['$event'])
 onSerched(eve: Event){
  let val2 : string = (eve.target as HTMLInputElement).value.toLocaleLowerCase()
  console.log(val2);
  (eve.target as HTMLInputElement).value =val2
  
 }
}