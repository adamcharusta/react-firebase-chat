import React from 'react';

interface IAvatarComponent {
  src?: string | null;
  alt?: string | null;
}
const AvatarComponent = ({ src, alt }: IAvatarComponent) => {
  if (!src || !alt) return <></>;
  return <img className='w-8 h-8 rounded-full' src={src} alt={alt} />;
};

export default AvatarComponent;
