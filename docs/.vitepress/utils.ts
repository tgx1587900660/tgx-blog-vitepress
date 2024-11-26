import fs from 'fs';
import path from 'path';

// csdn 图标
export function getCsdnSvgIcon() {
  // 将该 '/imgs/icons/csdn.svg' 的文件读取为字符串
  const svg = fs.readFileSync(path.join(__dirname, '../public/imgs/icons/csdn.svg'), 'utf-8');
  return svg;
}

// juejin 图标
export function getJueJinSvgIcon() {
  const svg = fs.readFileSync(path.join(__dirname, '../public/imgs/icons/juejin.svg'), 'utf-8');
  return svg;
}
