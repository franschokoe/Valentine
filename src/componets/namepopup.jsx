import { useState } from "react";

export default function NamePopup() {
  const [open, setOpen] = useState(true);
  const [name, setName] = useState("");

  const submit = () => {
    if (!name.trim()) return;
    console.log("Name:", name);
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div className="overlay">
      <div className="modal">
        <h2>Your name</h2>

        <input
          autoFocus
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />

        <button onClick={submit}>Continue</button>
      </div>
    </div>
  );
}
