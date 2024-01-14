export async function convertCurrency(base, target) {
  return fetch(
    `${process.env.REACT_APP_API_ENDPOINT}/v6/${process.env.REACT_APP_API_TOKEN}/pair/${base}/${target}`
  );
}
