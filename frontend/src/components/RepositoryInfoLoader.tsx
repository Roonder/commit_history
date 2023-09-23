import { useRepository } from "../hooks/useRepository"
import RepositoryInfo from "./RepositoryInfo";

export default function RepositoryInfoLoader() {
    const {repository, isLoading, isError} = useRepository();

    if(isLoading) return <p>Ta cargando mi negro</p>;
    if(isError) return <p>Hubo un error mi negro</p>;

    return <RepositoryInfo data={{repository}} />
}