import { FC } from "react";
import { Repository } from "../interfaces/repository.interface";

interface Props {
    data: {
        repository: Repository;
    };
}

const RepositoryInfo: FC<Props> = ({data}) => {
    return (
        <div>
            <p className="text-3xl">{data.repository.name}</p>
            <p className="text-xl">{data.repository.owner.login}</p>
        </div>
    ) 
}

export default RepositoryInfo;