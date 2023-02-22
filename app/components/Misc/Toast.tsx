"use client";
import React, { useState } from "react";
import { useTimeout } from "usehooks-ts";
import cn from "lib/cn";

function ShowToast({
  message,
  onClose,
  className = " alert-info ",
  time = 2000,
}: {
  message: string;
  onClose: () => void;
  className?: string;
  time?: number;
}) {
  const [isAdded, setIsAdded] = useState(true);
  const delay = time;

  useTimeout(() => (setIsAdded(false), onClose()), isAdded ? delay : null);

  return (
    <>
      {isAdded && (
        <div className="toast-end toast z-50">
          <div className={cn("alert shadow-xl", className)}>
            <div>
              <span>{message}</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ShowToast;
