"use client";
import React, { useState } from "react";
import { useInterval } from "usehooks-ts";

const Notification = ({
  color = "normal",
  message,
  state,
}: {
  color?: string;
  message: string;
  state: boolean;
}) => {
  const colorVariants: { [key: string]: string } = {
    normal: "alert shadow-lg",
    success: "alert alert-success shadow-lg",
    warning: "alert alert-warning shadow-lg",
    error: "alert alert-error shadow-lg",
    info: "alert alert-info shadow-lg",
  };
  const [isAdded, setIsAdded] = useState(state);

  useInterval(() => setIsAdded(false), isAdded ? 4000 : null);

  return (
    <>
      <div className="toast-end toast z-50">
        <div className={`${colorVariants[color]} .`}>
          <div>
            <span>{message}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Notification;
