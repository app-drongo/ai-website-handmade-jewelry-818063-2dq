'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, Heart, Star, Filter, ChevronDown } from 'lucide-react';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';

const DEFAULT_PRODUCT_GRID = {
  title: 'Artisan Jewelry Collection',
  description:
    'Discover our handcrafted jewelry pieces, each uniquely designed and meticulously crafted by skilled artisans using premium materials',
  filtersButton: 'Filters',
  categoryButton: 'Category',
  priceButton: 'Price',
  showingText: 'Showing 6 of 48 pieces',
  sortByText: 'Sort by: Featured',
  product1Name: 'Moonstone Cascade Earrings',
  product1Price: 285.0,
  product1OriginalPrice: null,
  product1Image:
    'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=400&fit=crop',
  product1Rating: 4.9,
  product1Reviews: 23,
  product1Badge: 'New',
  product1Category: 'Earrings',
  product2Name: 'Vintage Rose Gold Pendant',
  product2Price: 425.0,
  product2OriginalPrice: 495.0,
  product2Image:
    'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=400&fit=crop',
  product2Rating: 5.0,
  product2Reviews: 18,
  product2Badge: 'Sale',
  product2Category: 'Necklaces',
  product3Name: 'Sapphire Eternity Ring',
  product3Price: 1250.0,
  product3OriginalPrice: null,
  product3Image:
    'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=400&fit=crop',
  product3Rating: 4.8,
  product3Reviews: 31,
  product3Badge: null,
  product3Category: 'Rings',
  product4Name: 'Pearl & Gold Bracelet',
  product4Price: 320.0,
  product4OriginalPrice: 380.0,
  product4Image:
    'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=400&fit=crop',
  product4Rating: 4.7,
  product4Reviews: 15,
  product4Badge: 'Sale',
  product4Category: 'Bracelets',
  product5Name: 'Emerald Statement Necklace',
  product5Price: 850.0,
  product5OriginalPrice: null,
  product5Image:
    'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop',
  product5Rating: 4.9,
  product5Reviews: 27,
  product5Badge: 'Bestseller',
  product5Category: 'Necklaces',
  product6Name: 'Diamond Stud Collection',
  product6Price: 680.0,
  product6OriginalPrice: null,
  product6Image:
    'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=400&h=400&fit=crop',
  product6Rating: 5.0,
  product6Reviews: 42,
  product6Badge: 'Popular',
  product6Category: 'Earrings',
  addToCartButton: 'Add to Cart',
  loadMoreButton: 'View All Jewelry',
  loadMoreButtonHref: '/',
} as const;

type ProductGridProps = Partial<typeof DEFAULT_PRODUCT_GRID>;

export default function Productgrid(props: ProductGridProps) {
  const config = { ...DEFAULT_PRODUCT_GRID, ...props };
  const navigate = useSmartNavigation();

  const products = [
    {
      id: 1,
      name: config.product1Name,
      price: config.product1Price,
      originalPrice: config.product1OriginalPrice,
      image: config.product1Image,
      rating: config.product1Rating,
      reviews: config.product1Reviews,
      badge: config.product1Badge,
      category: config.product1Category,
    },
    {
      id: 2,
      name: config.product2Name,
      price: config.product2Price,
      originalPrice: config.product2OriginalPrice,
      image: config.product2Image,
      rating: config.product2Rating,
      reviews: config.product2Reviews,
      badge: config.product2Badge,
      category: config.product2Category,
    },
    {
      id: 3,
      name: config.product3Name,
      price: config.product3Price,
      originalPrice: config.product3OriginalPrice,
      image: config.product3Image,
      rating: config.product3Rating,
      reviews: config.product3Reviews,
      badge: config.product3Badge,
      category: config.product3Category,
    },
    {
      id: 4,
      name: config.product4Name,
      price: config.product4Price,
      originalPrice: config.product4OriginalPrice,
      image: config.product4Image,
      rating: config.product4Rating,
      reviews: config.product4Reviews,
      badge: config.product4Badge,
      category: config.product4Category,
    },
    {
      id: 5,
      name: config.product5Name,
      price: config.product5Price,
      originalPrice: config.product5OriginalPrice,
      image: config.product5Image,
      rating: config.product5Rating,
      reviews: config.product5Reviews,
      badge: config.product5Badge,
      category: config.product5Category,
    },
    {
      id: 6,
      name: config.product6Name,
      price: config.product6Price,
      originalPrice: config.product6OriginalPrice,
      image: config.product6Image,
      rating: config.product6Rating,
      reviews: config.product6Reviews,
      badge: config.product6Badge,
      category: config.product6Category,
    },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            <span data-editable="title">{config.title}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            <span data-editable="description">{config.description}</span>
          </p>
        </div>

        {/* Filters Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="gap-2">
              <Filter className="size-4" />
              <span data-editable="filtersButton">{config.filtersButton}</span>
            </Button>
            <Button variant="ghost" size="sm" className="gap-2">
              <span data-editable="categoryButton">{config.categoryButton}</span>
              <ChevronDown className="size-4" />
            </Button>
            <Button variant="ghost" size="sm" className="gap-2">
              <span data-editable="priceButton">{config.priceButton}</span>
              <ChevronDown className="size-4" />
            </Button>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span data-editable="showingText">{config.showingText}</span>
            <Button variant="ghost" size="sm" className="gap-2">
              <span data-editable="sortByText">{config.sortByText}</span>
              <ChevronDown className="size-4" />
            </Button>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <Card
              key={product.id}
              className="group overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative aspect-square bg-muted">
                {product.badge && (
                  <Badge
                    className="absolute top-4 left-4 z-10"
                    variant={product.badge === 'Sale' ? 'destructive' : 'default'}
                  >
                    <span data-editable={`product${index + 1}Badge`}>{product.badge}</span>
                  </Badge>
                )}
                <Button
                  size="icon"
                  variant="ghost"
                  className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity bg-background/80 hover:bg-background"
                >
                  <Heart className="size-4" />
                </Button>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  data-editable-src={`product${index + 1}Image`}
                />
              </div>

              <CardContent className="p-4">
                <p className="text-sm text-muted-foreground mb-1">
                  <span data-editable={`product${index + 1}Category`}>{product.category}</span>
                </p>
                <h3 className="font-semibold text-foreground mb-2 line-clamp-2">
                  <span data-editable={`product${index + 1}Name`}>{product.name}</span>
                </h3>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`size-4 ${
                          i < Math.floor(product.rating)
                            ? 'fill-primary text-primary'
                            : 'text-muted'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    (<span data-editable={`product${index + 1}Reviews`}>{product.reviews}</span>)
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold text-foreground">
                    $<span data-editable={`product${index + 1}Price`}>{product.price}</span>
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-muted-foreground line-through">
                      $
                      <span data-editable={`product${index + 1}OriginalPrice`}>
                        {product.originalPrice}
                      </span>
                    </span>
                  )}
                </div>
              </CardContent>

              <CardFooter className="p-4 pt-0">
                <Button className="w-full group/btn" size="sm">
                  <ShoppingCart className="size-4 mr-2 transition-transform group-hover/btn:scale-110" />
                  <span data-editable="addToCartButton">{config.addToCartButton}</span>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="mt-12 text-center">
          <Button
            variant="outline"
            size="lg"
            onClick={() => navigate(config.loadMoreButtonHref)}
            data-editable-href="loadMoreButtonHref"
            data-href={config.loadMoreButtonHref}
          >
            <span data-editable="loadMoreButton">{config.loadMoreButton}</span>
          </Button>
        </div>
      </div>
    </section>
  );
}
