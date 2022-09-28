import { useRouter } from "next/router";
import React from "react";

function Test() {
  const { query } = useRouter();
  return <div>Test {query.id}</div>;
}

export default Test;
