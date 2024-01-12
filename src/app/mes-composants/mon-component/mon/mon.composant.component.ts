import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mon',
  templateUrl: './mon.composant.component.html',
  styleUrls: ['./mon.composant.component.css']
})
export class MonComponent implements OnInit{
  title = 'Liste des utilisateurs';
  users = ['Utilisateur 1', 'Utilisateur 2'];

  constructor() { }

  ngOnInit() {
  }

  addUser() {
   // this.users.push('Nouvel utilisateur');

    this.users = [...this.users, 'Nouvel utilisateur'];
  }
}
