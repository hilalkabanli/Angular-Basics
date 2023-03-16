import { Component,Input, EventEmitter, Output, OnInit,
  OnChanges, DoCheck, AfterContentInit,AfterContentChecked,AfterViewChecked,
AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit, OnChanges,DoCheck, AfterContentChecked,
AfterContentInit,AfterViewChecked, AfterViewInit,OnDestroy{
    @Input('img') postImg=''
    @Output() imgSelected=new EventEmitter<string>()
    constructor(){
      console.log('constructor() called', this.postImg)
    }
    ngOnInit(){
      console.log('ngOnInit() called', this.postImg)
    }
    ngOnChanges(){
      console.log('ngOnChanges() called')

    }
    ngDoCheck(){
      console.log('ngDoCheck() called')
    }
    ngAfterContentChecked(){//this function runs after the content has been checked for changes
      console.log('ngAfterContentChecked() called')
    }
    ngAfterContentInit() {//thiis hook refers to the projected content from the parent component, it runs after the content has been initialized
      console.log('ngAfterContentInit() called')
    }
    ngAfterViewChecked() {
      console.log('ngAfterViewChecked() called')
    }
    ngAfterViewInit(){ 
      console.log('ngAfterViewInit() called')
    
    }
    //the viewInit and contentInit functions run once they run before their check funtion counterparts
    ngOnDestroy(){
      console.log('ngOnDestroy() called')
    }
}
