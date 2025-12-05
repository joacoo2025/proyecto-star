import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Consultitas {

  private apiUrl = 'http://localhost/api/consulta.php';

  constructor(private http: HttpClient) {}

  enviarConsulta(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }
}
