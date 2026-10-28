import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {firstValueFrom} from 'rxjs';
import {Departamento} from '../models/departamento';
import {environment} from '../../environments/environment';

@Injectable()
export class ServiceDepartamentos{
  url = environment.apiDepartamentos;

  constructor(private _http: HttpClient){}

  async getDpertamentosAsync (): Promise<Departamento[]>{
    let request = "api/departamentos";
    return firstValueFrom(this._http.get<Departamento[]>(this.url + request));

}

async createDepartamento(departamento: Departamento): Promise<any>{
  //convertimos el objeto recibido a json
  let json = JSON.stringify(departamento);
  console.log(json);
  //creamos un objeto header para el type
  let header = new HttpHeaders();
  //incluimos la key de content-type
  header = header.set('Content-Type', 'application/json');
  let request = "api/departamentos";
  return firstValueFrom(
    this._http.post(this.url + request, json, {headers:header})

  )
}
  //esto lo usa el update

  async findDepartamento(id: number):Promise <Departamento>{
    let request = "api/departamentos/" +id;
    return firstValueFrom(this._http.get<Departamento>(this.url + request));

  }

  async updareDepartamento(departamento: Departamento): Promise<any>{
    let json = JSON.stringify(departamento);
    let header = new HttpHeaders().set('Content-Type', 'application/json');
    let request = "api/departamentos";
    return firstValueFrom(
      this._http.put(this.url + request, json, {headers:header})
    )
  }
  async deleteDepartamentoAsync (id: number): Promise<any>{
    let request = "api/departamentos/" + id;
    return firstValueFrom(this._http.delete(this.url + request));


  }



}
