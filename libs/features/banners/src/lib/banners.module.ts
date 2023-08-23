import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TextsModule } from '@elewa-website/elements/layout/texts';

import { ElewaImageAndTextBannerComponent } from './components/elewa-image-and-text-banner/elewa-image-and-text-banner.component';

@NgModule({
  imports: [CommonModule, TextsModule],
  declarations: [ElewaImageAndTextBannerComponent],
})
export class BannersModule {}
