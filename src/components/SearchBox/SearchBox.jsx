import {useDispatch} from "react-redux";
import css from "./SearchBox.module.css";
import {useId} from "react";
import {changeFilter} from "../../redux/filtersSlice";

export const SearchBox = () => {
  const dispatch = useDispatch();
  const idSearch = useId();
  return (
    <label className={css.search__block} htmlFor={idSearch}>
      <span className={css.label}>Find contacts by name</span>
      <input
        className={css.field}
        type="search"
        id={idSearch}
        placeholder="Search..."
        onChange={(event) => dispatch(changeFilter(event.target.value))}
      />
    </label>
  );
};
export default SearchBox;
