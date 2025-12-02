document.addEventListener("DOMContentLoaded", function () {
  // 1. 核心修正：这里必须使用 navbar-placeholder 以匹配 HTML
  const navbarPlaceholder = document.getElementById("navbar-placeholder");

  if (!navbarPlaceholder) {
      console.error("错误：在页面中找不到 id='navbar-placeholder' 的元素，菜单无法加载。");
      return;
  }

  // 2. 路径处理工具：判断当前是否在首页
  // 如果是首页，链接保留 #锚点；如果是子页面，链接改为 /index.html#锚点
  const isHomePage = window.location.pathname === "/" || window.location.pathname.endsWith("index.html");
  const getLink = (id) => isHomePage ? id : `/index.html${id}`;

  // 3. 导航栏 HTML 结构
  const navbarHTML = `
    <nav id="main-nav" class="fixed w-full top-0 z-50 transition-all duration-300 bg-transparent">
        <div class="max-w-7xl mx-auto px-6">
            <div class="flex items-center justify-between h-20">
                
                <!-- Logo -->
                <a href="index.html" class="flex items-center gap-2 group">
                    <span class="font-logo text-3xl text-slate-900 group-hover:text-brand transition-colors">HereNow</span>
                </a>

                <!-- Desktop Menu (桌面端菜单) -->
                <div class="hidden md:flex items-center space-x-8">
                    <a href="${getLink('#about')}" class="text-sm font-medium text-slate-600 hover:text-brand transition-colors">关于我们</a>
                    
                    <!-- 服务体系 (带简单的 Hover 下拉示意，如果需要复杂下拉可后续添加) -->
                    <a href="${getLink('#services')}" class="text-sm font-medium text-slate-600 hover:text-brand transition-colors">服务体系</a>
                    
                    <a href="${getLink('#process')}" class="text-sm font-medium text-slate-600 hover:text-brand transition-colors">合作流程</a>
                    <a href="${getLink('#featured-cases')}" class="text-sm font-medium text-slate-600 hover:text-brand transition-colors">成功案例</a>
                    <a href="${getLink('#contact')}" class="text-sm font-medium text-slate-600 hover:text-brand transition-colors">联系我们</a>
                </div>

                <!-- CTA Button (桌面端按钮) -->
                <div class="hidden md:flex items-center gap-4">
                    <button onclick="handleDiagnosisClick()" class="px-5 py-2.5 bg-slate-900 text-white text-sm font-bold rounded-xl hover:bg-brand transition-colors shadow-lg shadow-slate-900/10 cursor-pointer">
                        免费诊断
                    </button>
                </div>

                <!-- Mobile Menu Button (移动端汉堡按钮) -->
                <div class="md:hidden flex items-center">
                    <button id="mobile-menu-btn" class="text-slate-900 focus:outline-none p-2">
                        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>

        <!-- Mobile Menu Dropdown (移动端下拉菜单 - 默认隐藏) -->
        <div id="mobile-menu" class="hidden md:hidden bg-white border-t border-slate-100 absolute w-full left-0 shadow-xl h-screen">
            <div class="px-6 py-4 space-y-6 flex flex-col text-center pt-10">
                <a href="${getLink('#about')}" class="text-lg font-medium text-slate-600 hover:text-brand" onclick="toggleMobileMenu()">关于我们</a>
                <a href="${getLink('#services')}" class="text-lg font-medium text-slate-600 hover:text-brand" onclick="toggleMobileMenu()">服务体系</a>
                <a href="${getLink('#process')}" class="text-lg font-medium text-slate-600 hover:text-brand" onclick="toggleMobileMenu()">合作流程</a>
                <a href="${getLink('#featured-cases')}" class="text-lg font-medium text-slate-600 hover:text-brand" onclick="toggleMobileMenu()">成功案例</a>
                <a href="${getLink('#contact')}" class="text-lg font-medium text-slate-600 hover:text-brand" onclick="toggleMobileMenu()">联系我们</a>
                <hr class="border-slate-100 w-1/2 mx-auto">
                <button onclick="handleDiagnosisClick(); toggleMobileMenu()" class="w-full py-4 bg-brand text-white font-bold rounded-xl text-lg shadow-lg shadow-brand/20">
                    免费预约诊断
                </button>
            </div>
        </div>
    </nav>
  `;

  // 插入 HTML
  navbarPlaceholder.innerHTML = navbarHTML;
  
  // 初始化交互逻辑
  initNavbarLogic();
});

// 处理诊断按钮点击逻辑 (全局函数)
window.handleDiagnosisClick = function() {
    const diagnosisForm = document.getElementById('diagnosis-form');
    // 1. 如果当前页面有诊断表单（例如就在诊断页），直接滚动过去
    if (diagnosisForm) {
        diagnosisForm.scrollIntoView({behavior: 'smooth'});
    } 
    // 2. 如果当前页面有弹窗函数（例如在首页），打开弹窗
    else if (typeof openDiagnosisModal === 'function') {
        openDiagnosisModal();
    } 
    // 3. 否则跳转到独立的诊断页面
    else {
        window.location.href = 'website-health-check.html';
    }
}

function initNavbarLogic() {
  const nav = document.getElementById("main-nav");
  const mobileBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  let isMobileMenuOpen = false;

  // 滚动监听：页面滚动后导航栏变白
  const handleScroll = () => {
    if (window.scrollY > 20) {
      nav.classList.remove("bg-transparent", "py-4");
      nav.classList.add("bg-white/95", "backdrop-blur-md", "shadow-sm");
    } else {
      // 只有在菜单关闭时才恢复透明，防止菜单打开时背景透明看不清文字
      if (!isMobileMenuOpen) {
          nav.classList.add("bg-transparent", "py-4");
          nav.classList.remove("bg-white/95", "backdrop-blur-md", "shadow-sm");
      }
    }
  };
  
  window.addEventListener("scroll", handleScroll);
  handleScroll(); // 初始化执行一次

  // 移动端菜单切换
  window.toggleMobileMenu = function () {
    isMobileMenuOpen = !isMobileMenuOpen;
    if (isMobileMenuOpen) {
      // 打开菜单
      mobileMenu.classList.remove("hidden");
      // 图标变 X
      mobileBtn.innerHTML = '<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>';
      // 强制背景变白
      nav.classList.remove("bg-transparent");
      nav.classList.add("bg-white");
    } else {
      // 关闭菜单
      mobileMenu.classList.add("hidden");
      // 图标变汉堡
      mobileBtn.innerHTML = '<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>';
      // 恢复滚动状态判断
      handleScroll();
    }
  };

  if (mobileBtn) {
    mobileBtn.addEventListener("click", window.toggleMobileMenu);
  }
}
