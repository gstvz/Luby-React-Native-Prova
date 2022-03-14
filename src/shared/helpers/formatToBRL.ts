import "intl";
import "intl/locale-data/jsonp/en";

export function formatToBRL(value: number) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
}
