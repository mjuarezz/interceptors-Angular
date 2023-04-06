import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor( private http: HttpClient ) { }


  obtenerUsuarios() {
    let params = new HttpParams().append('page','1');
    params = params.append('nombre','Juan Perez');

/*     const headers = new HttpHeaders({
      'Token-usuario': '123'
    }); */

    return this.http.get('https://reqres.in/api/user',{ params })
      .pipe(
        map( (resp: any) => resp['data'] )
      );
  }



}
