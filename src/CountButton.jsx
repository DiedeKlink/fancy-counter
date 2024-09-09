import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";

export default function CountButton({ type, setCount }) {
  return (
    <button
      onClick={() => {
        setCount((prevCount) => (type === "minus" ? prevCount - 1 : prevCount + 1
      }}
      className="count-btn"
    >
      {type === "minus" ? (
        <MinusIcon className="count-btn-icon" />
      ) : (
        <PlusIcon className="count-btn-icon" />
      )}
    </button>
  );
}
