import { FaArrowLeft } from "react-icons/fa6";
import { FaXmark } from "react-icons/fa6";

interface NavbarInterface {
  backStep: () => void;
}

const Navbar = ({ backStep }: NavbarInterface) => {
  return (
    <nav className="flex justify-between p-4">
      <div className="flex items-center gap-2 cursor-pointer" onClick={backStep}>
        <FaArrowLeft width={16} height={16} />
        <span>Go Back</span>
      </div>
      <div className="flex items-center gap-2 cursor-pointer">
        <span>Exit</span>
        <FaXmark width={16} height={16} />
      </div>
    </nav>
  );
};

export default Navbar;
