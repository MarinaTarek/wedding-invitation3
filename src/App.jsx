import { useState } from "react";

import Splash from "./components/Splash";
import SaveDate from "./components/SaveDate";
import Invitation from "./components/Invitation";
import Petals from "./components/Petals";

function App() {

  const [step, setStep] = useState(0);

  return (
    <>

      {/* Falling Flowers */}
      <Petals />

      {step === 0 && (
        <Splash onFinish={() => setStep(1)} />
      )}

      {step === 1 && (
        <SaveDate onOpen={() => setStep(2)} />
      )}

      {step === 2 && (
        <Invitation />
      )}

    </>
  );
}

export default App;