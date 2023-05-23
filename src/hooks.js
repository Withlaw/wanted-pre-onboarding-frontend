import { useCallback, useState } from "react";

export function useInput(initialState) {
  const [value, setValue] = useState(initialState);
  const onChange = useCallback(
    e => {
      setValue({
        ...value,
        [e.target.name]: e.target.value,
      });
    },
    [value]
  );
  return { value, onChange };
}
