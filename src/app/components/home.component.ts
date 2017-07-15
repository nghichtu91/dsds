import { Component } from '@angular/core';
import {PostsService} from '../services/posts.service';



@Component({
    moduleId: module.id,
    selector: 'home',
    templateUrl: 'home.component.html',
    providers: [PostsService]
})
export class HomeComponent  {
  tabActive: number;
  enables:Enable[];
  disables:Disable[];
  enableNumber:number;
  disableNumber:number;

  constructor(private postsService: PostsService){
    this.tabActive = 1;

    
    this.postsService.getPosts().subscribe(data => {
        this.enables = data.listEnable;
        this.disables = data.listDisable;

        this.enableNumber = this.enables.length;
        this.disableNumber = this.disables.length;
    });
  }

  showTab(id: any){
      this.tabActive = id;
  }
}

interface Enable{
    id: number;
    name: string;
    description: string;
    protocols: string;
    urlBlocked: number;
    urlMonitoring: number;
    urlGlobal: boolean;
    appBlocked: number;
    appMonitoring: number;
    appGlobal: boolean;
    ojBlocked: number;
    ojMonitoring: number;
    ojGlobal: boolean;
    enable: boolean;
}

interface Disable{
    id: number;
    name: string;
    description: string;
    protocols: string;
    urlBlocked: number;
    urlMonitoring: number;
    urlGlobal: boolean;
    appBlocked: number;
    appMonitoring: number;
    appGlobal: boolean;
    ojBlocked: number;
    ojMonitoring: number;
    ojGlobal: boolean;
    enable: boolean;
}