import React, { useContext } from "react";

type Props = {
  name: string;
};

const Profile: React.FC<Props> = ({ name = "" }) => {
  return (
    <div className="flex items-center justify-center gap-5">
      <div className="rounded-full bg-secondary w-12 h-12"></div>
      <p>{name}</p>
    </div>
  );
};

export default Profile;
