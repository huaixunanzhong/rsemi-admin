interface BrandIconProps {
  className?: string;
  icon?: React.ReactNode;
}
export default function BrandIcon({ className, icon }: BrandIconProps) {
  return (
    <>
      <span
        className={`bg-white p-2 rounded-md shadow-md inline-flex justify-center items-center ${className || ""}`}
      >
        {icon}
      </span>
    </>
  );
}
