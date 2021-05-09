import { SalePage } from "../../types/sale";

type PropsPagination = {
  page: SalePage;
  handlePreviousPage: () => void;
  handleNextPage: () => void;
};

export function Pagination({
  page,
  handlePreviousPage,
  handleNextPage,
}: PropsPagination) {
  return (
    <div className="row d-flex justify-content-center">
      <nav>
        <ul className="pagination">
          <li className={`page-item ${page.first ? "disabled" : ""}`}>
            <button className={"page-link"} onClick={handlePreviousPage}>
              Anterior
            </button>
          </li>
          <li className="page-item disabled">
            <span className="page-link">{page.number + 1}</span>
          </li>
          <li className={`page-item ${page.last ? "disabled" : ""}`}>
            <button className={"page-link"} onClick={handleNextPage}>
              Próxima
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
