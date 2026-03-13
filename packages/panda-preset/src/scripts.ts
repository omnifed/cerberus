import { recipes, slotRecipes } from './recipes'

const ALL_RECIPES = { ...recipes, ...slotRecipes }

export function createStaticRecipeList(): Record<string, ['*']> {
  return Object.fromEntries(Object.keys(ALL_RECIPES).map((key) => [key, ['*']]))
}
