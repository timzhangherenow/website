document.addEventListener("DOMContentLoaded", function () {
  // 1. 获取占位符元素
  const navbarPlaceholder = document.getElementById("navbar-placeholder");
  // 2. 路径判断工具
  const path = window.location.pathname;
  const isHomePage = path === "/" || path.endsWith("/index.html") || path.endsWith("/");
  const getLink = (id) => isHomePage ? id : `/index.html${id}`;

  // 3. 构建导航栏 HTML
  // 注意：这里融合了您的下拉菜单结构和我们的交互逻辑
  const navbarHTML = `
    <nav id="main-nav" class="fixed w-full z-50 top-0 transition-all duration-300 bg-white/90 backdrop-blur-md border-b border-white/50 shadow-sm">
        <div class="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            
            <!-- Logo -->
            <a href="index.html" class="text-3xl font-logo text-brand tracking-wide hover:opacity-80 transition-opacity">HereNow</a>
            
            <!-- Desktop Menu -->
            <div class="hidden md:flex space-x-1 items-center font-medium text-sm text-slate-600">
                
                <!-- 1. 首页 -->
                <a href="${getLink('#about')}" class="px-4 py-2 hover:text-brand transition-colors rounded-lg hover:bg-slate-50">首页</a>

                <!-- 2. 专业服务 (Dropdown) -->
                <div class="relative group">
                    <button class="px-4 py-2 hover:text-brand transition-colors flex items-center gap-1 focus:outline-none rounded-lg hover:bg-slate-50 group-hover:text-brand">
                        专业服务
                        <svg class="w-3 h-3 text-slate-400 group-hover:text-brand transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                    </button>
                    <!-- Dropdown Menu -->
                    <div class="absolute left-1/2 -translate-x-1/2 top-full pt-4 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                        <div class="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden p-2 ring-1 ring-black/5">
                            <a href="website-health-check.html" class="block px-4 py-3 hover:bg-slate-50 rounded-xl transition-all group/item">
                                <div class="font-bold text-slate-800 group-hover/item:text-brand mb-0.5 flex items-center gap-2">
                                    <span class="w-1.5 h-1.5 rounded-full bg-brand"></span> 网站问题诊断
                                </div>
                                <p class="text-xs text-slate-400">找出流量流失的根本原因</p>
                            </a>
                            <a href="website-strategy-planning.html" class="block px-4 py-3 hover:bg-slate-50 rounded-xl transition-all group/item">
                                <div class="font-bold text-slate-800 group-hover/item:text-brand mb-0.5 flex items-center gap-2">
                                    <span class="w-1.5 h-1.5 rounded-full bg-brand"></span> 网站策略规划
                                </div>
                                <p class="text-xs text-slate-400">定制化的增长路径图</p>
                            </a>
                            <a href="#" class="block px-4 py-3 hover:bg-slate-50 rounded-xl transition-all group/item">
                                <div class="font-bold text-slate-800 group-hover/item:text-brand mb-0.5 flex items-center gap-2">
                                    <span class="w-1.5 h-1.5 rounded-full bg-brand"></span> AI知识库搭建
                                </div>
                                <p class="text-xs text-slate-400">训练您的专属品牌AI模型</p>
                            </a>
                            <a href="#" class="block px-4 py-3 hover:bg-slate-50 rounded-xl transition-all group/item">
                                <div class="font-bold text-slate-800 group-hover/item:text-brand mb-0.5 flex items-center gap-2">
                                    <span class="w-1.5 h-1.5 rounded-full bg-brand"></span> 优质选题策划
                                </div>
                                <p class="text-xs text-slate-400">基于搜索意图的内容规划</p>
                            </a>
                        </div>
                    </div>
                </div>

                <!-- 3. 运营方案 (Dropdown) -->
                <div class="relative group">
                    <button class="px-4 py-2 hover:text-brand transition-colors flex items-center gap-1 focus:outline-none rounded-lg hover:bg-slate-50 group-hover:text-brand">
                        运营方案
                        <svg class="w-3 h-3 text-slate-400 group-hover:text-brand transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                    </button>
                    <!-- Dropdown Menu -->
                    <div class="absolute left-1/2 -translate-x-1/2 top-full pt-4 w-60 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                        <div class="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden p-2 ring-1 ring-black/5">
                            <a href="#" class="block px-4 py-3 hover:bg-slate-50 rounded-xl transition-all group/item">
                                <div class="font-bold text-slate-800 group-hover/item:text-brand mb-0.5 flex items-center gap-2">
                                    <svg class="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path></svg>
                                    博客代运营
                                </div>
                                <p class="text-xs text-slate-400">EEAT优质博客撰写与发布</p>
                            </a>
                            <a href="#" class="block px-4 py-3 hover:bg-slate-50 rounded-xl transition-all group/item">
                                <div class="font-bold text-slate-800 group-hover/item:text-brand mb-0.5 flex items-center gap-2">
                                    <svg class="w-4 h-4 text-[#0077b5]" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                                    LinkedIn代运营
                                </div>
                                <p class="text-xs text-slate-400">B2B专业人脉与品牌建设</p>
                            </a>
                            <a href="#" class="block px-4 py-3 hover:bg-slate-50 rounded-xl transition-all group/item">
                                <div class="font-bold text-slate-800 group-hover/item:text-brand mb-0.5 flex items-center gap-2">
                                    <svg class="w-4 h-4 text-[#FF0000]" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
                                    YouTube代运营
                                </div>
                                <p class="text-xs text-slate-400">视频内容策划与剪辑发布</p>
                            </a>
                        </div>
                    </div>
                </div>

                <!-- 4. 资源中心 (Dropdown) -->
                <div class="relative group">
                    <button class="px-4 py-2 hover:text-brand transition-colors flex items-center gap-1 focus:outline-none rounded-lg hover:bg-slate-50 group-hover:text-brand">
                        资源中心
                        <svg class="w-3 h-3 text-slate-400 group-hover:text-brand transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                    </button>
                    <!-- Dropdown Menu -->
                    <div class="absolute left-1/2 -translate-x-1/2 top-full pt-4 w-40 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                        <div class="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden p-2 ring-1 ring-black/5">
                            <a href="#" class="block px-4 py-3 hover:bg-slate-50 rounded-xl transition-all group/item">
                                 <div class="font-bold text-slate-800 group-hover/item:text-brand text-sm">博客</div>
                            </a>
                            <a href="#" class="block px-4 py-3 hover:bg-slate-50 rounded-xl transition-all group/item">
                                 <div class="font-bold text-slate-800 group-hover/item:text-brand text-sm">客户案例</div>
                            </a>
                            <a href="#" class="block px-4 py-3 hover:bg-slate-50 rounded-xl transition-all group/item">
                                 <div class="font-bold text-slate-800 group-hover/item:text-brand text-sm">课程学习</div>
                            </a>
                        </div>
                    </div>
                </div>

                <!-- 5. 价格介绍 -->
                <a href="#" class="px-4 py-2 hover:text-brand transition-colors rounded-lg hover:bg-slate-50">价格介绍</a>
            </div>

            <button onclick="handleDiagnosisClick()" class="hidden md:inline-flex px-6 py-2.5 bg-brand hover:bg-brand-600 text-white font-brand font-bold rounded-full transition-all shadow-glow hover:shadow-lg transform hover:-translate-y-0.5 cursor-pointer">
                预约沟通
            </button>

            <!-- Mobile Menu Button -->
             <div class="md:hidden flex items-center">
                <button id="mobile-menu-btn" class="text-slate-600 focus:outline-none p-2">
                    <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
        </div>

        <!-- Mobile Menu Dropdown (移动端适配版) -->
        <div id="mobile-menu" class="hidden md:hidden bg-white border-t border-slate-100 absolute w-full left-0 shadow-xl min-h-screen top-20 overflow-y-auto pb-32">
             <div class="px-6 py-6 space-y-6 flex flex-col">
                <a href="${getLink('#about')}" class="text-lg font-medium text-slate-600" onclick="toggleMobileMenu()">关于我们</a>
                
                <div class="space-y-3">
                    <div class="font-bold text-slate-900">专业服务</div>
                    <div class="pl-4 space-y-3 border-l-2 border-slate-100">
                        <a href="website-health-check.html" class="block text-brand font-medium" onclick="toggleMobileMenu()">网站问题诊断</a>
                        <a href="website-strategy-planning.html" class="block text-slate-600" onclick="toggleMobileMenu()">网站策略规划</a>
                        <a href="#" class="block text-slate-600">AI知识库搭建</a>
                        <a href="#" class="block text-slate-600">优质选题策划</a>
                    </div>
                </div>

                 <div class="space-y-3">
                    <div class="font-bold text-slate-900">运营方案</div>
                    <div class="pl-4 space-y-3 border-l-2 border-slate-100">
                        <a href="#" class="block text-slate-600">博客代运营</a>
                        <a href="#" class="block text-slate-600">LinkedIn代运营</a>
                        <a href="#" class="block text-slate-600">YouTube代运营</a>
                    </div>
                </div>

                <div class="space-y-3">
                    <div class="font-bold text-slate-900">资源中心</div>
                    <div class="pl-4 space-y-3 border-l-2 border-slate-100">
                        <a href="#" class="block text-slate-600">博客</a>
                        <a href="#" class="block text-slate-600">客户案例</a>
                    </div>
                </div>

                <a href="#" class="text-lg font-medium text-slate-600">价格介绍</a>

                <button onclick="handleDiagnosisClick(); toggleMobileMenu()" class="w-full py-4 bg-brand text-white font-bold rounded-xl text-lg shadow-lg shadow-brand/20 mt-4">
                    预约沟通
                </button>
            </div>
        </div>
    </nav>
  `;

  // 4. 插入 HTML
  navbarPlaceholder.innerHTML = navbarHTML;
  
  // 5. 初始化交互逻辑
  initNavbarLogic();
});

// 全局函数：处理诊断点击
window.handleDiagnosisClick = function() {
    const diagnosisForm = document.getElementById('diagnosis-form');
    // 如果当前页有表单，直接滚动
    if (diagnosisForm) {
        diagnosisForm.scrollIntoView({behavior: 'smooth'});
    } 
    // 如果首页有弹窗函数，打开弹窗
    else if (typeof openDiagnosisModal === 'function') {
        openDiagnosisModal();
    } 
    // 否则跳转到诊断页
    else {
        window.location.href = 'website-health-check.html';
    }
}

// 初始化交互 (滚动监听 & 手机菜单)
function initNavbarLogic() {
  const nav = document.getElementById("main-nav");
  const mobileBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  let isMobileMenuOpen = false;

  const handleScroll = () => {
    if (window.scrollY > 20) {
      nav.classList.remove("bg-white/90", "border-b");
      nav.classList.add("bg-white/95", "shadow-sm", "border-b");
    } else {
      // 保持半透明背景，符合您的新设计风格
      if (!isMobileMenuOpen) {
          nav.classList.add("bg-white/90");
          nav.classList.remove("bg-white/95", "shadow-sm");
      }
    }
  };
  
  window.addEventListener("scroll", handleScroll);
  handleScroll();

  window.toggleMobileMenu = function () {
    isMobileMenuOpen = !isMobileMenuOpen;
    if (isMobileMenuOpen) {
      mobileMenu.classList.remove("hidden");
      mobileBtn.innerHTML = '<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>';
      nav.classList.add("bg-white");
      nav.classList.remove("bg-white/90");
    } else {
      mobileMenu.classList.add("hidden");
      mobileBtn.innerHTML = '<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>';
      handleScroll();
    }
  };

  if (mobileBtn) {
    mobileBtn.addEventListener("click", window.toggleMobileMenu);
  }
}
