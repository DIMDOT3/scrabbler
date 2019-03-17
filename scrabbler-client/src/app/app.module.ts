import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { AccordionModule } from 'primeng/accordion';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { DropdownModule } from 'primeng/dropdown';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WordFormComponent } from './word-form/word-form.component';
import { WordsListComponent } from './words-list/words-list.component';
import { ConfirmModalComponent } from './confirm-modal/confirm-modal.component';
import { PlayersListComponent } from './players-list/players-list.component';
import { FormWrapperComponent } from './form-wrapper/form-wrapper.component';
import { PlayerFormComponent } from './player-form/player-form.component';
import { WordService } from './services/word.service';

@NgModule({
  declarations: [
    AppComponent,
    WordFormComponent,
    WordsListComponent,
    ConfirmModalComponent,
    PlayersListComponent,
    FormWrapperComponent,
    PlayerFormComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ConfirmDialogModule,
    ToastModule,
    AccordionModule,
    TableModule,
    TabViewModule,
    DropdownModule,
  ],
  providers: [ConfirmationService, WordService],
  bootstrap: [AppComponent],
})
export class AppModule {}
