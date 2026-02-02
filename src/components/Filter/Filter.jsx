import { useDispatch, useSelector } from "react-redux";
import { setNameFilter, selectNameFilter } from "../../redux/filtersSlice";
import styles from "./Filter.module.css";

export default function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  return (
    <input
      className={styles.input}
      type="text"
      value={filter}
      onChange={(e) => dispatch(setNameFilter(e.target.value))}
      placeholder="Пошук за ім'ям"
    />
  );
}
