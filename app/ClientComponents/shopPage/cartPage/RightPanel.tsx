import React, { useState } from "react";
import ShowToast from "@/app/ClientComponents/Toast";

const RightPanel = ({
  totalPrice,
  getDiscount,
}: {
  totalPrice: number;
  getDiscount: number;
}) => {
  const [toastVisible, setToastVisible] = useState(false);

  return (
    <div>
      <div className="form-control ">
        <label className="label">
          <span className="label-text">ENTER PROMO CODE</span>
        </label>
        <label className="input-group">
          <input
            type="text"
            placeholder="Promo"
            className="input-bordered input rounded-none "
          />
          <button className=" btn rounded-none font-medium text-base-100">
            SUBMIT
          </button>
        </label>
        <div className=" mt-12">
          <span className="flex ">
            <span className="text-start">Shipping Cost</span>
            <span className="ml-auto items-end text-end">
              {totalPrice < 99 ? "TBD" : "Free"}
            </span>
          </span>

          <span className="flex ">
            <span className="text-start">Tax</span>
            <span className="ml-auto items-end text-end">TBD</span>
          </span>
          <span className="flex ">
            <span className="text-start">Total Savings</span>
            <span className=" relative ml-auto items-end text-end font-bold text-error">
              <span className="label-text-alt">PLN</span>{" "}
              {getDiscount.toFixed(2)}
            </span>
          </span>
          <span className="flex text-lg font-semibold ">
            <span className="text-start">Estimated Total</span>
            <span className="ml-auto items-end text-end">
              <span className="label-text-alt">PLN</span>{" "}
              {totalPrice.toFixed(2)}
            </span>
          </span>
        </div>
        {totalPrice < 99 ? (
          <p className="font-medium">
            You're{" "}
            <span className="text-error">${(99 - totalPrice).toFixed(2)}</span>{" "}
            away from free shipping!
          </p>
        ) : (
          <p className="font-medium">
            You've secured <span className="text-error">free shipping!</span>
          </p>
        )}

        <button
          onClick={() => {
            setToastVisible(true);
          }}
          className="btn-secondary btn-block btn-lg btn mx-auto"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-6 w-6"
          >
            <path
              fillRule="evenodd"
              d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z"
              clipRule="evenodd"
            />
          </svg>
          CHECKOUT
        </button>
      </div>

      {toastVisible && (
        <ShowToast
          onClose={() => setToastVisible(false)}
          message="The following functionality is still under construction."
          className="alert-error"
        />
      )}
    </div>
  );
};

export default RightPanel;
