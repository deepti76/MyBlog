import { Component, OnInit } from '@angular/core';
import { Place } from './place';
import { MainService } from './main.service'
import * as $ from 'jquery';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  placeName: string;
  image: any;
  description: any;
  place = new Place();
  places: any;
  selectedPlace: any;
  constructor(private mainService: MainService) {

  }

  ngOnInit(): void {
    this.getPlaces();
    document.getElementById('post').style.visibility = "visible";
  }

  postPlace() {
    this.mainService.postPlace(this.place).subscribe(data => {
      console.log(data);
      this.getPlaces();
      $('#form')[0].reset();

    })
  }

  getPlaces() {
    this.mainService.getPlaces().subscribe(data => {
      this.places = data;
    })
  }

  getPlace(place) {
    document.getElementById('post').style.visibility = "hidden";
    document.getElementById('edit').style.visibility = "visible";
    this.mainService.getPlace(place).subscribe(data => {
      console.log(data);
      $(document).ready(function () {
        $('#placeName').val(data[0].placeName);
        $('#image').val(data[0].image);
        $('#desc').val(data[0].description);
      });
      this.selectedPlace = data;

    })
  }

  editPlace() {
    this.selectedPlace[0].placeName = this.place.placeName;
    this.selectedPlace[0].image = this.place.image;
    this.selectedPlace[0].description = this.place.description;
    console.log(this.selectedPlace);

    this.mainService.editPlace(this.selectedPlace).subscribe(data => {
      console.log(data);
      this.getPlaces();
      document.getElementById('post').style.visibility = "visible";
      document.getElementById('edit').style.visibility = "hidden";
      $('#form')[0].reset();
    });
  }

  deletePlace(placeName) {
    this.mainService.deletePlace(placeName).subscribe(data => {
      this.getPlaces();
    })
  }
}
