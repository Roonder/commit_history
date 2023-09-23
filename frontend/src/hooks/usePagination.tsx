import { useState } from "react";
import { Commit } from "../interfaces/commit.interface";

export function usePagination(elements: Array<Commit>, page: number = 1, perPage: number = 10) {
    const [currentPage, setCurrentPage] = useState(page);
    const maxPages = Math.ceil(elements.length/perPage);
    const offset = perPage * (currentPage - 1);
    const paginatedElements = elements.slice(offset, perPage * currentPage);

    return {
        currentPage,
        nextPage: ():void => setCurrentPage(p => p < maxPages ? p + 1 : p),
        previousPage: ():void => setCurrentPage(p => p > 1 ? p - 1 : p),
        maxPages,
        totalElements: elements.length,
        elements: paginatedElements
    }

}