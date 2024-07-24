import { BeatLoader } from "react-spinners";
import css from "./Loader.module.css";

export const Loader = () => {
  return (
    <div className={css.loader}>
      <BeatLoader color={"#1e1b1c"} loading={true} size={20} />
    </div>
  );
};

export default Loader;
