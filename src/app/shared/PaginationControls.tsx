import React from "react";

interface PaginationControlsProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

const PaginationControls: React.FC<PaginationControlsProps> = ({
                                                                   currentPage,
                                                                   totalPages,
                                                                   onPageChange,
                                                               }) => {
    const getPageNumbers = () => {
        const pages: (number | string)[] = [];
        const maxPagesToShow = 5;

        pages.push(1);

        let startPage = Math.max(2, currentPage - Math.floor(maxPagesToShow / 2));
        let endPage = Math.min(totalPages - 1, startPage + maxPagesToShow - 2);

        if (startPage > 2) pages.push("...");
        for (let i = startPage; i <= endPage; i++) pages.push(i);
        if (endPage < totalPages - 1) pages.push("...");
        if (totalPages > 1) pages.push(totalPages);

        return pages;
    };

    return (
        <div className="flex items-center justify-center gap-2 mt-4">
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`px-3 py-1 rounded ${
                    currentPage === 1 ? "bg-gray-300 text-gray-500 cursor-not-allowed" : "bg-blue-500 text-white hover:bg-blue-600"
                }`}
            >
                &lt;
            </button>

            {getPageNumbers().map((page, index) =>
                page === "..." ? (
                    <span key={index} className="px-3 py-1">...</span>
                ) : (
                    <button
                        key={index}
                        onClick={() => onPageChange(page as number)}
                        className={`px-3 py-1 rounded ${
                            currentPage === page ? "bg-blue-500 text-white" : "bg-gray-200 hover:bg-gray-300"
                        }`}
                    >
                        {page}
                    </button>
                )
            )}

            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`px-3 py-1 rounded ${
                    currentPage === totalPages ? "bg-gray-300 text-gray-500 cursor-not-allowed" : "bg-blue-500 text-white hover:bg-blue-600"
                }`}
            >
                &gt;
            </button>
        </div>
    );
};

export default PaginationControls;
