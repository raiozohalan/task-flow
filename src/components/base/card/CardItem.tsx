import classNames from "../../../utils/classNames";
import { TaskStatusesProps } from "../../Task/statuts.const";

interface CardItemProps extends TaskStatusesProps {
  count: {
    value: number;
    label: string | React.ReactNode;
  };
}

const CardItem = (props: CardItemProps) => {
  const {
    Icon,
    label,
    backgroundColor = "",
    count: { value = 0, label: countLabel = "Total" },
  } = props;

  return (
    <div
      className={classNames(
        "w-full px-4 py-2 md:px-8 md:py-4 rounded-md",
        backgroundColor
      )}
    >
      <div className="flex items-center gap-2">
        {Icon ? <Icon className={classNames("size-4")} /> : null}
        <h2 className="text-lg font-bold">{label}</h2>
      </div>
      <div className="flex items-center justify-between mt-4">
        <span className="text-sm/6 text-white/70">{countLabel}</span>
        <span className="text-2xl font-bold">{value}</span>
      </div>
    </div>
  );
};

export default CardItem;
