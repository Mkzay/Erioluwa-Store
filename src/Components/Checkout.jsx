/* eslint-disable react/prop-types */
import { useState } from "react";

const Checkout = ({ onPaymentMethodSelected }) => {
  const [paymentMethod, setPaymentMethod] = useState("");
  const [cardDetails, setCardDetails] = useState({
    cardHolder: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });
  const [saveCard, setSaveCard] = useState(false);

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
    if (e.target.value !== "Card") {
      setCardDetails({
        cardHolder: "",
        cardNumber: "",
        expiryDate: "",
        cvv: "",
      });
    }
  };

  const handleCardDetailsChange = (e) => {
    const { name, value } = e.target;
    setCardDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  const handleSaveCardChange = (e) => {
    setSaveCard(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onPaymentMethodSelected({ paymentMethod, cardDetails, saveCard });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 bg-white rounded-lg shadow-md fixed top-0 pt-[62px] w-full h-full font-cb"
    >
      <button className="mb-[25px]">
        <img src="/back.svg" alt="back" />
      </button>
      <h2 className="text-xl/[24.8px] text-[#00477B] font-semibold mb-4">
        Choose Payment Method
      </h2>
      <div className="mb-4">
        <div className="space-y-2 flex flex-col gap-[17px] ">
          <label className="flex items-center justify-between border border-db rounded-[10px] px-4 py-3 text-[15px]/[18.6px] text-db h-11">
            Credit or Debit Card
            <input
              type="radio"
              name="paymentMethod"
              value="Card"
              checked={paymentMethod === "Card"}
              onChange={handlePaymentMethodChange}
              className="ml-2 "
            />
          </label>
          <label className="flex items-center justify-between  border border-db rounded-[10px] px-4 py-3 text-[15px]/[18.6px] text-db h-11">
            Bank Transfer
            <input
              type="radio"
              name="paymentMethod"
              value="Bank Transfer"
              checked={paymentMethod === "Bank Transfer"}
              onChange={handlePaymentMethodChange}
              className="ml-2"
            />
          </label>
          <label className="flex items-center justify-between border border-db rounded-[10px] px-4 py-3 text-[15px]/[18.6px] text-db h-11">
            USSD
            <input
              type="radio"
              name="paymentMethod"
              value="USSD"
              checked={paymentMethod === "USSD"}
              onChange={handlePaymentMethodChange}
              className="ml-2"
            />
          </label>
        </div>
      </div>
      {paymentMethod === "Card" && (
        <div className="space-y-4 mt-[50px]">
          <div>
            <label className="block text-[15px]/[18.6px] text-db">
              Card Holder
            </label>
            <input
              type="text"
              name="cardHolder"
              value={cardDetails.cardHolder}
              onChange={handleCardDetailsChange}
              className="p-2 border border-[#004679] rounded-[5px] w-full h-[33px]"
            />
          </div>
          <div>
            <label className="block text-[15px]/[18.6px] text-db">
              Card Number
            </label>
            <input
              type="text"
              name="cardNumber"
              value={cardDetails.cardNumber}
              onChange={handleCardDetailsChange}
              className="p-2 border border-[#004679] rounded-[5px] w-full h-[33px]"
            />
          </div>
          <div className="flex gap-5">
            <div>
              <label className="block text-[15px]/[18.6px] text-db">
                Exp. Date
              </label>
              <input
                type="text"
                name="expiryDate"
                value={cardDetails.expiryDate}
                onChange={handleCardDetailsChange}
                className="p-2 border border-[#004679] rounded-[5px] w-full h-[33px]"
              />
            </div>
            <div>
              <label className="block text-[15px]/[18.6px] text-db">CVV</label>
              <input
                type="text"
                name="cvv"
                value={cardDetails.cvv}
                onChange={handleCardDetailsChange}
                className="p-2 border border-[#004679] rounded-[5px] w-full h-[33px]"
              />
            </div>
          </div>
          <div>
            <label className="flex items-center text-[15px]/[18.6px] text-db mt-[25px]">
              <input
                type="checkbox"
                checked={saveCard}
                onChange={handleSaveCardChange}
                className="mr-2 rounded-full border border-db outline-db"
              />
              Save card for future use
            </label>
          </div>
        </div>
      )}
      <div className="flex items-center justify-between gap-5 pb-10 border-t border-db mt-[11px] pt-[30px] text-xl/[24.8px]">
        <button className="rounded-[50px] border border-db text-db bg-white h-12 w-40">
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-[50px] bg-db text-white h-12 w-40"
        >
          Confirm
        </button>
      </div>
    </form>
  );
};

export default Checkout;
