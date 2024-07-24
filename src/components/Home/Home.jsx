import { Link } from "react-router-dom";
import css from "./Home.module.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export const Home = () => {
  return (
    <div className={css.container}>
      <div className={css.imageWrapper}>
        <LazyLoadImage
          className={css.bgPhoto}
          src="/bgphoto.png"
          alt="Car"
          width="1400"
          height="800"
          effect="blur"
        />
      </div>
      <div className={css.content}>
        <div className={css.section}>
          <h3 className={css.sectionTitle}>Why Choose Us?</h3>
          <ul className={css.list}>
            <li className={css.listItem}>
              <img
                className={css.svgIcons}
                src="/car.svg"
                alt="Vehicle"
                width="40"
                height="40"
              />
              <h4 className={css.itemTitle}>Wide Selection of Vehicles</h4>
              <p className={css.itemDescription}>
                From compact cars to luxury sedans and spacious SUVs, we have a
                vehicle for every occasion.
              </p>
            </li>
            <li className={css.listItem}>
              <img
                className={css.svgIcons}
                src="/coins.svg"
                alt="Rates"
                width="40"
                height="40"
              />
              <h4 className={css.itemTitle}>Affordable Rates</h4>
              <p className={css.itemDescription}>
                We offer competitive pricing with no hidden fees, ensuring you
                get the best value for your money.
              </p>
            </li>
            <li className={css.listItem}>
              <img
                className={css.svgIcons}
                src="/locations.svg"
                alt="Locations"
                width="40"
                height="40"
              />
              <h4 className={css.itemTitle}>Convenient Locations</h4>
              <p className={css.itemDescription}>
                With multiple rental locations across Ukraine, you can pick up
                and drop off your car at your convenience.
              </p>
            </li>
            <li className={css.listItem}>
              <img
                className={css.svgIcons}
                src="/service.svg"
                alt="Service"
                width="40"
                height="40"
              />
              <h4 className={css.itemTitle}>Excellent Customer Service</h4>
              <p className={css.itemDescription}>
                Our friendly and professional staff are here to assist you 24/7,
                ensuring a hassle-free rental process.
              </p>
            </li>
            <li className={css.listItem}>
              <img
                className={css.svgIcons}
                src="/plan.svg"
                alt="Plans"
                width="40"
                height="40"
              />
              <h4 className={css.itemTitle}>Flexible Rental Plans</h4>
              <p className={css.itemDescription}>
                Whether you need a car for a day, a week, or a month, we offer
                flexible rental periods to suit your schedule.
              </p>
            </li>
            <li className={css.listItem}>
              <img
                className={css.svgIcons}
                src="/update.svg"
                alt="Fleet"
                width="40"
                height="40"
              />
              <h4 className={css.itemTitle}>Modern Fleet</h4>
              <p className={css.itemDescription}>
                Our vehicles are regularly updated to ensure you have access to
                the latest models with the newest technology, providing an
                enjoyable driving experience.
              </p>
            </li>
          </ul>
        </div>
        <div className={css.section}>
          <h3 className={css.sectionTitle}>Explore Ukraine with Confidence</h3>
          <div className={css.imgDiv}>
            <img
              className={css.svgIcons}
              src="/mountains.svg"
              alt=""
              width="100"
              height="100"
            />
            <img
              className={css.svgIcons}
              src="/city.svg"
              alt=""
              width="100"
              height="100"
            />
          </div>
          <p className={css.itemDescription}>
            You can explore the beautiful landscapes and vibrant cities of
            Ukraine with confidence and ease. Our vehicles are regularly
            serviced for your peace of mind.
          </p>
        </div>
        <div className={css.section}>
          <h3 className={css.sectionTitle}>Book Your Car Today</h3>
          <p className={css.itemDescription}>
            Start your journey with us today. Browse our{" "}
            <Link className={css.link} to="/catalog">
              selection
            </Link>{" "}
            of vehicles, choose the perfect car for your trip, and enjoy the
            freedom of the open road with CarRental.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Home;
