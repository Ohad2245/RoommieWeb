import React from "react";
import { useTranslation } from "react-i18next";
// import { BsPatchCheckFill } from "react-icons/bs";
import "./why2.css";

const Why2 = () => {
  const { t } = useTranslation();
  return (
    <div className="container experience__container reveal">
      <div className="experience__content">
        <article className="experience__details ">
          {/* <BsPatchCheckFill className="experience__details-icon" /> */}
          <div className="text-white">
            <li>{t("Reduce frustration")}</li>
          </div>
        </article>
        <article className="experience__details">
          {/* <BsPatchCheckFill className="experience__details-icon" /> */}
          <div className="text-white">
            <li>
              {t(
                "Minimize the gap between what people want vs. what they settle for"
              )}
            </li>
          </div>
        </article>
        <article className="experience__details">
          {/* <BsPatchCheckFill className="experience__details-icon" /> */}
          <div className="text-white">
            <li>{t("Reintroduce excitement to the search process")}</li>
          </div>
        </article>
        <article className="experience__details">
          {/* <BsPatchCheckFill className="experience__details-icon" /> */}
          <div className="text-white">
            <li>{t("Save time and energy exerted in searching")}</li>
          </div>
        </article>
        <article className="experience__details">
          {/* <BsPatchCheckFill className="experience__details-icon" /> */}
          <div className="text-white">
            <li>{t("Ease the competition")} </li>
          </div>
        </article>
        <article className="experience__details">
          {/* <BsPatchCheckFill className="experience__details-icon" /> */}
          <div className="text-white">
            <li>
              {t("Standardize the transfer of information between landlord and tenant")}
            </li>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Why2;
