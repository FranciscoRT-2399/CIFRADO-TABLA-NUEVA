import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Registro } from '../../Entidad/Registro';
import { ServidorService } from '../../Servidor/servidor.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registrar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './registrar.component.html',
  styleUrl: './registrar.component.css'
})
export class RegistrarComponent {

	constructor(private router: Router, private service: ServidorService){}

	usuario : Registro = new Registro();

	guardar(){
		this.service.guardarRegistro(this.usuario).subscribe( data => {
			Swal.fire({
				icon: 'success',
				title: 'Registro guardado'
			})
			this.router.navigate(['listar'])			
		})
	}

	cancelar(){
		Swal.fire({
			icon: 'error',
			title: 'Cancelado'
		})
		this.router.navigate(['listar'])
	}

}
