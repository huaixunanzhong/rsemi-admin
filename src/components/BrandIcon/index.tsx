import components from "./componentsEnum.tsx";

console.log(components);

interface BrandIconProps {
  component: React.ReactNode;
}
export default function BrandIcon({ component }: BrandIconProps) {
  return (
    <>
      <div>{components[component]}</div>
    </>
  );
}
