import Image from "next/image";

type ButtonProps = {
  title: string;
  type: "submit" | "reset" | "button";
  icon?: string;
  variant: "btn_dark_green";
};

export const Button = ({ title, type, icon, variant }: ButtonProps) => (
  <div className="lg:flex hidden">
    <button
      type={type}
      className={`flexCenter gap-3 rounded-full border ${variant}`}
    >
      {icon && <Image src={icon} alt={title} width={24} height={24} />}
      <label className="bold-16 whitespace-nowrap">{title}</label>
    </button>
  </div>
);
