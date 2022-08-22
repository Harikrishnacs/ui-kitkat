import "./Pos.css";
// import "./All.css";
const Pos = () => {
  return (
    <section className="ecommerce-section">
      <div className="ecom_banner">
        <h1>Point On Sale</h1>
      </div>
      <div className="pos_lists">
        <div className="pos_cont">
          <br />
          <div className="pos_p">
            <h1 className="pos_title">
              POS (Point On Sale) on Billing Software
            </h1>
            <p className="cont_para_style">
              A point of sale system is a combination of software and hardware
              that allows merchants to take transactions and simplify key
              day-to-day business operations <br />
              Shoppers today look forward to a greater exit experience as much
              as the in-store experience. Unmatched billing speed aided with
              integration to all POS accessories. <br />
              Operate your business on cloud without installing a Point of sale
              software, keep your business market ready, have critical business
              reports delivered to you 24x7 with web based POS.{" "}
            </p>
            <div className="img_prod">
              <img
                src="https://www.kitkatsoftwaretechnologies.com/images/pos1.png"
                width="100%"
                height="100%"
              />
            </div>
            <p className="cont_para_style">
              Now travelers need less hand-holding and more knowledge with
              higher service levels. This means business models are changing in
              every link of the travel service chain and the travel technologies
              that sufficed twenty – or even ten – years ago simply won’t do the
              job anymore.
            </p>
            <p className="cont_para_style">
              Just Billing Free Retail POS is a simple, yet comprehensive
              billing point of sale software that automates your business. This
              intuitive Retail POS app makes purchasing, inventory, payments,
              expenses and customer management easy, alongside billing and
              invoicing.
            </p>
            <div className="img_prod">
              <img
                src="https://www.kitkatsoftwaretechnologies.com/images/pos3.jpg"
                width="100%"
                height="100%"
              />
            </div>
            <h2 className="title2">Needs of POS Billing</h2>
            <ul style={{ fontSize: "18px", lineHeight: "24px" }}>
              <li>
                Peak hour sales, festival season crowd needs no extra hands
                &amp; efforts. Mobile app SellSmart, can help you bill on the
                move.
              </li>
              <li>
                {" "}
                Take payments with ease - cash, card, coupon, gift voucher,
                part-cash, part-card payment &amp; more. Card swipe integration
                to bill faster.
              </li>
              <li>
                {" "}
                Design and print barcode labels. Print purchase price in barcode
                as alphanumeric. Issue quotation, proforma, follow-up &amp; do
                more sales .
              </li>
              <li>
                {" "}
                Exchange old for new, different prices for same item,
                customizable tax options i.e. TAX on MRP/Selling rate -
                predefine them or manage from bill screen also.
              </li>
              <li>
                Dayone- bill instantly from the day installation is complete.
                Billing will not stop even when main computer is down,
                uninterrupted 'Offline billing' provides peace of mind.
              </li>
              <li>
                Complete customer history in click of a button. Surprise
                customers with instant free offers, item discounts with
                shortcuts keys in the billing screen itself .
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pos;
