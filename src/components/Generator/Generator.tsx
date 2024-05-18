import { v4 as uuidv4 } from "uuid";
import { type MouseEventHandler, useState } from "react";

import { Text, Button } from "../../ui";

export const Generator = () => {
  const [id, setId] = useState(uuidv4());

  const handleClick: MouseEventHandler<HTMLButtonElement> = () => {
    setId(uuidv4());
  };

  return (
    <>
      <Text>{id}</Text>
      <Button label="Refresh" onClick={handleClick} />
    </>
  );
};
