import { useMemo } from 'react';

export function formatPrice({
  amount,
  currencyCode,
  locale,
}: {
  amount: number;
  currencyCode: string;
  locale: string;
}) {
  const formatCurrency = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currencyCode,
  });
  return formatCurrency.format(amount);
}

export function formatVariantPrice({
  amount,
  baseAmount,
  currencyCode,
  locale,
}: {
  baseAmount: number;
  amount: number;
  currencyCode: string;
  locale: string;
}) {
  const hasDiscount = baseAmount > amount;

  const formatDiscount = new Intl.NumberFormat(locale, { style: 'percent' });

  const discount = hasDiscount
    ? formatDiscount.format((baseAmount - amount) / baseAmount)
    : null;

  const price = formatPrice({ amount, currencyCode, locale });
  const basePrice = hasDiscount
    ? formatPrice({ amount: baseAmount, currencyCode, locale })
    : null;

  return { price, basePrice, discount };
}

export function calculateDiscountPrice({
  amount,
  discountPercent,
  currencyCode,
  locale,
}: {
  discountPercent: number;
  amount: number;
  currencyCode: string;
  locale: string;
}) {
  const hasDiscount = amount - amount * (discountPercent / 100);

  const formatCurrency = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currencyCode,
  });

  const discount = hasDiscount ? formatCurrency.format(hasDiscount) : null;

  const price = formatPrice({ amount, currencyCode, locale });
  const basePrice = hasDiscount
    ? formatPrice({ amount, currencyCode, locale })
    : null;

  return { price, basePrice, discount };
}

const usePrice = (
  data?: {
    amount: number;
    baseAmount?: number;
    discountPercent?: number;
    currencyCode: string;
  } | null
): { price: string; basePrice: string; discount: string } => {
  const { amount, baseAmount, discountPercent, currencyCode } = data ?? {};
  //  const { locale } = useCommerce();

  const value = useMemo(() => {
    if (typeof amount !== 'number' || !currencyCode) return null;

    if (baseAmount) {
      return formatVariantPrice({
        amount,
        baseAmount,
        currencyCode,
        locale: 'es-CO',
      });
    } else if (discountPercent && discountPercent !== 0) {
      return calculateDiscountPrice({
        amount,
        discountPercent,
        currencyCode,
        locale: 'es-CO',
      });
    } else {
      return {
        price: formatPrice({ amount, currencyCode, locale: 'es-CO' }),
        basePrice: '',
        discount: '',
      };
    }
  }, [amount, baseAmount, discountPercent, currencyCode]);

  return value;
};

export default usePrice;
