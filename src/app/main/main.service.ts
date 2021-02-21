import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MainService {
  baseUrl = "http://localhost:3000/api/"

  constructor(private http:HttpClient) { }

  postPlace(placeDet){
      return this.http.post(this.baseUrl+"postPlace",placeDet);
  }

  getPlaces():Observable<any>{
    return this.http.get(this.baseUrl+"getPlaces");
  }

  getPlace(place){
    return this.http.get(this.baseUrl+'getPlace/'+place._id);
  }

  editPlace(place){
    return this.http.put(this.baseUrl+'editPlace',place);
  }

  deletePlace(place){
    return this.http.delete(this.baseUrl+'deletePlace/'+place.placeName)
  }
}
