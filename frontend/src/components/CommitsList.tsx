import { FC } from "react";
import { usePagination } from "../hooks/usePagination";
import { Commit } from "../interfaces/commit.interface";
import {FaUserAlt, FaGitAlt, FaCommentAlt} from 'react-icons/fa';
import {FaArrowLeft, FaArrowRight} from 'react-icons/fa6';

interface Props {
    data: {
        commits: Commit[];
    };
}

const CommitList: FC<Props> = ({data}) => {
    const { elements, nextPage, previousPage, currentPage, maxPages } = usePagination(data.commits);

    return (
        <section className="md:flex md:flex-col md:w-[70vw]">
            <div className="px-2 py-2 mb-[.30rem] overflow-y-scroll flex flex-col gap-2 h-[55vh] md:h-[80vh]">
                {
                    elements.map((commit: Commit) => (
                        <article key={commit.node_id} className="px-3 py-2 border border-light-gray text-dark-marmol rounded">
                            <div className="flex justify-between items-center py-2">
                                <p className="flex gap-2 items-center text-xs md:text-base"><FaUserAlt /> {commit.commit.author.name}</p>
                                <p className="flex gap-2 items-center text-xs md:text-base"><FaCommentAlt /> {commit.commit.comment_count}</p>
                            </div>
                            <p className="flex gap-2 py-2 items-center justify-between text-sm md:text-lg"><FaGitAlt /> <span className="w-[90vw]">{commit.commit.message}</span></p>
                        </article>
                    ))
                }
            </div>
            <div className="w-full bg-dark-gray text-dark-gray text-xl flex items-center justify-center gap-8 h-full md:h-fit">
                <button
                    type="button"
                    onClick={previousPage}
                    disabled={currentPage === 1}
                    className="rounded-full p-2 bg-dark-marmol/50 text-center disabled:bg-light-gray/30"
                ><FaArrowLeft /></button>

                <p className="text-sm font-semibold text-dark-marmol">{currentPage} of {maxPages}</p>

                <button
                    type="button"
                    onClick={nextPage}
                    disabled={currentPage === maxPages}
                    className="rounded-full p-2 bg-dark-marmol/50 text-center disabled:bg-light-gray/30"
                    ><FaArrowRight /></button>
            </div>
        </section>
    ) 
}

export default CommitList;