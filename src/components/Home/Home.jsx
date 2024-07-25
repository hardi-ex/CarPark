import { useTranslation } from "react-i18next";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Icon } from "../Icon/Icon";
import "react-lazy-load-image-component/src/effects/blur.css";
import css from "./Home.module.css";

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
          threshold={500}
        />
      </div>
      <div className={css.content}>
        <div className={css.section}>
          <h3 className={css.sectionTitle}>{t("whyChooseUs")}</h3>
          <ul className={css.list}>
            <li className={css.listItem}>
              <Icon className={css.svgIcons} id="car" width="40" height="40" />
              <h4 className={css.itemTitle}>{t("wideSelection")}</h4>
              <p className={css.itemDescription}>
                {t("wideSelectionDescription")}
              </p>
            </li>
            <li className={css.listItem}>
              <Icon
                className={css.svgIcons}
                id="coins"
                width="40"
                height="40"
              />
              <h4 className={css.itemTitle}>{t("affordableRates")}</h4>
              <p className={css.itemDescription}>
                {t("affordableRatesDescription")}
              </p>
            </li>
            <li className={css.listItem}>
              <Icon
                className={css.svgIcons}
                id="locations"
                width="40"
                height="40"
              />
              <h4 className={css.itemTitle}>{t("convenientLocations")}</h4>
              <p className={css.itemDescription}>
                {t("convenientLocationsDescription")}
              </p>
            </li>
            <li className={css.listItem}>
              <Icon
                className={css.svgIcons}
                id="service"
                width="40"
                height="40"
              />
              <h4 className={css.itemTitle}>{t("excellentService")}</h4>
              <p className={css.itemDescription}>
                {t("excellentServiceDescription")}
              </p>
            </li>
            <li className={css.listItem}>
              <Icon className={css.svgIcons} id="plan" width="40" height="40" />
              <h4 className={css.itemTitle}>{t("flexiblePlans")}</h4>
              <p className={css.itemDescription}>
                {t("flexiblePlansDescription")}
              </p>
            </li>
            <li className={css.listItem}>
              <Icon
                className={css.svgIcons}
                id="update"
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
          <div className={css.svgDiv}>
            <Icon
              className={css.svgIcons}
              id="mountains"
              width="100"
              height="100"
            />
            <Icon className={css.svgIcons} id="city" width="100" height="100" />
          </div>
          <p className={css.itemDescription}>{t("exploreDescription")}</p>
        </div>
        <div className={css.section}>
          <h3 className={css.sectionTitle}>{t("bookToday")}</h3>
          <p className={css.itemDescription}>{t("bookDescription")}</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
