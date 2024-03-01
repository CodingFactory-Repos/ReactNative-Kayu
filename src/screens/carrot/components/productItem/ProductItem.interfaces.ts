export interface ProductItemProps {
  title: string;
  subtitle: string;
  badgeText: string;
  defects: string[];
  nutriments: {
    carbohydrates: number;
    proteins: number;
    fat: number;
    sugars: number;
    salt: number;
  };
  ingredients_text: string;
  categories: string;
  qualities: string[];
  image_front_small_url: string;
  nutriscore_grade: number;
  nutriscore_score: string;
}
