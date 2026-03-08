import { useState } from "react";

interface Profile {
    name: string;
    email: string;
}

const ContohState = () => {
    const data: Profile = {
        name: 'Arnold',
        email: 'arnold@example.com',
    };

    const [profile, setProfile] = useState<Profile>(data);
    return (
        <> 
            <div>
                <p>{profile.name}</p>
                <p>{profile.email}</p>
            </div>
        </>
    )
}

export default ContohState;
