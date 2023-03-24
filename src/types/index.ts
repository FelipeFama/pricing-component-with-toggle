export interface ToggleProps {
  priceMonthly: Boolean;
  setPriceMonthly: Function;
}

export interface CardProps {
  title: string;
  price: number;
  whatYouGet: string[];
  bgColor?: string;
  textColor?: string;
  priceColor?: string;
}
