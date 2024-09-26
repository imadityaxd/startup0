import { ImSpinner11 } from "react-icons/im";
export default function Loader() {
  return (
    <div className="flex justify-center items-center animate-spin">
      <ImSpinner11 size={25} />
    </div>
  );
}
