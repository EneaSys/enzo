import { Injectable } from '@angular/core';
import { IAuthService } from './IAuthService';
import { AuthPigesImplService } from './piges/auth-piges-impl.service';

@Injectable()
export class EnzoAuthService extends AuthPigesImplService implements IAuthService {
	
}