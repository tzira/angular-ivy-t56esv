import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Injectable()
export class Sheet1Service {
  public getData(): Observable<any> {
    const url =
      'https://www.googleapis.com/drive/v3/files/1xAItrNIlv9SEqUBn8g_f8taWo4PzT4ll?alt=media&key=AIzaSyASEDun9MaFYEXx2-xky8MSlgxvf4QkU3I';

    return this.http.get(url, { responseType: 'json' }).pipe(
      map((res: any) => {
        const data = res;

        const returnArray: Array<any> = [];
        if (data && data.length > 0) {
          data.forEach(entry => {
            const obj = {};
            returnArray.push(entry);
          });
        }
        return returnArray;
      })
    );
  }
  constructor(private http: HttpClient) {}
}
