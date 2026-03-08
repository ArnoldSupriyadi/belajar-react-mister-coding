import './Avatar.css';
import type { FC } from 'react';

type size = "lg" | "sm" | "md";

interface Props {
    url?: string;
    label?: string;
    size?: size;
}

const Avatar: FC<Props> = ({ url, label, size = "md" }) => {
    return (
        <>
            <div className={`avatar avatar_${size}`}>
                {/* <img src="https://picsum.photos/200/300" alt="unsplash" /> */}
                {url ? <img src={url} alt={label} /> : null}
            </div>
        </>
    )
}

export default Avatar;