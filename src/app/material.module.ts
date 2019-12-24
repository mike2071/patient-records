import { NgModule } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

const moduules = [
  MatCardModule,
  MatToolbarModule,
  MatListModule,
  MatIconModule]

@NgModule({
  declarations: [],
  imports: [
    moduules
  ],
  exports: [
    moduules
  ]
})
export class MaterialModule { }
