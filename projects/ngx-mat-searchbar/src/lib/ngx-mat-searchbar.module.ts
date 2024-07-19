import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { NgxMatSearchbarComponent } from './ngx-mat-searchbar.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [NgxMatSearchbarComponent],
  imports: [
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    CommonModule,
  ],
  exports: [NgxMatSearchbarComponent],
  providers: [],
})
export class NgxMatSearchbarModule {}
