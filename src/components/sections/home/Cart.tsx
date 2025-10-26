'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Minus, Plus, X, ShoppingBag, ArrowLeft, Tag, Truck } from 'lucide-react';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';

const DEFAULT_SHOPPING_CART = {
  title: 'Shopping Cart',
  itemsText: 'handcrafted pieces in your cart',
  item1Name: 'Moonstone Cascade Earrings',
  item1Price: 285.0,
  item1Quantity: 1,
  item1Color: 'Sterling Silver',
  item1Image: '/api/placeholder/100/100',
  item2Name: 'Sapphire Eternity Ring',
  item2Price: 1250.0,
  item2Quantity: 1,
  item2Color: '14K Gold',
  item2Image: '/api/placeholder/100/100',
  item3Name: 'Pearl Drop Necklace',
  item3Price: 425.0,
  item3Quantity: 1,
  item3Color: 'Rose Gold',
  item3Image: '/api/placeholder/100/100',
  colorLabel: 'Metal:',
  eachLabel: 'each',
  continueShoppingText: 'Continue Shopping',
  continueShoppingHref: '/',
  orderSummaryTitle: 'Order Summary',
  promoCodeLabel: 'Promo Code',
  promoCodePlaceholder: 'Enter code',
  subtotalLabel: 'Subtotal',
  shippingLabel: 'Shipping',
  shippingValue: 'FREE',
  taxLabel: 'Tax',
  taxRate: 0.08,
  totalLabel: 'Total',
  freeShippingMessage: 'Complimentary shipping on all jewelry orders',
  checkoutButtonText: 'Secure Checkout',
  checkoutButtonHref: '/checkout',
  secureCheckoutText: 'Protected by SSL encryption • Lifetime warranty included',
} as const;

type ShoppingCartProps = Partial<typeof DEFAULT_SHOPPING_CART>;

export default function Cart(props: ShoppingCartProps) {
  const config = { ...DEFAULT_SHOPPING_CART, ...props };
  const navigate = useSmartNavigation();

  const cartItems = [
    {
      id: 1,
      name: config.item1Name,
      price: config.item1Price,
      quantity: config.item1Quantity,
      image: config.item1Image,
      color: config.item1Color,
    },
    {
      id: 2,
      name: config.item2Name,
      price: config.item2Price,
      quantity: config.item2Quantity,
      image: config.item2Image,
      color: config.item2Color,
    },
    {
      id: 3,
      name: config.item3Name,
      price: config.item3Price,
      quantity: config.item3Quantity,
      image: config.item3Image,
      color: config.item3Color,
    },
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 0;
  const tax = subtotal * config.taxRate;
  const total = subtotal + shipping + tax;

  return (
    <section className="py-16 bg-background min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            <span data-editable="title">{config.title}</span>
          </h1>
          <p className="text-muted-foreground">
            {cartItems.length} <span data-editable="itemsText">{config.itemsText}</span>
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item, index) => (
              <Card key={item.id}>
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    {/* Product Image */}
                    <div className="size-24 rounded-lg bg-muted overflow-hidden flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                        data-editable-src={`item${index + 1}Image`}
                      />
                    </div>

                    {/* Product Details */}
                    <div className="flex-1 space-y-2">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold text-foreground">
                            <span data-editable={`item${index + 1}Name`}>{item.name}</span>
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            <span data-editable="colorLabel">{config.colorLabel}</span>{' '}
                            <span data-editable={`item${index + 1}Color`}>{item.color}</span>
                          </p>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="size-8 hover:text-destructive"
                        >
                          <X className="size-4" />
                        </Button>
                      </div>

                      <div className="flex justify-between items-center">
                        {/* Quantity Controls */}
                        <div className="flex items-center border rounded-lg">
                          <Button variant="ghost" size="icon" className="size-8 rounded-r-none">
                            <Minus className="size-3" />
                          </Button>
                          <span className="px-3 py-1 min-w-[40px] text-center text-sm">
                            {item.quantity}
                          </span>
                          <Button variant="ghost" size="icon" className="size-8 rounded-l-none">
                            <Plus className="size-3" />
                          </Button>
                        </div>

                        {/* Price */}
                        <div className="text-right">
                          <p className="font-semibold text-foreground">
                            ${(item.price * item.quantity).toFixed(2)}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            ${item.price.toFixed(2)}{' '}
                            <span data-editable="eachLabel">{config.eachLabel}</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Continue Shopping */}
            <Button
              variant="outline"
              className="gap-2"
              onClick={() => navigate(config.continueShoppingHref)}
              data-editable-href="continueShoppingHref"
              data-href={config.continueShoppingHref}
            >
              <ArrowLeft className="size-4" />
              <span data-editable="continueShoppingText">{config.continueShoppingText}</span>
            </Button>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle>
                  <span data-editable="orderSummaryTitle">{config.orderSummaryTitle}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Promo Code */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">
                    <span data-editable="promoCodeLabel">{config.promoCodeLabel}</span>
                  </label>
                  <div className="flex gap-2">
                    <Input placeholder={config.promoCodePlaceholder} />
                    <Button variant="outline" size="icon">
                      <Tag className="size-4" />
                    </Button>
                  </div>
                </div>

                {/* Price Breakdown */}
                <div className="space-y-2 border-t pt-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">
                      <span data-editable="subtotalLabel">{config.subtotalLabel}</span>
                    </span>
                    <span className="font-medium">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">
                      <span data-editable="shippingLabel">{config.shippingLabel}</span>
                    </span>
                    <span className="font-medium text-green-600 dark:text-green-400">
                      <span data-editable="shippingValue">{config.shippingValue}</span>
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">
                      <span data-editable="taxLabel">{config.taxLabel}</span>
                    </span>
                    <span className="font-medium">${tax.toFixed(2)}</span>
                  </div>
                </div>

                {/* Total */}
                <div className="flex justify-between border-t pt-4">
                  <span className="font-semibold text-lg">
                    <span data-editable="totalLabel">{config.totalLabel}</span>
                  </span>
                  <span className="font-bold text-lg text-primary">${total.toFixed(2)}</span>
                </div>

                {/* Shipping Info */}
                <div className="flex items-center gap-2 p-3 bg-muted rounded-lg">
                  <Truck className="size-4 text-primary" />
                  <span className="text-sm">
                    <span data-editable="freeShippingMessage">{config.freeShippingMessage}</span>
                  </span>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col gap-2">
                <Button
                  className="w-full gap-2"
                  size="lg"
                  onClick={() => navigate(config.checkoutButtonHref)}
                  data-editable-href="checkoutButtonHref"
                  data-href={config.checkoutButtonHref}
                >
                  <ShoppingBag className="size-5" />
                  <span data-editable="checkoutButtonText">{config.checkoutButtonText}</span>
                </Button>
                <p className="text-xs text-center text-muted-foreground">
                  <span data-editable="secureCheckoutText">{config.secureCheckoutText}</span>
                </p>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
