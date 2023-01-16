import { Component, OnInit, ViewChild } from '@angular/core';
import { ServiciosService } from 'src/app/services/servicios.service';
import { Observable } from 'rxjs';
import { IonList } from '@ionic/angular';

@Component({
  selector: 'app-enterprise',
  templateUrl: './enterprise.page.html',
  styleUrls: ['./enterprise.page.scss'],
})
export class EnterprisePage implements OnInit {
  empresas: Observable<any> | undefined;
  @ViewChild(IonList)
  ionList!: IonList;

  constructor(private servicios: ServiciosService) { }

  ngOnInit() {
    console.log("Ingresooo");
    this.servicios.recuperaEnterprise("%").subscribe(console.log);
    this.empresas = this.servicios.recuperaEnterprise("%");

  }

  borrar(emp: any){
    console.log('Borrar:',emp.id_ENTERPRISE);
    this.ionList.closeSlidingItems();
    this.servicios.eliminaEnterprise(emp.id_ENTERPRISE).subscribe(console.log);

  }

}
