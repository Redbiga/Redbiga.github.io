// 检查本地存储中的 Fluid_Color_Scheme 值
const fluidColorScheme = localStorage.getItem('Fluid_Color_Scheme');

// 如果存在 Fluid_Color_Scheme 缓存且值为 dark，则将样式应用于 .markdown-body
if (fluidColorScheme === 'dark') {
  document.querySelector('.markdown-body').classList.add('dark');
}
