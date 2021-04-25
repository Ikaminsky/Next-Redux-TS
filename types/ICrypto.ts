type GenericObject = { [key: string]: string | number };
export interface ICrypto {
  circulating_supply: number;
  cmc_rank: number;
  date_added: Date;
  id: number;
  last_updated: string;
  max_supply: number;
  name: string;
  num_market_pairs: number;
  platform?: string;
  quote: GenericObject;
  slug: string;
  symbol: string;
  tags: string[];
  total_supply: number;
}
