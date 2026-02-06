import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from "@angular/core";


@Directive({
    selector: '[appcreditCard]'
})
export class CreditCardDirective implements OnInit{


     constructor(private _eleRef: ElementRef,
        private _renderer: Renderer2
     ){}

    ngOnInit(): void {
     this.createErrorContainer(this._renderer.parentNode(this._eleRef.nativeElement))
    }
  @HostListener('keyup', ['$event'])
       validateCreditCard(eve : Event){
        let inputControl = eve.target as HTMLInputElement;
        let val = inputControl.value.replace(/\s+/g, '')
        console.log(val);

        if(val.length > 16){
            val = val.substring(0,16)
        }
        if(/[^\d]/.test(val)){
              inputControl.nextElementSibling?.classList.remove('d-none')
        }else{
            inputControl.nextElementSibling?.classList.add('d-none')
        }
        let finalVal = this.formatedCreditCard(val)
        inputControl.value = finalVal
        console.log(finalVal);
        
       }
       
       formatedCreditCard(str: string){
        let chunkedArr: string[]=[]
        for(let i=0 ; i<str.length; i=i+4){
            chunkedArr.push(str.slice(i ,i+4))
        }
        return chunkedArr.join(' ')
       }

       createErrorContainer(div:HTMLDivElement){
        let strong = document.createElement('strong');
        strong.className='text-danger d-none';
        strong.innerText= 'Please enter valid Credit card no.';
        div.append(strong)
       }
}