import type { ReactNode } from "react";

interface PaginationButtonProps {
  style?: string;
  disabled: boolean;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  title: string;
  icon: ReactNode;
}

const PaginationButton = ({
  style,
  disabled,
  onClick,
  title,
  icon,
}: PaginationButtonProps) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`${style} flex items-center gap-2 font-kalvin font-medium border border-gray-200 rounded-lg px-4 py-1 md:px-5.5 md:py-2 cursor-pointer hover:bg-black hover:text-white transition-all duratin-300 text-sm md:text-md`}
    >
      {icon}
      <span>{title}</span>
    </button>
  );
};

export default PaginationButton;
