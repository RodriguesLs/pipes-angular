import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NativePipesComponent } from './native-pipes/native-pipes.component';
import { CamelCasePipe } from './camel-case.pipe';
import { PipePuroPipe } from './pipe-puro.pipe';
import { PurePipeComponent } from './pure-pipe/pure-pipe.component';

@NgModule({
  declarations: [
    AppComponent,
    NativePipesComponent,
    CamelCasePipe,
    PipePuroPipe,
    PurePipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    // {
    //   provide: LOCALE_ID,
    //   useValue: 'pt'
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
