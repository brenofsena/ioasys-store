export const formatCurrency = (value) =>
  value &&
  value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
