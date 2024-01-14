export const formatter = (currency) => () =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency,
  });
