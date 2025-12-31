import { useState } from "react";
import "./App.css";

export default function App() {
  const [step, setStep] = useState("popup");

  return (
    <div className="app">
      {step === "popup" && (
        <div className="popup">
          <div className="popup-box">
            <h2>🎆 New Year Agent Offer 🎆</h2>
            <p>Join both Telegram channels</p>

            <a href="https://t.me/scpro08" target="_blank">Join Channel 1</a>
            <a href="https://t.me/agentslootonly" target="_blank">Join Channel 2</a>

            <button onClick={() => setStep("form")}>
              I Joined
            </button>
          </div>
        </div>
      )}

      {step === "form" && (
        <div className="form-box">
          <h2>Agent Form</h2>
          <h3>📱 Mobile Exclusive</h3>

          <form onSubmit={() => setStep("success")}>
            <input type="text" placeholder="Telegram ID" required />
            <input type="file" accept="image/*" required />
            <input type="file" accept="image/*" required />

            <button type="submit">Submit</button>
          </form>
        </div>
      )}

      {step === "success" && (
        <div className="success">
          <h2>✅ Form Submitted</h2>
          <p>Agent will message you soon</p>
        </div>
      )}
    </div>
  );
}
