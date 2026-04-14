import BondisDisplay from "./BondisDisplay"
import BondiInput from "./BondisInput"
import { useState } from "react";

const BondiApp = () => {
    const [bondiArr, setBondiArr] = useState<number[]>([]);

  return (
    <>
      <BondiInput onSubmit={setBondiArr} />
      <BondisDisplay list={bondiArr} />
    </>
  );
}

export default BondiApp