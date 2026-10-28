import { Component, ViewChild, ElementRef, ChangeDetectorRef} from '@angular/core';
import {Router} from '@angular/router';
import { ServiceDepartamentos } from '../../services/service.departamentos';
import { Departamento } from '../../models/departamento';

@Component({
  selector: 'app-create-component',
  standalone: false,
  styleUrl: './create-component.css',
  templateUrl: './create-component.html',
})
export class CreateComponent {
  public mensaje!: string;
  @ViewChild('cajaid') cajaId!: ElementRef;
  @ViewChild('cajanombre') cajaNombre!: ElementRef;
  @ViewChild('cajaLocalidad') cajaLocalidad!: ElementRef;

  constructor(private _service: ServiceDepartamentos,
    private _cder: ChangeDetectorRef,
    private _router: Router
  )
    {}

  async insertDepartamento (): Promise<void> {
    let id = parseInt(this.cajaId.nativeElement.value);
    let nombre = this.cajaNombre.nativeElement.value;
    let localidad = this.cajaLocalidad.nativeElement.value;
    let dep : Departamento = new Departamento (id, nombre, localidad);
    let response = await this._service.createDepartamento(dep);
    this._router.navigate(['/']);
    //this.mensaje = "Departamento insertado";
    //this._cder.detectChanges();
  }

}
