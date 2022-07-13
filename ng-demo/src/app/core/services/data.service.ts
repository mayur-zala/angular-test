import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIUrls } from '@app/utils/apiUrls';
import { Observable } from 'rxjs';
import { AddEditRequest } from '../models/add-edit.request';
import { APIListResponse } from '../models/api.list.response';
import { UserResponse } from '../models/user';

@Injectable({
  providedIn: 'root'
})export class DataService {

  constructor(
    private readonly httpClient:HttpClient
  ) { }

  getList(pagenumber?:number):Observable<APIListResponse<UserResponse>>{
    return this.httpClient.get<APIListResponse<UserResponse>>(`${APIUrls.users}?page=${pagenumber??1}`)
  }

  add(requestPayload:AddEditRequest):Observable<any>{
    return this.httpClient.post<any>(APIUrls.users,requestPayload);
  }

  edit(requestPayload:AddEditRequest,id:number):Observable<any>{
    return this.httpClient.put<any>(`${APIUrls.users}/id`,requestPayload);
  }
}
