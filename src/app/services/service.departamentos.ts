import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
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
}
