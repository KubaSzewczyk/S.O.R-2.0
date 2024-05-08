type Props = {
  item: LocalStorageHistoryTypes[];
};

type LocalStorageHistoryTypes = {
  value: string;
  timestamp: string;
};

export const LocalStorageHistory = ({ item }: Props) => {
  return (
    <div className="flex flex-col">
      {item.map((item) => (
        <div className="flex flex-col text-start mb-3 ">
          <div>
            <span className="font-bold">wartość:</span>{" "}
            <span>{item.value}</span>
          </div>
          <div>
            <span className="font-bold">czas:</span>{" "}
            <span>{item.timestamp}</span>
          </div>
        </div>
      ))}
    </div>
  );
};
