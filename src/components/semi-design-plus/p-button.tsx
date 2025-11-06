import { Button } from "@douyinfe/semi-ui";
import type { ButtonProps } from "@douyinfe/semi-ui/lib/es/button";
import { useMemo, useState } from "react";

interface PButtonProps extends ButtonProps {
  onlyLoading?: boolean; // 是否在loading时只显示loading
}
export function PButton({
  onlyLoading,
  children,
  onClick,
  ...other
}: PButtonProps) {
  const [loading, setLoading] = useState<boolean>(false);

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!onClick) return;
    setLoading(true);
    try {
      await onClick(e);
    } finally {
      setLoading(false);
    }
  };

  const _children = useMemo(() => {
    return onlyLoading && loading ? "" : children;
  }, [children, loading]);
  return (
    <Button {...other} loading={loading} onClick={handleClick}>
      {_children}
    </Button>
  );
}
