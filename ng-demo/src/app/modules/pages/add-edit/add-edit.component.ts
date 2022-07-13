import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AddEditRequest } from '@app/core/models/add-edit.request';
import { DataService } from '@app/core/services/data.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styles: [
  ]
})
export class AddEditComponent implements OnInit {
  submitted=false;
  idForEdit!:number;
  addEditForm!:FormGroup;
  constructor(
    private readonly activeRoute:ActivatedRoute,
    private readonly formBuilder:FormBuilder,
    private readonly dataService:DataService,
    private readonly toastService:ToastrService
  ) { }

  get name(): AbstractControl { return this.addEditForm.controls['name']; }
  get job(): AbstractControl { return this.addEditForm.controls['job']; }

  ngOnInit(): void {
    this.addEditForm=this.formBuilder.group({
      name:['',[Validators.required]],
      job:['',[Validators.required]],
    });
    this.idForEdit=parseInt(this.activeRoute.snapshot.paramMap.get('id')??'',undefined);
    if(!isNaN(this.idForEdit)){
      this.getDataForEdit();
    }
  }

  getDataForEdit():void {
    this.addEditForm.controls['name'].setValue('morpheus');
    this.addEditForm.controls['job'].setValue('zion resident');
  }

  onSubmit():void{
    this.submitted=true;
    if(this.addEditForm.valid){
      const request:AddEditRequest=this.addEditForm.value as AddEditRequest;
      if(this.idForEdit){
        this.dataService.edit(request,this.idForEdit).subscribe(
          (response)=>{
            this.toastService.success('Data updated');
          }
        );
      }else{
        this.dataService.add(request).subscribe(
          (response)=>{
            this.toastService.success('Data added');
          }
        );
      }
    }
  }

  resetForm():void{
    this.addEditForm.reset();
  }

}
