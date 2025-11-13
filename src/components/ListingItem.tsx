import { type ListingItemProps } from "./Listing";

export function ListingItem(props: ListingItemProps) {
  const { MainImage, title, currency_code, price, quantity } = props;

  const formatTitle = () => {
    if (!title) return '';
    if (title.length > 50) return title.substring(0, 50).trim() + '...';

    return title;
  }

  const formatPrice = (): string => {
    if (!price || !currency_code) return 'N/A';

    if (currency_code === 'USD') return `$${price}`;
    if (currency_code === 'EUR') return `€${price}`;
    if (currency_code === 'GBP') return `£${price}`;
    
    return `${price} ${currency_code}`;
  }

  const getLevel = (): string => {
    if (!quantity) return '';
    if (quantity <= 10) return 'stock-low';
    if (quantity <= 20) return 'stock-medium';
    return 'stock-high';
  };

  return (
    <div className="product-card">
      <img src={MainImage?.url_570xN} alt={title} className="product-image" />
      <div className="product-info">
          <h3 className="product-title">{formatTitle()}</h3>
          <div className="price-container">
              <div className="product-price">{formatPrice()}</div>
              <span className={`stock-badge ${getLevel()}`}>{quantity}</span>
          </div>
      </div>
    </div>
  )
}