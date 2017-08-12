import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { Personajes } from "../../interface/personajes.interface";
import { Tab1Page } from "../index.paginas";

@Component({
    selector:'page-pagina2',
    templateUrl: 'pagina2.html'
})

export class Pagina2Page{
    
 personaje:Personajes;
 

    constructor(private navCtrl : NavController , private navParams : NavParams){
                 
            this.personaje = this.navParams.get('personaje')
            console.log(this.personaje); 
                   
    }
}