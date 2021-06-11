import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.scss']
})
export class AddRecipeComponent implements OnInit {
  recipeEnum: typeof AddRecipeEnum = AddRecipeEnum;
  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formGroup = formBuilder.group({});
  }

  ngOnInit(): void {
  }

  public addNextIngredients(): void {
    (this.formGroup.get(this.recipeEnum.INGREDIENTS) as FormArray).push(this.createIngredientFormItem());
  }

  public addNextStep(): void {
    (this.formGroup.get(this.recipeEnum.STEPS) as FormArray).push(this.createStepsFormItem());
  }


  public initForm(): void {
    this.formGroup = this.formBuilder.group({
      [this.recipeEnum.NAME]: ['', [Validators.required]],
      [this.recipeEnum.TITLE]: ['', [Validators.required]],
      [this.recipeEnum.INGREDIENTS]: this.formBuilder.array([this.createIngredientFormItem()]),
      [this.recipeEnum.STEPS]: this.formBuilder.array([this.createStepsFormItem()])
    });
  }

  private createIngredientFormItem(): FormControl {
    return this.formBuilder.control({
      ['name']: ['', [Validators.required]],
      ['counts']: ['']
    });
  }

  private createStepsFormItem(): FormControl {
    return this.formBuilder.control({
      ['title']: [''],
      ['desc']: [''],
    });
  }

  onFormSubmit() {

  }
}

export enum AddRecipeEnum {
  NAME = 'name',
  TITLE = 'title',
  INGREDIENTS = 'ingredients',
  STEPS = 'steps',

}
