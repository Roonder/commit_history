import { useCommits } from "../hooks/useCommits";
import CommitList from "./CommitsList";
import Loader from "./Loader";

export default function CommitsLoader() {
    const {commits, isLoading, isError } = useCommits();

    if(isLoading) return <Loader />;
    if(isError) return <p>Hubo un error mi negro</p>;

    return <CommitList data={{commits}} />
}