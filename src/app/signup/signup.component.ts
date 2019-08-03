import { Component, OnInit } from '@angular/core';
import{UserProfileModel} from './user-profile-model';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  districts = ['Kendrapara', 'Jajpur', 'Khordha'];
  userProfile =new UserProfileModel('ashish','dfdsdf','ashish@gmail.com',99357756,'kendrapara',true,'');
  constructor() { }

  ngOnInit() {
  }

}
