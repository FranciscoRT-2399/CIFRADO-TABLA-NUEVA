import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ServidorService } from '../../Servidor/servidor.service';
import { Router } from '@angular/router';
import { Registro } from '../../Entidad/Registro';

@Component({
  selector: 'app-listar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './listar.component.html',
  styleUrl: './listar.component.css'
})
export class ListarComponent implements OnInit{

	constructor(private router: Router, private service: ServidorService){}

	ngOnInit(): void {
		this.listar();
	}

	usuarios !: Registro[];
	usuario : Registro = new Registro();

	listar(){
		this.service.listarDescifrados().subscribe(data => {
			this.usuarios = data;
		})
	}

	listarCifrado(usuario: Registro){
		localStorage.setItem('id', usuario.id.toString());
		this.router.navigate(['listarCifrado']);
	}

	listarDescifrado(usuario: Registro){
		localStorage.setItem('id', usuario.id.toString());
		this.router.navigate(['listarDescifrado'])
	}

}
