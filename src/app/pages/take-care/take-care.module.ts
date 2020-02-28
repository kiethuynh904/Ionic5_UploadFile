import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TakeCarePage } from './take-care.page';
import { UploadFileComponent } from './../../components/upload-file/upload-file.component';
import { FormComponent } from './../../components/form/form.component';

const routes: Routes = [
  {
    path: '',
    component: TakeCarePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
  ],
  declarations: [TakeCarePage, FormComponent,UploadFileComponent]
})
export class TakeCarePageModule {}
