
import { FaRegEye, FaRegEdit, FaTrashAlt } from "react-icons/fa";
import React from "react";

export interface Column<T> {
    key: keyof T;
    label: string;
    render?: (value: any, row: T) => JSX.Element;
}

interface TableProps<T> {
    columns: Column<T>[];
    data: T[];
    loading: boolean;
}

const Table = <T,>({ columns, data, loading }: TableProps<T>) => {
    return (
        <div className="p-6 overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300 text-sm">
                <thead className="sticky top-0 bg-gray-200">
                <tr className="text-left">
                    {columns.map((col) => (
                        <th key={col.key.toString()} className="border border-gray-300 px-4 py-2">
                            {col.label}
                        </th>
                    ))}
                </tr>
                </thead>
                <tbody>
                {loading
                    ? Array.from({ length: 5 }).map((_, index) => (
                        <tr key={index} className="bg-gray-100 animate-pulse">
                            {columns.map((col, i) => (
                                <td key={i} className="border border-gray-300 px-4 py-2">
                                    <div className="h-4 bg-gray-300 rounded w-full"></div>
                                </td>
                            ))}
                        </tr>
                    ))
                    : data.map((row, rowIndex) => (
                        <tr key={rowIndex} className="bg-white hover:bg-gray-100">
                            {columns.map((col) => (
                                <td key={col.key.toString()} className="border border-gray-300 px-4 py-2">
                                    {col.render ? col.render(row[col.key], row) : String(row[col.key])}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
