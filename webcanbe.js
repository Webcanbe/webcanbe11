/* WebCanBe content layer — keeps the exported Create/Framer layout and motion intact. */
(() => {
  const copy = new Map([
    ["Create® —  Design Studio", "WebCanBe — Creator Website Studio"],
    ["Digital experiences that connect, scale and perform", "당신의 이름을 하나의 브랜드로"],
    ["Quietly making noise for brands worldwide", "크리에이터와 개인 브랜드를 위한 고급 공식 웹사이트 제작 스튜디오"],
    ["A DESIGN STUDIO TRUSTED BY STARTUPS AND LEADING BRANDS.", "CREATOR WEBSITE STUDIO"],
    ["WE CREATE STORIES PEOPLE REMEMBER.", "채널은 이미 있습니다. 이제 브랜드가 필요합니다."],
    ["SEE WORK", "서비스 보기"],
    ["LET'S CHAT", "제작 상담하기"],
    ["Showreel 2025", "WEBSITE FILM"],
    ["Best Digital Campaign,Wobbly Awards", "CREATOR · PERSONAL BRAND · COMMERCE"],
    ["PERFORMANCE", "SHOWCASE STRUCTURE"],
    ["The proof behind our work", "프로젝트마다 역할이 달라야 합니다."],
    ["——  From first launches to lasting collaborations, we’re trusted to deliver on time and at quality.", "패션, 크리에이터, 교육 서비스까지 서로 다른 목적을 각자의 웹 경험으로 설계했습니다."],
    ["Brands who are part of our success story", "숫자는 성과가 아니라, 공개된 쇼케이스의 구성과 사이트가 맡는 역할을 보여줍니다."],
    ["What we do best, and what your next project needs most.", "이름이 커질수록, 공식 공간도 필요합니다."],
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
    ["The process behind our success", "좋은 사이트는 우연히 나오지 않습니다."],
    ["Services built on process, precision, and people.", "아이디어에서 공개까지"],
    ["We combine strategy, design, content, and technology, giving you a single partner for every stage of your brand’s growth.", "01 방향 · 02 구조 · 03 디자인 · 04 개발 · 05 공개"],
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
    ["LLC.", ""],
    ["8 Sunset Blvd, Office 5", "크리에이터와 개인 브랜드"],
    ["567 Sunset Blvd,", "크리에이터와 개인 브랜드"],
    ["Suite 501", ""],
    ["Los Angeles, CA 90026", "디지털 웹 스튜디오."],
    ["(310) 555-0165", "creator@webcanbe.com"],
    ["Offline", "ABOUT"],
    ["Online", "EMAIL"],
    ["Phone", "INQUIRY"]
    , ["Social media link", "WebCanBe 링크"]
    , ["What our clients say", "PROJECT PERSPECTIVE"]
    , ["UX Lead", "콘텐츠 구조"]
    , ["SAVE 20%", "범위에 맞게"]
    , ["Timeline", "제작 기간"]
    , ["//KPI", "//PROCESS"]
    , ["Jul 30, 2025", "WEBSITE GUIDE"]
    , ["Jul 25, 2025", "WEBSITE GUIDE"]
    , ["Jul 20, 2025", "WEBSITE GUIDE"]
    , ["Jul 15, 2025", "WEBSITE GUIDE"]
    , ["Dec 7, 2025", "WEBSITE GUIDE"]
    , ["Do you still have questions?", "더 궁금한 점이 있으신가요?"]
    , ["3.4x", "개발"]
    , ["Backed by feedback from 맞춤형 brands we’ve worked with.", "수정과 확장까지 이어갈 수 있습니다."]
    , ["Backed by feedback from 방향부터 공개까지 brands we’ve worked with.", "실제 공개된 사이트가 제공하는 경험을 프로젝트 관점에서 정리했습니다."]
    , ["Backed by feedback from 방향부터 공개까지 brands we've worked with.", "실제 공개된 사이트가 제공하는 경험을 프로젝트 관점에서 정리했습니다."]
    , ["Lindholm launched Aspen® 877, a new e-bike. The challenge was positioning it as both a lifestyle product and a piece of cutting-edge mobility tech.", "콘텐츠에서 상품과 강의, 뉴스레터까지 자연스럽게 이어지는 구조를 설계합니다."]
    , ["120+ projects delivered", "맞춤형 웹사이트 제작"]
    , ["$2,800", "상담 후"]
    , ["$6,500", "상담 후"]
    , ["$12,000", "상담 후"]
    , ["$3,500", "범위 확인"]
    , ["$8,000", "범위 확인"]
    , ["$15,000", "범위 확인"]
    , ["/project", "/프로젝트"]
    , ["GET STARTED", "상담하기"]
    , ["2017-2025", "DESIGN—BUILD"]
    , ["2016 — 2025", "IDEA—LAUNCH"]
    , ["Aurelis Beach Resort", "FACELESS"]
    , ["Hospitality branding and website", "FASHION · COMMERCE"]
    , ["Blackwell Motors", "VIDORA"]
    , ["Automotive digital transformation", "CREATOR · YOUTUBE"]
    , ["Aspen® 877", "BASELINE"]
    , ["Aspen®", "SPORTS · ACADEMY"]
    , ["E-Mobility brand launch", "SPORTS · ACADEMY"]
    , ["NEXT.JS", "PERSONAL BRAND"]
    , ["TYPESCRIPT", "CONTENT ARCHIVE"]
    , ["TAILWIND CSS", "NEWSLETTER"]
    , ["FRAMER MOTION", "PARTNERSHIP INQUIRY"]
    , ["CLOUDFLARE CDN", "PERSONAL BRAND WEBSITE"]
    , ["REACT", "CREATOR COMMERCE"]
    , ["WEBGL", "COURSE · SHOP"]
    , ["NODE.JS", "LAUNCH PAGE"]
    , ["AWS LAMBDA", "EMAIL CAPTURE"]
    , ["OPENAI EMBEDDINGS", "CREATOR WEBSITE"]
    , ["FRAMER", "PORTFOLIO"]
    , ["GSAP", "SERVICES"]
    , ["META ADS INTEGRATION", "BRAND WEBSITE"]
    , ["we listen", "채널은 있습니다"]
    , ["we imagine", "브랜드가 필요합니다"]
    , ["we create", "이름이 기억되도록"]
    , ["More Projects", "포트폴리오 보기"]
    , ["Get Template", "WebCanBe"]
    , ["See whats inside", "프로젝트 문의"]
    , ["JOIN OUR NEWSLETTER", "제작 상담하기"]
    , ["Enter Your Email", "이메일을 입력하세요"]
    , ["we listen.", "먼저 듣고"]
    , ["we imagine.", "정확히 정하고"]
    , ["we create.", "끝까지 만듭니다"]
    , ["Ideas", "당신의 이름을"]
    , ["that start with you", "남는 브랜드로"]
    , ["Client Satisfaction Rate", "맞춤 구조"]
    , ["99.9%", "필요한 만큼"]
    , ["12+", "콘텐츠·상품·문의"]
    , ["INDUSTRIES SERVED", "한 흐름에"]
    , ["24H", "빠른 피드백"]
    , ["AVERAGE RESPONSE TIME", "결정은 선명하게"]
    , ["96%", "반응형"]
    , ["FIRST DRAFT APPROVED", "모든 화면에"]
    , ["99%", "런칭"]
    , ["SHIP ON-TIME", "실제 공개까지"]
    , ["5 / 5 (98 reviews)", "오픈 이후"]
    , ["Backed by feedback from 120+ brands we’ve worked with.", "수정과 확장까지 이어갈 수 있습니다."]
    , ["No reheated or pre-made.", "정해진 틀을 쓰지 않습니다."]
    , ["Every project starts fresh.", "처음부터 프로젝트에 맞게."]
    , ["Custom work", "맞춤 제작"]
    , ["from day one.", "첫 단계부터."]
    , ["Simple Pricing", "시작은 분명하게"]
    , ["Plans that scale with your project and give you room for unlimited creative opportunities.", "필요한 범위와 다음 단계를 한눈에 비교하세요."]
    , ["CORE", "START"]
    , ["FOR STARTUPS AND FIRST LAUNCHES", "빠르게 시작하는 공식 사이트"]
    , ["STUDIO", "소개"]
    , ["FOR GROWING TEAMS AND SERIOUS BUILDS", "브랜드 전체를 설계하는 맞춤 제작"]
    , ["SCALE", "EXPAND"]
    , ["FOR ESTABLISHED TEAMS AND LONG-TERM GROWTH", "콘텐츠와 판매를 확장하는 사이트"]
    , ["Pick a plan that grows with you and keeps creative costs predictable.", "필요한 범위를 확인한 뒤 비용을 안내합니다."]
    , ["Explore plans", "프로젝트 상담하기"]
    , ["Built for the long run", "오픈 이후까지"]
    , ["With You Beyond Launch", "사이트는 오픈 뒤에도 이어집니다"]
    , ["Ongoing support", "운영 지원"]
    , ["Long-term partnership", "필요한 수정"]
    , ["Future-ready builds", "확장 가능한 구조"]
    , ["Quick intro call, no strings attached.", "간단한 이야기부터 시작합니다."]
    , ["Let's chat or just say hello.", "무엇을 만들지 들려주세요."]
    , ["Next Availability", "CONTACT"]
    , ["from 14 September 2025", "creator@webcanbe.com"]
    , ["Book now", "제작 상담하기"]
    , ["WE LISTEN", "채널은 있습니다"]
    , ["WE IMAGINE", "브랜드가 필요합니다"]
    , ["WE CREATE", "이름이 기억되도록"]
    , ["beautiful things", "웹에 남깁니다"]
    , ["—— From first launches to lasting collaborations, we’re trusted to deliver on time and at quality.", "패션, 크리에이터, 교육 서비스까지 서로 다른 목적을 각자의 웹 경험으로 설계했습니다."]
    , ["PROJECTS SHIPPED", "공개 포트폴리오"]
    , ["REPEAT COLLABORATIONS", "서로 다른 방향"]
    , ["INDUSTRY AWARDS", "공식 브랜드 공간"]
    , ["CLIENT RETENTION RATE", "언제든 열리는 채널"]
    , ["—— We work with clarity, precision. Every step designed to move your project forward with confidence.", "목표가 선명해질 때까지 묻고, 공개해도 될 때까지 다듬습니다."]
    , ["We start by listening. Goals, challenges, and vision are mapped out clearly, setting the foundation for everything that follows.", "무엇을 만드는지보다 왜 필요한지부터 확인합니다."]
    , ["With insights in place, we define the roadmap. Positioning, priorities, and the best way to align design and execution.", "방문자가 이해할 순서와 핵심 페이지를 정합니다."]
    , ["Ideas take shape. From visuals to digital experiences, we design and develop with sharp attention to detail.", "이름과 활동이 한눈에 보이는 화면을 만듭니다."]
    , ["Delivery is just the beginning. We measure, refine, and scale to ensure your project continues to perform.", "반응형과 인터랙션을 구현하고 실제로 공개합니다."]
    , ["Step inside one of our featured projects. From first brief to launch, follow the process that shows what makes Create® different.", "콘텐츠, 뉴스레터, 상품과 협업 문의가 하나의 개인 브랜드 경험으로 이어지도록 구성했습니다."]
    , ["Our process in motion", "생각이 화면이 되는 과정"]
    , ["Explore a real case where strategy, design, and delivery lined up exactly as we work today.", "스토리를 정리하고, 인터페이스를 만들고, 모든 화면을 검수합니다."]
    , ["Explore Case Studies", "프로젝트 상담하기"]
    , ["WHY CHOOSE US", "WHY WEBCANBE"]
    , ["Designed to Make Your Life Easier", "링크를 모으는 건 쉽습니다. 브랜드를 만드는 건 다릅니다."]
    , ["—— Clear process, quick reviews, and a clean launch at the end. We keep the steps simple so projects never get stuck.", "보이는 방식, 쓰이는 흐름, 공개 이후까지. 차이는 디테일에서 생깁니다."]
    , ["The foundation of every project — how your brand looks, feels, and communicates.", "브랜드의 인상과 메시지를 하나의 공식 사이트로 정리합니다."]
    , ["Positioning and messaging frameworks", "포지셔닝과 핵심 메시지"]
    , ["Visual identity systems", "비주얼 아이덴티티"]
    , ["Brand guidelines for consistent use", "일관된 브랜드 가이드"]
    , ["Digital-first brand systems", "디지털 중심 브랜드 시스템"]
    , ["Branded assets across campaigns and touchpoints", "채널별 브랜드 자산"]
    , ["Clear direction backed by insight and planning to move from idea to execution.", "아이디어를 실행으로 옮길 수 있도록 방향과 우선순위를 정리합니다."]
    , ["Market and audience research", "시장과 고객 이해"]
    , ["Product and campaign strategy", "콘텐츠와 상품 전략"]
    , ["User journey mapping", "사용자 흐름 설계"]
    , ["Roadmaps and rollout planning", "제작 로드맵"]
    , ["Workshops and alignment sessions", "방향 정리 세션"]
    , ["From first concepts to polished products that people want to use and share.", "아이디어를 사람들이 사용하고 공유할 수 있는 화면으로 완성합니다."]
    , ["UX and UI design", "UX·UI 디자인"]
    , ["Prototyping and user testing", "프로토타입과 사용성 확인"]
    , ["Digital product and service design", "디지털 서비스 디자인"]
    , ["Iteration and validation", "피드백과 개선"]
    , ["Launch planning and support", "런칭 계획과 지원"]
    , ["Practical applications of AI to unlock smarter products and workflows.", "콘텐츠와 프로젝트가 더 잘 보이도록 구조와 경험을 설계합니다."]
    , ["Define AI vision and roadmap", "포트폴리오 구조 설계"]
    , ["Intelligent experience design", "콘텐츠 중심 화면 설계"]
    , ["Prototyping and proof-of-concepts", "핵심 페이지 프로토타입"]
    , ["Integration into platforms and workflows", "외부 플랫폼 연결"]
    , ["Team enablement and training", "운영 방식 안내"]
    , ["Digital screen showing colorful data charts and analytics interface.", "콘텐츠와 활동이 자연스럽게 이어지는 인터랙티브 웹사이트."]
    , ["Technical site audit", "사이트 구조 점검"]
    , ["Keyword research and content strategy", "검색과 콘텐츠 전략"]
    , ["On-page and metadata optimisation", "페이지와 메타데이터 최적화"]
    , ["Link-building and authority growth", "채널과 콘텐츠 연결"]
    , ["Performance tracking and reporting", "성능 확인과 개선"]
    , ["Turning ideas and designs into scalable, functional, and reliable digital products.", "디자인을 실제로 작동하는 안정적인 웹사이트로 구현합니다."]
    , ["Web and app development", "웹사이트 개발"]
    , ["CMS integration and setup", "CMS 연결"]
    , ["E-commerce builds and optimisation", "판매 기능 연결"]
    , ["Custom feature development", "맞춤 기능 개발"]
    , ["Ongoing technical support", "오픈 이후 기술 지원"]
    , ["Plans built to fit your next project", "시작은 분명하게"]
    , ["—— Designed around your specs, each plan gives you clarity on scope, features, and cost so you can move forward with confidence.", "필요한 페이지와 기능을 확인한 뒤, 맞는 제작 범위와 비용을 안내합니다."]
    , ["Core", "START"]
    , ["STARTER PLAN", "OFFICIAL WEBSITE"]
    , ["For startups and first launches", "빠르게 시작하는 공식 사이트"]
    , ["Simple, fast, and effective, so you can focus on growing your business.", "핵심 페이지와 모바일, 기본 인터랙션까지 한 번에 준비합니다."]
    , ["Brand & Identity starter kit", "브랜드 기본 방향"]
    , ["Website design (core pages)", "핵심 페이지 디자인"]
    , ["Standard revisions", "필요한 수정"]
    , ["SEO setup essentials", "기본 검색 설정"]
    , ["Unlimited stock images", "이미지 방향 제안"]
    , ["Native source files included", "제작 파일 정리"]
    , ["Final handoff files", "최종 전달 파일"]
    , ["Clear milestones from start to finish", "단계별 제작 일정"]
    , ["We keep you in the loop", "과정을 함께 확인"]
    , ["Feedback built into the process", "피드백을 반영하는 흐름"]
    , ["GET STARTED", "제작 상담하기"]
    , ["2-3 weeks", "프로젝트별 안내"]
    , ["Studio", "소개"]
    , ["ADVANCED PLAN", "PERSONAL BRAND WEBSITE"]
    , ["For growing teams and serious builds", "브랜드 전체를 설계하는 맞춤 제작"]
    , ["A complete package with flexibility, advanced design, and the support you need to grow faster.", "이름, 활동, 서비스를 하나의 인상으로 설계합니다."]
    , ["Extended Branding", "확장된 브랜드 구성"]
    , ["Full website design", "전체 웹사이트 디자인"]
    , ["UX flows & product design", "UX 흐름과 기능 설계"]
    , ["Unlimited revisions", "충분한 수정 과정"]
    , ["Advanced SEO & content", "검색과 콘텐츠 최적화"]
    , ["Priority support response", "우선 지원"]
    , ["Final handoff", "최종 전달"]
    , ["Deeper design coverage for complex needs", "복잡한 요구를 위한 세밀한 설계"]
    , ["Unlimited adjustments before launch", "오픈 전 충분한 조정"]
    , ["Faster responses when you need us most", "필요한 순간 빠른 확인"]
    , ["4-6 weeks", "프로젝트별 안내"]
    , ["Scale", "EXPAND"]
    , ["GROWTH PLAN", "CREATOR COMMERCE"]
    , ["For established teams and long-term growth", "콘텐츠와 판매를 확장하는 사이트"]
    , ["Strategy, design, and dedicated support for complex projects that demand scalability and polish.", "콘텐츠, 판매, 운영까지 확장 가능한 구조로 완성합니다."]
    , ["End-to-end brand strategy", "브랜드 전략 전체 설계"]
    , ["Large-scale website & CMS", "확장형 웹사이트와 CMS"]
    , ["Advanced UX & product design", "고도화된 UX와 기능 설계"]
    , ["Dedicated senior managers", "전담 프로젝트 디렉션"]
    , ["Advanced micro-interactions", "세밀한 인터랙션"]
    , ["Optimization & support", "최적화와 운영 지원"]
    , ["Enterprise-level handoff", "운영을 고려한 최종 전달"]
    , ["Scalable solutions designed for growth", "확장을 고려한 구조"]
    , ["Dedicated manager guiding every stage with integrations", "연결 기능까지 단계별 진행"]
    , ["Long-term support beyond launch", "오픈 이후 장기 지원"]
    , ["6–8 weeks", "프로젝트별 안내"]
    , ["Ask our expert", "프로젝트 문의"]
    , ["Schedule a quick call, and we’ll walk you through our flexible plans.", "간단한 상담으로 필요한 범위부터 함께 정리합니다."]
    , ["Maggie Winslow", "WebCanBe"]
    , ["Project Operations Manager", "프로젝트 안내"]
    , ["BOOK A CALL", "제작 상담하기"]
    , ["No serious faces. Real serious work.", "작은 팀, 깊은 집중."]
    , ["—— We bring sharp strategy and bold ideas, without the stiff boardroom vibe. Professional where it counts, human where it matters.", "필요한 판단은 선명하게, 소통은 편안하게 진행합니다."]
    , ["Projects delivered on time under his oversight.", "프로젝트의 방향과 일정을 끝까지 관리합니다."]
    , ["Tobias Neumann", "WebCanBe"]
    , ["Founder & CEO", "프로젝트 디렉션"]
    , ["Campaigns hit or exceeded client KPIs.", "콘텐츠와 목적에 맞는 구조를 설계합니다."]
    , ["Amelia Cross", "콘텐츠 전략"]
    , ["Head of Strategy", "구조와 메시지"]
    , ["Brand identities launched across industries.", "브랜드의 인상을 화면으로 정리합니다."]
    , ["Sofia Reyes", "디자인"]
    , ["Chief Creative Officer", "비주얼 디렉션"]
    , ["Faster site performance vs industry average.", "화면과 기능을 안정적인 웹으로 구현합니다."]
    , ["Lucas Marino", "개발"]
    , ["Technical Director", "웹 개발과 인터랙션"]
    , ["Our leadership team involved from first kickoff to final delivery.", "처음 상담부터 최종 배포까지 같은 기준으로 함께합니다."]
    , ["Every milestone checked, every detail reviewed, every client kept in the loop. That’s how projects land sharp and on time.", "단계마다 확인하고 디테일까지 검수해 완성도를 지킵니다."]
    , ["Discover team Create®", "WebCanBe의 제작 방식"]
    , ["Meet the people, culture, and energy that keep our work sharp and our days fun.", "프로젝트를 어떻게 정리하고 완성하는지 확인해보세요."]
    , ["Follow us on LinkedIn", "프로젝트 상담하기"]
    , ["—— Explore the most common questions about working with Create, all in one place.", "제작 전 가장 많이 묻는 내용을 한곳에 정리했습니다."]
    , ["Book a quick chat and we’ll walk you through how we do things.", "더 궁금한 내용은 간단한 상담으로 안내해드립니다."]
    , ["Lynn Bergmann", "WebCanBe"]
    , ["Project Manager", "프로젝트 안내"]
    , ["Do you work with startups as well as big companies?", "처음 공식 사이트를 만드는 경우도 가능한가요?"]
    , ["Yes. We’ve helped founders launch their first product and supported global teams scaling into new markets.", "가능합니다. 필요한 핵심 페이지부터 정리해 현재 단계에 맞는 범위로 시작합니다."]
    , ["How do you measure success for a project?", "프로젝트의 완성도는 어떻게 확인하나요?"]
    , ["We don’t stop at launch. Success is measured by how your audience responds — engagement, conversions, and long-term growth. We track performance and share insights so you see real outcomes, not just a polished design.", "디자인뿐 아니라 콘텐츠 전달, 모바일 사용성, 링크와 기능, 배포 상태까지 함께 검수합니다."]
    , ["Can we start small and scale later?", "작게 시작해 나중에 확장할 수 있나요?"]
    , ["Yes. Many clients begin with a focused project like a brand refresh or website revamp. As their needs grow, we expand into campaigns, strategy, and ongoing support. Flexibility is built into how we work.", "가능합니다. 현재 필요한 페이지부터 만들고 이후 콘텐츠와 기능을 추가할 수 있도록 구성합니다."]
    , ["WHAT OUR CLIENTS SAY", "PROJECT PERSPECTIVE"]
    , ["Partnerships that last, results that stick.", "사이트 하나로, 보이는 규모를 설계합니다."]
    , ["From kickoff to launch, brands trust us to stay close, adapt fast, and deliver without any drama.", "패션 비주얼과 제품 정보가 하나의 컬렉션 경험으로 이어지도록 설계했습니다."]
    , ["WRITE A REVIEW", "프로젝트 상담하기"]
    , ["Spotlight", "FACELESS"]
    , ["“They didn’t just hit the brief, they raised it. The project felt collaborative from start to finish, with clear updates, quick turns, and a final product that carried our brand further than we imagined.”", "컬렉션 이미지와 상품 정보가 분리되지 않고 하나의 드롭 경험으로 이어지도록 구성했습니다."]
    , ["Samuel Laronde", "FACELESS"]
    , ["Marketing Lead", "FASHION · EDITORIAL"]
    , ["September 2025", "PORTFOLIO WEBSITE"]
    , ["“From kickoff to launch, the process was fast-moving but never chaotic. Create kept everyone in the loop, solved issues before they became problems, and shipped exactly when they said they would.”", "채널 운영 방식과 제공 서비스를 첫 화면에서 바로 이해할 수 있도록 정보 순서를 설계했습니다."]
    , ["Matthew Parker", "VIDORA"]
    , ["Head of Product", "CREATOR · CHANNEL GROWTH"]
    , ["“They didn’t just design a website, they built a framework we can grow with. Every decision was backed with clarity, and the final product looks polished while staying practical for our team.”", "전략, 운영 과정과 상담 예약이 자연스럽게 이어지는 흐름을 만들었습니다."]
    , ["Maya Chen", "VIDORA"]
    , ["Brand Manager", "CREATOR · CHANNEL GROWTH"]
    , ["“They don’t just deliver a project and walk away. The team stayed close, fixed details on the fly, and made sure launch was smooth.”", "프로그램과 코치 정보를 멤버십과 방문 예약으로 연결했습니다."]
    , ["Mark Miller", "BASELINE"]
    , ["Creative Lead", "SPORTS · ACADEMY"]
    , ["“Working with Create felt effortless. They understood our vision from day one and kept us aligned through clear milestones. The end result was a site that actually elevated our brand voice, not just dressed it up.”", "코트의 분위기와 훈련 프로그램이 하나의 클럽 경험으로 느껴지도록 구성했습니다."]
    , ["Jordan Ellis", "BASELINE"]
    , ["Creative Director", "SPORTS · ACADEMY"]
    , ["BLACKWELL", "FACELESS"]
    , ["“Every meeting felt productive, every deadline was hit, and the end result nailed our brand better than we could describe.”", "강한 패션 비주얼이 컬렉션과 구매 흐름을 이끌도록 설계했습니다."]
    , ["Head of Design", "FASHION · EDITORIAL"]
    , ["“Create took our messy brief and turned it into a site we’re proud to show. Fast, sharp, and no overthinking.”", "콘텐츠 운영 서비스의 범위와 상담 경로를 짧고 분명하게 정리했습니다."]
    , ["MADISON SQUARE", "VIDORA"]
    , ["Madison Square", "VIDORA"]
    , ["“Create has a rare balance of speed and detail. They made complex flows simple, turned feedback into quick iterations, and delivered a product that’s both user-friendly and brand-right.”", "수업 선택부터 클럽 방문까지 필요한 정보를 한 흐름으로 구성했습니다."]
    , ["Margaret Brooks", "BASELINE"]
    , ["What bubbles up needs to be shared", "사이트는 공개된 뒤부터 시작됩니다"]
    , ["—— From new launches to design explorations and team experiments, this is where ideas take shape and stories unfold.", "구조를 잡고 콘텐츠를 쌓고 운영하는 데 필요한 판단을 정리합니다."]
    , ["Whispers - Blog", "WEBSITE GUIDE"]
    , ["From small sparks to big ideas.", "만들기 전에 알아야 할 것들"]
    , ["Articles, notes on creativity, strategy and making things work.", "기획, 디자인, 운영에 필요한 내용을 짧고 분명하게 정리합니다."]
    , ["Studio projects and case studies", "크리에이터 사이트 사례"]
    , ["Notes on design and process", "디자인과 제작 과정"]
    , ["Ideas, insights, and inspiration", "콘텐츠와 운영 아이디어"]
    , ["Rethinking Product Design with Intelligence", "콘텐츠를 공식 사이트로 정리하는 법"]
    , ["A SaaS product team approached us with an AI add-on. The challenge was to rethink AI not as a widget but as a foundation for smarter systems.", "여러 플랫폼에 흩어진 콘텐츠를 방문자가 이해하기 쉬운 하나의 흐름으로 정리합니다."]
    , ["Digital Identities Across Cultures", "링크 모음과 공식 사이트는 무엇이 다른가"]
    , ["Numeriq approached us to redefine their online presence. The challenge was balancing their street-level origins with their luxury aspirations.", "링크를 나열하는 화면과 사람을 기억하게 만드는 공식 공간의 차이를 살펴봅니다."]
    , ["Architecture in the Digital Age", "개인 브랜드의 첫 화면은 무엇을 보여줘야 할까"]
    , ["An architecture studio wanted its online presence to feel as ambitious as its buildings. The challenge was to move beyond static portfolios and reflect authority and vision.", "첫 5초 안에 누구인지, 무엇을 하는지, 어디로 가야 하는지 보여주는 기준입니다."]
    , ["The Future of E-Mobility Marketing from Lindholm", "크리에이터 커머스의 사이트 구조"]
    , ["Lindholm launched CREATOR 877, a new e-bike. The challenge was positioning it as both a lifestyle product and a piece of cutting-edge mobility tech.", "콘텐츠에서 상품과 강의, 뉴스레터까지 자연스럽게 이어지는 구조를 설계합니다."]
    , ["UX Strategist", "WebCanBe Guide"]
    , ["How Automotive Brands Win Online", "오픈 이후에도 사이트를 살아 있게 만드는 법"]
    , ["An automotive brand asked us to build a digital showroom. The challenge was giving customers an online experience that could rival the thrill of being behind the wheel.", "새 콘텐츠와 상품을 꾸준히 반영할 수 있는 운영 구조를 살펴봅니다."]
    , ["More Whispers", "가이드 더 보기"]
    , ["9 years", "ONE STUDIO"]
    , ["Building lasting partnerships, scaling brands, and shipping work that stands out.", "좋은 콘텐츠를 링크 하나에 묻어두지 마세요."]
    , ["120+ projects delivered", "방향부터 공개까지"]
    , ["99% on-time launches", "모바일과 인터랙션"]
    , ["84% average boost in engagement", "오픈 이후 운영"]
    , ["\"We listen first, stay transparent, and deliver what we promise.", "프로젝트를 들려주세요. 필요한 구조와 제작 범위를 먼저 정리해드립니다."]
    , ["Every project matters to us.\"", "상담은 creator@webcanbe.com에서 시작할 수 있습니다."]
    , ["CEO of Create®", "WebCanBe"]
    , ["BOOK AN INTRO CALL", "제작 상담하기"]
    , ["Get the latest news, insights directly to your inbox.", "프로젝트 내용을 남겨주시면 확인 후 연락드립니다."]
    , ["Get the latest news, insights directly to your inbox. *", "프로젝트 내용을 남겨주시면 확인 후 연락드립니다. *"]
    , ["By submitting, you agree to our Terms & Service.", "전송하면 개인정보 처리방침에 동의하게 됩니다."]
    , ["전송하면 개인정보 처리방침에 동의하게 됩니다. Terms & Service.", "전송하면 개인정보 처리방침에 동의하게 됩니다."]
    , ["Lindholm launched CREATOR 877, a new e-bike. The challenge 기존 positioning it as both a lifestyle product and a piece of cutting-edge mobility tech.", "콘텐츠에서 상품과 강의, 뉴스레터까지 자연스럽게 이어지는 구조를 설계합니다."]
    , ["* No spam, just awesome updates.", "* 프로젝트 문의 외 광고 메일을 보내지 않습니다."]
    , ["TERMS OF SERVICE", "이용약관"]
    , ["PRIVACY POLICY", "개인정보 처리방침"]
    , ["DISCLAIMER", "면책 안내"]
    , ["MORE TEMPLATES", ""]
    , ["Framer template", ""]
    , ["Blackwell", "WebCanBe"]
  ]);

  const benefitCardCopy = new Map([
    ["Industries served", "한 흐름에"],
    ["24h", "빠른 피드백"],
    ["Average Response Time", "결정은 선명하게"],
    ["First Draft Approved", "모든 화면에"],
    ["Ship on-Time", "실제 공개까지"],
    ["Core", "START"],
    ["START", "START"],
    ["For startups and first launches", "빠르게 시작하는 공식 사이트"],
    ["Studio", "CUSTOM"],
    ["소개", "CUSTOM"],
    ["For growing teams and serious builds", "브랜드 전체를 설계하는 맞춤 제작"],
    ["Scale", "EXPAND"],
    ["EXPAND", "EXPAND"],
    ["For established teams and long-term growth", "콘텐츠와 판매를 확장하는 사이트"]
  ]);

  const replaceTextWithin = (root, replacements) => {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach((node) => {
      const normalized = node.nodeValue.replace(/\s+/g, " ").trim();
      if (replacements.has(normalized)) node.nodeValue = node.nodeValue.replace(normalized, replacements.get(normalized));
    });
  };

  const replaceText = () => {
    replaceTextWithin(document.body, copy);
  };

  // Some Create headlines are split across animated character spans. Reuse those
  // exact nodes, rather than replacing their markup, so the original reveal motion
  // and layout rules remain intact.
  const replaceAnimatedTexts = (entries) => {
    const normalize = (value) => value.replace(/\s+/g, "").trim();
    const replacements = new Map(entries.map(([from, to]) => [normalize(from), to]));
    const candidates = [...document.querySelectorAll('*')]
      .filter((el) => replacements.has(normalize(el.textContent || '')))
      .sort((a, b) => (a.textContent || '').length - (b.textContent || '').length);
    const targets = candidates.filter((element) => !candidates.some((other) => other !== element && element.contains(other)));
    targets.forEach((element) => {
      const to = replacements.get(normalize(element.textContent || ''));
      if (to === undefined) return;
      const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT);
      const nodes = []; while (walker.nextNode()) nodes.push(walker.currentNode);
      let position = 0;
      nodes.forEach((node, index) => {
        const length = index === nodes.length - 1 ? Math.max(node.nodeValue.length, to.length - position) : node.nodeValue.length;
        node.nodeValue = to.slice(position, position + length);
        position += length;
      });
    });
  };

  const replaceAnimatedCopy = () => {
    const entries = [
      ['Digital experiences that connect, scale and perform', '당신의 이름을 하나의 브랜드로'],
      ['Digital experiences that connect, scale and perform.', '당신의 이름을 하나의 브랜드로'],
      ['A DESIGN STUDIO TRUSTED BY STARTUPS AND LEADING BRANDS.', 'CREATOR WEBSITE STUDIO'],
      ['SEE WORK', '서비스 보기'],
      ["LET'S CHAT", '제작 상담하기'],
      ['120+', '방향부터 공개까지'],
      ['Create\\Studio', 'WebCanBe'],
      ['WE LISTEN', '채널은 있습니다'],
      ['WE IMAGINE', '브랜드가 필요합니다'],
      ['WE CREATE', '이름이 기억되도록'],
      ['beautiful things', '웹에 남깁니다'],
      ['Services built on process, precision, and people.', '아이디어에서 공개까지'],
      ['We combine strategy, design, content, and technology, giving you a single partner for every stage of your brand’s growth.', '01 방향 · 02 구조 · 03 디자인 · 04 개발 · 05 공개'],
      ['Our process in motion', '생각이 화면이 되는 과정'],
      ['Designed to Make Your Life Easier', '링크를 모으는 건 쉽습니다. 브랜드를 만드는 건 다릅니다'],
      ['The proof behind our work', '프로젝트마다 역할이 달라야 합니다'],
      ['Brands who are part of our success story', '숫자는 성과가 아니라, 공개된 쇼케이스의 구성을 보여줍니다'],
      ['Brand Identity', '크리에이터 공식 사이트'],
      ['Strategy', '1인 브랜드 사이트'],
      ['Design & Innovation', '런칭 랜딩페이지'],
      ['AI Systems', '포트폴리오 사이트'],
      ['SEO', '인터랙티브 사이트'],
      ['Development', '맞춤형 웹 개발'],
      ['NEXT.JS', 'PERSONAL BRAND'],
      ['TYPESCRIPT', 'CONTENT ARCHIVE'],
      ['TAILWIND CSS', 'NEWSLETTER'],
      ['FRAMER MOTION', 'PARTNERSHIP INQUIRY'],
      ['CLOUDFLARE CDN', 'LIVE PORTFOLIO'],
      ['REACT', 'CREATOR COMMERCE'],
      ['WEBGL', 'COURSE · SHOP'],
      ['NODE.JS', 'LAUNCH PAGE'],
      ['AWS LAMBDA', 'EMAIL CAPTURE'],
      ['OPENAI EMBEDDINGS', 'LIVE PORTFOLIO'],
      ['FRAMER', 'PORTFOLIO'],
      ['GSAP', 'SERVICES'],
      ['META ADS INTEGRATION', 'LIVE PORTFOLIO'],
      ['The process behind our success', '좋은 사이트는 우연히 나오지 않습니다'],
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
      ['Every project is led by senior designers and developers. No handoffs to juniors figuring things out on the fly.', '프로젝트 방향에 따라 스크롤과 전환, 마우스 반응을 적용할 수 있습니다.'],
      ['We keep things simple: one main contact, weekly updates, and quick replies when you need us.', '최종 사이트 배포와 기본 도메인 연결까지 진행할 수 있습니다.'],
      ['We can stay involved — fixing issues, rolling out updates, or handling ongoing support if that’s part of your plan.', '필요에 따라 외부 결제·판매 플랫폼 또는 맞춤 기능을 연결할 수 있습니다.'],
      ['Let us inspire your next project', '당신의 이름을 웹에 남기세요'],
      ['BOOK A CALL', '상담하기'],
      ['Keep you in the loop.', 'WebCanBe와 시작하세요'],
      ['Get the latest news, insights directly to your inbox.', '크리에이터와 1인 브랜드를 위한 웹사이트 스튜디오'],
      ['we listen.', '먼저 듣고'],
      ['we imagine.', '정확히 정하고'],
      ['we create.', '끝까지 만듭니다'],
      ['Ideas', '당신의 이름을'],
      ['that start with you', '남는 브랜드로'],
      ['Client Satisfaction Rate', '맞춤 구조'],
      ['99.9%', '필요한 만큼'],
      ['12+', '콘텐츠·상품·문의'],
      ['INDUSTRIES SERVED', '한 흐름에'],
      ['24H', '빠른 피드백'],
      ['AVERAGE RESPONSE TIME', '결정은 선명하게'],
      ['96%', '반응형'],
      ['FIRST DRAFT APPROVED', '모든 화면에'],
      ['99%', '런칭'],
      ['SHIP ON-TIME', '실제 공개까지'],
      ['5 / 5 (98 reviews)', '오픈 이후'],
      ['Backed by feedback from 120+ brands we’ve worked with.', '수정과 확장까지 이어갈 수 있습니다.'],
      ['No reheated or pre-made.', '정해진 틀을 쓰지 않습니다.'],
      ['Every project starts fresh.', '처음부터 프로젝트에 맞게.'],
      ['Custom work', '맞춤 제작'],
      ['from day one.', '첫 단계부터.'],
      ['Simple Pricing', '시작은 분명하게'],
      ['Plans that scale with your project and give you room for unlimited creative opportunities.', '필요한 범위와 다음 단계를 한눈에 비교하세요.'],
      ['CORE', 'START'],
      ['FOR STARTUPS AND FIRST LAUNCHES', '빠르게 시작하는 공식 사이트'],
      ['STUDIO', '소개'],
      ['FOR GROWING TEAMS AND SERIOUS BUILDS', '브랜드 전체를 설계하는 맞춤 제작'],
      ['SCALE', 'EXPAND'],
      ['FOR ESTABLISHED TEAMS AND LONG-TERM GROWTH', '콘텐츠와 판매를 확장하는 사이트'],
      ['Pick a plan that grows with you and keeps creative costs predictable.', '필요한 범위를 확인한 뒤 비용을 안내합니다.'],
      ['Explore plans', '프로젝트 상담하기'],
      ['Built for the long run', '오픈 이후까지'],
      ['With You Beyond Launch', '사이트는 오픈 뒤에도 이어집니다'],
      ['Ongoing support', '운영 지원'],
      ['Long-term partnership', '필요한 수정'],
      ['Future-ready builds', '확장 가능한 구조'],
      ['Quick intro call, no strings attached.', '간단한 이야기부터 시작합니다.'],
      ["Let's chat or just say hello.", '무엇을 만들지 들려주세요.'],
      ['Next Availability', 'CONTACT'],
      ['from 14 September 2025', 'creator@webcanbe.com'],
      ['Book now', '제작 상담하기'],
      ['What Our Clients Say', 'PROJECT PERSPECTIVE'],
      ['What our clients say', 'PROJECT PERSPECTIVE'],
      ['Madison Square', 'VIDORA'],
      ['9 years', 'ONE STUDIO']
    ];

    const splitKeys = [
      '—— From first launches to lasting collaborations, we’re trusted to deliver on time and at quality.',
      'PROJECTS SHIPPED',
      'REPEAT COLLABORATIONS',
      'INDUSTRY AWARDS',
      'CLIENT RETENTION RATE',
      'The foundation of every project — how your brand looks, feels, and communicates.',
      'Positioning and messaging frameworks',
      'Visual identity systems',
      'Brand guidelines for consistent use',
      'Digital-first brand systems',
      'Branded assets across campaigns and touchpoints',
      'Clear direction backed by insight and planning to move from idea to execution.',
      'Market and audience research',
      'Product and campaign strategy',
      'User journey mapping',
      'Roadmaps and rollout planning',
      'Workshops and alignment sessions',
      'From first concepts to polished products that people want to use and share.',
      'UX and UI design',
      'Prototyping and user testing',
      'Digital product and service design',
      'Iteration and validation',
      'Launch planning and support',
      'Practical applications of AI to unlock smarter products and workflows.',
      'Define AI vision and roadmap',
      'Intelligent experience design',
      'Prototyping and proof-of-concepts',
      'Integration into platforms and workflows',
      'Team enablement and training',
      'Digital screen showing colorful data charts and analytics interface.',
      'Technical site audit',
      'Keyword research and content strategy',
      'On-page and metadata optimisation',
      'Link-building and authority growth',
      'Performance tracking and reporting',
      'Turning ideas and designs into scalable, functional, and reliable digital products.',
      'Web and app development',
      'CMS integration and setup',
      'E-commerce builds and optimisation',
      'Custom feature development',
      'Ongoing technical support',
      '—— We work with clarity, precision. Every step designed to move your project forward with confidence.',
      '—— Clear process, quick reviews, and a clean launch at the end. We keep the steps simple so projects never get stuck.',
      'Plans built to fit your next project',
      '—— Designed around your specs, each plan gives you clarity on scope, features, and cost so you can move forward with confidence.',
      'No serious faces. Real serious work.',
      '—— We bring sharp strategy and bold ideas, without the stiff boardroom vibe. Professional where it counts, human where it matters.',
      'Our leadership team involved from first kickoff to final delivery.',
      '—— Explore the most common questions about working with Create, all in one place.',
      'Book a quick chat and we’ll walk you through how we do things.',
      'WHAT OUR CLIENTS SAY',
      'What Our Clients Say',
      'What our clients say',
      'Partnerships that last, results that stick.',
      'From kickoff to launch, brands trust us to stay close, adapt fast, and deliver without any drama.',
      'MADISON SQUARE',
      'Madison Square',
      '9 years',
      'What bubbles up needs to be shared',
      '—— From new launches to design explorations and team experiments, this is where ideas take shape and stories unfold.',
      'Whispers - Blog',
      'A SaaS product team approached us with an AI add-on. The challenge was to rethink AI not as a widget but as a foundation for smarter systems.',
      'Digital Identities Across Cultures',
      'Numeriq approached us to redefine their online presence. The challenge was balancing their street-level origins with their luxury aspirations.',
      'Architecture in the Digital Age',
      'An architecture studio wanted its online presence to feel as ambitious as its buildings. The challenge was to move beyond static portfolios and reflect authority and vision.',
      'The Future of E-Mobility Marketing from Lindholm',
      'Lindholm launched CREATOR 877, a new e-bike. The challenge was positioning it as both a lifestyle product and a piece of cutting-edge mobility tech.',
      'How Automotive Brands Win Online',
      'An automotive brand asked us to build a digital showroom. The challenge was giving customers an online experience that could rival the thrill of being behind the wheel.',
      'Building lasting partnerships, scaling brands, and shipping work that stands out.',
      'Get the latest news, insights directly to your inbox.',
      'Get the latest news, insights directly to your inbox. *',
      'By submitting, you agree to our Terms & Service.',
      '전송하면 개인정보 처리방침에 동의하게 됩니다. Terms & Service.',
      'Lindholm launched CREATOR 877, a new e-bike. The challenge 기존 positioning it as both a lifestyle product and a piece of cutting-edge mobility tech.',
      'Backed by feedback from 맞춤형 brands we’ve worked with.',
      'Lindholm launched Aspen® 877, a new e-bike. The challenge was positioning it as both a lifestyle product and a piece of cutting-edge mobility tech.',
      '120+ projects delivered',
      '* No spam, just awesome updates.'
    ];
    splitKeys.forEach((from) => {
      const to = copy.get(from);
      if (to !== undefined) entries.push([from, to]);
    });
    replaceAnimatedTexts(entries);
  };

  const setMeta = () => {
    document.documentElement.lang = "ko";
    document.title = "WebCanBe — 크리에이터 웹사이트 스튜디오";
    const description = "WebCanBe는 크리에이터와 개인 브랜드를 위한 고급 공식 웹사이트를 디자인하고 개발합니다.";
    document.querySelectorAll('meta[name="description"], meta[property="og:description"], meta[name="twitter:description"]').forEach((el) => el.content = description);
    document.querySelectorAll('meta[property="og:title"], meta[name="twitter:title"]').forEach((el) => el.content = document.title);
    document.querySelectorAll('link[rel="icon"], link[rel="apple-touch-icon"]').forEach((el) => {
      el.href = "/assets/webcanbe-favicon.svg";
      el.removeAttribute("media");
    });
  };

  const setLinks = () => {
    const staticRoutes = new Map([
      ['/work', '/work.html'],
      ['/whispers', '/whispers.html'],
      ['/studio', '/studio.html'],
      ['/work/aurelis-beach', '/work/aurelis-beach.html'],
      ['/work/blackwell-motors', '/work/blackwell-motors.html'],
      ['/work/numeriq-fashion', '/work/numeriq-fashion.html'],
      ['/work/lindholm-aspen877', '/work/lindholm-aspen877.html'],
      ['/work/monolith-architecture', '/work/monolith-architecture.html'],
      ['/whispers/rethinking-product-design-with-intelligence', '/whispers/rethinking-product-design-with-intelligence.html'],
      ['/whispers/digital-identities-across-cultures', '/whispers/digital-identities-across-cultures.html'],
      ['/whispers/architecture-in-the-digital-age', '/whispers/architecture-in-the-digital-age.html'],
      ['/whispers/the-future-of-e-mobility-marketing-from-lindholm', '/whispers/the-future-of-e-mobility-marketing-from-lindholm.html'],
      ['/whispers/how-automotive-brands-win-online', '/whispers/how-automotive-brands-win-online.html'],
      ['/whispers/designing-trust-why-digital-brands-win-with-simplicity', '/whispers/designing-trust-why-digital-brands-win-with-simplicity.html'],
      ['/whispers/why-hospitality-brands-need-digital-experiences-that-feel-like-destinations', '/whispers/why-hospitality-brands-need-digital-experiences-that-feel-like-destinations.html'],
      ['/legal/terms-of-service', '/legal/terms-of-service.html'],
      ['/legal/privacy-policy', '/legal/privacy-policy.html'],
      ['/legal/disclaimer', '/legal/disclaimer.html'],
      ['/404', '/404.html']
    ]);
    document.querySelectorAll('a[aria-label*="Framer template"], a[href*="framerpod.com"]').forEach((a) => {
      if (/template|designed by tamas/i.test(`${a.textContent} ${a.getAttribute('aria-label') || ''}`)) a.remove();
    });
    document.querySelectorAll('a[href*="contact"]').forEach((a) => a.href = "contact.html");
    document.querySelectorAll('a[href^="mailto:"]').forEach((a) => a.href = "mailto:creator@webcanbe.com");
    document.querySelectorAll('a[href^="tel:"]').forEach((a) => a.href = "mailto:creator@webcanbe.com");
    document.querySelectorAll('a[href*="dub.sh/create"], a[href*="framerpod"], a[href*="tamasbodo"], a[href*="linkedin.com"], a[href*="whatsapp.com"], a[href*="glassdoor.com"]').forEach((a) => a.href = "contact.html");
    document.querySelectorAll('a[href*="instagram.com"], a[href*="facebook.com"], a[href*="threads.com"]').forEach((a) => {
      a.removeAttribute('href');
      a.removeAttribute('target');
      a.setAttribute('aria-hidden', 'true');
    });
    document.querySelectorAll('a[href*="framerpod"], a[href*="framer.com"]').forEach((a) => {
      if (/template|more templates/i.test(a.textContent)) a.remove();
    });
    document.querySelectorAll('a').forEach((a) => {
      try {
        const url = new URL(a.href, window.location.href);
        if (url.origin === window.location.origin) {
          const target = staticRoutes.get(url.pathname.replace(/\/$/, ''));
          if (target) a.href = `${target}${url.search}${url.hash}`;
          if (/^\/work(?:\.html)?\/?$/.test(url.pathname)) a.href = '#services';
          if (/^\/studio(?:\.html)?\/?$/.test(url.pathname)) a.href = '#about';
          if (/^\/whispers\/?$/.test(url.pathname)) a.href = 'whispers.html';
          if (url.pathname === '/') a.href = 'index.html';
          if (/^\/404(?:\.html)?\/?$/.test(url.pathname)) {
            a.hidden = true;
            a.setAttribute('aria-hidden', 'true');
          }
        }
      } catch (_) {}
      const label = a.textContent.replace(/\s+/g, ' ').trim();
      if (label.length < 80 && /제작 상담하기|프로젝트 상담하기|LET'S CHAT/i.test(label)) a.href = "contact.html";
      if (label.length < 40 && /서비스 보기|^서비스(?: 서비스)?$/.test(label)) a.href = "#services";
      if (label.length < 40 && /^소개(?: 소개)?$/.test(label)) a.href = "#about";
      if (label.length < 60 && /가이드 더 보기|^가이드(?: 가이드)?$/.test(label)) a.href = "whispers.html";
      if (/^홈(?: 홈)?$/.test(label)) a.href = "index.html";
      if (/^404(?: 404)?$/.test(label)) a.closest('[data-framer-name]')?.setAttribute('hidden', '');
    });
  };

  const removeUnsupportedClaims = () => {
    const claims = ["10+", "86+", "80%", "89%", "97%", "99%", "120+", "84%", "Rachel Morgan", "Edward Bright"];
    document.querySelectorAll("p, h1, h2, h3, div").forEach((el) => {
      if (el.children.length === 0 && claims.includes(el.textContent.trim())) el.textContent = "";
    });
  };

  // The pricing carousel mounts and recycles slides after the initial Framer
  // hydration. Re-apply the content layer only to this grid when those nodes
  // change so every desktop/mobile clone receives the same copy and assets.
  let benefitCardRefresh;
  const refreshBenefitCards = () => {
    window.clearTimeout(benefitCardRefresh);
    benefitCardRefresh = window.setTimeout(() => {
      replaceAnimatedCopy();
      replaceText();
      document.querySelectorAll('[data-framer-name="Benefit Cards"]').forEach((grid) => replaceTextWithin(grid, benefitCardCopy));
      curateHome();
      setLinks();
    }, 80);
  };

  const observeBenefitCards = () => {
    document.querySelectorAll('[data-framer-name="Benefit Cards"]').forEach((grid) => {
      if (grid.dataset.webcanbeObserved === 'true') return;
      grid.dataset.webcanbeObserved = 'true';
      new MutationObserver(refreshBenefitCards).observe(grid, { childList: true, subtree: true, characterData: true });
    });
    window.setTimeout(refreshBenefitCards, 1200);
    window.setTimeout(refreshBenefitCards, 2800);
  };

  let dynamicSectionRefresh;
  const observeDynamicSections = () => {
    ['Section | Introduction', 'Section | Featured Projects', 'Section | Statistics', 'Section | Services', 'Section | How we work', 'Section | Why Choose Us', 'Section | Pricing', 'Section | The Team', 'Section | Testimonial', 'Section | Blog Teaser', 'Section | Book a Call', 'Footer'].forEach((name) => {
      document.querySelectorAll(`[data-framer-name="${name}"]`).forEach((section) => {
        if (section.dataset.webcanbeObserved === 'true') return;
        section.dataset.webcanbeObserved = 'true';
        new MutationObserver(() => {
          window.clearTimeout(dynamicSectionRefresh);
          dynamicSectionRefresh = window.setTimeout(refreshContent, 120);
        }).observe(section, { childList: true, subtree: true, characterData: true });
      });
    });
  };

  let linkTargetRefresh;
  let linkTargetObserver;
  const observeLinkTargets = () => {
    if (!document.body) return;
    if (!linkTargetObserver) {
      linkTargetObserver = new MutationObserver(() => {
        window.clearTimeout(linkTargetRefresh);
        linkTargetRefresh = window.setTimeout(() => {
          linkTargetObserver.disconnect();
          refreshContent();
          observeLinkTargets();
        }, 80);
      });
    }
    linkTargetObserver.disconnect();
    linkTargetObserver.observe(document.body, { attributes: true, attributeFilter: ['href'], subtree: true });
  };

  const curateHome = () => {
    const sections = {
      'Section | Introduction': 'about',
      'Section | Services': 'services',
      'Section | Featured Projects': 'showcase',
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
    const showcaseProjects = [
      {
        name: 'FACELESS',
        category: 'FASHION · COMMERCE',
        details: '패션 비주얼과 컬렉션을\n드롭 중심의 쇼핑 경험으로\n정리한 포트폴리오 사이트\nEDITORIAL COMMERCE\nLIVE SITE',
        mobileDetails: 'LOOK\nDROP\nSHOP\nEDIT\nLIVE',
        image: 'assets/portfolio-faceless.png',
        alt: 'FACELESS 패션 포트폴리오 웹사이트 대표 화면',
        url: 'https://webcanbe-portfoliofacelessdrop.vercel.app/'
      },
      {
        name: 'VIDORA',
        category: 'CREATOR · YOUTUBE',
        details: '유튜브 채널의 전략과\n콘텐츠 운영 과정을\n상담 흐름으로 이어주는 사이트\nCHANNEL MANAGEMENT\nLIVE SITE',
        mobileDetails: 'PLAN\nFILM\nFLOW\nCALL\nLIVE',
        image: 'assets/portfolio-vidora.jpg',
        alt: 'VIDORA 크리에이터 채널 운영 웹사이트 대표 영상 장면',
        url: 'https://webcanbe-portfoliovidora.vercel.app/'
      },
      {
        name: 'BASELINE',
        category: 'SPORTS · ACADEMY',
        details: '프로그램과 코치 정보를\n멤버십과 방문 예약으로\n연결하는 아카데미 사이트\nSPORTS EDUCATION\nLIVE SITE',
        mobileDetails: 'PLAY\nTEAM\nCLUB\nBOOK\nLIVE',
        image: 'assets/portfolio-baseline.webp',
        alt: 'BASELINE 테니스 클럽과 아카데미 웹사이트 대표 화면',
        url: 'https://base-line-rho.vercel.app/'
      }
    ];
    const showcaseLinks = [...document.querySelectorAll('[data-framer-name="Section | Featured Projects"] a[data-framer-name="Image"]')];
    showcaseLinks.forEach((link, index) => {
      const project = showcaseProjects[index];
      if (!project) return;
      const card = link.parentElement;
      const image = link.querySelector('img');
      if (image) {
        image.src = project.image;
        image.removeAttribute('srcset');
        image.alt = project.alt;
      }
      const labels = card ? [...card.querySelectorAll('p')] : [];
      if (labels[0]) labels[0].textContent = project.name;
      if (labels[1]) labels[1].textContent = project.category;
      if (labels[2]) labels[2].textContent = window.matchMedia('(max-width: 809.98px)').matches ? project.mobileDetails : project.details;
      if (labels[4]) labels[4].textContent = '2026';
      link.href = project.url;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.setAttribute('aria-label', `${project.name} 실제 사이트 새 탭에서 보기`);
      link.style.cursor = 'pointer';
    });
    replaceImage('[data-framer-name="Section | How we work"] img[alt^="Abstract dark background"]', 'assets/webcanbe-process-storyboard.png', '크리에이터 웹사이트를 설계하는 WebCanBe의 제작 과정');
    replaceImage('[data-framer-name="Section | How we work"] img[alt^="Futuristic black and white concept car"]', 'assets/webcanbe-process-detail.png', '개인 브랜드 웹사이트 프로토타입 검수 과정');
    replaceImage('[data-framer-name="Section | Blog Teaser"] img[alt="Abstract 3D composition of floating spheres and cubes in monochrome tones with soft lighting."]', 'assets/webcanbe-guide-content-structure.png', '콘텐츠가 많아질수록 웹사이트 구조가 중요한 이유');
    replaceImage('[data-framer-name="Section | Blog Teaser"] img[alt^="A person in a white hoodie and joggers"]', 'assets/webcanbe-guide-link-vs-site.png', '링크 모음과 공식 웹사이트의 차이');
    replaceImage('[data-framer-name="Section | Blog Teaser"] img[alt="Modern glass building photographed from below"]', 'assets/webcanbe-guide-first-screen.png', '개인 브랜드 웹사이트 첫 화면을 설계하는 과정');
    replaceImage('[data-framer-name="Section | Blog Teaser"] img[alt="Electric Bike behind Pillar"]', 'assets/webcanbe-guide-creator-commerce.png', '크리에이터 커머스 웹사이트의 콘텐츠 흐름');
    replaceImage('[data-framer-name="Section | Blog Teaser"] img[alt="red sports car in front of a showroom with bright lights"]', 'assets/webcanbe-guide-site-operations.png', '오픈 이후 크리에이터 웹사이트를 운영하는 모습');
    replaceImage('img[alt="Logo"]', 'assets/webcanbe-wordmark.svg', 'WebCanBe');
    replaceImage('img[src*="aJxLydBlZv1oYCCj63OZdiRqLuQ"]', 'assets/webcanbe-wordmark.svg', 'WebCanBe');
    replaceImage('[data-framer-name="Benefit Cards"] img[alt^="Minimalist stack of guideline with clean typography and red covers"]', 'assets/webcanbe-design-process.png', 'WebCanBe의 맞춤 웹사이트 설계 과정');
    replaceImage('[data-framer-name="Benefit Cards"] img[alt^="Minimalist stack of guideline with clean typography and blue covers"]', 'assets/webcanbe-creator-workspace.png', '개인 브랜드 웹사이트를 설계하는 크리에이터 스튜디오');
    replaceImage('[data-framer-name="Benefit Cards"] img[alt^="Minimalist stack of guideline with clean typography and monochrome covers"]', 'assets/webcanbe-benefit-launch.png', '크리에이터 웹사이트의 반응형 검수와 공개 준비');
    replaceImage('[data-framer-name="Section | Pricing"] img[alt^="Minimalist stack of guideline with clean typography and red covers"]', 'assets/webcanbe-option-start.png', 'START 공식 웹사이트 제작 범위');
    replaceImage('[data-framer-name="Section | Pricing"] img[alt^="Minimalist stack of guideline with clean typography and blue covers"]', 'assets/webcanbe-option-custom.png', 'CUSTOM 개인 브랜드 웹사이트 제작 범위');
    replaceImage('[data-framer-name="Section | Pricing"] img[alt^="Minimalist stack of guideline with clean typography and monochrome covers"]', 'assets/webcanbe-option-expand.png', 'EXPAND 크리에이터 커머스 제작 범위');
    replaceImage('[data-framer-name="Section | Book a Call"] img[alt^="Man with short hair and beard"]', 'assets/webcanbe-contact-creator.png', '프로젝트를 준비하는 개인 브랜드 크리에이터');
    replaceImage('[data-framer-name="Section | Testimonial"] img[alt^="Smiling man wearing glasses and a grey shirt"]', 'assets/portfolio-faceless.png', 'FACELESS 프로젝트 관점 대표 화면');
    replaceImage('[data-framer-name="Section | Testimonial"] [data-framer-name="Avatar"] img', 'assets/portfolio-faceless.png', 'FACELESS 프로젝트 관점 대표 화면');
    const perspectiveCopy = new Map([
      ['채널 운영 방식과 제공 서비스를 첫 화면에서 바로 이해할 수 있도록 정보 순서를 설계했습니다.', '첫 화면에서 컬렉션의 분위기와 상품 구성을 바로 파악할 수 있도록 정보 순서를 설계했습니다.'],
      ['전략, 운영 과정과 상담 예약이 자연스럽게 이어지는 흐름을 만들었습니다.', '컬렉션 소개에서 각 드롭의 상세 화면으로 자연스럽게 이어지는 흐름을 만들었습니다.'],
      ['프로그램과 코치 정보를 멤버십과 방문 예약으로 연결했습니다.', '상품 비주얼이 중심이 되되 필요한 정보는 놓치지 않도록 구성했습니다.'],
      ['코트의 분위기와 훈련 프로그램이 하나의 클럽 경험으로 느껴지도록 구성했습니다.', '흑백 비주얼과 강한 여백으로 FACELESS만의 인상이 먼저 남도록 구성했습니다.'],
      ['콘텐츠 운영 서비스의 범위와 상담 경로를 짧고 분명하게 정리했습니다.', '각 컬렉션의 다른 이미지를 같은 브랜드 문법 안에서 보여주도록 정리했습니다.'],
      ['수업 선택부터 클럽 방문까지 필요한 정보를 한 흐름으로 구성했습니다.', '컬렉션 탐색에서 상품 선택까지 한 흐름으로 이어지도록 구성했습니다.']
    ]);
    document.querySelectorAll('[data-framer-name="Section | Testimonial"] p').forEach((label) => {
      const value = label.textContent.replace(/\s+/g, ' ').trim();
      const perspective = perspectiveCopy.get(value);
      if (perspective) label.textContent = perspective;
      else if (/^(VIDORA|BASELINE)$/i.test(value)) label.textContent = 'FACELESS';
      else if (/^(CREATOR · CHANNEL GROWTH|SPORTS · ACADEMY)$/i.test(value)) label.textContent = 'FASHION · EDITORIAL';
      else if (/Backed by feedback from/i.test(value)) label.textContent = '실제 공개된 사이트가 제공하는 경험을 프로젝트 관점에서 정리했습니다.';
      else if (/^(Rachel Morgan|Edward Bright|WEBCANBE)$/i.test(value)) label.textContent = 'FACELESS';
      else if (/^(콘텐츠 구조|INTERACTION)$/i.test(value)) label.textContent = 'FASHION · EDITORIAL';
      else if (value === '오픈 이후') label.textContent = 'PROJECT PERSPECTIVE';
    });
    document.querySelectorAll('[data-framer-name="Section | Testimonial"] [data-framer-name="Logo Mark"] img').forEach((logo) => {
      logo.src = 'assets/webcanbe-wordmark.svg';
      logo.alt = 'WebCanBe';
      logo.setAttribute('aria-label', 'WebCanBe');
      logo.style.filter = 'none';
    });
    document.querySelectorAll('[data-framer-name="Section | Testimonial"] [data-framer-name="Stars"]').forEach((stars) => stars.style.display = 'none');
    document.querySelectorAll('[data-framer-name="Menu"] [data-framer-name="Logo Mark"] img').forEach((logo) => logo.style.filter = 'invert(1)');
    replaceImage('[data-framer-name^="Benefit Card 06"] img[alt^="3D character wearing an orange jumpsuit"]', 'assets/webcanbe-benefit-launch.png', '크리에이터 웹사이트의 반응형 검수와 공개 준비');
    document.querySelectorAll('[data-framer-name="Benefit Cards"] [data-framer-name="Stars"]').forEach((stars) => stars.style.display = 'none');
    document.querySelectorAll('[data-framer-name^="Benefit Card 06"] video').forEach((video) => {
      video.pause();
      video.poster = 'assets/webcanbe-creator-workspace.png';
      video.removeAttribute('src');
      video.querySelectorAll('source').forEach((source) => source.remove());
      video.setAttribute('aria-label', '개인 브랜드 웹사이트를 설계하는 크리에이터');
      video.load();
    });
    document.querySelectorAll('[data-framer-name^="Benefit Card 06"] a').forEach((link) => link.href = 'contact.html');
    document.querySelectorAll('[data-framer-name="Section | Hero"] video').forEach((video) => {
      const control = video.closest('[data-framer-name="Desktop"]') || video.parentElement;
      control?.querySelectorAll('a').forEach((link) => {
        link.removeAttribute('href');
        link.removeAttribute('target');
      });
      if (!control || control.dataset.webcanbeVideoControl === 'true') return;
      control.dataset.webcanbeVideoControl = 'true';
      control.setAttribute('role', 'button');
      control.setAttribute('tabindex', '0');
      control.setAttribute('aria-label', 'Hero 영상 재생 또는 일시정지');
      const toggleVideo = (event) => {
        event.preventDefault();
        event.stopPropagation();
        event.stopImmediatePropagation();
        if (video.paused) video.play().catch(() => {});
        else video.pause();
      };
      control.addEventListener('click', toggleVideo, true);
      control.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') toggleVideo(event);
      }, true);
    });
    document.querySelectorAll('[data-framer-name="Section | Hero"] number-flow-react[aria-label="120+"]').forEach((counter) => {
      counter.remove();
    });
    document.querySelectorAll('[data-framer-name="Section | Hero"] [data-framer-name="Phone"] p').forEach((label) => {
      if (label.textContent.includes('크리에이터와 개인 브랜드를 위한 고급 공식 웹사이트 제작 스튜디오')) {
        label.textContent = '맞춤 설계 · 공식 웹사이트';
      }
    });
    document.querySelectorAll('[data-framer-name="Section | Featured Projects"] a[data-framer-name="Icon - Orange"]').forEach((link) => {
      link.href = '#showcase';
      link.removeAttribute('target');
      link.removeAttribute('rel');
      link.setAttribute('aria-label', '포트폴리오 처음부터 다시 보기');
    });
    const showcaseMetrics = ['03', '03', '01', '24/7'];
    document.querySelectorAll('[data-framer-name="Section | Statistics"] number-flow-react').forEach((counter, index) => {
      const value = showcaseMetrics[index % showcaseMetrics.length];
      const metric = document.createElement('span');
      metric.textContent = value;
      metric.setAttribute('role', 'img');
      metric.setAttribute('aria-label', value);
      metric.style.cssText = `${counter.style.cssText};display:inline-block;white-space:nowrap;`;
      counter.replaceWith(metric);
    });
    document.querySelectorAll('[data-framer-name="Section | Statistics"]').forEach((section) => {
      [...section.querySelectorAll('[role="img"]')].forEach((metric, index) => {
        const value = showcaseMetrics[index % showcaseMetrics.length];
        metric.textContent = value;
        metric.setAttribute('aria-label', value);
      });
      const metricLabels = new Map([
        ['공개포트폴리오', '공개 포트폴리오'],
        ['서로다른방향', '서로 다른 방향'],
        ['공식브랜드공간', '공식 브랜드 공간'],
        ['언제든열리는채널', '언제든 열리는 채널']
      ]);
      section.querySelectorAll('p').forEach((label) => {
        const replacement = metricLabels.get(label.textContent.replace(/\s+/g, ''));
        if (replacement) label.textContent = replacement;
      });
    });
    document.querySelectorAll('[data-framer-name="Section | The Team"]').forEach((section) => {
      section.style.display = 'none';
      section.setAttribute('aria-hidden', 'true');
    });
    document.querySelectorAll('[data-framer-name="Menu"] p, [data-framer-name="Menu"] span').forEach((label) => {
      if (label.children.length === 0 && /^(5|7)$/.test(label.textContent.trim())) label.style.display = 'none';
    });
    document.querySelectorAll('[data-framer-name="Case Study - Counter"], [data-framer-name="Whispers - Counter"]').forEach((badge) => badge.style.display = 'none');
    document.querySelectorAll('input[placeholder="Enter Your Email"]').forEach((input) => input.placeholder = '이메일을 입력하세요');
    document.querySelectorAll('[data-framer-name="Socials Links"]').forEach((links) => {
      links.style.display = 'none';
      links.setAttribute('aria-hidden', 'true');
    });
    document.querySelectorAll('[aria-label="Social media link"]').forEach((link) => link.setAttribute('aria-label', 'WebCanBe 링크'));
    document.querySelectorAll('[data-framer-name="Section | Pricing"] p').forEach((label) => {
      if (label.textContent.trim() === 'was') label.textContent = '기존';
    });
    document.querySelectorAll('[data-framer-name="Section | Pricing"]').forEach((section) => {
      replaceTextWithin(section, new Map([
        ['소개', 'CUSTOM'], ['STARTER PLAN', 'OFFICIAL WEBSITE'],
        ['ADVANCED PLAN', 'PERSONAL BRAND WEBSITE'], ['GROWTH PLAN', 'CREATOR COMMERCE']
      ]));
      const planLabels = new Map([
        ['STARTER PLAN', 'OFFICIAL WEBSITE'], ['ADVANCED PLAN', 'PERSONAL BRAND WEBSITE'],
        ['GROWTH PLAN', 'CREATOR COMMERCE']
      ]);
      section.querySelectorAll('p').forEach((label) => {
        const replacement = planLabels.get(label.textContent.replace(/\s+/g, ' ').trim().toUpperCase());
        if (replacement) label.textContent = replacement;
      });
    });
    const guideLabels = new Map([
      ['개발', 'CONTENT'],
      ['웹 개발과 인터랙션', 'WEBSITE DESIGN'],
      ['CREATOR · TECHNOLOGY', 'WEBSITE GUIDE'],
      ['FACELESS', 'WebCanBe'],
      ['WebCanBe Guide', 'WEBSITE GUIDE']
    ]);
    document.querySelectorAll('[data-framer-name="Section | Blog Teaser"] p').forEach((label) => {
      const replacement = guideLabels.get(label.textContent.replace(/\s+/g, ' ').trim());
      if (replacement) label.textContent = replacement;
    });
    document.querySelectorAll('[data-framer-name="Section | Blog Teaser"] a').forEach((link) => {
      link.href = 'whispers.html';
      link.removeAttribute('target');
    });
    const guideMeta = [
      ['WebCanBe', 'CONTENT STRUCTURE', 'WEBSITE GUIDE'],
      ['WebCanBe', 'LINK PAGE · OFFICIAL SITE', 'WEBSITE GUIDE'],
      ['WebCanBe', 'FIRST IMPRESSION', 'WEBSITE GUIDE'],
      ['WebCanBe', 'CREATOR COMMERCE', 'WEBSITE GUIDE'],
      ['WebCanBe', 'SITE OPERATIONS', 'WEBSITE GUIDE']
    ];
    const guideCards = [...document.querySelectorAll('[data-framer-name="Section | Blog Teaser"] a')].filter((link) =>
      /콘텐츠를 공식 사이트|링크 모음과 공식 사이트|개인 브랜드의 첫 화면|크리에이터 커머스|오픈 이후에도 사이트/.test(link.textContent)
    );
    guideCards.forEach((card, cardIndex) => {
      const paragraphs = [...card.querySelectorAll('p')];
      const labels = paragraphs.slice(0, Math.max(0, paragraphs.length - 2));
      labels.forEach((label, labelIndex) => {
        label.textContent = guideMeta[cardIndex]?.[labelIndex] || 'WEBSITE GUIDE';
      });
    });
    document.querySelectorAll('[data-framer-name="Section | How we work"] a[href*="/work/"]').forEach((link) => {
      link.removeAttribute('href');
      link.removeAttribute('target');
      link.setAttribute('aria-label', 'WebCanBe 제작 과정 비주얼');
      link.style.cursor = 'default';
    });
    const projectLabels = new Map([
      ['Lindholm', 'WebCanBe'], ['Monolith', 'WebCanBe'], ['Vornberg', 'WebCanBe'],
      ['Wendrich', 'WebCanBe'], ['Aurelis', 'WebCanBe'], ['Morisson', 'WebCanBe']
    ]);
    document.querySelectorAll('[data-framer-name="Company"] p').forEach((label) => {
      const replacement = projectLabels.get(label.textContent.trim());
      if (replacement) label.textContent = replacement;
    });
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

  const sanitizeUserFacingSignals = () => {
    const rules = [
      [/\b(?:DEMO|CONCEPT) PROJECT REVIEW\b/gi, 'PROJECT PERSPECTIVE'],
      [/\bFICTIONAL TESTIMONIAL\b/gi, 'PROJECT PERSPECTIVE'],
      [/\b(?:DEMO|CONCEPT) PROJECT\b/gi, 'SHOWCASE'],
      [/\bmock project\b/gi, 'portfolio project'],
      [/\bfictional\b/gi, 'project-based'],
      [/\bplaceholders?\b/gi, 'reference'],
      [/\bsamples?\b/gi, 'reference'],
      [/\bdemos?\b/gi, 'showcase'],
      [/\bconcepts\b/gi, 'directions'],
      [/\bconcept\b/gi, 'direction'],
      [/데모 프로젝트/g, '포트폴리오'],
      [/콘셉트 프로젝트/g, '포트폴리오'],
      [/가상 사용자 후기/g, '프로젝트 관점'],
      [/가상의?/g, '프로젝트 기반'],
      [/데모/g, '쇼케이스'],
      [/콘셉트/g, '방향'],
      [/샘플/g, '참고']
    ];
    const sanitize = (value) => rules.reduce((result, [pattern, replacement]) => result.replace(pattern, replacement), value);
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode: (node) => /^(SCRIPT|STYLE|NOSCRIPT|CODE|PRE)$/.test(node.parentElement?.tagName || '')
        ? NodeFilter.FILTER_REJECT
        : NodeFilter.FILTER_ACCEPT
    });
    const textNodes = [];
    while (walker.nextNode()) textNodes.push(walker.currentNode);
    textNodes.forEach((node) => {
      const next = sanitize(node.nodeValue || '');
      if (next !== node.nodeValue) node.nodeValue = next;
    });
    document.querySelectorAll('[alt], [title], [aria-label], [placeholder]').forEach((element) => {
      ['alt', 'title', 'aria-label', 'placeholder'].forEach((attribute) => {
        const value = element.getAttribute(attribute);
        if (!value) return;
        const next = sanitize(value);
        if (next !== value) element.setAttribute(attribute, next);
      });
    });
  };

  const refreshContent = () => {
    setMeta();
    replaceAnimatedCopy();
    replaceText();
    setLinks();
    removeUnsupportedClaims();
    curateHome();
    sanitizeUserFacingSignals();
  };
  const run = () => { refreshContent(); observeBenefitCards(); observeDynamicSections(); observeLinkTargets(); setContactForm(); };
  // Framer hydrates its exported markup asynchronously. Wait for the main
  // module to finish before changing the DOM so React can hydrate cleanly.
  let contentLayerStarted = false;
  const scheduleContentLayer = () => {
    if (contentLayerStarted) return;
    contentLayerStarted = true;
    window.setTimeout(run, 600);
    window.setTimeout(refreshContent, 2600);
    window.setTimeout(refreshContent, 5200);
    window.setTimeout(refreshContent, 8200);
  };
  const start = () => {
    const framerBundle = document.querySelector('script[data-framer-bundle="main"]');
    const bundleEntry = framerBundle?.src ? window.performance?.getEntriesByName?.(framerBundle.src)?.[0] : null;
    if (!framerBundle || bundleEntry?.responseEnd > 0) scheduleContentLayer();
    else framerBundle.addEventListener('load', scheduleContentLayer, { once: true });
    window.setTimeout(scheduleContentLayer, 8000);
  };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start);
  else start();
})();
