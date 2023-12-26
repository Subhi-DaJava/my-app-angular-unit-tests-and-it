/*
An Angular application that will make an API request to get some data
and based on the response it will use the angular `router` to navigate to another
component passing some information through `queryParams`.

Extrait du composant de la liste d'articles
...

Supposons que 'articleId' est l'ID de l'article sélectionné
const articleId = 123;

Navigation vers la page de détails d'article avec queryParams
this.router.navigate(['/article-details'], { queryParams: { id: articleId } });
*/

import { CommonModule } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { Component, NgModule, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { SomeComponent } from "../some/some.component";
@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {

    constructor(private router: Router, private http: HttpClient) { }

    ngOnInit(): void {
        this.http.get<any>('API_URL').subscribe(response => {
            if (response.type === 'Hello') {
                this.router.navigate(['someComponent'], { queryParams: { type: 'Hello' } });
            }

            if (response.type === 'Bye') {
                this.router.navigate(['someComponent'], { queryParams: { type: 'Bye' } });
            }

        });
    }

}

@NgModule({
    declarations: [MainComponent, SomeComponent],
    exports: [MainComponent],
    imports: [
        CommonModule
    ]
})

export class MainModule {
}


