import { customAlphabet } from "nanoid";
import { useState } from "react";

const nanoid = customAlphabet("sljfksj123456", 10);

/**
 * A reusable hook that returns a random ID.
 * @memberof Hooks
 * @exports useUniqueId
 */
export const useUniqueId = () => {
  const [uniqueId] = useState(nanoid());
  return uniqueId;
};
