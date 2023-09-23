import { useCommits } from "../hooks/useCommits";
import CommitList from "./CommitsList";

export default function CommitsLoader() {
    const {commits, isLoading, isError } = useCommits();

    if(isLoading) return <p>Ta cargando mi negro</p>;
    if(isError) return <p>Hubo un error mi negro</p>;

    return <CommitList data={{commits}} />
}