export const formatPrice = (price: number) => {
  const newPrice = Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(price)

  const priceWithoutCurrency = newPrice.replace('R$', '').trim()
  console.log(priceWithoutCurrency)
  return String(priceWithoutCurrency)
}
