import { Component } from '@angular/core';

interface Player {
  code: string;
  name: string;
  active: boolean;
}

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {

  players!: Player[];
  selectedPlayers!: Player[];

  allPlayers = [
    {code: 'Player1', name: 'Bucci', active: true},
    {code: 'Player2', name: 'Scarabeo', active: true},
    {code: 'Player3', name: 'Cicci', active: true},
    {code: 'Player4', name: 'Zullo', active: true},
    {code: 'Player5', name: 'Melone', active: true},
    {code: 'Player6', name: 'Celentano', active: true},
    {code: 'Player7', name: 'Manuel', active: true},
    {code: 'Player8', name: 'Cozzoni', active: true},
    {code: 'Player9', name: 'Gianni', active: false},
    {code: 'Player10', name: 'Seghetto', active: false},
    {code: 'Player11', name: 'Seghettino', active: false},
  ];

  constructor() { }

  ngOnInit() {
    this.players = this.allPlayers;
  }

  selectPlayer() {}

  generateTable() {}

  clearTable() {}

}
