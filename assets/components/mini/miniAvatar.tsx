import React from 'react';
import Male from './male';
import Female from './female';

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

  // return user?.avatar.gender === 'male' ? (
  //   <Male user={user} />
  // ) : (
  //   <Female user={user} />
  // );
};

export default MiniAvatar;