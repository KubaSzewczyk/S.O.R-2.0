import { useState } from "react";
import { useSortData } from "../../hooks/useSort";
import { Select } from "../../ui/Select";

const users = [
  { id: 1, nickname: "john", age: 45 },
  { id: 2, nickname: "olivier", age: 32 },
  { id: 3, nickname: "macgyver", age: 65 },
];
type SortByOptions = "id" | "nickname" | "age";

export const SortedObj = () => {
  const [sortBy, setSortBy] = useState<SortByOptions>("id");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  const sortedUsers = useSortData(users, sortBy, sortOrder);

  const handleSortByChange = (value: SortByOptions) => {
    setSortBy(value);
  };

  const handleSortOrderChange = (value: "asc" | "desc") => {
    setSortOrder(value);
  };

  return (
    <div>
      <div>
        <Select
          data={Object.keys(users[0]) as SortByOptions[]}
          value={sortBy}
          onChange={handleSortByChange}
        />
      </div>
      <div>
        <Select
          data={["asc", "desc"]}
          value={sortOrder}
          onChange={handleSortOrderChange}
        />
      </div>
      <ul>
        {sortedUsers.map((user) => (
          <li key={user.id}>
            {user.nickname} - {user.age} - {user.id}
          </li>
        ))}
      </ul>
    </div>
  );
};
