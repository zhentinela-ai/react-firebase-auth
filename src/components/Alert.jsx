import { BiErrorAlt } from "react-icons/bi";

export default function Alert({ message }) {
  return (
    <div className="bg-red-200 border border-red-400 text-red-700 px-4 py-3 rounded mb-2 text-center">
      <span className="sm:inline block">
        <BiErrorAlt
          style={{
            width: "100%",
            height: "30px",
          }}
        />
        {message}
      </span>
    </div>
  );
}
