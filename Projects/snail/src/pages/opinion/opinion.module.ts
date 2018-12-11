import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OpinionPage } from './opinion';

@NgModule({
  declarations: [
    OpinionPage,
  ],
  imports: [
    IonicPageModule.forChild(OpinionPage),
  ],
})
export class OpinionPageModule {}
