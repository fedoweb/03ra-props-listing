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

export function ListingItem(props: ListingItemProps) {
  return (
    <div className="product-card" key={props.listing_id}>
      <img src={props.MainImage?.url_570xN} alt={props.title} className="product-image" />
      <div className="product-info">
          <h3 className="product-title">{props.title}</h3>
          <div className="price-container">
              <div className="product-price">{props.price}</div>
              <span className="stock-badge stock-medium">{props.currency_code}</span>
          </div>
      </div>
    </div>
  )
}