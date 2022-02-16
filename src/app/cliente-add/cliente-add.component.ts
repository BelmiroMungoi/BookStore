import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cliente } from '../model/cliente';
import { ClienteService } from '../service/cliente.service';

@Component({
  selector: 'app-cliente-add',
  templateUrl: './cliente-add.component.html',
  styleUrls: ['./cliente-add.component.css']
})
export class ClienteAddComponent implements OnInit {

  cliente = new Cliente();

  constructor(private routeActive: ActivatedRoute,private clienteService: ClienteService) { }

  ngOnInit(): void {
    let id = this.routeActive.snapshot.paramMap.get('id');

    this.clienteService.getClienteById(id).subscribe(data => {
      this.cliente = data;
    })
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
