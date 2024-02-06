import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ScrollControlService {
  private scrollEnabled = true;

  enableScroll(): void {
    this.scrollEnabled = true;
    document.body.style.overflowY = 'auto';
  }

  disableScroll(): void {
    this.scrollEnabled = false;
    document.body.style.overflowY = 'hidden';
  }

  isScrollEnabled(): boolean {
    return this.scrollEnabled;
  }
}