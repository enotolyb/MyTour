import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  exportAs: 'modal'
})
export class ModalComponent {

  @HostBinding('class.show') private isOpen = false;

  open(): void {
    this.isOpen = true;
  }

  close(): void {
    this.isOpen = false;
  }

}
