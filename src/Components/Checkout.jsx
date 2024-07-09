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
      className="p-4 bg-white rounded-lg shadow-md fixed top-0 left-0 pt-[70px] font-cb h-full w-full overflow-auto lg:w-[478px] lg:shadow-xl lg:h-[746px] lg:top-20 lg:left-[30rem] lg:rounded-[50px] lg:backdrop-filter lg:backdrop-blur-3xl lg:overflow-y-auto lg:flex items-center flex-col"
    >
      <button className="mb-[25px] lg:hidden">
        <img src="/back.svg" alt="back" />
      </button>
      <h2 className="text-xl/[24.8px] text-black font-semibold mt[25px] mb-[21px]">
        Choose Payment Method
      </h2>
      <div className="mb-4">
        <div className="space-y-2 flex flex-col gap-[17px] ">
          <label className="flex items-center justify-between border border-black rounded-[10px] px-4 py-3 text-[15px]/[18.6px] text-black h-11 lg:w-[333px]">
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
          <label className="flex items-center justify-between  border border-black rounded-[10px] px-4 py-3 text-[15px]/[18.6px] text-black h-11 lg:w-[333px]">
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
          <label className="flex items-center justify-between border border-black rounded-[10px] px-4 py-3 text-[15px]/[18.6px] text-black h-11 lg:w-[333px]">
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
            <label className="block text-[15px]/[18.6px] text-black ">
              Card Holder
            </label>
            <input
              type="text"
              name="cardHolder"
              value={cardDetails.cardHolder}
              onChange={handleCardDetailsChange}
              className="p-2 border border-black rounded-[5px] w-full h-[33px] lg:w-[333px]"
            />
          </div>
          <div>
            <label className="block text-[15px]/[18.6px] text-black">
              Card Number
            </label>
            <input
              type="text"
              name="cardNumber"
              value={cardDetails.cardNumber}
              onChange={handleCardDetailsChange}
              className="p-2 border border-black rounded-[5px] w-full h-[33px] lg:w-[333px]"
            />
          </div>
          <div className="flex gap-5">
            <div>
              <label className="block text-[15px]/[18.6px] text-black">
                Exp. Date
              </label>
              <input
                type="text"
                name="expiryDate"
                value={cardDetails.expiryDate}
                onChange={handleCardDetailsChange}
                className="p-2 border border-black rounded-[5px] w-full h-[33px] lg:w-[157px]"
              />
            </div>
            <div>
              <label className="block text-[15px]/[18.6px] text-black">
                CVV
              </label>
              <input
                type="text"
                name="cvv"
                value={cardDetails.cvv}
                onChange={handleCardDetailsChange}
                className="p-2 border border-black rounded-[5px] w-full h-[33px] lg:w-[157px]"
              />
            </div>
          </div>
          <div>
            <label className="flex items-center text-[15px]/[18.6px] text-black mt-[25px]">
              <input
                type="checkbox"
                checked={saveCard}
                onChange={handleSaveCardChange}
                className="mr-2 rounded-full border border-black outline-black"
              />
              Save card for future use
            </label>
          </div>
        </div>
      )}
      <div className="flex flex-col items-center justify-between gap-5 pb-10 border-t border-black mt-[85px] pt-[30px] text-xl/[24.8px] lg:mt-9">
        <button className="rounded-[50px] text-white bg-black h-12 w-[330px] py-[13px] flex items-center justify-center lg:">
          Confirm Payment
        </button>
        <button
          type="submit"
          className="rounded-[50px] text-black border border-black h-12 w-[330px] py-[13px] flex items-center justify-center"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default Checkout;
