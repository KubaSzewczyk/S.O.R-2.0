import { useViewport } from "../../hooks/useViewport";

export const Viewport = () => {
  const size = useViewport();
  return (
    <div>
      <p>
        x: {size.x}
        y: {size.y}
      </p>
    </div>
  );
};
