import { memo } from "react";

export const Small = memo(({ value }) => {
  console.log("cambie");
  return <small>{value}</small>;
});
