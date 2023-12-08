import { Component, OnInit } from '@angular/core';
import { TranslateService } from '../translate-services/translate.service';

@Component({
  selector: 'app-home-testbed',
  templateUrl: './home-testbed.component.html',
  styleUrls: ['./home-testbed.component.css']
})
export class HomeTestbedComponent implements OnInit{

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
