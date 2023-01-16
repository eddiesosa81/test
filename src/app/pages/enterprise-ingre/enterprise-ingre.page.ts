import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ServiciosService } from 'src/app/services/servicios.service';

@Component({
  selector: 'app-enterprise-ingre',
  templateUrl: './enterprise-ingre.page.html',
  styleUrls: ['./enterprise-ingre.page.scss'],
})
export class EnterpriseIngrePage implements OnInit {
  usuario: string = 'Eddie Sosa';
  empresa = {
    name: '',
    address: '',
    phone: '',
  };
  constructor(private servicios: ServiciosService) {}

  ngOnInit() {}

  onSubmit(formulario: NgForm) {
    console.log('submit');
    console.log(this.empresa);
    console.log(formulario);
    this.servicios
      .insertaEnterprise(
        this.empresa.name,
        this.empresa.address,
        this.empresa.phone,
        this.usuario
      )
      .subscribe(console.log);
  }
}
