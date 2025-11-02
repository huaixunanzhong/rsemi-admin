interface BrandIconProps {
  className?: string;
  children?: React.ReactNode;
}
export default function BrandIcon({ className, children }: BrandIconProps) {
  return (
    <>
      <span className={`bg-white p-2 rounded-md shadow-md inline-flex justify-center items-center ${className || ""}`}>
        {children}
      </span>
    </>
  );
}
