declare module 'sneakerData' {
    export interface SneakerItem {
      id: number;
      itemId: string;
      description: string;
      price: string;
      image: string;
    }
  
    export const items: SneakerItem[];
  }