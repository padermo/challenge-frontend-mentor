"use client";

import "@/styles/mortgage.css";
import Image from "next/image";
import Button from "@/components/Button";
import Input from "@/components/Input";
import icon from "@/assets/mortgage/icon-calculator.svg";
import illustration from "@/assets/mortgage/illustration-empty.svg";

export default function MortgageView() {
  return (
    <div className="mortgage flex">
      <div className="mortgage_content bg-red-200 flex-1">
        <header className="flex items-center justify-between py-3">
          <h1>Mortgage Calculator</h1>
          <Button
            title="Clear All"
            onClick={() => { }}
            className="mortgage_clear"
          />
        </header>
        <form>
          <div>
            <label htmlFor="amount">Mortgage Amount</label>
            <Input
              id="amount"
              value=""
              name=""
              onChange={() => { }}
              className="mortgage_input mortgage_input-reverse"
            >
              <Input.Decoration
                decoration="&euro;"
                className="mortgage_input-decoration"
              />
            </Input>
          </div>
          <div className="flex gap-2">
            <div className="flex-1">
              <label htmlFor="term">Mortgage Term</label>
              <Input
                id="term"
                value=""
                name=""
                onChange={() => { }}
                className="mortgage_input"
              >
                <Input.Decoration
                  decoration="years"
                  className="mortgage_input-decoration"
                />
              </Input>
            </div>
            <div className="flex-1">
              <label htmlFor="rate">Interest Rate</label>
              <Input
                id="rate"
                value=""
                name=""
                onChange={() => { }}
                className="mortgage_input"
              >
                <Input.Decoration
                  decoration="%"
                  className="mortgage_input-decoration"
                />
              </Input>
            </div>
          </div>
        </form>
      </div>
      <div className="mortgage_content mortgage_content-right bg-blue-200 flex-1">
        <Image src={illustration} alt="illustration" width={100} height={100} />
        <div>
          <h2>Results shown here</h2>
          <p>
            Complete the form and click &quot;calculate repayments&quot; to see
            what your monthly repayments would be.
          </p>
        </div>
      </div>
    </div>
  );
}
