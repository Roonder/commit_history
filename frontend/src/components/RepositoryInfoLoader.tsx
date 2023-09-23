import { useRepository } from "../hooks/useRepository"

export default function RepositoryInfoLoader() {
    const {repository, isLoading, isError} = useRepository();

    if(isLoading) return <p>Ta cargando mi negro</p>;
    if(isError) return <p>Hubo un error mi negro</p>;

    return (
        <>
            <p className="text-3xl">{repository.name}</p>
        </>
    )
}