import "intl";
import "intl/locale-data/jsonp/en";

export function formatToBRL(value: number) {
  const valueToCurrency = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);

  let formattedPrice;
  const cents = valueToCurrency.substring(valueToCurrency.length - 2); 

  if(value >= 1000) {       
    formattedPrice = valueToCurrency
      .replace(",", ".")
      .substring(0, valueToCurrency.length - 3)
      .concat(",", cents);
  } else {
    formattedPrice = valueToCurrency
      .replace(".", ",")
  }
  
  return formattedPrice;
}