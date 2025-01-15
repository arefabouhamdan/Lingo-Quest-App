import React from 'react';

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



const MiniAvatar = ({ user }: AvatarProps) => {

  return user?.avatar.gender === 'male' ? (
    <MiniMAvatar user={user} />
  ) : (
    <MiniFAvatar user={user} />
  );
};

export default MiniAvatar;