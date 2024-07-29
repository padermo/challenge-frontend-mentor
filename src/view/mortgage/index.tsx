"use client";

import "@/styles/mortgage.css";
import Button from "@/components/Button";
import icon from "@/assets/mortgage/icon-calculator.svg";

export default function MortgageView() {
  return (
    <Button
      title="Calculate Repayment"
      className="mortgage-btn"
      onClick={() => { }}
    >
      <Button.Icon icon={icon} />
    </Button>
  );
}
