import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {RouterLink} from "@angular/router";
import {CommonModule} from "@angular/common";
import {PageService} from "../../pagination-service/page.service";

@Component({
  selector: 'my-pagination',
  templateUrl: './pagination.component.html',
  standalone: true,
  imports: [RouterLink, CommonModule]
})

export class PaginationComponent implements OnInit {
  @Input() total: number = 0;
  @Input() limit: number = 20;
  @Input() currentPage: number = 1;

  @Output('pageChange')
  pageChangeEvent = new EventEmitter<number>();

  pagesCount: number = 1;
  pages: number[] = [];

  constructor(private pageService: PageService) {
  }

  ngOnInit(): void {
  this.pagesCount = Math.ceil(this.total / this.limit);
    this.pages =
     this.pagesCount > 0 ? this.pageService.range(1, this.pagesCount + 1 ) : [];
  }

  selectPage(page: number): void {
    this.pageChangeEvent.emit(page);
  }
}
