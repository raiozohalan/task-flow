import CardItem from "../../components/base/card/CardItem";
import { TASK_STATUSES, TaskStatusesProps } from "../../components/Task/statuts.const";

const HomePage = () => {
  return (
    <div className="w-full grid grid-cols-3 justify-center gap-4">
      {TASK_STATUSES?.map((task: TaskStatusesProps) => (
        <CardItem {...task} count={{ value: 10, label: "Total tasks" }} />
      ))}
    </div>
  );
};

export default HomePage;
