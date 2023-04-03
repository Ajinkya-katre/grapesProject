import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit{


  constructor(private formBuilder: FormBuilder ){}

  ngOnInit(): void {
      // this.contactForm = this.formBuilder.group({
      //   name:[null,Validators.required],
      //   surname:[null,Validators.required],
      //   email:[null,[Validators.required,Validators.email]],
      //   mobile:[null,Validators.required],
      //   message:[null,Validators.required]

      // })
  }

  contactForm = new FormGroup({
    firstname: new FormControl(),
    surname: new FormControl(),
    email: new FormControl(),
    mobile: new FormControl(),
    message: new FormControl(),
  })

  onSubmit() {
    console.log(this.contactForm.value);
  }

}
