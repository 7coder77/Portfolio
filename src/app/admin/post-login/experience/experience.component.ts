import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatChipInputEvent} from '@angular/material/chips';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  form: any;

  constructor(private fb: FormBuilder) {

  }

  ngOnInit(): void {
    this.form = this.fb.group({
      items: this.fb.array([]) // Renamed 'steps' to 'items' to match the HTML
    });
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
  addSkill(event: MatChipInputEvent, stepControl: AbstractControl): void {
    const input = event.input;
    const value = event.value;

    // Add our skill
    if ((value || '').trim()) {
      const skills = stepControl.get('skills')?.value || [];
      skills.push(value.trim());
      stepControl.get('skills')?.setValue(skills);
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  removeSkill(skill: string, stepControl: AbstractControl): void {
    const skills = stepControl.get('skills')?.value || [];
    const index = skills.indexOf(skill);

    if (index >= 0) {
      skills.splice(index, 1);
      stepControl.get('skills')?.setValue(skills);
    }
  }

}
