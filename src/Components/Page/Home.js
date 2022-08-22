import { useEffect, useState } from "react";
import { SliderData } from "../SliderData";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const Home = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    setTimeout(goToNext, 2000);
    console.log(current);
  }, [current]);

  const goToPrevious = () => {
    const isFirstSlide = current === 0; // first
    const newIndex = isFirstSlide ? SliderData.length - 1 : current - 1;
    setCurrent(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = current === SliderData.length - 1;
    const newIndex = isLastSlide ? 0 : current + 1;
    setCurrent(newIndex);
  };
  const goToSlide = (index) => {
    setCurrent(index);
  };
  return (
    <section className="home">
      <section className="slider">
        <FaArrowAltCircleLeft className="leftArrow" onClick={goToPrevious} />
        <FaArrowAltCircleRight className="rightArrow" onClick={goToNext} />
        <div className="bg_white">
          {
            <div className="Container_banner">
              <div className="col-lg-4">
                <div class="main-banner-content  ">
                  <div className="content">
                    <span>{SliderData[current].span}</span>
                    <h1>{SliderData[current].h1}</h1>
                    <p>{SliderData[current].p}</p>
                    <div class="banner-btn">
                      <a class="default-btn" href="/contact/">
                        Get Started
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="Slider_img">
                  <img className="img" src={SliderData[current].img} alt="" />
                </div>
              </div>
            </div>
          }
          <div className="banner_img">
            <img className="slideStyle" src={SliderData[current].banner_img} />
          </div>

          <div className="dotContainer">
            {SliderData.map((slide, index) => (
              <div
                key={index}
                className="dotStyle"
                onClick={() => goToSlide(index)}
              >
                <li></li>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="feature__section">
        <div className="feature__container">
          <div className="feature__content">
            <h1>Creative Feature</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non velit
              culpa consequuntur consectetur autem at voluptas laborum magnam
              esse, molestiae sunt architecto, dolorem quasi itaque accusamus ex
              id nobis eligendi.
            </p>
            <div className="bar1"></div>
          </div>

          <div className="feature__row">
            <div className="feature__item">
              <i class="fa-solid fa-laptop-code icon"></i>
              <h3>Great Design</h3>
              <p>
                Engage with our professionals for output of your innovative
                ideas with latest technologies and get support of us.
              </p>
            </div>
            <div className="feature__item">
              <i class="fa-solid fa-screwdriver-wrench icon"></i>
              <h3>Optimal choice</h3>
              <p>
                Plan with our expertise with your needs and Engage with them on
                further development with every possibilities of
                development.Extend your needs with possibilities.
              </p>
            </div>
            <div className="feature__item">
              <i class="fa-solid fa-shield-halved icon"></i>
              <h3>Finest Quality</h3>
              <p>
                Our developers are experienced enough to give result what you
                expect.They make your needs reality and user friendly with
                latest born programming tools.
              </p>
            </div>
            <div className="feature__item">
              <i class="fa-regular fa-calendar-check icon"></i>
              <h3>Time saving</h3>
              <p>
                Our developers develop accordingly , which is accessible throung
                smart phone , laptop , tabulate ect with high user experience
                which every user wishes to have
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="Container1">
        <div className="row-resource1">
          <div className="hr-content">
            <h2>PEOPLE</h2>
            <span>eHorizon-HRMS(Human Resource Management System)</span>
            <h1>Human Resource and Payroll</h1>
            <div className="line1"></div>
            <p>
              Manage your employee’s lifecycle, effectively. No matter the size,
              industry or location of your organization, we can help manage your
              employee’s life cycle on cloud with our intuitive software
              solution.
            </p>
            <button>Learn More</button>
          </div>
          <div className="hr-img">
            <img
              src="https://www.stl-horizon.com/wp-content/uploads/2019/06/human-768x606.png"
              alt=""
            />
          </div>
        </div>
        <div className="row-resource2">
          <div className="hr-img">
            <img
              src="https://www.stl-horizon.com/wp-content/uploads/2019/07/Home-Contract-managment.png"
              alt=""
            />
          </div>
          <div className="hr-content">
            <h2>PROCESSES</h2>
            <span>Contract Lifecycle Management</span>
            <h1>Contract Lifecycle Management</h1>
            <div className="line2"></div>
            <p>
              Managing your contracts’ Lifecycle With our cohesive
              contract-management software, we simplify the complex day-to-day
              process of contracts; saving you cost and time.
            </p>
            <button>Learn More</button>
          </div>
        </div>
        <div className="row-resource3">
          <div className="hr-content">
            <h2>GOVERNANCE</h2>
            <span>e-Horizon </span>
            <h1>For Governance</h1>
            <div className="line3"></div>
            <p>
              Making right & quicker decisions. With eHorizon eBoard, you can
              run your board and get more done from anywhere.
            </p>
            <button>Learn More</button>
          </div>
          <div className="hr-img">
            <img
              src="https://www.stl-horizon.com/wp-content/uploads/2019/06/gov.png"
              alt=""
            />
          </div>
        </div>
      </section>
      <section class="customer-section ">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6">
              <div class="customer-content">
                <h3>20k Customer Use App now</h3>
                <div class="bar"></div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis. Lorem Ipsum is simply
                  dummy text of the printing and typesetting industry. Lorem
                  Ipsum has been the industry's standard dummy text ever since
                  the 1500s, when an unknown printer took a galley
                </p>
                <div class="customer-btn">
                  <a
                    href="https://www.apple.com/app-store/"
                    class="default-btn"
                    target="_blank"
                  >
                    App Store
                  </a>
                  <a
                    href="https://play.google.com/store"
                    class="optional-btn"
                    target="_blank"
                  >
                    Play Store
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-6 ">
              <div class="customer-image">
                <img
                  src="https://luzon-react.envytheme.com/images/customer.png"
                  alt="image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="service">
        <div className="service__container">
          <div className="section__content">
            <h2>IT Agency Services</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              dolorem alias veniam accusamus praesentium numquam eius blanditiis
              quaerat voluptatem, dicta fuga dolor eos libero rem! Harum minus
              quae porro sed.
            </p>
          </div>
          <div className="section__row">
            <div className="row__item">
              <div className="row__icon">
                <div className="icon__shape1">
                  <i class="fa-solid fa-laptop web__icon"></i>
                </div>
              </div>
              <h3>Web Development</h3>
              <p>
                Websites are the most important channels for presenting your
                product and services and most significant part of business.
              </p>

              <Link to="/service">Read more</Link>
            </div>

            <div className="row__item">
              <div className="row__icon">
                <div className="icon__shape2">
                  <i class="fa-solid fa-mobile-screen-button web__icon"></i>
                </div>
              </div>
              <h3>App Development</h3>
              <p>
                Want to develop your digital or enterprise assistants on mobile?
                Emerging of smart phones users demanding the mobile apps.
              </p>

              <Link to="/service">Read more</Link>
            </div>
            <div className="row__item">
              <div className="row__icon">
                <div className="icon__shape3">
                  <i class="fa-solid fa-bullhorn web__icon"></i>
                </div>
              </div>
              <h3>Digital Marketing</h3>
              <p>
                Want to promote your product or services on digital platform?
                Our knowledges on SEO, SMO, PPC helps you to develop business.
              </p>

              <Link to="/service">Read more</Link>
            </div>
            <div className="row__item">
              <div className="row__icon">
                <div className="icon__shape4">
                  <i class="fa-solid fa-square-poll-vertical web__icon"></i>
                </div>
              </div>
              <h3>CRM Development</h3>
              <p>
                CRM software deploys technology to organize, automate, and
                synchronize sales, marketing, customer service, and technical
                support plus manage customers, records, and their surveys.
              </p>

              <Link to="/service">Read more</Link>
            </div>
            <div className="row__item">
              <div className="row__icon">
                <div className="icon__shape5">
                  <i class="fa-solid fa-user web__icon"></i>
                </div>
              </div>
              <h3>HRM Development</h3>
              <p>
                HRM offers you wide solutions for HR department making it
                possible for other department to access specific employee data
              </p>

              <Link to="/service">Read more</Link>
            </div>
            <div className="row__item">
              <div className="row__icon">
                <div className="icon__shape6">
                  <i class="fa-solid fa-gears web__icon"></i>
                </div>
              </div>
              <h3>ERP Development</h3>
              <p>
                Enterprise Resource Planning (ERP) is business management
                software that integrates all the data on business processes and
                resources.
              </p>

              <Link to="/service">Read more</Link>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};
export default Home;
