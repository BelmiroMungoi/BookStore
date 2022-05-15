import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cliente } from '../model/cliente';
import { Provincia } from '../model/provincia';
import { ClienteService } from '../service/cliente.service';
import { ProvinciaService } from '../service/provincia.service';

@Component({
  selector: 'app-cliente-add',
  templateUrl: './cliente-add.component.html',
  styleUrls: ['./cliente-add.component.css']
})
export class ClienteAddComponent implements OnInit {

  cliente = new Cliente();
  provincias!: Array<Provincia>;

  constructor(private routeActive: ActivatedRoute,private clienteService: ClienteService, private provinciaService: ProvinciaService) { }

  ngOnInit(): void {

    this.provinciaService.getProvincias().subscribe(data => {
      this.provincias = data;
    });
    
    let id = this.routeActive.snapshot.paramMap.get('id');

    this.clienteService.getClienteById(id).subscribe(data => {
      this.cliente = data;
    });
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
