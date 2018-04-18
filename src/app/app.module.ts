import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppSharedModule } from './app-shared/app-shared.module';

import { AppComponent } from './app.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { FooterComponent } from './footer/footer.component';
import { TerminalComponent } from './terminal/terminal.component';
import { AppIndicatorComponent } from './terminal/components/app-indicator/app-indicator.component';
import { TerminalHelpComponent } from './terminal/components/terminal-help/terminal-help.component';
import { TerminalNotFoundComponent } from './terminal/components/terminal-not-found/terminal-not-found.component';
import { TerminalAboutComponent } from './terminal/components/terminal-about/terminal-about.component';
import { TerminalContactComponent } from './terminal/components/terminal-contact/terminal-contact.component';
import { TerminalFreelanceComponent } from './terminal/components/terminal-freelance/terminal-freelance.component';
import { TerminalExperienceComponent } from './terminal/components/terminal-experience/terminal-experience.component';
import { TerminalSkillsComponent } from './terminal/components/terminal-skills/terminal-skills.component';
import { TerminalHeadingComponent } from './terminal/components/terminal-heading/terminal-heading.component';


@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    FooterComponent,
    TerminalComponent,
    AppIndicatorComponent,
    TerminalHelpComponent,
    TerminalNotFoundComponent,
    TerminalAboutComponent,
    TerminalContactComponent,
    TerminalFreelanceComponent,
    TerminalExperienceComponent,
    TerminalSkillsComponent,
    TerminalHeadingComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppSharedModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
