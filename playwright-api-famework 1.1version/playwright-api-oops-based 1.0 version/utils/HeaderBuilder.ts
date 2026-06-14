import { TokenManager } from './TokenManager';
export class HeaderBuilder {
 static buildAuthHeader(){ return {Authorization:`Bearer ${TokenManager.getToken()}`,'Content-Type':'application/json'}; }
}