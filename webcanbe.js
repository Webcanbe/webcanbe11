/* WebCanBe content layer — keeps the exported Create/Framer layout and motion intact. */
(() => {
  const copy = new Map([
    ["Create® —  Design Studio", "WebCanBe — Creator Website Studio"],
    ["Digital experiences that connect, scale and perform", "콘텐츠를 넘어, 하나의 브랜드로."],
    ["Quietly making noise for brands worldwide", "크리에이터와 1인 브랜드를 위한 공식 웹사이트 스튜디오"],
    ["A DESIGN STUDIO TRUSTED BY STARTUPS AND LEADING BRANDS.", "ABOUT WEBCANBE"],
    ["WE CREATE STORIES PEOPLE REMEMBER.", "플랫폼이 달라도 브랜드는 하나여야 하니까."],
    ["SEE WORK", "서비스 보기"],
    ["LET'S CHAT", "제작 상담하기"],
    ["Showreel 2025", "CREATOR WEBSITE"],
    ["Best Digital Campaign,Wobbly Awards", "YouTube · Instagram · 상품 · 강의 · 협업 문의"],
    ["PERFORMANCE", "CREATOR WEBSITE"],
    ["The proof behind our work", "흩어진 링크 대신 하나의 공식 공간."],
    ["——  From first launches to lasting collaborations, we’re trusted to deliver on time and at quality.", "유튜브, SNS, 상품, 강의, 포트폴리오, 협업 문의까지 한곳에서 보여주세요."],
    ["Brands who are part of our success story", "사이트 하나에도 브랜드의 차이는 보입니다."],
    ["What we do best, and what your next project needs most.", "콘텐츠가 먼저 보이고, 브랜드가 오래 기억되는 웹을 설계합니다."],
    ["services", "SERVICES"],
    ["FOUNDATION", "OFFICIAL SITE"],
    ["Brand Identity", "크리에이터 공식 사이트"],
    ["GROWTH", "PERSONAL BRAND"],
    ["Strategy", "1인 브랜드 사이트"],
    ["CREATIVE", "LAUNCH"],
    ["Design & Innovation", "런칭 랜딩페이지"],
    ["SMART AI", "PORTFOLIO"],
    [" AI Systems", "포트폴리오 사이트"],
    ["DISCOVERABLE", "INTERACTIVE"],
    ["SEO", "인터랙티브 브랜드 사이트"],
    ["BUILD", "WEB DESIGN"],
    ["Development", "맞춤형 웹 개발"],
    ["HOW WE WORK", "PROCESS"],
    ["The process behind our success", "복잡한 과정은 줄이고 필요한 것에 집중합니다."],
    ["Services built on process, precision, and people.", "01 상담 · 02 방향 및 구조 설계 · 03 디자인"],
    ["We combine strategy, design, content, and technology, giving you a single partner for every stage of your brand’s growth.", "04 개발 및 인터랙션 · 05 검수 및 배포. 프로젝트의 흐름을 함께 설계합니다."],
    ["Chat with our Operations Manager", "프로젝트 상담하기"],
    ["DISCOVERY", "상담"],
    ["STRATEGY", "방향 및 구조 설계"],
    ["DESIGN & BUILD", "디자인"],
    ["LAUNCH & GROW", "개발 및 인터랙션"],
    ["WORK", "서비스"],
    ["STUDIO", "소개"],
    ["WHISPERS", "가이드"],
    ["CONTACT", "문의하기"],
    ["HOME", "홈"],
    ["let's create", "WebCanBe"],
    ["Create\\Studio", "WebCanBe"],
    ["Digital experiences that connect, scale and perform.", "크리에이터와 1인 브랜드를 위한 웹사이트 스튜디오."],
    ["A creative agency for design, strategy, marketing, and scalable premium websites.", "콘텐츠, 상품, 활동을 하나의 공식 웹사이트로 완성합니다."],
    ["© 2026 Create Studio — All work, all rights.", "© WebCanBe. All rights reserved."],
    ["Follow us on socials", "CONTACT"],
    ["hello@create.com", "creator@webcanbe.com"],
    ["hello@createme.com", "creator@webcanbe.com"],
    ["Create Studio", "WebCanBe"],
    ["Offline", "ABOUT"],
    ["Online", "EMAIL"],
    ["Phone", "INQUIRY"]
    , ["Aurelis Beach Resort", "CREATOR WEBSITE"]
    , ["Hospitality branding and website", "콘텐츠 · 프로필 · 협업"]
    , ["Blackwell Motors", "PERSONAL BRAND"]
    , ["Automotive digital transformation", "이름 · 소개 · 서비스"]
    , ["Aspen® 877", "CREATOR COMMERCE"]
    , ["E-Mobility brand launch", "강의 · 상품 · 뉴스레터"]
    , ["we listen", "WE LISTEN"]
    , ["we imagine", "WE IMAGINE"]
    , ["we create", "WE CREATE"]
  ]);

  const replaceText = () => {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach((node) => {
      const normalized = node.nodeValue.replace(/\s+/g, " ").trim();
      if (copy.has(normalized)) node.nodeValue = node.nodeValue.replace(normalized, copy.get(normalized));
    });
  };

  // Some Create headlines are split across animated character spans. Reuse those
  // exact nodes, rather than replacing their markup, so the original reveal motion
  // and layout rules remain intact.
  const replaceAnimatedText = (from, to) => {
    const normalize = (value) => value.replace(/\s+/g, "").trim();
    const target = normalize(from);
    const candidates = [...document.querySelectorAll('*')]
      .filter((el) => normalize(el.textContent || '') === target)
      .sort((a, b) => (a.textContent || '').length - (b.textContent || '').length);
    candidates.slice(0, 1).forEach((element) => {
      const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT);
      const nodes = []; while (walker.nextNode()) nodes.push(walker.currentNode);
      let position = 0;
      nodes.forEach((node) => {
        const length = node.nodeValue.length;
        node.nodeValue = to.slice(position, position + length);
        position += length;
      });
    });
  };

  const replaceAnimatedCopy = () => {
    [
      ['Digital experiences that connect, scale and perform', '콘텐츠를 넘어 하나의 브랜드로'],
      ['The proof behind our work', '흩어진 링크 대신 하나의 공식 공간'],
      ['Brands who are part of our success story', '사이트 하나에도 브랜드의 차이는 보입니다'],
      ['Brand Identity', '크리에이터 공식 사이트'],
      ['Strategy', '1인 브랜드 사이트'],
      ['Design & Innovation', '런칭 랜딩페이지'],
      ['AI Systems', '포트폴리오 사이트'],
      ['SEO', '인터랙티브 사이트'],
      ['Development', '맞춤형 웹 개발'],
      ['The process behind our success', '복잡한 과정은 줄이고 필요한 것에 집중합니다'],
      ['Clearing doubts and concerns', '자주 묻는 질문'],
      ['What kind of projects does Create take on?', '어떤 크리에이터에게 적합한가요?'],
      ['How do you approach new projects?', '기존 사이트 리뉴얼도 가능한가요?'],
      ['What’s a realistic project timeline?', '모바일 사이트도 함께 제작되나요?'],
      ['Who actually does the work?', '애니메이션과 인터랙션도 제작할 수 있나요?'],
      ['How do we communicate during the process?', '도메인 연결과 배포도 해주나요?'],
      ['What happens after launch?', '전자책이나 강의 판매 사이트도 제작할 수 있나요?'],
      ['We focus on brand identity, digital products, and websites that need both design clarity and technical polish.', '콘텐츠와 이름을 중심으로 활동하는 크리에이터와 개인 브랜드에 적합합니다.'],
      ['We start by understanding your goals and constraints, then outline clear milestones so you know exactly what’s coming next.', '가능합니다. 현재 구조와 브랜드를 확인한 뒤 필요한 부분부터 다시 설계합니다.'],
      ['Most branding or smaller websites are ready in 2–4 weeks. Larger sites and platforms run 6–12 weeks, depending on scope.', '모든 사이트는 데스크톱과 모바일 환경을 함께 고려해 제작합니다.'],
      ['Every project is led by senior designers and developers. No handoffs to juniors figuring things out on the fly.', '프로젝트 방향에 따라 스크롤과 전환, hover 인터랙션을 적용할 수 있습니다.'],
      ['We keep things simple: one main contact, weekly updates, and quick replies when you need us.', '최종 사이트 배포와 기본 도메인 연결까지 진행할 수 있습니다.'],
      ['We can stay involved — fixing issues, rolling out updates, or handling ongoing support if that’s part of your plan.', '필요에 따라 외부 결제·판매 플랫폼 또는 맞춤 기능을 연결할 수 있습니다.'],
      ['Let us inspire your next project', '당신의 이름으로 남는 공간을 만드세요'],
      ['Keep you in the loop.', 'WebCanBe와 함께 시작하세요'],
      ['Get the latest news, insights directly to your inbox.', '크리에이터와 1인 브랜드를 위한 웹사이트 스튜디오']
    ].forEach(([from, to]) => replaceAnimatedText(from, to));
  };

  const setMeta = () => {
    document.documentElement.lang = "ko";
    document.title = "WebCanBe — 크리에이터 웹사이트 스튜디오";
    const description = "크리에이터와 1인 브랜드의 콘텐츠, 상품, 활동을 하나의 공식 웹사이트에 담는 WebCanBe.";
    document.querySelectorAll('meta[name="description"], meta[property="og:description"], meta[name="twitter:description"]').forEach((el) => el.content = description);
    document.querySelectorAll('meta[property="og:title"], meta[name="twitter:title"]').forEach((el) => el.content = document.title);
  };

  const setLinks = () => {
    document.querySelectorAll('a[href*="contact"]').forEach((a) => a.href = "contact.html");
    document.querySelectorAll('a[href^="mailto:"]').forEach((a) => a.href = "mailto:creator@webcanbe.com");
    document.querySelectorAll('a[href*="framerpod"], a[href*="framer.com"]').forEach((a) => {
      if (/template|more templates/i.test(a.textContent)) a.remove();
    });
    document.querySelectorAll('a').forEach((a) => {
      if (/제작 상담하기|프로젝트 상담하기|LET'S CHAT/i.test(a.textContent)) a.href = "contact.html";
      if (/서비스 보기|서비스/.test(a.textContent)) a.href = "#services";
      if (/소개/.test(a.textContent)) a.href = "#about";
      if (/가이드/.test(a.textContent)) a.href = "#faq";
    });
  };

  const removeUnsupportedClaims = () => {
    const claims = ["10+", "86+", "80%", "89%", "Rachel Morgan", "Edward Bright"];
    document.querySelectorAll("p, h1, h2, h3, div").forEach((el) => {
      if (el.children.length === 0 && claims.includes(el.textContent.trim())) el.textContent = "";
    });
  };

  const curateHome = () => {
    const sections = {
      'Section | Introduction': 'about',
      'Section | Services': 'services',
      'Section | FAQ': 'faq',
      'Section | Book a Call': 'start'
    };
    Object.entries(sections).forEach(([name, id]) => document.querySelectorAll(`[data-framer-name="${name}"]`).forEach((section) => section.id = id));
    document.querySelectorAll('[aria-label="Go to Create home"]').forEach((button) => {
      button.setAttribute('aria-label', 'Go to WebCanBe home');
      button.closest('a')?.setAttribute('href', 'index.html');
    });
    document.querySelectorAll('[data-framer-name="Hero Image"] img').forEach((image) => {
      image.src = 'assets/webcanbe-creator-portrait.png';
      image.removeAttribute('srcset');
      image.alt = 'WebCanBe가 만드는 개인 브랜드의 에디토리얼 포트레이트';
    });
    const replaceImage = (selector, source, alt) => document.querySelectorAll(selector).forEach((image) => {
      image.src = source; image.removeAttribute('srcset'); image.alt = alt;
    });
    replaceImage('img[alt^="Modern beachfront villa"]', 'assets/webcanbe-creator-site-showcase.png', '크리에이터 공식 웹사이트 쇼케이스');
    replaceImage('img[alt^="Futuristic black and white concept car"]', 'assets/webcanbe-creator-portrait.png', '개인 브랜드 웹사이트 쇼케이스');
  };

  const setContactForm = () => {
    const form = document.querySelector('form[data-framer-name="Contact form"]');
    if (!form) return;
    const fields = form.querySelectorAll('input:not([aria-hidden]), textarea');
    const [name, company, email, message] = fields;
    if (!name || !company || !email || !message) return;
    name.name = 'name'; name.placeholder = '이름 / 활동명';
    company.name = 'social'; company.placeholder = '유튜브 또는 SNS 링크 (선택)'; company.required = false;
    email.name = 'email'; email.placeholder = '이메일';
    message.name = 'message'; message.placeholder = '프로젝트 설명';
    const type = document.createElement('select');
    type.name = 'siteType'; type.required = true; type.className = company.className;
    type.setAttribute('aria-label', '필요한 사이트 유형');
    type.innerHTML = '<option value="">필요한 사이트 유형</option><option>크리에이터 공식 사이트</option><option>1인 브랜드 사이트</option><option>랜딩페이지</option><option>포트폴리오</option><option>인터랙티브 사이트</option><option>기타</option>';
    company.parentElement?.parentElement?.after(type);
    const submit = form.querySelector('button[type="submit"]');
    if (submit) { submit.disabled = false; submit.style.opacity = '1'; submit.textContent = '제작 상담 보내기'; }
    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      if (!form.reportValidity()) return;
      if (submit) { submit.disabled = true; submit.textContent = '보내는 중…'; }
      try {
        const response = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(Object.fromEntries(new FormData(form))) });
        if (!response.ok) throw new Error('전송할 수 없습니다.');
        form.reset();
        if (submit) submit.textContent = '상담 요청이 전송되었습니다';
      } catch (error) {
        if (submit) { submit.disabled = false; submit.textContent = '전송에 실패했습니다. 이메일로 문의해 주세요.'; }
      }
    });
  };

  const run = () => { setMeta(); replaceText(); replaceAnimatedCopy(); setLinks(); removeUnsupportedClaims(); curateHome(); setContactForm(); };
  // Framer hydrates its exported markup asynchronously; apply content after it settles.
  const start = () => window.setTimeout(run, 1800);
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start);
  else start();
})();
