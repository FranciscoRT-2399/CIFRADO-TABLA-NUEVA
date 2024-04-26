import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServidorService } from '../../Servidor/servidor.service';
import { Registro } from '../../Entidad/Registro';

@Component({
  selector: 'app-listar-cifrado',
  standalone: true,
  imports: [],
  templateUrl: './listar-cifrado.component.html',
  styleUrl: './listar-cifrado.component.css',
})
export class ListarCifradoComponent implements OnInit{
  constructor(private router: Router, private service: ServidorService) {}

	ngOnInit(): void {
		this.buscar();
		this.listar(this.usuario.id);
	}

  usuario: Registro = new Registro();

	buscar(){
		const id = localStorage.getItem('id');
		this.usuario.id = Number(id);
	}

  listar(id: number) {
      this.service.MostrarContraseñaCifrada(id).subscribe((data) => {
        this.usuario = data;
      });
  }

	regresar(){
		this.router.navigate(['listar']);
	}
}
