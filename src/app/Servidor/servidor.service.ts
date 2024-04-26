import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Registro } from '../Entidad/Registro';

@Injectable({
  providedIn: 'root'
})
export class ServidorService {

  constructor(private http: HttpClient) {}

	url = 'http://localhost:8030/Registros'

	listarCifrados(){
		return this.http.get<Registro[]>(this.url + "/listarCifrados")
	}

	listarDescifrados(){
		return this.http.get<Registro[]>(this.url + "/listarDescifrados")
	}

	guardarRegistro(usuario: Registro){
		return this.http.post<String>(this.url + "/guardar", usuario)
	}

	MostrarContraseñaCifrada(id: number){
		return this.http.get<Registro>(`${this.url}/cifrado/${id}`,{}) 
	}

	MostrarContraseñaDescifrada(id: number){
		return this.http.get<Registro>(`${this.url}/descifrado/${id}`,{}) 
	}
}
