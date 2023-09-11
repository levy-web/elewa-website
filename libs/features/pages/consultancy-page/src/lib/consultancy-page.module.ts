import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppHeaderModule } from '@elewa-website/elements/layout/header';
import { TextsModule } from '@elewa-website/elements/layout/texts';
import { ButtonsModule } from '@elewa-website/elements/layout/buttons';
import { BannersModule } from '@elewa-website/elements/banners';
import { TextsModule } from '@elewa-website/elements/layout/texts';

import { ConsultancyPageComponent } from './main/consultancy-page/consultancy-page.component';
import { ConsultancyHeroSectionComponent } from './components/consultancy-hero-section/consultancy-hero-section.component';
import { ElewaConsultancyAboutOneComponent } from './elewa-consultancy-about-one/elewa-consultancy-about-one.component';

import { ConsultancyRoutingModule } from './consultancy.routing';

@NgModule({
  imports: [CommonModule, ConsultancyRoutingModule, AppHeaderModule, TextsModule, ButtonsModule, BannersModule],
  declarations: [ConsultancyPageComponent, ConsultancyHeroSectionComponent, ElewaConsultancyAboutOneComponent],
  exports: [ConsultancyPageComponent]
})
export class ConsultancyPageModule {}
