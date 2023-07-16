import Image from "next/image";
import checkedIcon from "../images/icon-check.svg";

interface ICompletedIconProps {
  onCompletedIconClick: () => void;
}

export default function CompletedIcon({
  onCompletedIconClick,
}: ICompletedIconProps) {
  return (
    <button
      onClick={onCompletedIconClick}
      className="relative h-5 w-6 rounded-full cursor-pointer bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
    >
      <Image
        className="absolute left-1.5 bottom-1"
        src={checkedIcon}
        alt="checked"
      />
    </button>
  );
}
