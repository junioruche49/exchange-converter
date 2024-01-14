import { useState } from "react";
import { convertCurrency } from "../utils/api";

function useConverter() {
  const [amount, setAmount] = useState(1);
  const [base, setBase] = useState("USD");
  const [target, setTarget] = useState("NGN");
  const [loading, setLoading] = useState(false);
  const [totalAmount, setTotalAmount] = useState(null);
  const [error, setError] = useState("");

  const setInput = (setData) => (e) => {
    setData(e.target.value);
  };

  const convertHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      let response = await convertCurrency(base, target);
      if (!response.ok) {
        setError("error occured");
        return;
      }
      setLoading(false);
      response = await response.json();
      setTotalAmount(response.conversion_rate * amount);
    } catch (error) {
      setError(error.message);
    }
  };
  return {
    amount,
    target,
    base,
    loading,
    totalAmount,
    setInput,
    setBase,
    setAmount,
    setTarget,
    convertHandler,
    error,
  };
}

export default useConverter;
