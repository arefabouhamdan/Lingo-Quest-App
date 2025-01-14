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
  const { avatar } = user;

  return avatar.gender === 'male' ? (
    <MaleAvatar avatar={avatar} />
  ) : (
    <FemaleAvatar avatar={avatar} />
  );
};

export default Avatar;