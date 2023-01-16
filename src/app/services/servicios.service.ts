import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  constructor(private httpClient: HttpClient) {}

  recuperaEnterprise(nombreInpt: any): Observable<any> {
    console.log("Ingresooo: servicio");
    const url ='https://ns.aseyco.com:444/Prueba/rest/service/enterprise'
    const dataToBeSend = { name: nombreInpt};
    return this.httpClient.post(url, JSON.stringify(dataToBeSend));
  }

  eliminaEnterprise(idInpt: any): Observable<any> {
    console.log("Ingresooo: servicioEliminar idInpt:",idInpt);
    const url ='https://ns.aseyco.com:444/Prueba/rest/service/DeletEnterprice'
    const dataToBeSendDel = { idEnterprice: idInpt};
    return this.httpClient.post(url, JSON.stringify(dataToBeSendDel));
  }

  insertaEnterprise(nameInt: any, addressInp: any, phoneInp: any, createInp: any): Observable<any> {
    console.log("Ingresooo: servicioEliminar idInpt:",nameInt);
    const url ='https://ns.aseyco.com:444/Prueba/rest/service/InsrtEnterprice'
    const dataToBeSendDel = { name: nameInt, address: addressInp,phone: phoneInp, createdBy: createInp};
    return this.httpClient.post(url, JSON.stringify(dataToBeSendDel));
  }

  editaEnterprise(nameInt: any, addressInp: any, phoneInp: any, modifyInp: any): Observable<any> {
    console.log("Ingresooo: servicioEliminar idInpt:",nameInt);
    const url ='https://ns.aseyco.com:444/Prueba/rest/service/InsrtEnterprice'
    const dataToBeSendDel = { name: nameInt, address: addressInp,phone: phoneInp, modifiedBy: modifyInp};
    return this.httpClient.post(url, JSON.stringify(dataToBeSendDel));
  }
}
