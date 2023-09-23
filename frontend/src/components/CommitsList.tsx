import { FC } from "react";
import { Commit } from "../interfaces/commit.interface";

interface Props {
    data: {
        commits: Commit[];
    };
}

const CommitList: FC<Props> = ({data}) => {
    return (
        <div>
            {
                data.commits.map((commit: Commit) => (
                    <article key={commit.node_id}>
                        <p>{commit.commit.author.name}</p>
                        <p>{commit.commit.message}</p>
                        <p>{commit.commit.comment_count}</p>
                    </article>
                ))
            }
        </div>
    ) 
}

export default CommitList;