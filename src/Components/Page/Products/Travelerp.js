import "./travelerp.css";
// import "./All.css";
const Travelerp = () => {
  return (
    <section className="travel-section">
      <div className="travel-banner">
        <h1></h1>
      </div>
      <div class="travel_lists">
        <div class="travel_cont">
          <br />
          <div class="travel_p">
            <h1 class="travel_title">
              Travel ERP (Enterprise Resource Planning)
            </h1>
            <p class="cont_para_style">
              To the public eye travel is a straightforward concept focused on
              destinations, activities, tickets and itineraries. For those who
              work in the travel industry it’s always been a complicated set of
              interrelationships between retailers, wholesalers and service
              providers – made, if anything, even more challenging by the global
              reach of the Internet.{" "}
            </p>
            <p class="cont_para_style">
              Two of the more visible ways the Internet has changed the travel
              are:
              <br />
              1) raised customer expectations for a unique and amazing travel
              experience; <br />
              2) price transparency – customers can book much of their travel
              directly online, or have travel plans in mind and quotes in hand
              before the first conversation with atravel agent.{" "}
            </p>
            <div class="travel-img">
              <img
                src="https://www.kitkatsoftwaretechnologies.com/images/travel.png"
                width="100%"
                height="100%"
              />
            </div>
            <p class="cont_para_style">
              Another way the Internet has change travel is far less visible but
              much more profound: it has dramatically altered the way travelers
              see their role and the role played by travel agencies and travel
              management companies. Twenty years ago a travel business –
              particularly for international travel – had a much more of a
              guardian role than would ever be imagined today.
            </p>
            <p class="cont_para_style">
              Now travelers need less hand-holding and more knowledge with
              higher service levels. This means business models are changing in
              every link of the travel service chain and the travel technologies
              that sufficed twenty – or even ten – years ago simply won’t do the
              job anymore./p&gt;
            </p>
            <p class="cont_para_style">
              An enterprise resource planning (ERP) system addresses the issues
              of a distributed architecture by providing a travel business with
              an integrated suite of applications for front office, mid-office
              and back office business processes. The ERP suite has the ability
              to eliminate silos of isolated data and business activities with a
              common data model and standardized processes across key functions
              for: accounting, payroll; HR; supply chain, CRM &amp; procurement.
              As shown in this graphic, the suite of travel-specific
              applications is designed to work smoothly and interchangeably with
              each other.
            </p>
            <div class="travel-img">
              <img
                src="https://www.kitkatsoftwaretechnologies.com/images/travel_erp.png"
                width="100%"
                height="100%"
              />
            </div>
            <h2 class="title2">Advantages Of Travel ERP Software</h2>
            <ul style={{ fontSize: "18px", lineHeight: "24px" }}>
              <li>
                <b>Easy Configuration:</b> Growth is typically associated with
                new business models driven by new and innovative products and
                services. Legacy ERP systems are generally good operational
                foundations, but difficult to change in support of new ways of
                doing business. New ERP software is designed from the ground up
                to deliver flexibility and adaptability, both of which lead to
                easy configuration in support of new business processes.
              </li>
              <li>
                <b>Extensibility:</b> Unlike legacy ERP, recent systems are
                designed to have their capabilities easily extended through
                other technologies. There are two important use cases for this
                capability.
              </li>
              <li>
                <b>Real-time Business Visibility:</b> Existing ERP typically
                features “vampire reports” – running business transactions
                during the day and only generating reports at night. This
                working cycle is not competitive in today’s travel technology.
                New systems are capable of real-time data updates, providing the
                capability to data mine and supply reports when needed – via
                highly intuitive reporting and analytic features. Without this
                ability to react quickly to market conditions and customer
                behaviors a travel business cannot be competitive.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Travelerp;
