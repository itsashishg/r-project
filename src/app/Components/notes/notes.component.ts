import { Component, OnInit } from '@angular/core';

interface notesData {
  title: string;
  content: string;
  date: string;
}

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  data: notesData;
  title: string;
  content: string;
  constructor() { }

  ngOnInit(): void {
  }

}
