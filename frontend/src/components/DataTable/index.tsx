import { useEffect, useState } from "react";
import { SalePage } from "../../types/sale";
import { api } from "../../utils/api";
import { formatLocalDate } from "../../utils/format";
import { Pagination } from "../Pagination";

export function DataTable() {
  const [activePage, setActivePage] = useState(0);
  const [page, setPage] = useState<SalePage>({
    first: true,
    last: true,
    number: 0,
    totalElements: 0,
    totalPages: 0,
  });

  useEffect(() => {
    getSales();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activePage]);

  const getSales = async () => {
    const res = await api.get(
      `/sales?page=${activePage}&size=20&sort=date,desc`,
    );
    setPage(res.data);
  };

  const handlePreviousPage = () => {
    setActivePage(activePage - 1);
  };

  const handleNextPage = () => {
    setActivePage(activePage + 1);
  };

  return (
    <>
      <div className="table-responsive">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th>Data</th>
              <th>Vendedor</th>
              <th>Clientes visitados</th>
              <th>Negócios fechados</th>
              <th>Valor</th>
            </tr>
          </thead>
          <tbody>
            {page.content?.map((item) => (
              <tr key={item.id}>
                <td>{formatLocalDate(item.date, "dd/MM/yyyy")}</td>
                <td>{item.seller.name}</td>
                <td>{item.visited}</td>
                <td>{item.deals}</td>
                <td>{item.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Pagination
        page={page}
        handlePreviousPage={handlePreviousPage}
        handleNextPage={handleNextPage}
      />
    </>
  );
}
