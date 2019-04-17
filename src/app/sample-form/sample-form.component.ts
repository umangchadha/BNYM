import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import * as _moment from 'moment';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sample-form',
  templateUrl: './sample-form.component.html',
  styleUrls: ['./sample-form.component.scss']
})
export class SampleFormComponent implements OnInit {

  formGroup: FormGroup;
  formRawValue: any;
  requiredField: string = 'This is a required field';
  post: any = '';
  response: any = '';
  imageUrl: any = '';
  res;
  constructor(private formBuilder: FormBuilder, private http: HttpClient) { }

  ngOnInit() {
    this.createForm();
    this.countryCodeChange();


    this.randomImage()


    this.formGroup['date'] = new FormControl(_moment().format('MM/DD/YYYY'));

    this.formGroup.valueChanges.subscribe(() => {
      this.formRawValue = this.formGroup.getRawValue();
      this.formRawValue.date = _moment(this.formRawValue.date).format('MM/DD/YYYY')

    })
  }

  createForm() {
    this.formGroup = this.formBuilder.group({
      'isin': ['', [Validators.required, Validators.minLength(12)]],
      'accNo': ['', Validators.required],
      'date': ['', Validators.required],
      'pset': '',
      'ccode': { value: '', disabled: true }
    });
  }

  countryCodeChange() {
    this.formGroup.get('pset').valueChanges.subscribe(a => {
      this.formGroup.patchValue({ ccode: a.slice(-3, a.length) });
    })
  }
  onSubmit(post) {
    this.post = post;
    console.log(this.formRawValue)
    this.http.post(`https://my-json-server.typicode.com/umangchadha/fakeServer/data/`, this.formRawValue).subscribe(
      (data: any[]) => {
        this.response = data
      }
    )
    this.randomImage()
  }

  randomImage() {
    this.http.get('https://pixabay.com/api/?key=1631539-db8210cabd2636c6df59812df&q=yellow+flowers&image_type=photo').subscribe(a => {
      let random = Math.floor(Math.random() * 20) + 1
      let imagesArr: any = a;
      this.imageUrl = imagesArr.hits[random].largeImageURL
    })
  }
}
