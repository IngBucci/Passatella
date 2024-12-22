import { Component } from '@angular/core';
import { Listbox } from 'primeng/listbox';
import { FormsModule } from '@angular/forms';
import { Button } from 'primeng/button';
import { CommonModule } from '@angular/common';

interface Player {
  code: string;
  name: string;
  active: boolean;
}

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [FormsModule, Listbox, Button, CommonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {

  players: Player[] = [];
  selectedPlayers: Player[] = [];
  enabledButton = false;
  tableArrangement: Player[] = [];

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

  shuffleArray(array: any[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  generateTable() {
    this.tableArrangement = this.shuffleArray([...this.selectedPlayers]);
  }

  clearTable() {
    this.tableArrangement = [];
  }

  getPlayerPosition(index: number) {
    const positions = [
      { top: '2%', left: '44%' },
      { top: '27%', left: '82%' },
      { top: '27%', left: '5%' },
      { top: '47%', left: '82%' },
      { top: '47%', left: '5%' },
      { top: '65%', left: '82%' },
      { top: '65%', left: '5%' },
      { top: '92%', left: '44%' },
      // se siamo piu di 8
      { top: '80%', left: '5%' },
      { top: '80%', left: '82%' },
      { top: '10%', left: '5%' },
      { top: '10%', left: '82%' },
    ];
    return positions[index];
  }

}
