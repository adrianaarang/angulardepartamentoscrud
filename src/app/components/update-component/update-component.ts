import { Component, ViewChild, ElementRef, ChangeDetectorRef, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { ServiceDepartamentos } from '../../services/service.departamentos';
import { Departamento } from '../../models/departamento';

@Component({
  selector: 'app-update-component',
  standalone: false,
  styleUrl: './update-component.css',
  templateUrl: './update-component.html',
})
export class UpdateComponent implements OnInit{
  public departamento !: Departamento;
  @ViewChild('cajaid') cajaId!: ElementRef;
  @ViewChild('cajanombre') cajaNombre!: ElementRef;
  @ViewChild('cajaLocalidad') cajaLocalidad!: ElementRef;

  constructor(
    private _cder: ChangeDetectorRef,
    private _service:ServiceDepartamentos,
    private _activeRoute: ActivatedRoute,
    private _router:Router

  ){}

  async ngOnInit(): Promise<void>{
    this._activeRoute.params.subscribe(async (params: Params) => {
      let id = parseInt(params['id']);
      this.departamento = await this._service.findDepartamento(id);
      this._cder.detectChanges();
    })
}
async updateDepartamento (): Promise <void>{
  let id = parseInt(this.cajaId.nativeElement.value);
  let nombre = this.cajaNombre.nativeElement.value;
  let localidad = this.cajaLocalidad.nativeElement.value;
  let dept : Departamento = new Departamento (id, nombre, localidad);
  let response = await this._service.updareDepartamento(dept);
  this._router.navigate(['/details', dept.numero, dept.nombre, dept.localidad ]);

}
}
