export interface Recipe {
  _id: string;
  name: string;
  categoryId: string;
  categoryName: string;
  duration: number;
  complexity: string;
  people: number;
  ingredients: string;
  description: string;
  photo: string;
  recommended?: number;
  favorite?: number;
}
