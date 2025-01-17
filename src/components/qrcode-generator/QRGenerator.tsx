import React, { useState } from "react";
import QRCode from "react-qr-code";

const QRGenerator = () => {
  const [input, setInput] = useState("");
  const [qrCode, setQrCode] = useState("");

  const handleGenerateQr = () => {
    setQrCode(input);
    setInput("");
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 20,
      }}
    >
      <h1>QR Code Generator</h1>

      <input
        type="text"
        name="qr-code"
        placeholder="Write your value"
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />
      <button onClick={handleGenerateQr}>Generate QR</button>

      <QRCode value={qrCode} id="qr-code-value" />
    </div>
  );
};

export default QRGenerator;
