import { Link } from "react-router-dom";
import css from "./Home.module.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useTranslation } from "react-i18next";
import "react-lazy-load-image-component/src/effects/blur.css";

export const Home = () => {
  const { t } = useTranslation();

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
          <h3 className={css.sectionTitle}>{t("whyChooseUs")}</h3>
          <ul className={css.list}>
            <li className={css.listItem}>
              <img
                className={css.svgIcons}
                src="/svg/car.svg"
                alt="Vehicle"
                width="40"
                height="40"
              />
              <h4 className={css.itemTitle}>{t("wideSelection")}</h4>
              <p className={css.itemDescription}>
                {t("wideSelectionDescription")}
              </p>
            </li>
            <li className={css.listItem}>
              <img
                className={css.svgIcons}
                src="/svg/coins.svg"
                alt="Rates"
                width="40"
                height="40"
              />
              <h4 className={css.itemTitle}>{t("affordableRates")}</h4>
              <p className={css.itemDescription}>
                {t("affordableRatesDescription")}
              </p>
            </li>
            <li className={css.listItem}>
              <img
                className={css.svgIcons}
                src="/svg/locations.svg"
                alt="Locations"
                width="40"
                height="40"
              />
              <h4 className={css.itemTitle}>{t("convenientLocations")}</h4>
              <p className={css.itemDescription}>
                {t("convenientLocationsDescription")}
              </p>
            </li>
            <li className={css.listItem}>
              <img
                className={css.svgIcons}
                src="/svg/service.svg"
                alt="Service"
                width="40"
                height="40"
              />
              <h4 className={css.itemTitle}>{t("excellentService")}</h4>
              <p className={css.itemDescription}>
                {t("excellentServiceDescription")}
              </p>
            </li>
            <li className={css.listItem}>
              <img
                className={css.svgIcons}
                src="/svg/plan.svg"
                alt="Plans"
                width="40"
                height="40"
              />
              <h4 className={css.itemTitle}>{t("flexiblePlans")}</h4>
              <p className={css.itemDescription}>
                {t("flexiblePlansDescription")}
              </p>
            </li>
            <li className={css.listItem}>
              <img
                className={css.svgIcons}
                src="/svg/update.svg"
                alt="Fleet"
                width="40"
                height="40"
              />
              <h4 className={css.itemTitle}>{t("modernFleet")}</h4>
              <p className={css.itemDescription}>
                {t("modernFleetDescription")}
              </p>
            </li>
          </ul>
        </div>
        <div className={css.section}>
          <h3 className={css.sectionTitle}>{t("exploreWithConfidence")}</h3>
          <div className={css.imgDiv}>
            <img
              className={css.svgIcons}
              src="/svg/mountains.svg"
              alt=""
              width="100"
              height="100"
            />
            <img
              className={css.svgIcons}
              src="/svg/city.svg"
              alt=""
              width="100"
              height="100"
            />
          </div>
          <p className={css.itemDescription}>{t("exploreDescription")}</p>
        </div>
        <div className={css.section}>
          <h3 className={css.sectionTitle}>{t("bookToday")}</h3>
          <p className={css.itemDescription}>
            {t("bookDescription")}{" "}
            <Link className={css.link} to="/catalog">
              {t("catalog")}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
