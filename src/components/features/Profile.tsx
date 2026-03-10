import { useState, useEffect } from "react";
import Avatar from "../avatar/Avatar";
import "./Profile.css"

interface ProfileModel {
    name: string;
    email: string;
}

const Profile = () => {
    const data: ProfileModel = {
        name: 'Arnold',
        email: 'arnold@example.com',
    };

    const [profile, setProfile] = useState<ProfileModel>(data);
        useEffect(() => {
            setProfile({name: "Adi", email: "adi@example.com"});
        }, [data]);
    return (
        <div className="profile">
            <div className="profile_container">
                <Avatar url="https://picsum.photos/200/300" label={profile.name} size='lg'/>
                <div className="profile_label">
                    <h1>{profile.name}</h1>
                    <p>{profile.email}</p>
                </div>
            </div>
        </div>
    )
}

export default Profile;

