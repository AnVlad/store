import React from 'react';
import ContentLoader from 'react-content-loader';

function LoadingBlock() {
  return (
    <ContentLoader
      className="pizza-block"
      speed={2}
      width={280}
      height={457}
      viewBox="0 0 315 525"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb">
      <rect x="0" y="0" rx="6" ry="6" width="280" height="301" />
      <rect x="0" y="309" rx="10" ry="10" width="280" height="83" />
      <rect x="0" y="406" rx="6" ry="6" width="280" height="45" />
    </ContentLoader>
  );
}

export default LoadingBlock;
