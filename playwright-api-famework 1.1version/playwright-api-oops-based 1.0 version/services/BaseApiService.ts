import { APIRequestContext } from '@playwright/test';
export class BaseApiService {
 constructor(protected request: APIRequestContext, protected baseUrl:string){}
 protected async get(endpoint:string, headers:any={}, params:any={}){
  return this.request.get(`${this.baseUrl}${endpoint}`, {headers, params});
 }
 protected async post(endpoint:string, payload:any, headers:any={}){
  return this.request.post(`${this.baseUrl}${endpoint}`, {headers, data: payload});
 }
}