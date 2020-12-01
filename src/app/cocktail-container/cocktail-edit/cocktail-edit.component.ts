import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder,  FormGroup , Validators} from '@angular/forms'
import { ActivatedRoute,ParamMap } from '@angular/router';
import { Ingredient } from 'src/app/shared/model/Ingredient.model';
import { CocktailService } from 'src/app/shared/services/cocktail.service';
import {Cocktail} from '../../shared/model/Cocktail.model'
@Component({
  selector: 'app-cocktail-edit',
  templateUrl: './cocktail-edit.component.html',
  styleUrls: ['./cocktail-edit.component.css']
})
export class CocktailEditComponent implements OnInit {
  public cocktailForm : FormGroup;
  private cocktail : Cocktail;
  private edit : boolean;
  constructor(
    private fb : FormBuilder,
    private cocktailService : CocktailService,
    private activatedRoute : ActivatedRoute
    ) { }

  ngOnInit(): void {
     
    this.activatedRoute.paramMap.subscribe((paramsMap : ParamMap) => {
      if( paramsMap.get("index")){
        this.edit=true;
        this.cocktailService.getCocktail(+paramsMap.get("index")).subscribe( c => this.cocktail = c);
        this.initForm(this.cocktail);
      }else {
        this.edit=false;
        this.initForm();
      }
    } )
    
  }
  private initForm(cocktail : Cocktail =  {name :'',img:'',description :'', ingredients : []}) {
    this.cocktailForm = this.fb.group({
      name: [cocktail.name, Validators.required],
      img:  [cocktail.img, Validators.required],
      description: [cocktail.description],
      ingredients: this.fb.array(cocktail.ingredients.map((ingredient : Ingredient) => {
        return  this.fb.group({
          name:[ingredient.name],
          quantity:[ingredient.quantity]
        })
      }))
    });
  }

  addIngredient() :void {
    (<FormArray> this.cocktailForm.get("ingredients"))
      .push(this.fb.group({
          name: [''],
          quantity : ['']
        })
      )
  }

  createCocktail() : void{

    if (!this.edit)
      this.cocktailService.addCocktail(this.cocktailForm.value)
    else
      this.cocktailService.editCocktail(this.cocktailForm.value)
  }
  getIngredients() {
    return  (<FormArray> this.cocktailForm.get("ingredients")).controls;
  }
}
