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
      skin: { color: string; style: string };
      eyes: { color: string; style: string };
      shirt: { color: string; style: string };
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