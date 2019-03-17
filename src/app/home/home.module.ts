import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import {TableModule} from 'primeng/table';
import {PitchService} from '@app/services/pitch.service';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    CoreModule,
    SharedModule,
    HomeRoutingModule,
    TableModule
  ],
  declarations: [
    HomeComponent
  ],
  providers: [
      PitchService
  ]
})
export class HomeModule { }
