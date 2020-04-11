import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { Passenger } from '../../models/passenger.interface';

@Component({
  selector: 'passenger-detail',
  styleUrls: ['passenger-detail.component.scss'],
  template:`
  <div>
  <ul>
      <li>
        <span
         class="status" [class.checked-in]="detail.checkedIn"></span>
        <div *ngIf="editing">
          <input
            type="text"
            [value]="detail.fullname"
            (input) = "onNameChange(name.value)"
            #name>
        </div>
        <div *ngIf="!editing">
        {{ detail.fullname }}
        </div>
        <div class="date">
          Checked In Date :
           {{ detail.checkedInDate ? ( detail.checkedInDate | date: 'yMMMd' | uppercase ) : 'Not checked in' }}
        </div>
        <button (click)="goToPassenger()">
            View
        </button>
        <button (click)="toggleEdit()">
          {{ editing? 'Done' : 'Edit'}}
        </button>
        <button (click)="onRemove()">
            Remove
        </button>
      </li>

    </ul>
  </div>
  `
})
export class PassengerDetailComponent implements OnChanges  {
  @Input()
  detail : Passenger;

  @Output()
  edit:EventEmitter<Passenger> = new EventEmitter<Passenger>();

  @Output()
  remove: EventEmitter<Passenger> = new EventEmitter<Passenger>();

  @Output()
  view: EventEmitter <Passenger> = new EventEmitter<Passenger>();

  editing: boolean = false;

  ngOnChanges(changes){
    if(changes.detail) {
      this.detail = Object.assign({},changes.detail.currentValue);
    }
  }

  onNameChange(value: string){
    this.detail.fullname = value;
    }
  toggleEdit() {
    if(this.editing) {
      this.edit.emit(this.detail);
    }
    this.editing = !this.
    editing;
  }
  onRemove() {
    this.remove.emit(this.detail);
  }

  goToPassenger(){
    this.view.emit(this.detail);
  }


}