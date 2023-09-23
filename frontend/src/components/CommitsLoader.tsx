import { useCommits } from "../hooks/useCommits";
import { Commit } from "../interfaces/commit.interface";

export default function CommitsLoader() {
    const {commits, isLoading, isError } = useCommits();

    if(isLoading) return <p>Ta cargando mi negro</p>;
    if(isError) return <p>Hubo un error mi negro</p>;

    return commits.map((commit: Commit) => (
        <div key={commit.node_id}>
            <p>{commit.commit.author.name}</p>
            <p>{commit.commit.message}</p>
            <p>{commit.commit.comment_count}</p>
        </div>
    ))
}