import { FC } from "react";
import { Repository } from "../interfaces/repository.interface";

interface Props {
    data: {
        repository: Repository;
    };
}

const RepositoryInfo: FC<Props> = ({data}) => {
    return (
        <section className="p-2 grid grid-cols-2 md:grid-cols-1 grid-rows-2 md:grid-rows-3 gap-2 w-full md:w-[50vw] md:h-full text-dark-marmol">
            <div className="flex flex-col items-start col-span-2 md:col-span-1 row-span-1">
                <h3 className="text-sm md:text-base font-semibold">Repository</h3>
                <p className="p-2 rounded text-xs md:text-sm bg-light-gray w-full">{data.repository.name}</p>
            </div>
            <div className="flex flex-col items-start col-span-1">
                <h3 className="text-sm md:text-base font-semibold">Owner</h3>
                <p className="p-2 rounded text-xs md:text-sm bg-light-gray w-full">{data.repository.owner.login}</p>
            </div>
            <div className="flex flex-col items-start col-span-1">
                <h3 className="text-sm md:text-base font-semibold">Creation</h3>
                <p className="p-2 rounded text-xs md:text-sm bg-light-gray w-full">{data.repository.created_at.split('T')[0]}</p>
            </div>
        </section>
    ) 
}

export default RepositoryInfo;