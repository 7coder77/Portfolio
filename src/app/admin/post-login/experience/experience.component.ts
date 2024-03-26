import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatChipInputEvent} from '@angular/material/chips';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      items: this.fb.array([]) // Renamed 'steps' to 'items' to match the HTML
    });
  }

  ngOnInit(): void {
    // Initially, add one step
    this.addStep();
  }

  get items(): FormArray{
    return this.form.get('items') as FormArray;
  }

  addStep() {
    const newStep = this.fb.group({
      name: [''],
      skills: [''],
      startDate: [''],
      endDate: ['']
    });
    this.items.push(newStep);
  }

  removeStep(index: number) {
    this.items.removeAt(index);
  }

  isFirstStep(stepper: MatStepper): boolean {
    return stepper.selectedIndex === 0;
  }

  submit() {
    console.log(this.form.value);
  }
}
