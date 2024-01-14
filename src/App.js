import useConverter from "./hooks/useConverter";
import SelectComponent from "./components/SelectComponent";
import TextInputComponent from "./components/TextInputComponent";
import ButtonComponent from "./components/ButtonComponent";
import { formatter } from "./utils/helper";

function App() {
  const {
    setInput,
    setAmount,
    setBase,
    setTarget,
    loading,
    convertHandler,
    totalAmount,
    target,
    base,
    amount,
    error,
  } = useConverter();

  return (
    <div className="w-full h-dvh flex justify-center items-center">
      <div className="w-[25%]">
        <form onSubmit={convertHandler}>
          <TextInputComponent
            value={amount}
            setInput={setInput}
            setAmount={setAmount}
          />
          <SelectComponent
            name="Current Currency"
            setInput={setInput}
            setBase={setBase}
            value={base}
          />
          <SelectComponent
            name="Exchange Currency"
            setInput={setInput}
            setBase={setTarget}
            value={target}
          />
          <br />
          <div className="flex flex-col text-center w-full">
            <ButtonComponent loading={loading} />
            <h1 className="font-bold my-4">
              {totalAmount && formatter(target)().format(totalAmount)}
            </h1>
            <span className="text-lg text-red-700">{error}</span>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
