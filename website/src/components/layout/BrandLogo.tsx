import React from 'react';

interface BrandLogoProps {
  className?: string;
  priority?: boolean;
}

const altText = 'NIRVAN — Move Forward. Live Better.';
const mobilePng = '/brand/nirvan-logo-header-mobile.png';
const desktopPng = '/brand/nirvan-logo-header-desktop.png';
const mobileWebp = '/brand/nirvan-logo-header-mobile.webp';
const desktopWebp = '/brand/nirvan-logo-header-desktop.webp';

export const BrandLogo: React.FC<BrandLogoProps> = ({ className = '', priority = false }) => (
  <picture className="block leading-none">
    <source media="(min-width: 1024px)" srcSet={desktopWebp} type="image/webp" />
    <source media="(max-width: 1023px)" srcSet={mobileWebp} type="image/webp" />
    <img
      src={mobilePng}
      srcSet={`${mobilePng} 340w, ${desktopPng} 560w`}
      sizes="(max-width: 1023px) 170px, 280px"
      width={340}
      height={112}
      alt={altText}
      className={className}
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : 'auto'}
      decoding="async"
    />
  </picture>
);
