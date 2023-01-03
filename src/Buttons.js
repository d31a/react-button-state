// The useState hook is imported to retain data between renders, and to update the variable.
import { useState } from "react";

export default function Buttons() {
  // Create and store button value using hooks
  const [btn, btnValue] = useState(null);

  // Handling the click event so that the target button when clicked takes the value
  const handleClick = (e) => {
    const getSameValue = e.currentTarget.value;
    btnValue(getSameValue);
    console.log("Current button:", getSameValue, "Previous button:", btn);
  };

  // Add a value attrbute to the buttons

  return (
    <div>
      <h1>Button State App</h1>
      <p>
        Click the buttons to console.log the current button value and the
        previous button value.
      </p>
      <div>
        <button value="1" onClick={handleClick}>
          1
        </button>
        <button value="2" onClick={handleClick}>
          2
        </button>
        <button value="3" onClick={handleClick}>
          3
        </button>
      </div>
    </div>
  );
}
