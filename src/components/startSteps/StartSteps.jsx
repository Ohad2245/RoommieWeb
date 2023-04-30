import styles from "../../styles";
import "../../components/contact/contact.css";
import { useTranslation } from "react-i18next";

const StartSteps = () => {
  const {t} = useTranslation();
  return(
  <div>
  <div className={`${styles.flexCenter} flex-row`}>
    <div className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-[#323f5d]`}>
      <p className="font-bold text-[20px] text-white">1</p>
    </div>
    <p className="flex-1 ml-[30px] font-normal text-[18px] text-[#B0B0B0] leading-[32px]">
      {t("Create a profile and tell us what you're looking for")}
    </p>
  </div>
  <br></br>
  <div className={`${styles.flexCenter} flex-row`}>
    <div className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-[#323f5d]`}>
      <p className="font-bold text-[20px] text-white">2</p>
    </div>
    <p className="flex-1 ml-[30px] font-normal text-[18px] text-[#B0B0B0] leading-[32px]">
    {t("Filter and sort the relevant results the way that suits you")}

    </p>
  </div>
  <br></br>
  <div className={`${styles.flexCenter} flex-row`}>
    <div className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-[#323f5d]`}>
      <p className="font-bold text-[20px] text-white">3</p>
    </div>
    <p className="flex-1 ml-[30px] font-normal text-[18px] text-[#B0B0B0] leading-[32px]">
    {t("Set up times to see apartments in a convenient order")}
    </p>
  </div>
  </div>
)};

export default StartSteps;
