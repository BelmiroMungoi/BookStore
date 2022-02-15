import { Component, OnInit } from '@angular/core';
import { Cliente } from '../model/cliente';
import { ClienteService } from '../service/cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  clientes!: Cliente[];

  constructor(private cliente: ClienteService) { }

  ngOnInit(): void {
    this.cliente.getClientes().subscribe(data => {
      this.clientes = data;
    })
  }

}
