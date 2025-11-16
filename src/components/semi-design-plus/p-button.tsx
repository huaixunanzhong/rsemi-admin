import { Button } from "@douyinfe/semi-ui";
import { useMemo, useState } from "react";

import type { ButtonProps } from "@douyinfe/semi-ui/lib/es/button";

interface PButtonProps extends ButtonProps {
  onlyLoading?: boolean; // 是否在loading时只显示loading
}
export function PButton({
  onlyLoading,
  children,
  onClick,
  className,
  ...other
}: PButtonProps) {
  const [loading, setLoading] = useState<boolean>(false);

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!onClick) return;
    setLoading(true);
    try {
      await onClick(e);
    } catch (e) {
      console.log("p-button click error:", e);
    } finally {
      setLoading(false);
    }
  };

  const _children = useMemo(() => {
    return onlyLoading && loading ? "" : children;
  }, [children, onlyLoading, loading]);
  return (
    <Button
      {...other}
      className={className}
      loading={loading}
      onClick={handleClick}
    >
      {_children}
    </Button>
  );
}
