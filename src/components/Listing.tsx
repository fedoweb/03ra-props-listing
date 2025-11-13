import { ListingItem, type ListingItemProps } from './ListingItem';

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
