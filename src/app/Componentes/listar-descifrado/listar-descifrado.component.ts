import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ServidorService } from '../../Servidor/servidor.service';
import { Registro } from '../../Entidad/Registro';

@Component({
  selector: 'app-listar-descifrado',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './listar-descifrado.component.html',
  styleUrl: './listar-descifrado.component.css'
})
export class ListarDescifradoComponent implements OnInit{

	constructor(private router: Router, private service: ServidorService){}

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
      this.service.MostrarContraseñaDescifrada(id).subscribe((data) => {
        this.usuario = data;
      });
  }

}
