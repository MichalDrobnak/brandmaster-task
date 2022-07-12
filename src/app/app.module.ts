import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { AddButtonComponent } from './components/add-button/add-button.component';
import { TableComponent } from './components/table/table.component';
import { StatusChipComponent } from './components/status-chip/status-chip.component';
import { DropdownButtonComponent } from './components/dropdown-button/dropdown-button.component';
import { SidebarLinkComponent } from './components/sidebar-link/sidebar-link.component';
import { CdkTableModule } from '@angular/cdk/table';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    MainComponent,
    SearchbarComponent,
    AddButtonComponent,
    TableComponent,
    StatusChipComponent,
    DropdownButtonComponent,
    SidebarLinkComponent,
  ],
  imports: [BrowserModule, CdkTableModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
