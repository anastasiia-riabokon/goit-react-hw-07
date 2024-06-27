import {useDispatch} from "react-redux";

import {useId} from "react";
import {changeFilter} from "../../redux/filtersSlice";

export const SearchBox = () => {
  const dispatch = useDispatch();
  const idSearch = useId();
  return (
    <div className="mb-7">
      <h2 className="mb-4 text-center font-semibold">Find contacts by name</h2>
      <label htmlFor={idSearch} className="input input-bordered flex items-center gap-2">
        <input
          type="search"
          id={idSearch}
          placeholder="Search..."
          onChange={(event) => dispatch(changeFilter(event.target.value))}
          className="grow"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="h-4 w-4 opacity-70"
        >
          <path
            fillRule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clipRule="evenodd"
          />
        </svg>
      </label>
    </div>
  );
};
export default SearchBox;
