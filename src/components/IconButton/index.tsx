import { Button } from "@douyinfe/semi-ui-19";

interface Props {
  icon: React.ReactNode;
  onClick?: () => void;
}

export default function IconButton({ icon, onClick }: Props) {
  return (
    <Button
      theme="borderless"
      icon={icon}
      className="semi-color-text-2 mr-3"
      onClick={onClick}
    />
  );
}
