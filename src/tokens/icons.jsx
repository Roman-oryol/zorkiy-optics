import styled from 'styled-components';

const IconName = {
  ARROW_RIGHT: 'arrow-right',
  CHECK: 'check',
  CHEVRON_DOWN: 'chevron-down',
  MENU: 'menu',
  TELEGRAM: 'telegram',
  THEME_TOGGLE: 'theme-toggle',
  USER: 'user',
  VK: 'vk',
  YOUTUBE: 'youtube',
};

const StyledSpriteWithIcons = styled.svg`
  display: none;
`;

const SpriteWithIcons = () => {
  return (
    <StyledSpriteWithIcons xmlns="http://www.w3.org/2000/svg">
      <symbol id="arrow-right">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5 9.5a1 1 0 0 0 0 2h10.773l-2.52 2.836a1 1 0 0 0 1.494 1.328l3.998-4.496a.997.997 0 0 0 .255-.66v-.017a.996.996 0 0 0-.256-.659l-3.997-4.496a1 1 0 1 0-1.494 1.328l2.52 2.836H5Z"
          fill="currentColor"
        />
      </symbol>
      <symbol id="check">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18.713 6.298a1 1 0 0 1-.011 1.415l-8.125 8a1 1 0 0 1-1.404 0l-4.875-4.8a1 1 0 0 1 1.404-1.426l4.173 4.11 7.423-7.31a1 1 0 0 1 1.415.011Z"
          fill="currentColor"
        />
      </symbol>
      <symbol id="chevron-down">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.793 7.543a1 1 0 0 1 1.414 0L11 12.336l4.793-4.793a1 1 0 1 1 1.414 1.414l-5.5 5.5a1 1 0 0 1-1.414 0l-5.5-5.5a1 1 0 0 1 0-1.414Z"
          fill="currentColor"
        />
      </symbol>
      <symbol id="menu">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2.864 18c0-.904.732-1.636 1.636-1.636h27a1.636 1.636 0 0 1 0 3.272h-27A1.636 1.636 0 0 1 2.864 18ZM2.864 9c0-.904.732-1.636 1.636-1.636h27a1.636 1.636 0 1 1 0 3.272h-27A1.636 1.636 0 0 1 2.864 9ZM2.864 27c0-.904.732-1.636 1.636-1.636h27a1.636 1.636 0 0 1 0 3.272h-27A1.636 1.636 0 0 1 2.864 27Z"
          fill="currentColor"
        />
      </symbol>
      <symbol id="telegram">
        <path
          d="M2.306 10.319c5.1-2.4 8.501-3.981 10.203-4.745C17.368 3.392 18.377 3.013 19.035 3c.145-.002.469.036.678.22.177.155.226.364.25.511.023.147.052.482.029.744-.264 2.987-1.403 10.235-1.983 13.58-.245 1.416-.728 1.89-1.195 1.937-1.016.1-1.788-.725-2.772-1.422-1.54-1.09-2.41-1.768-3.904-2.831-1.727-1.23-.608-1.905.377-3.009.257-.289 4.734-4.684 4.82-5.083.011-.05.021-.236-.081-.334-.102-.098-.253-.065-.362-.038-.155.038-2.614 1.793-7.38 5.266-.698.518-1.33.77-1.897.757-.625-.015-1.826-.382-2.72-.695-1.095-.385-1.966-.588-1.89-1.241.04-.34.473-.688 1.301-1.043Z"
          fill="currentColor"
        />
      </symbol>
      <symbol id="theme-toggle">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11 21c5.523 0 10-4.477 10-10S16.523 1 11 1 1 5.477 1 11s4.477 10 10 10Zm0 1c6.075 0 11-4.925 11-11S17.075 0 11 0 0 4.925 0 11s4.925 11 11 11Z"
          fill="currentColor"
        />
        <path
          d="M19.8 11a8.8 8.8 0 1 1-17.6 0 8.8 8.8 0 0 1 17.6 0Z"
          fill="currentColor"
        />
      </symbol>
      <symbol id="user">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.78 14.747c1.234-.71 2.716-1.08 4.22-1.08 1.504 0 2.986.37 4.219 1.08 1.232.71 2.183 1.741 2.625 2.98a1 1 0 0 1-1.883.673c-.254-.71-.837-1.4-1.74-1.92-.902-.518-2.034-.813-3.221-.813-1.187 0-2.32.295-3.222.813-.902.52-1.486 1.21-1.74 1.92a1 1 0 1 1-1.883-.673c.443-1.239 1.394-2.27 2.626-2.98ZM11 6.5a2.056 2.056 0 1 0 0 4.111A2.056 2.056 0 0 0 11 6.5ZM6.944 8.556a4.056 4.056 0 1 1 8.111 0 4.056 4.056 0 0 1-8.11 0Z"
          fill="currentColor"
        />
      </symbol>
      <symbol id="vk">
        <path
          d="M11.944 17.535c-6.864 0-10.779-4.697-10.94-12.525h3.453c.11 5.74 2.64 8.17 4.647 8.671V5.01h3.242v4.948c1.977-.21 4.065-2.469 4.767-4.958h3.232a9.565 9.565 0 0 1-4.396 6.253 9.906 9.906 0 0 1 5.149 6.282h-3.563c-.763-2.378-2.67-4.225-5.19-4.476v4.476h-.4Z"
          fill="currentColor"
        />
      </symbol>
      <symbol id="youtube">
        <path
          d="M20.5 6.277c-.25-.938-.875-1.607-1.75-1.875C17.25 4 10.875 4 10.875 4S4.625 4 3 4.402c-.875.268-1.5.937-1.75 1.875C1 8.017 1 11.5 1 11.5s0 3.482.375 5.223c.25.938.875 1.607 1.75 1.875C4.625 19 11 19 11 19s6.25 0 7.875-.402c.875-.268 1.5-.937 1.75-1.875C21 14.983 21 11.5 21 11.5s0-3.482-.5-5.223ZM9 14.714V8.286l5.25 3.214L9 14.714Z"
          fill="currentColor"
        />
      </symbol>
    </StyledSpriteWithIcons>
  );
};

export default SpriteWithIcons;
export { IconName };
