import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms'
import e from 'express';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  onSubmit(event: SubmitEvent) {
    event.preventDefault();
  }
  userName:string = '';
  userAge:number = 0;
  userEmail:string = '';
  userPassword:string = '';
}
