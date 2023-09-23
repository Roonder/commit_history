import { useRepository } from "../hooks/useRepository"
import RepositoryInfo from "./RepositoryInfo";
import Loader from "./Loader";
import Error from "./Error";

export default function RepositoryInfoLoader() {
    const {repository, isLoading, isError} = useRepository();

    if(isLoading) return <Loader />;
    if(isError) return <Error />;

    return <RepositoryInfo data={{repository}} />
}