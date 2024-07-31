import React, { useState, ChangeEvent } from "react";
import Card from "./Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faSearch,
  faSortAsc,
  faSortDesc,
} from "@fortawesome/free-solid-svg-icons";

interface Column {
  field: string;
  title: string;
  width?: number;
  attributes?: React.CSSProperties;
  headerAttributes?: React.CSSProperties;
  sortable?: boolean;
}

interface RowData {
  [key: string]: any;
}

interface Props {
  columns: Column[];
  dataSource: RowData[];
  selectable?: boolean;
  itemsPerPage?: number; // Número de itens por página
}

export default function Table({
  columns,
  dataSource,
  selectable = false,
  itemsPerPage = 5, // Valor padrão
}: Props) {
  const [selectedRows, setSelectedRows] = useState<Set<number>>(new Set());
  const [sortedColumn, setSortedColumn] = useState<Column | null>(null);
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [currentPage, setCurrentPage] = useState(1);

  const handleRowSelect = (index: number) => {
    setSelectedRows((prev) => {
      const newSelection = new Set(prev);
      if (newSelection.has(index)) {
        newSelection.delete(index);
      } else {
        newSelection.add(index);
      }
      return newSelection;
    });
  };

  const handleSort = (column: Column) => {
    if (sortedColumn?.field === column.field) {
      setSortDirection((prev) => (prev === "asc" ? "desc" : "asc"));
    } else {
      setSortedColumn(column);
      setSortDirection("asc");
    }
  };

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const filteredData = dataSource.filter((row) =>
    Object.keys(row).some((key) =>
      row[key].toString().toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  const sortedData = filteredData.sort((a, b) => {
    if (sortedColumn) {
      const aValue = a[sortedColumn.field];
      const bValue = b[sortedColumn.field];
      if (aValue < bValue) return sortDirection === "asc" ? -1 : 1;
      if (aValue > bValue) return sortDirection === "asc" ? 1 : -1;
      return 0;
    }
    return 0;
  });

  const totalPages = Math.ceil(sortedData.length / itemsPerPage);

  const paginatedData = sortedData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const renderPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <button
          key={i}
          className={`px-3 py-1 mx-1 rounded ${
            i === currentPage
              ? "bg-primary text-white"
              : "text-neutral-700"
          }`}
          onClick={() => setCurrentPage(i)}
        >
          {i}
        </button>
      );
    }
    return pages;
  };
  return (
    <Card
      rounded="md"
      shadow="md"
      content={
        <>
          <div className="flex items-center">
            <div className="relative w-full p-3">
              <input
                type="text"
                placeholder="Pesquisar..."
                className="border border-neutral-300 p-2 pl-10 rounded w-full"
                value={searchQuery}
                onChange={handleSearch}
              />
              <FontAwesomeIcon
                icon={faSearch}
                className="absolute left-6 top-1/2 transform -translate-y-1/2 w-4 h-4 text-neutral-400"
              />
            </div>
          </div>
          <table className="w-full border-collapse bg-white">
            <thead>
              <tr className="bg-neutral-200 text-left text-neutral-700">
                {selectable && (
                  <th
                    className="border-r border-neutral-300 text-center p-2"
                    style={{ width: columns[0]?.width }}
                  >
                    <input type="checkbox" disabled />
                  </th>
                )}
                {columns.map((col, idx) => (
                  <th
                    key={idx}
                    className="border-b border-neutral-300 p-3 cursor-pointer"
                    style={col.headerAttributes}
                    onClick={() => col.sortable && handleSort(col)}
                  >
                    {col.title}
                    {col.sortable && sortedColumn?.field === col.field && (
                      <span
                        className={`ml-2 ${
                          sortDirection === "asc"
                            ? "text-neutral-600"
                            : "text-neutral-400"
                        }`}
                      >
                        <FontAwesomeIcon
                          icon={
                            sortDirection === "asc" ? faSortAsc : faSortDesc
                          }
                        />
                      </span>
                    )}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {paginatedData.map((row, rowIndex) => (
                <tr
                  key={rowIndex}
                  className={`${
                    selectable && selectedRows.has(rowIndex)
                      ? "bg-neutral-100"
                      : ""
                  } cursor-pointer hover:bg-neutral-50 transition-colors duration-150`}
                  onClick={() => selectable && handleRowSelect(rowIndex)}
                >
                  {selectable && (
                    <td
                      className="border-r border-neutral-300 text-center p-2"
                      style={{ width: columns[0]?.width }}
                    >
                      <input
                        type="checkbox"
                        checked={selectedRows.has(rowIndex)}
                        readOnly
                      />
                    </td>
                  )}
                  {columns.map((col, colIndex) => (
                    <td
                      key={colIndex}
                      className="border-b border-neutral-300 p-3"
                      style={col.attributes}
                    >
                      {row[col.field]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-center gap-2 items-center p-2">
            <button
              className="px-2 py-1 hover:bg-neutral-200 rounded"
              onClick={() => setCurrentPage(Math.max(currentPage - 1, 1))}
              disabled={currentPage === 1}
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <div className="flex items-center gap-1">{renderPageNumbers()}</div>
            <button
              className="px-2 py-1 hover:bg-neutral-200 rounded"
              onClick={() =>
                setCurrentPage(Math.min(currentPage + 1, totalPages))
              }
              disabled={currentPage === totalPages}
            >
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
        </>
      }
    />
  );
}
