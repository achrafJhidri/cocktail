import {Ingredient} from './Ingredient.model'
export class Cocktail {
    constructor (
        public name :string,
        public description:string,
        public img:string,
        public ingredients : Ingredient[] )
        {}
}