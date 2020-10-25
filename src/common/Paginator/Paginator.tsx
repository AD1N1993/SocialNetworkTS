import React from "react";
import s from "./Paginator.module.scss"

type PaginatorPropsType = {
    totalCount: number
    pageSize: number
    currentPage: number
    onChangePage: (pageNumber: number) => void
}

export const Paginator = ({totalCount, pageSize, currentPage, onChangePage}: PaginatorPropsType) => {
    let pagesCount = Math.ceil(totalCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return (
        <>
            <div>
                {pages.map(p => {
                    return <span key={p} className={currentPage === p ? s.selectedPage : ""}
                                 onClick={() => {onChangePage(p)}}>{p}</span>
                })}
            </div>
        </>
    )
}