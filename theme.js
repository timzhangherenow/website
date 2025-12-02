// theme.js - Tailwind 全局配置
tailwind.config = {
    theme: {
        extend: {
            colors: {
                brand: {
                    DEFAULT: '#FF6B3D', // 核心品牌色
                    50: '#FFF0EB',
                    100: '#FFDEC9',
                    600: '#E04F23'
                },
                slate: {
                    900: '#0F172A', // 午夜蓝
                    500: '#64748B', // 冷灰
                }
            },
            borderRadius: {
                '3xl': '1.5rem',
                '4xl': '2rem',
            }
        }
    }
}
