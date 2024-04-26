import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'CIFRADO-TABLA-NUEVA';

	constructor(private router: Router){}

	ngOnInit(): void {
		this.listar();
	}

	listar(){
		this.router.navigate(['listar']);
	}

	registrar(){
		this.router.navigate(['registrar']);
	}

}
