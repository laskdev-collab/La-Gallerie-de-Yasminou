
export interface Artwork {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  date: string;
}

export enum InspirationMode {
  IDEA = 'IDEA',
  CRITIQUE = 'CRITIQUE',
  POETRY = 'POETRY'
}
