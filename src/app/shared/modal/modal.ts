import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  imports: [],
  templateUrl: './modal.html',
  styleUrl: './modal.css'
})

export class Modal {
  @Input() description = '';
  @Output() closed = new EventEmitter<void>();

  close() {
    this.closed.emit();
  }
}
