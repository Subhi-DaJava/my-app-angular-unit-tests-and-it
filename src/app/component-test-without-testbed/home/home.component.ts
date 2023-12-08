
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '../translate-services/translate.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private translateService: TranslateService) { }
  paragraph: string = 'This is a paragraph';
  translatedParagraph!: string;

  ngOnInit(): void {
    this.translatedParagraph = this.translateWords(this.paragraph);
  }
  translateWords(words: string): string {
    return this.translateService.translate(this.paragraph);
  }
}
