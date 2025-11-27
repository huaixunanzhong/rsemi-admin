import "./index.scss";

export type RListItemProps = {
  title?: string;
  action?: React.ReactNode;
};
export default function RListItem({ title, action }: RListItemProps) {
  return (
    <>
      <li className="r-list-item">
        <div className="r-list-item__title">
          <span>{title}</span>
        </div>
        <div className="r-list-item__main">{action}</div>
      </li>
    </>
  );
}
