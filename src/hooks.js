import { useCallback, useState } from "react";

export function useInput(initialState) {
  const [value, setValue] = useState(initialState);
  const onChange = useCallback(
    action => {
      setValue({
        ...value,
        [action.name]: action.value,
      });
    },
    [value]
  );
  return { value, onChange };
}
