import { Component, OnInit, Input } from '@angular/core';
import { DayTaskViewModel } from '../../../../../shared/viewmodels/day-task.viewmodel';

@Component({
  selector: 'app-day-task',
  templateUrl: './day-task.component.html',
  styleUrls: ['./day-task.component.css']
})
export class DayTaskComponent implements OnInit {
  @Input() viewModel: DayTaskViewModel = null;

  constructor() { }

  ngOnInit() { }

  getTaskName(): string {
    return this.viewModel.getTaskName();
  }

  isDone(): boolean {
    return this.viewModel.getIsDone();
  }

  changeState(): void {
    this.viewModel.setIsDone(!this.viewModel.getIsDone());
  }

  getBackgroundColor(): string {
    return this.viewModel.getTaskColor();
  }

  getTaskNameAbbreviation(): string {
    return this.viewModel.getTaskNameAbbreviation();
  }

  setShowFullInfo(showFullInfo: boolean): void {
    this.viewModel.setShowFullInfo(showFullInfo);
  }

  getShowFullInfo(): boolean {
    return this.viewModel.getShowFullInfo();
  }

}
