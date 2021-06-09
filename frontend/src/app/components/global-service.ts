import {Injectable} from '@angular/core';
import {BehaviorSubject, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {switchMap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  private currentUserSource = new BehaviorSubject(null);
  public currentuser = this.currentUserSource.asObservable();

  constructor(private http: HttpClient) {
  }

  public get currentUser() {
    this.currentuser.subscribe(user => {
      if (user) {
        return user;
      }
    });
    return null;
  }

  static getEncodedToken(email: string, password: string): string {
    return btoa([email, password].join(':'));
  }

  login(dto) {
    return this.http.post<any>('api/user/login', {
      email: dto.email,
      password: dto.password
    }).pipe(
      switchMap(res => of(res)));
  }

  public signUp(dto) {
    return this.http.post(`api/user/signup`, {email: dto.email, password: dto.password},
      {observe: 'response'})
      .pipe(
        switchMap(response => (response.status !== 200 || !response.body) ? of(null) :
          this.login(dto).pipe(switchMap(lu => of(lu)))
        )
      );
  }

  public saveBearer(userName: string, password: string) {
    localStorage.setItem('token', `Basic ${GlobalService.getEncodedToken(userName, password)}`);
  }
}
