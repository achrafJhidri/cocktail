import { Directive, HostBinding,Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appActive]'
})
export class ActiveDirective implements OnChanges {
  @Input('appActive') isActive : boolean ; 
  @HostBinding('style.backgroundColor') backgroundcolor:string;
  @HostBinding('style.color') color:string;
  
  constructor() { }

  ngOnChanges(){
    if (this.isActive){
      this.backgroundcolor="#3498db";
      this.color="white";
    }else{
      this.backgroundcolor="transparent";
      this.color="black";
    }
  }

}
