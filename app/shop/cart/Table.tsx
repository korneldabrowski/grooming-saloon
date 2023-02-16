"use client";
import React from "react";
import { Product } from "@/app/(redux)/productListSlice";
import TableItem from "./TableItem";

const Table = ({ product }: { product: Product[] }) => {
  return (
    <div className="mx-auto flex justify-center overflow-x-auto">
      <table className="table  ">
        {/* <!-- head --> */}
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
            <th>Price</th>

            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* <!-- row 1 --> */}
          {product.map((x) => (
            <TableItem key={x._id} product={x} />
          ))}
        </tbody>

        {/* <!-- foot --> */}
        <tfoot>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
            <th>Price</th>
            <th></th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default Table;
