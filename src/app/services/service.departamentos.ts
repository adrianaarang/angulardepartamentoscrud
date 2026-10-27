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

async createDepartomente(departamento: Departamento): Promise<any>{
  //convertimos el objeto recibido a json
  let json = JSON.stringify(departamento);
  //creamos un objeto header para el type
  let header = new HttpHeaders();
  //incluimos la key de content-type
  header = header.set('Content-Type', 'application/json');
  let request = "api/departamentos";
  return firstValueFrom(
    this._http.post(this.url + request, json, {headers:header})

  )


}
}
