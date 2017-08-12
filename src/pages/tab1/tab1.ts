import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { PERSONAJES } from "../../data/personajes.data";
import { Personajes } from "../../interface/personajes.interface";
import { Pagina2Page } from "../pagina2/pagina2";

@Component({
    selector:'page-tab1',
    templateUrl: 'tab1.html'
})

export class Tab1Page{
    
 personajes:Personajes[] = [];
 pagina2:any = Pagina2Page;
   

    constructor(private navCtrl : NavController){
                   this.personajes = PERSONAJES.slice(0);
                   
    }
}