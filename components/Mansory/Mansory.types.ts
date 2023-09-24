export interface IItem {
  id: number;
  url: string;
  alt: string;
}

export interface IMansoryProps<T extends IItem> {
    column: number;
    gap?: number;
    items: T[];
}
