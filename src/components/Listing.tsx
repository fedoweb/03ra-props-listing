import { ListingItem } from './ListingItem';

export type ListingItemProps = {
  listing_id: number;
  url?: string;
  MainImage?: {
    url_570xN: string;
  };
  title?: string;
  currency_code?: string;
  price?: string;
  quantity?: number;
}

export type ListingProps = {
  items: ListingItemProps[];
}

export function Listing({ items=[] }: ListingProps) {

  return (
    <div className="listining">
      {items.map(item => (
        <ListingItem 
          key={item.listing_id} 
          {...item} 
        />
      ))}
    </div>
  )
}
