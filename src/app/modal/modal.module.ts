// modal.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ModalComponent } from './modal.component';

@NgModule({
  declarations: [ModalComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ModalComponent
      }
    ])
  ]
})
export class ModalModule { }
