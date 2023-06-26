export const settingRem = () => {
  const root = document.documentElement;
  console.log(root.offsetWidth);
  root.style.fontSize = root.offsetWidth / 7.5 + 'px';
};

export const rem = (px: number) => {
  return px / 100 + 'rem';
};

export const init = () => {
  settingRem();
  window.addEventListener('resize', settingRem);
};
