import { ChangeEvent, useState } from "react";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import "./style.css";

function Consultation04() {
  // 1st step
  const [invoiceAmount, setInvoiceAmount] = useState<string>();
  const [showInvoiceAmount, setShowInvoiceAmount] = useState<boolean>(false);

  // 2nd step
  const onChangeAmount = (event: ChangeEvent<HTMLInputElement>) => {
    setInvoiceAmount(event.target.value);
  };
  const showInvoiceAmountHandler = () => {
    setShowInvoiceAmount(!showInvoiceAmount);
  };

  // console.log(showInvoiceAmount);

  return (
    <div className="full-price-container">
      <Input
        name="invoice-amount"
        onChange={onChangeAmount}
        value={invoiceAmount}
      />
      <Button name="SHOW FULL PRICE" onClick={showInvoiceAmountHandler} />
      {showInvoiceAmount && <div>{invoiceAmount}</div>}
    </div>
  );
}

export default Consultation04;
