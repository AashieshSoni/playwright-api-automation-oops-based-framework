import { BaseApiService } from './BaseApiService';
import { HeaderBuilder } from '../utils/HeaderBuilder';
export class UserService extends BaseApiService {
 async createUser(payload:any){ return this.post('/users', payload, HeaderBuilder.buildAuthHeader()); }
}