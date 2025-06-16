import { Component } from '@angular/core';
import { Modal } from "../../shared/modal/modal";

@Component({
  selector: 'app-projects',
  imports: [Modal],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})

export class Projects {
  showModal = false;

  toggleDesignModal() {
    this.showModal = !this.showModal;
  }
}
