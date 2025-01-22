import React from 'react';
import MaleAvatar from './MaleAvatar';
import FemaleAvatar from './FemaleAvatar';

type AvatarProps = {
  user: {
    type: string;
    avatar: {
      gender: string;
      background: { color: string };
      hair: { color: string; style: string };
      skin: { color: string; };
      eyes: { color: string; };
      shirt: { color: string; };
    };
  };
};



const Avatar = ({ user }: AvatarProps) => {

  return user?.avatar.gender === 'male' ? (
    <MaleAvatar user={user} />
  ) : (
    <FemaleAvatar user={user} />
  );
};

export default Avatar;