import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  resetData() {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient) { }
  postProduct(data: any) {
    return this.http.post<any>("http://localhost:3000/profile", data)
  }
  getProduct() {
    return this.http.get<any>("http://localhost:3000/profile/");
  }
  putProduct(data: any, id: number) {
    return this.http.put<any>("http://localhost:3000/profile/" + id, data)
  }
}
