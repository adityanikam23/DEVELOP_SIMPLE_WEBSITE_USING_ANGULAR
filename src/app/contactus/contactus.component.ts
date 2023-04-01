import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit{

  input1: any;
  input2: any;
  input3: any;
  input4: any;
  input5: any;
  input6: any;
  input7: any;
  input8: any;

  allinput = { first: " ", middle: " ", last: " ", email: " ", mob: " ", city: " ", state: " ", nation: " " };

  records: any = [];

  ngOnInit(): void {
       this.records = JSON.parse(localStorage.getItem("data") || "[]");
  }

  clicked() {

    if (this.input1 == null) {
      alert("ENTER YOUR FIRST NAME")
    }
    else if (this.input2 == null) {
      alert("ENTER YOUR MIDDLE NAME")
    }
    else if (this.input3 == null) {
      alert("ENTER YOUR LAST NAME")
    }
    else if (this.input4 == null) {
      alert("ENTER YOUR EMAIL ADDRESS")
    }
    else if (this.input5 == null) {
      alert("ENTER YOUR MOBILE NO")
    }
    else if (this.input6 == null) {
      alert("ENTER YOUR CITY")
    }
    else if (this.input7 == null) {
      alert("ENTER YOUR STATE")
    }
    else if (this.input8 == null) {
      alert("ENTER YOUR NATIONALITY")
    }
    //  else if (this.records == localStorage.getItem("data")){
    //     alert("YOU ARE ALREADY REGISTERED");
    //  }
    else {
      alert("REGISTER SUCCESSFULLY")

      this.allinput = { first: this.input1, middle: this.input2, last: this.input3, email: this.input4, mob: this.input5, city: this.input6, state: this.input7, nation: this.input8 };

      this.records.push(this.allinput)

      this.input1 = " ";
      this.input2 = " ";
      this.input3 = " ";
      this.input4 = " ";
      this.input5 = " ";
      this.input6 = " ";
      this.input7 = " ";
      this.input8 = " ";

      localStorage.setItem("data", JSON.stringify(this.records));

    }




  }

}
