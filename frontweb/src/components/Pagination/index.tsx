import { ReactComponent as ArrowIcon } from "assets/images/arrow-icon.svg";
import "./styles.css";
import ReactPaginate from "react-paginate";

type Props = {
  pageCount: number;
  pageRangeDisplayed: number;
  onChange?: (pageNumber: number) => void;
  forcePage?: number;
}

const Pagination = ({pageCount, pageRangeDisplayed, onChange, forcePage}: Props) => {
  return (
    <ReactPaginate
      pageCount={pageCount}
      pageRangeDisplayed={pageRangeDisplayed}
      marginPagesDisplayed={1}
      containerClassName="pagination-container"
      pageLinkClassName="pagination-item"
      breakClassName="pagination-item"
      previousClassName="arrow-previous"
      nextClassName="arrow-next"
      activeLinkClassName="pagination-item-active"
      disabledClassName="arrow-inactive"
      onPageChange={(items) => (onChange) ? onChange(items.selected) : {}}
      forcePage={forcePage}
      previousLabel={<ArrowIcon />}
      nextLabel={<ArrowIcon />}
    />
  );
};

export default Pagination;
