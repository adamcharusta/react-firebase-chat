import React from 'react';
import useAuth from '../../hooks/useAuth';
import ButtonComponent from '../atoms/ButtonComponent/ButtonComponent';
import AvatarComponent from '../atoms/AvatarComponent/AvatarComponent';

const NavbarComponent = () => {
  const { user, logOut } = useAuth();

  return (
    <nav className='flex w-full justify-between p-2 items-center bg-neutral-900'>
      <div className='text-lg flex items-center'>
        <AvatarComponent src={user?.photoURL} alt={user?.displayName} />
        <span className='ml-2'>{user?.displayName}</span>
      </div>
      <ButtonComponent onClick={logOut} color='secondary'>
        Logout
      </ButtonComponent>
    </nav>
  );
};

export default NavbarComponent;
