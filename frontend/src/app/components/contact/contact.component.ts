import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactForm: any;

  isSaved = false;


  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({

      // have the input element equivalent on the ts side
      name: new FormControl('', Validators.required), // step #5: form validation
      email: new FormControl('', [Validators.required, Validators.email]),
      msg: new FormControl('',  [Validators.required, Validators.minLength(10)]),
    }
    );
    
   }

  ngOnInit(): void {
      
  }

  handleContactForm() {
    window.location.href = 'http://localhost:3000/sendmail';
    // send above data to the service
    // get the res from the service
    // upon getting successful status display the 
    this.isSaved = true;
  }
}
