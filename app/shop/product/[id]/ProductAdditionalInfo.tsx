import React from "react";

const ProductAdditionalInfo = () => {
  return (
    <div className="  mx-auto  ">
      <div className="card prose ml-auto mb-28  flex max-w-screen-xl flex-col  justify-end  rounded-none    prose-h3:text-center prose-h3:font-exo prose-h3:text-2xl sm:flex-row ">
        <div className="collapse ">
          <input type="checkbox" />
          <div className="collapse-title font-medium">
            <h3>Shipping Information</h3>
          </div>
          <div className="collapse-content  font-maven  ">
            <p>
              We offer{" "}
              <span className="font-bold text-success">free shipping</span> on
              all orders{" "}
              <span className="font-bold">
                within the continental European Union
              </span>
              . Orders typically ship{" "}
              <span className="font-bold">within 2-3 business days</span> and
              will be delivered{" "}
              <span className="font-bold">within 5-7 business days</span>. For
              international orders, shipping rates and delivery times may vary.
              Please note that{" "}
              <span className="font-bold text-error">
                customs fees may apply
              </span>{" "}
              and are the responsibility of the customer.
            </p>
          </div>
        </div>
        <div className="collapse">
          <input type="checkbox" />
          <div className="collapse-title font-medium">
            <h3>Returns Policy</h3>
          </div>
          <div className="collapse-content font-maven ">
            <p>
              We want you to be{" "}
              <span className="font-medium">completely satisfied</span> with
              your purchase. If for any reason you are not, we accept{" "}
              <span className="font-medium">returns within 30 days</span> of
              delivery. Returned items must be in their{" "}
              <span className="font-medium">
                original condition and packaging
              </span>
              , with all{" "}
              <span className="font-medium">tags and labels attached</span>. To
              initiate a return, please{" "}
              <span className="font-medium">
                contact our customer service team
              </span>
              . Refunds will be issued to the original payment method,{" "}
              <span className="font-medium">minus any shipping fees</span>.
            </p>
          </div>
        </div>
        <div className="collapse">
          <input type="checkbox" />
          <div className="collapse-title  ">
            <h3>Customer Service</h3>
          </div>
          <div className="collapse-content font-maven ">
            <p>
              <span className="font-medium">We're here to help!</span> If you
              have any questions about our{" "}
              <span className="font-medium">products</span>,
              <span className="font-medium">shipping</span>,{" "}
              <span className="font-medium">returns</span>, or{" "}
              <span className="font-medium">anything else</span>, please don't
              hesitate to
              <span className="font-medium">contact us</span>. You can reach our{" "}
              <span className="font-medium">customer service team</span> via{" "}
              <span className="font-medium">email</span> or
              <span className="font-medium">phone</span>, and we'll do our best
              to assist you as quickly as possible.
              <span className="font-medium">We value your feedback</span> and
              strive to provide the{" "}
              <span className="font-medium">
                best possible customer experience
              </span>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductAdditionalInfo;
