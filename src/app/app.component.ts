import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadedFeature:string = 'recipe'
  onNavigation(feature:string){
    //console.log(feature);
    this.loadedFeature = feature;
    console.log(this.loadedFeature);
  }

}
