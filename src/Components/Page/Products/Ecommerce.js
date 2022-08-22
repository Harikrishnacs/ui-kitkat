import "./ecommerce.css";
// import "./All.css";
const Ecommerce = () => {
  return (
    <section className="ecommerce-section">
      <div className="ecom_banner">
        <h1>Ecommerce</h1>
      </div>
      <section className="ecom">
        <div className="ecom_img">
          <img
            src="https://res.cloudinary.com/denokpulg/image/upload/v1660199944/ecom_foynmz.png"
            alt="no img"
          />
          <img
            src="https://res.cloudinary.com/denokpulg/image/upload/v1660200493/ecom1_wrdx51.jpg"
            alt="no img"
            className="noimg"
          />
        </div>
        <div className="ecom_details">
          <h1>E-commerce</h1>
          <p>
            E-commerce is the process of buying and selling merchandise via
            electronic means, such as the Internet, mobile applications, and
            other online platforms. It refers to both e-retail and electronic
            transactions. While most people think of e-commerce as
            business-to-consumer (B2C), there are a number of other types of
            e-commerce.
          </p>
          <p>
            Business to Consumer (B2C) – Business to consumer (B2C) is a
            transaction between a business and an end-user or consumer. This
            includes selling directly to consumers via catalogs, website sales,
            or selling directly in brick and mortar stores. It also includes
            purchasing products from a website that is not someone’s personal
            page or blog, but an actual store. Most people who think about
            eCommerce think primarily about B2C transactions because these are
            the ones that are publicized most often. However, this is only one
            type of eCommerce.
          </p>
          <p>
            Business to Business (B2B) – Businesses buy from other businesses
            all the time. Often they purchase supplies or services that they
            need in order to run their own business or sell their products or
            services. Purchasing computers for employees or office supplies,
            using a marketing agency, hiring a fulfillment service like
            Fulfillment by Amazon – are all examples of business to business
            transactions
          </p>
          <img
            src="https://res.cloudinary.com/denokpulg/image/upload/v1660200493/ecom1_wrdx51.jpg"
            width="100%"
            height="50%"
            className="img1"
          ></img>
        </div>
      </section>
      <div className="ecom_list">
        <strong>Electronic Commerce Solutions Key Modules</strong>
        <ul>
          <li>Customer on-boarding</li>
          <li>Funding and withdrawal</li>
          <li>Payments and money transfers</li>
          <li>Wallet management</li>
          <li>Agency management</li>
          <li>Merchant management</li>
          <li>Fees and commission management</li>
          <li>Transaction management</li>
          <li>General Ledger (GL)</li>
          <li>Reporting</li>
          <li>Administration</li>
          <li>Host integration layer</li>
          <li>Security</li>
        </ul>
      </div>
    </section>
  );
};

export default Ecommerce;
