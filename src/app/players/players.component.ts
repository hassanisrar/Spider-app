import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
  playersInfo = { name: 'Player', team: 'Status' };
  playerStatus = [
    { name: 'Zubair Bhai', team: 'Lions' },
    { name: 'Zulfi Bhai', team: 'Lions' },
    { name: 'Asim', team: 'Lions' },
    { name: 'Nunu', team: 'Portable' },
    { name: 'Ali', team: 'Portable' },
  ];
  constructor() {
  
   }

  ngOnInit() {
  }

}
