"use client";
import { useEffect, useState } from "react";

const DCRT = () => {
  const [state, setState] = useState({
    data: [],
    loading: true,
    error: false,
  });

  if (state.loading) {
    return <div>Loading...</div>;
  }

  if (state.error) {
    return <div>Error</div>;
  }

  return (
    <div>
      <h1>DCRT</h1>
      <p>Best block height:</p>
    </div>
  );
};

export default DCRT;
