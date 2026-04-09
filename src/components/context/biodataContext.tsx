import { FC, ReactNode, createContext, useState } from 'react';
import { Biodata } from '../model/biodata';

interface biodataContext {
    biodatas: Biodata[];
    setBiodatas: (biodatas: Biodata[]) => void;
}

const defaultContext: biodataContext = {
    biodatas: [],
    setBiodatas: () => {},
}

export const BiodataContext = createContext<biodataContext>(defaultContext);

interface Props {
    children: ReactNode;
}

const Provider: FC<Props> = ({ children }) => {
    const [biodatas, setBiodatas] = useState<Biodata[]>([]);
    return (
        <BiodataContext.Provider value={{ biodatas, setBiodatas }}>
            {children}
        </BiodataContext.Provider>
    )
}

export default Provider;