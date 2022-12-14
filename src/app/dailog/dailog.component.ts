
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiServiceService } from '../apiservice.service';

@Component({
  selector: 'app-dailog',
  templateUrl: './dailog.component.html',
  styleUrls: ['./dailog.component.scss']
})
export class DailogComponent implements OnInit {

  profileForm !: FormGroup

  constructor(private formBuilder: FormBuilder, private api: ApiServiceService,
    @Inject(MAT_DIALOG_DATA) public editData: any,
    private dailogref: MatDialogRef<DailogComponent>) { }

  ngOnInit(): void {
    this.profileForm = this.formBuilder.group({
      name: ['', Validators.required],
      domain: ['', Validators.required],
      gender: ['', Validators.required],
      date: ['', Validators.required],
      mobile: ['', Validators.required],
      address: ['', Validators.required]


    });
    if (this.editData) {
      this.profileForm.controls['name'].setValue(this.editData.name);
      this.profileForm.controls['domain'].setValue(this.editData.domain);
      this.profileForm.controls['gender'].setValue(this.editData.gender);
      this.profileForm.controls['date'].setValue(this.editData.date);
      this.profileForm.controls['mobile'].setValue(this.editData.mobile);
      this.profileForm.controls['address'].setValue(this.editData.address);
    }

  }

  updateProfile() {
    console.log(this.profileForm.value)
    this.api.putProduct(this.profileForm.value, this.editData.id)
      .subscribe({
        next: (res) => {
          alert("Product Updated Successfully")
          this.profileForm.reset();
          this.dailogref.close('updated');
        },
        error: () => {
          alert("Error while updating the record")
        }
      })
  }
}
