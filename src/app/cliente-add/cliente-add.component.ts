import { Component, OnInit } from '@angular/core';
import { Cliente } from '../model/cliente';
import { ClienteService } from '../service/cliente.service';

@Component({
  selector: 'app-cliente-add',
  templateUrl: './cliente-add.component.html',
  styleUrls: ['./cliente-add.component.css']
})
export class ClienteAddComponent implements OnInit {

  cliente = new Cliente();

  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
  }

  salvarCliente() {
    if (this.cliente.id != null && this.cliente.id.toString().trim() != null) {
      this.clienteService.updateCliente(this.cliente).subscribe(data => {
        this.limpar();
      });
      
    } else {
      this.clienteService.saveClientes(this.cliente).subscribe(data => {
        this.limpar();
      });
    }
  }

  limpar() {
    this.cliente = new Cliente();
  }

}
