import React from 'react';

interface IAvatarComponent {
  src: string | null;
  alt: string;
}
const AvatarComponent = ({ src, alt }: IAvatarComponent) => {
  if (!src) return <></>;
  return <img className='w-16 h-16 rounded-full' src={src} alt={alt} />;
};

export default AvatarComponent;
