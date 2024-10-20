import {Component, inject} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";

@Component({
  selector: 'app-skills-form',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './skills-form.component.html',
  styleUrl: './skills-form.component.css'
})
export class SkillsFormComponent {
  formBuilder : FormBuilder = inject(FormBuilder);

  Form = this.formBuilder.group({
    skills: this.formBuilder.array([])
  });

  // Getter for skills FormArray
  get skills(): FormArray {
    return this.Form.get('skills') as FormArray;
  }

  addSkill() {
    let skillForm : FormGroup = this.formBuilder.group({
      skillName: ['', Validators.required],
      experienceLevel: ['', Validators.required]
    })
    this.skills.push(skillForm);
    console.log(skillForm);
  }

  removeSkill(index: number):void {
      this.skills.removeAt(index);
    }

  onSubmit(): void {
    if (this.Form.valid) {
      console.log(this.Form.value.skills);
    } else {
      console.log('Form is invalid');
    }
  }

/*   Stel je hebt een FormArray met 3 vaardigheden
  this.skillsForm = this.formBuilder.group({
    skills: this.formBuilder.array([
      this.formBuilder.group({ skillName: [''], experienceLevel: [''] }),
      this.formBuilder.group({ skillName: [''], experienceLevel: [''] }),
      this.formBuilder.group({ skillName: [''], experienceLevel: [''] }),
    ]),
  });*/

}
