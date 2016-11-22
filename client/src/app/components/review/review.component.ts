import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  @Input() reviewContent: string;
  @Output() reviewSubmitted = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    this.reviewSubmitted.emit(this.reviewContent);
  }
}
