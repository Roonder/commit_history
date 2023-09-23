import { useRepository } from "../hooks/useRepository"
import RepositoryInfo from "./RepositoryInfo";
import Loader from "./Loader";

export default function RepositoryInfoLoader() {
    const {repository, isLoading, isError} = useRepository();

    if(isLoading) return <Loader />;
    if(isError) return <p>Hubo un error mi negro</p>;

    return <RepositoryInfo data={{repository}} />
}