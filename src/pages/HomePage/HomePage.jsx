import css from "./HomePage.module.css";

export const HomePage = () => {
  return (
    <div className={css.container}>
      <img
        src="/car.png"
        alt="Car of Rental Service"
        width="1400"
        height="780"
      />
      <div className={css.content}>
        <div className={css.section}>
          <h3 className={css.sectionTitle}>Why Choose Us?</h3>
          <ul className={css.list}>
            <li className={css.listItem}>
              <h4 className={css.itemTitle}>Wide Selection of Vehicles</h4>
              <p className={css.itemDescription}>
                From compact cars to luxury sedans and spacious SUVs, we have a
                vehicle for every occasion.
              </p>
            </li>
            <li className={css.listItem}>
              <h4 className={css.itemTitle}>Affordable Rates</h4>
              <p className={css.itemDescription}>
                We offer competitive pricing with no hidden fees, ensuring you
                get the best value for your money.
              </p>
            </li>
            <li className={css.listItem}>
              <h4 className={css.itemTitle}>Convenient Locations</h4>
              <p className={css.itemDescription}>
                With multiple rental locations across Ukraine, you can pick up
                and drop off your car at your convenience.
              </p>
            </li>
            <li className={css.listItem}>
              <h4 className={css.itemTitle}>Excellent Customer Service</h4>
              <p className={css.itemDescription}>
                Our friendly and professional staff are here to assist you 24/7,
                ensuring a hassle-free rental process.
              </p>
            </li>
            <li className={css.listItem}>
              <h4 className={css.itemTitle}>Flexible Rental Plans</h4>
              <p className={css.itemDescription}>
                Whether you need a car for a day, a week, or a month, we offer
                flexible rental periods to suit your schedule.
              </p>
            </li>
            <li className={css.listItem}>
              <h4 className={css.itemTitle}>Book Your Car in One Click</h4>
              <p className={css.itemDescription}>
                Quick and easy booking. We will call you back within 2 minutes.
              </p>
            </li>
          </ul>
        </div>
        <div className={css.section}>
          <h3 className={css.sectionTitle}>Explore Ukraine with Confidence</h3>
          <p className={css.itemDescription}>
            You can explore the beautiful landscapes and vibrant cities of
            Ukraine with confidence and ease. Our vehicles are regularly
            serviced for your peace of mind.
          </p>
        </div>
        <div className={css.section}>
          <h3 className={css.sectionTitle}>Book Your Car Today</h3>
          <p className={css.itemDescription}>
            Start your journey with us today. Browse our selection of vehicles,
            choose the perfect car for your trip, and enjoy the freedom of the
            open road with Car Rental.
          </p>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
