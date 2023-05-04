import { useState } from "react";

export function useToggle(initialState: boolean = false): [boolean, any] {
  const [active, setActive] = useState(initialState);

  const toggle = () => setActive((active) => !active);

  return [active, toggle];
}
