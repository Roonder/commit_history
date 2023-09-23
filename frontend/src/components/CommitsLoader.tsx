import { useCommits } from "../hooks/useCommits";
import CommitList from "./CommitsList";
import Error from "./Error";
import Loader from "./Loader";

export default function CommitsLoader() {
    const {commits, isError, isLoading } = useCommits();

    if(isLoading) return <Loader />;
    if(isError) return <Error />;

    return <CommitList data={{commits}} />
}