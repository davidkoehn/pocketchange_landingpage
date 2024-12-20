declare namespace JSX {
  interface IntrinsicElements {
    "coingecko-coin-price-marquee-widget": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
      "coin-ids"?: string;
      currency?: string;
      "background-color"?: string;
      locale?: string;
    };
  }
}
