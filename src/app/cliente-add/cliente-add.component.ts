import { Component, OnInit } from '@angular/core';
import { Cliente } from '../model/cliente';

@Component({
  selector: 'app-cliente-add',
  templateUrl: './cliente-add.component.html',
  styleUrls: ['./cliente-add.component.css']
})
export class ClienteAddComponent implements OnInit {

  cliente = new Cliente();
  
  constructor() { }

  ngOnInit(): void {
  }

}
