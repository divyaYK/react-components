import { customAlphabet } from "nanoid";
import { useState } from "react";

const nanoid = customAlphabet("sljfksj123456", 10);

export const useUniqueId = () => {
  const [uniqueId] = useState(nanoid());
  return uniqueId;
};
