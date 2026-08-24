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
    ["BUILD", "BUILD"],
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

  // International edition: rewrite the Korean content layer for creator-led
  // businesses while leaving Create's exported layout and motion untouched.
  const internationalCopy = new Map([
    ["당신의 이름을 하나의 브랜드로", "You built the audience. Now build the brand around it."],
    ["크리에이터와 개인 브랜드를 위한 고급 공식 웹사이트 제작 스튜디오", "Premium websites for creators whose audience has become a business."],
    ["채널은 이미 있습니다. 이제 브랜드가 필요합니다.", "A CHANNEL IS NOT A BRAND."],
    ["서비스 보기", "VIEW OUR WORK"],
    ["제작 상담하기", "START A PROJECT"],
    ["프로젝트 상담하기", "START A PROJECT"],
    ["프로젝트 문의", "START A PROJECT"],
    ["상담하기", "START A PROJECT"],
    ["프로젝트마다 역할이 달라야 합니다.", "Different people. Different businesses. Different websites."],
    ["프로젝트마다 역할이 달라야 합니다", "Different people. Different businesses. Different websites."],
    ["패션, 크리에이터, 교육 서비스까지 서로 다른 목적을 각자의 웹 경험으로 설계했습니다.", "Built around the person, audience and business behind each project."],
    ["숫자는 성과가 아니라, 공개된 쇼케이스의 구성과 사이트가 맡는 역할을 보여줍니다.", "A focused selection across creator media and commerce."],
    ["숫자는 성과가 아니라, 공개된 쇼케이스의 구성을 보여줍니다", "A focused selection across creator media and commerce."],
    ["이름이 커질수록, 공식 공간도 필요합니다.", "Websites for creator-led businesses."],
    ["크리에이터 공식 사이트", "CREATOR WEBSITE"],
    ["1인 브랜드 사이트", "PERSONAL BRAND"],
    ["런칭 랜딩페이지", "CREATOR COMMERCE"],
    ["포트폴리오 사이트", "LAUNCH EXPERIENCE"],
    ["인터랙티브 브랜드 사이트", "INTERACTIVE WEBSITE"],
    ["인터랙티브 사이트", "INTERACTIVE WEBSITE"],
    ["맞춤형 웹 개발", "WEB DEVELOPMENT"],
    ["브랜드의 인상과 메시지를 하나의 공식 사이트로 정리합니다.", "The central home for your content, offers, audience and partnerships."],
    ["포지셔닝과 핵심 메시지", "Positioning and core message"],
    ["비주얼 아이덴티티", "Visual identity system"],
    ["일관된 브랜드 가이드", "Consistent brand direction"],
    ["디지털 중심 브랜드 시스템", "Digital-first brand system"],
    ["채널별 브랜드 자산", "Assets for every channel"],
    ["아이디어를 실행으로 옮길 수 있도록 방향과 우선순위를 정리합니다.", "Turn your name, expertise and work into a brand people understand and remember."],
    ["시장과 고객 이해", "Audience and market context"],
    ["콘텐츠와 상품 전략", "Content and offer strategy"],
    ["사용자 흐름 설계", "Audience journey"],
    ["제작 로드맵", "Clear production roadmap"],
    ["방향 정리 세션", "Direction workshop"],
    ["아이디어를 사람들이 사용하고 공유할 수 있는 화면으로 완성합니다.", "Connect content and audience with products, memberships and commerce."],
    ["UX·UI 디자인", "UX and UI design"],
    ["프로토타입과 사용성 확인", "Prototype and usability review"],
    ["디지털 서비스 디자인", "Commerce experience design"],
    ["피드백과 개선", "Focused feedback rounds"],
    ["런칭 계획과 지원", "Launch planning and support"],
    ["콘텐츠와 프로젝트가 더 잘 보이도록 구조와 경험을 설계합니다.", "High-converting launch experiences for courses, books, products and digital offers."],
    ["포트폴리오 구조 설계", "Launch narrative and structure"],
    ["콘텐츠 중심 화면 설계", "Content-led art direction"],
    ["핵심 페이지 프로토타입", "Core-page prototype"],
    ["외부 플랫폼 연결", "Platform integrations"],
    ["운영 방식 안내", "Launch handoff"],
    ["콘텐츠와 활동이 자연스럽게 이어지는 인터랙티브 웹사이트.", "Premium motion and interaction for brands that need to feel unmistakably their own."],
    ["사이트 구조 점검", "Experience and structure audit"],
    ["검색과 콘텐츠 전략", "Content and discovery strategy"],
    ["페이지와 메타데이터 최적화", "Page and metadata setup"],
    ["채널과 콘텐츠 연결", "Platform and content connections"],
    ["성능 확인과 개선", "Performance review"],
    ["디자인을 실제로 작동하는 안정적인 웹사이트로 구현합니다.", "Design, development and interaction—built as one reliable system."],
    ["웹사이트 개발", "Responsive development"],
    ["CMS 연결", "CMS setup"],
    ["판매 기능 연결", "Commerce integrations"],
    ["맞춤 기능 개발", "Custom functionality"],
    ["오픈 이후 기술 지원", "Post-launch support"],
    ["좋은 사이트는 우연히 나오지 않습니다.", "Clear scope. Written feedback. No unnecessary meetings."],
    ["좋은 사이트는 우연히 나오지 않습니다", "Clear scope. Written feedback. No unnecessary meetings."],
    ["목표가 선명해질 때까지 묻고, 공개해도 될 때까지 다듬습니다.", "An async-first workflow for clear decisions and steady progress."],
    ["아이디어에서 공개까지", "BRIEF TO LAUNCH"],
    ["01 방향 · 02 구조 · 03 디자인 · 04 개발 · 05 공개", "01 INQUIRY + BRIEF · 02 PROPOSAL + DEPOSIT · 03 DESIGN + BUILD · 04 FEEDBACK + LAUNCH"],
    ["상담", "INQUIRY + BRIEF"],
    ["방향 및 구조 설계", "PROPOSAL + DEPOSIT"],
    ["디자인", "DESIGN + BUILD"],
    ["개발 및 인터랙션", "WRITTEN FEEDBACK + LAUNCH"],
    ["무엇을 만드는지보다 왜 필요한지부터 확인합니다.", "Tell us what you're building. We turn it into a focused written brief."],
    ["방문자가 이해할 순서와 핵심 페이지를 정합니다.", "You receive a clear scope, timeline and revision plan. A 50% deposit starts the project."],
    ["이름과 활동이 한눈에 보이는 화면을 만듭니다.", "We shape the structure, design the experience and build the responsive site."],
    ["반응형과 인터랙션을 구현하고 실제로 공개합니다.", "Review in writing. Final payment is due before testing, handoff and launch."],
    ["콘텐츠, 뉴스레터, 상품과 협업 문의가 하나의 개인 브랜드 경험으로 이어지도록 구성했습니다.", "A content-first home built for a creator whose brand goes beyond a single channel."],
    ["생각이 화면이 되는 과정", "A creator business, in motion."],
    ["스토리를 정리하고, 인터페이스를 만들고, 모든 화면을 검수합니다.", "Strategy, interface and responsive build—resolved as one system."],
    ["링크를 모으는 건 쉽습니다. 브랜드를 만드는 건 다릅니다", "A bigger audience deserves more than a link page."],
    ["보이는 방식, 쓰이는 흐름, 공개 이후까지. 차이는 디테일에서 생깁니다.", "Platforms are where people discover you. Your website is where they understand you."],
    ["먼저 듣고", "BUILT AROUND YOU"],
    ["정확히 정하고", "CONTENT FIRST"],
    ["끝까지 만듭니다", "MADE TO CONVERT"],
    ["당신의 이름을", "DESIGNED TO LAST"],
    ["남는 브랜드로", "ONE OWNED HOME"],
    ["맞춤 구조", "BUILT AROUND YOU"],
    ["필요한 만큼", "NOT A GENERIC TEMPLATE"],
    ["콘텐츠·상품·문의", "CONTENT FIRST"],
    ["한 흐름에", "ONE CLEAR EXPERIENCE"],
    ["빠른 피드백", "CLEAR PATHS"],
    ["결정은 선명하게", "TO NEWSLETTERS, PRODUCTS + INQUIRIES"],
    ["반응형", "RESPONSIVE"],
    ["모든 화면에", "EVERY SCREEN"],
    ["런칭", "BUILT TO LAUNCH"],
    ["실제 공개까지", "DESIGN + DEVELOPMENT"],
    ["오픈 이후", "READY TO GROW"],
    ["채널은 있습니다", "LISTEN"],
    ["브랜드가 필요합니다", "SHAPE"],
    ["이름이 기억되도록", "BUILD"],
    ["웹에 남깁니다", "LAUNCH"],
    ["수정과 확장까지 이어갈 수 있습니다.", "A site that can grow with the business behind your audience."],
    ["정해진 틀을 쓰지 않습니다.", "Built around you."],
    ["처음부터 프로젝트에 맞게.", "Never pulled from a generic creator template."],
    ["맞춤 제작", "CUSTOM BY DEFAULT"],
    ["첫 단계부터.", "FROM DAY ONE"],
    ["시작은 분명하게", "Projects start at $2,500."],
    ["필요한 범위와 다음 단계를 한눈에 비교하세요.", "Most creator-business websites are $3,500–$5,000, depending on scope."],
    ["빠르게 시작하는 공식 사이트", "A focused home for your brand."],
    ["브랜드 전체를 설계하는 맞춤 제작", "Built around the business behind the audience."],
    ["콘텐츠와 판매를 확장하는 사이트", "Content, commerce and custom integrations."],
    ["필요한 범위를 확인한 뒤 비용을 안내합니다.", "Scope comes first. A clear proposal follows."],
    ["오픈 이후까지", "BUILT FOR WHAT COMES NEXT"],
    ["사이트는 오픈 뒤에도 이어집니다", "Your site should keep pace with your business."],
    ["운영 지원", "ONGOING SUPPORT"],
    ["필요한 수정", "FOCUSED ITERATION"],
    ["확장 가능한 구조", "ROOM TO GROW"],
    ["간단한 이야기부터 시작합니다.", "Start with a focused conversation."],
    ["무엇을 만들지 들려주세요.", "Tell us what you're building."],
    ["공개 포트폴리오", "FEATURED PROJECTS"],
    ["서로 다른 방향", "CREATOR BUSINESS MODELS"],
    ["공식 브랜드 공간", "OWNED BRAND HOME"],
    ["언제든 열리는 채널", "ALWAYS-ON DESTINATION"],
    ["시작은 분명하게", "Projects start at $2,500."],
    ["필요한 페이지와 기능을 확인한 뒤, 맞는 제작 범위와 비용을 안내합니다.", "Most creator-business websites are $3,500–$5,000, depending on scope."],
    ["상담 후", "CUSTOM"],
    ["/프로젝트", "/PROJECT"],
    ["기존", "SCOPE"],
    ["범위 확인", "DEFINED FIRST"],
    ["범위에 맞게", "NO FIXED PACKAGE"],
    ["핵심 페이지와 모바일, 기본 인터랙션까지 한 번에 준비합니다.", "A concise home for creators, experts and personal brands."],
    ["브랜드 기본 방향", "Core brand direction"],
    ["핵심 페이지 디자인", "Core-page design"],
    ["기본 검색 설정", "Essential search setup"],
    ["이미지 방향 제안", "Image direction"],
    ["제작 파일 정리", "Organized source files"],
    ["최종 전달 파일", "Final handoff"],
    ["단계별 제작 일정", "Clear project milestones"],
    ["과정을 함께 확인", "Shared review process"],
    ["피드백을 반영하는 흐름", "Focused feedback rounds"],
    ["제작 기간", "TIMELINE"],
    ["프로젝트별 안내", "CONFIRMED BY SCOPE"],
    ["이름, 활동, 서비스를 하나의 인상으로 설계합니다.", "Expertise, content and offers shaped into one personal brand."],
    ["확장된 브랜드 구성", "Expanded brand system"],
    ["전체 웹사이트 디자인", "Full website design"],
    ["UX 흐름과 기능 설계", "UX flows and functionality"],
    ["충분한 수정 과정", "Focused revision rounds"],
    ["검색과 콘텐츠 최적화", "Search and content setup"],
    ["우선 지원", "Priority communication"],
    ["최종 전달", "Final handoff"],
    ["복잡한 요구를 위한 세밀한 설계", "Deeper design for a larger content system"],
    ["오픈 전 충분한 조정", "Polished before launch"],
    ["필요한 순간 빠른 확인", "Responsive project communication"],
    ["콘텐츠, 판매, 운영까지 확장 가능한 구조로 완성합니다.", "Courses, commerce, advanced content and integrations in one system."],
    ["브랜드 전략 전체 설계", "Creator-business strategy"],
    ["확장형 웹사이트와 CMS", "Scalable website and CMS"],
    ["고도화된 UX와 기능 설계", "Advanced UX and functionality"],
    ["전담 프로젝트 디렉션", "Senior project direction"],
    ["세밀한 인터랙션", "Custom interaction"],
    ["최적화와 운영 지원", "Optimization and support"],
    ["운영을 고려한 최종 전달", "Operational handoff"],
    ["확장을 고려한 구조", "Structured to grow"],
    ["연결 기능까지 단계별 진행", "Integrations planned into every stage"],
    ["오픈 이후 장기 지원", "Post-launch support when needed"],
    ["간단한 상담으로 필요한 범위부터 함께 정리합니다.", "A short conversation is enough to define the right starting point."],
    ["자주 묻는 질문", "Questions before we start."],
    ["제작 전 가장 많이 묻는 내용을 한곳에 정리했습니다.", "Clear answers before you start."],
    ["더 궁금한 내용은 간단한 상담으로 안내해드립니다.", "Have a different question? Start a project and tell us what you need."],
    ["어떤 크리에이터에게 적합한가요?", "Who do you work with?"],
    ["콘텐츠와 이름을 중심으로 활동하는 크리에이터와 개인 브랜드에 적합합니다.", "Creators, experts, founders and personal brands building a business around an audience."],
    ["기존 사이트 리뉴얼도 가능한가요?", "Can you redesign my existing website?"],
    ["가능합니다. 현재 구조와 브랜드를 확인한 뒤 필요한 부분부터 다시 설계합니다.", "Yes. We can keep what works, rethink what does not and rebuild the experience around where the brand is going."],
    ["모바일 사이트도 함께 제작되나요?", "Do you handle development as well as design?"],
    ["모든 사이트는 데스크톱과 모바일 환경을 함께 고려해 제작합니다.", "Yes. Design, responsive development and interaction are handled as one process."],
    ["애니메이션과 인터랙션도 제작할 수 있나요?", "Can you build motion and interaction?"],
    ["프로젝트 방향에 따라 스크롤과 전환, 마우스 반응을 적용할 수 있습니다.", "Yes. Motion is designed around the content and brand—not added as decoration."],
    ["도메인 연결과 배포도 해주나요?", "Can you help with domain setup and launch?"],
    ["최종 사이트 배포와 기본 도메인 연결까지 진행할 수 있습니다.", "Yes. Testing, deployment and standard domain setup can be included."],
    ["전자책이나 강의 판매 사이트도 제작할 수 있나요?", "Can you connect my newsletter, store or course platform?"],
    ["필요에 따라 외부 결제·판매 플랫폼 또는 맞춤 기능을 연결할 수 있습니다.", "Yes. We can connect the platforms your creator business already uses."],
    ["처음 공식 사이트를 만드는 경우도 가능한가요?", "Do I need a large audience?"],
    ["가능합니다. 필요한 핵심 페이지부터 정리해 현재 단계에 맞는 범위로 시작합니다.", "No. What matters is having a clear reason for an owned brand space and something meaningful to bring together."],
    ["프로젝트의 완성도는 어떻게 확인하나요?", "How do you review a site before launch?"],
    ["디자인뿐 아니라 콘텐츠 전달, 모바일 사용성, 링크와 기능, 배포 상태까지 함께 검수합니다.", "We review content clarity, responsive behavior, links, interactions, performance and deployment."],
    ["작게 시작해 나중에 확장할 수 있나요?", "Can we start focused and grow later?"],
    ["가능합니다. 현재 필요한 페이지부터 만들고 이후 콘텐츠와 기능을 추가할 수 있도록 구성합니다.", "Yes. The first release can stay focused while the underlying structure leaves room for what comes next."],
    ["사이트 하나로, 보이는 규모를 설계합니다.", "Design notes from the work."],
    ["패션 비주얼과 제품 정보가 하나의 컬렉션 경험으로 이어지도록 설계했습니다.", "An editorial commerce system where image, collection and product live in the same world."],
    ["실제 공개된 사이트가 제공하는 경험을 프로젝트 관점에서 정리했습니다.", "A closer look at the decisions shaping the live experience."],
    ["컬렉션 이미지와 상품 정보가 분리되지 않고 하나의 드롭 경험으로 이어지도록 구성했습니다.", "Collection imagery and product detail move through one continuous drop experience."],
    ["채널 운영 방식과 제공 서비스를 첫 화면에서 바로 이해할 수 있도록 정보 순서를 설계했습니다.", "The opening frame makes the offer and channel strategy immediately clear."],
    ["전략, 운영 과정과 상담 예약이 자연스럽게 이어지는 흐름을 만들었습니다.", "Strategy, operating model and inquiry flow move as one experience."],
    ["프로그램과 코치 정보를 멤버십과 방문 예약으로 연결했습니다.", "Essential information is organized around the audience's next step."],
    ["코트의 분위기와 훈련 프로그램이 하나의 클럽 경험으로 느껴지도록 구성했습니다.", "Art direction and structure work together as one coherent experience."],
    ["강한 패션 비주얼이 컬렉션과 구매 흐름을 이끌도록 설계했습니다.", "Strong fashion imagery leads the collection and purchase journey."],
    ["콘텐츠 운영 서비스의 범위와 상담 경로를 짧고 분명하게 정리했습니다.", "The service offer and inquiry path stay concise and direct."],
    ["수업 선택부터 클럽 방문까지 필요한 정보를 한 흐름으로 구성했습니다.", "The experience keeps every next step inside one clear flow."],
    ["첫 화면에서 컬렉션의 분위기와 상품 구성을 바로 파악할 수 있도록 정보 순서를 설계했습니다.", "The opening frame establishes the collection before asking the audience to shop."],
    ["컬렉션 소개에서 각 드롭의 상세 화면으로 자연스럽게 이어지는 흐름을 만들었습니다.", "Each collection moves naturally from editorial story to drop detail."],
    ["상품 비주얼이 중심이 되되 필요한 정보는 놓치지 않도록 구성했습니다.", "Product information stays clear without competing with the visual identity."],
    ["흑백 비주얼과 강한 여백으로 FACELESS만의 인상이 먼저 남도록 구성했습니다.", "Monochrome art direction and deliberate space make the identity land first."],
    ["각 컬렉션의 다른 이미지를 같은 브랜드 문법 안에서 보여주도록 정리했습니다.", "Distinct collections stay recognizable inside one consistent brand language."],
    ["컬렉션 탐색에서 상품 선택까지 한 흐름으로 이어지도록 구성했습니다.", "The experience connects collection discovery directly to product choice."],
    ["사이트는 공개된 뒤부터 시작됩니다", "Ideas on creators, brands and the web."],
    ["구조를 잡고 콘텐츠를 쌓고 운영하는 데 필요한 판단을 정리합니다.", "Notes on owned websites that keep evolving."],
    ["만들기 전에 알아야 할 것들", "What creator websites should actually do."],
    ["기획, 디자인, 운영에 필요한 내용을 짧고 분명하게 정리합니다.", "Direct thinking on content, design and the business behind an audience."],
    ["크리에이터 사이트 사례", "Creator website strategy"],
    ["디자인과 제작 과정", "Design and process"],
    ["콘텐츠와 운영 아이디어", "Content and operations"],
    ["콘텐츠를 공식 사이트로 정리하는 법", "What a Creator Homepage Should Actually Do"],
    ["여러 플랫폼에 흩어진 콘텐츠를 방문자가 이해하기 쉬운 하나의 흐름으로 정리합니다.", "Bring scattered platforms into one story your audience can understand."],
    ["링크 모음과 공식 사이트는 무엇이 다른가", "When a Link-in-Bio Stops Being Enough"],
    ["링크를 나열하는 화면과 사람을 기억하게 만드는 공식 공간의 차이를 살펴봅니다.", "The difference between organizing links and building a memorable brand home."],
    ["개인 브랜드의 첫 화면은 무엇을 보여줘야 할까", "Why Personal Brands Need Owned Space"],
    ["첫 5초 안에 누구인지, 무엇을 하는지, 어디로 가야 하는지 보여주는 기준입니다.", "What the first five seconds need to say about the person, work and next step."],
    ["크리에이터 커머스의 사이트 구조", "Turning Content Into a Business Ecosystem"],
    ["콘텐츠에서 상품과 강의, 뉴스레터까지 자연스럽게 이어지는 구조를 설계합니다.", "Connect content to products, courses and newsletters without splitting the brand."],
    ["오픈 이후에도 사이트를 살아 있게 만드는 법", "The Website Stack Behind a Creator Business"],
    ["새 콘텐츠와 상품을 꾸준히 반영할 수 있는 운영 구조를 살펴봅니다.", "A practical structure for publishing new content and offers over time."],
    ["가이드 더 보기", "VIEW THE JOURNAL"],
    ["좋은 콘텐츠를 링크 하나에 묻어두지 마세요.", "Turn attention into something you own."],
    ["방향부터 공개까지", "STRATEGY TO LAUNCH"],
    ["모바일과 인터랙션", "RESPONSIVE + INTERACTIVE"],
    ["오픈 이후 운영", "BUILT TO EVOLVE"],
    ["당신의 이름을 웹에 남기세요", "Own the relationship."],
    ["프로젝트를 들려주세요. 필요한 구조와 제작 범위를 먼저 정리해드립니다.", "Tell us what you're building. We'll help define the right website and scope."],
    ["상담은 creator@webcanbe.com에서 시작할 수 있습니다.", "Start at creator@webcanbe.com."],
    ["프로젝트 내용을 남겨주시면 확인 후 연락드립니다.", "Share a few details and we'll get back to you."],
    ["프로젝트 내용을 남겨주시면 확인 후 연락드립니다. *", "Share a few details and we'll get back to you. *"],
    ["전송하면 개인정보 처리방침에 동의하게 됩니다.", "Privacy applies."],
    ["프로젝트 문의 외 광고 메일을 보내지 않습니다.", "No spam. Just a reply to your inquiry."],
    ["* 프로젝트 문의 외 광고 메일을 보내지 않습니다.", "* No spam. Just a reply to your inquiry."],
    ["이메일을 입력하세요", "Email address"],
    ["이용약관", "TERMS OF SERVICE"],
    ["개인정보 처리방침", "PRIVACY POLICY"],
    ["면책 안내", "DISCLAIMER"],
    ["서비스", "SERVICES"],
    ["소개", "ABOUT"],
    ["가이드", "JOURNAL"],
    ["문의하기", "CONTACT"],
    ["홈", "HOME"],
    ["WebCanBe 링크", "WebCanBe link"],
    ["크리에이터와 1인 브랜드를 위한 웹사이트 스튜디오.", "Premium websites for creator-led businesses."],
    ["콘텐츠, 상품, 활동을 하나의 공식 웹사이트로 완성합니다.", "Content, products, partnerships and audience—brought together in one place you own."],
    ["크리에이터와 개인 브랜드", "Creators and personal brands"],
    ["디지털 웹 스튜디오.", "Remote digital studio."],
    ["더 궁금한 점이 있으신가요?", "Still have a question?"],
    ["Thinking about your next move?", "Ready to build what's next?"],
    ["Let’s discuss how Create® can help make it real.", "Tell us what you're building. We'll help shape the right site around it."],
    ["Let's talk!", "START A PROJECT"],
    ["We'd love to hear from you and your team.", "Share the audience, offer and ambition behind the project."],
    ["YOUR NAME", "NAME"],
    ["COMPANY", "WEBSITE / CHANNEL"],
    ["YOUR MESSAGE", "TELL US ABOUT THE PROJECT"],
    ["Keep you in the loop.", "Start with your project."],
    ["A creative agency for design, strategy, marketing, and scalable premium websites.", "Premium websites for creator-led businesses."],
    ["A DESIGN STUDIO TRUSTED BY STARTUPS AND LEADING BRANDS.", "BUILT FOR CREATOR-LED BUSINESSES."],
    ["WE CREATE STORIES PEOPLE REMEMBER.", "A CHANNEL IS NOT A BRAND."],
    ["UTC−8 LOS ANGELES", "REMOTE · WORLDWIDE"],
    ["More Projects", "VIEW OUR WORK"],
    ["2017-2025", "SELECTED WORK"],
    ["2016 — 2025", "IDEA—LAUNCH"]
    , ["BASELINE", "WebCanBe"]
    , ["ONE ABOUT", "ONE OWNED HOME"]
    , ["YOUR MESSAGE", "PROJECT BRIEF"]
    , ["Project Manager", "PROJECT OPERATIONS"]
    , ["Project Operations Manager", "PROJECT OPERATIONS"]
    , ["FOUNDATION", "OWNED HOME"]
  ]);

  const toInternationalEnglish = (source, current) => {
    if (internationalCopy.has(current)) return internationalCopy.get(current);
    if (internationalCopy.has(source)) return internationalCopy.get(source);
    if (/[가-힣]/.test(current)) return /[가-힣]/.test(source) ? "" : source;
    return current;
  };
  copy.forEach((value, key) => copy.set(key, toInternationalEnglish(key, value)));
  benefitCardCopy.forEach((value, key) => benefitCardCopy.set(key, toInternationalEnglish(key, value)));

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
    const replacements = new Map(entries.map(([from, to]) => [normalize(from), toInternationalEnglish(from, to)]));
    const candidates = [...document.querySelectorAll('*')]
      .filter((el) => replacements.has(normalize(el.textContent || '')))
      .sort((a, b) => (a.textContent || '').length - (b.textContent || '').length);
    const targets = candidates.filter((element) => !candidates.some((other) => other !== element && element.contains(other)));
    targets.forEach((element) => {
      const to = replacements.get(normalize(element.textContent || ''));
      if (to === undefined) return;
      const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT);
      const nodes = []; while (walker.nextNode()) nodes.push(walker.currentNode);
      const tokens = to.match(/\S+\s*/g) || [to];
      let tokenIndex = 0;
      nodes.forEach((node, index) => {
        const originalLength = Math.max(node.nodeValue.length, 1);
        let segment = '';
        if (index === nodes.length - 1) {
          segment = tokens.slice(tokenIndex).join('');
          tokenIndex = tokens.length;
        } else if (tokenIndex < tokens.length) {
          do {
            const token = tokens[tokenIndex];
            if (segment && segment.length + token.length > originalLength) break;
            segment += token;
            tokenIndex += 1;
          } while (tokenIndex < tokens.length && segment.length < originalLength);
        }
        node.nodeValue = segment.replace(/ /g, '\u00a0');
      });
    });
  };

  const replaceAnimatedCopy = () => {
    const entries = [
      ['Digital experiences that connect, scale and perform', '당신의 이름을 하나의 브랜드로'],
      ['Digital experiences that connect, scale and perform.', '당신의 이름을 하나의 브랜드로'],
      ['Thinking about your next move?', "Ready to build what's next?"],
      ['YOUR NAME', 'NAME'],
      ['COMPANY', 'WEBSITE / CHANNEL'],
      ['YOUR MESSAGE', 'TELL US ABOUT THE PROJECT'],
      ['ONE ABOUT', 'ONE OWNED HOME'],
      ['YOUR MESSAGE', 'PROJECT BRIEF'],
      ['PRICTBS', 'PRICING'],
      ['F2H', 'FAQ'],
      ['HOW ZAQU3W4', 'PROCESS'],
      ['WHH6A3RB', 'JOURNAL'],
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
    document.documentElement.lang = "en";
    document.title = "WebCanBe — Premium Websites for Creator-Led Businesses";
    const description = "WebCanBe designs and builds premium websites for educators, experts, creators and personal brands whose audience has become a business.";
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
    document.querySelectorAll('a[href*="dub.sh/create"], a[href*="framerpod"], a[href*="tamasbodo"], a[href*="linkedin.com"], a[href*="whatsapp.com"], a[href*="glassdoor.com"], a[href*="instagram.com"], a[href*="facebook.com"], a[href*="threads.com"], a[href*="x.com/"]').forEach((a) => a.remove());
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
      if (label.length < 80 && /제작 상담하기|프로젝트 상담하기|LET'S CHAT|START A PROJECT/i.test(label)) a.href = "contact.html";
      if (label.length < 50 && /서비스 보기|EXPLORE SERVICES|^서비스(?: 서비스)?$|^SERVICES(?: SERVICES)?$/i.test(label)) a.href = "#services";
      if (label.length < 40 && /^소개(?: 소개)?$|^ABOUT(?: ABOUT)?$/i.test(label)) a.href = "#about";
      if (label.length < 60 && /가이드 더 보기|VIEW THE JOURNAL|^가이드(?: 가이드)?$|^JOURNAL(?: JOURNAL)?$/i.test(label)) a.href = "whispers.html";
      if (/^홈(?: 홈)?$|^HOME(?: HOME)?$/i.test(label)) a.href = "index.html";
      if (/^404(?: 404)?$/.test(label)) a.closest('[data-framer-name]')?.setAttribute('hidden', '');
    });
  };

  const removeUnsupportedClaims = () => {
    const claims = ["10+", "86+", "80%", "89%", "97%", "99%", "120+", "84%", "Rachel Morgan", "Edward Bright"];
    document.querySelectorAll('[data-framer-name="Section | Hero"] [data-framer-name="Numbers"]').forEach((numbers) => {
      numbers.style.visibility = 'hidden';
      numbers.setAttribute('aria-hidden', 'true');
    });
    document.querySelectorAll('number-flow-react').forEach((number) => {
      if (!claims.includes(number.getAttribute('aria-label') || '')) return;
      number.style.visibility = 'hidden';
      number.setAttribute('aria-hidden', 'true');
      const widget = number.closest('[data-framer-name="Stat Widget"]');
      if (widget) {
        widget.style.visibility = 'hidden';
        widget.setAttribute('aria-hidden', 'true');
      }
    });
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
      applyInternationalCopy();
      refineInternationalSections();
      refineCreatorBusinessSections();
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
      'Section | How we work': 'process',
      'Section | Blog Teaser': 'journal',
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
      image.alt = 'Editorial portrait for a WebCanBe personal-brand website';
    });
    const replaceImage = (selector, source, alt) => document.querySelectorAll(selector).forEach((image) => {
      image.src = source; image.removeAttribute('srcset'); image.alt = alt;
    });
    const showcaseProjects = [
      {
        name: 'MASON REED',
        category: 'CREATOR · EDUCATION',
        details: "An owned digital home\nfor an educator's content, course,\nresources and expertise\nKNOWLEDGE BUSINESS\nLIVE SITE",
        mobileDetails: 'EDUCATION\nRESOURCES\nADVISORY',
        image: 'assets/portfolio-mason-reed.png',
        alt: 'Mason Reed educator and personal-brand website',
        objectPosition: '50% 28%',
        url: 'https://webcanbe-mason-reed.vercel.app/'
      },
      {
        name: 'VIDORA',
        category: 'CREATOR · YOUTUBE',
        details: 'A content-first home built\nbeyond the feed\nVIDEO · MEDIA · PARTNERSHIPS\nCREATOR MEDIA\nLIVE SITE',
        mobileDetails: 'CONTENT\nCHANNEL\nINQUIRY',
        image: 'assets/portfolio-vidora.jpg',
        alt: 'VIDORA creator and YouTube channel website',
        objectPosition: '50% 50%',
        url: 'https://webcanbe-portfoliovidora.vercel.app/'
      },
      {
        name: 'MAEVE',
        category: 'FASHION · CREATOR BRAND',
        details: 'An editorial home\nfor a creator evolving\ninto a brand\nCAMPAIGNS · COLLECTIONS\nLIVE SITE',
        mobileDetails: 'EDITORIAL\nCAMPAIGNS\nCOLLECTIONS',
        image: 'assets/portfolio-maeve.jpg',
        alt: 'MAEVE fashion creator-brand website',
        objectPosition: '50% 32%',
        url: 'https://webcanbe-maeve.vercel.app/'
      }
    ];
    const showcaseLinks = [...document.querySelectorAll('[data-framer-name="Section | Featured Projects"] a[data-framer-name="Image"]')];
    showcaseLinks.forEach((link, index) => {
      const project = showcaseProjects[index];
      if (!project) {
        const unusedCard = link.parentElement;
        if (unusedCard) {
          unusedCard.hidden = true;
          unusedCard.style.display = 'none';
          unusedCard.setAttribute('aria-hidden', 'true');
        }
        return;
      }
      const card = link.parentElement;
      if (card) {
        card.hidden = false;
        card.style.removeProperty('display');
        card.removeAttribute('aria-hidden');
      }
      const image = link.querySelector('img');
      if (image) {
        image.src = project.image;
        image.removeAttribute('srcset');
        image.alt = project.alt;
        image.style.objectPosition = project.objectPosition;
      }
      const labels = card ? [...card.querySelectorAll('p')] : [];
      if (labels[0]) labels[0].textContent = project.name;
      if (labels[1]) labels[1].textContent = project.category;
      if (labels[2]) labels[2].textContent = window.matchMedia('(max-width: 809.98px)').matches ? project.mobileDetails : project.details;
      if (labels[4]) labels[4].textContent = '2026';
      link.href = project.url;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.setAttribute('aria-label', `Visit the ${project.name} live website in a new tab`);
      link.style.cursor = 'pointer';
    });
    document.querySelectorAll('[data-framer-name="Section | Featured Projects"]').forEach((section) => {
      const collection = section.querySelector('[data-framer-name="Featured Projects (CMS)"]');
      if (!collection) return;
      const syncCollectionHeight = () => {
        const visibleCards = [...collection.querySelectorAll('a[data-framer-name="Image"]')]
          .slice(0, showcaseProjects.length)
          .map((link) => link.parentElement)
          .filter((card) => card && getComputedStyle(card).display !== 'none');
        const totalHeight = visibleCards.reduce((height, card) => height + card.getBoundingClientRect().height, 0);
        if (totalHeight > 0) collection.style.height = `${Math.round(totalHeight)}px`;
      };
      collection.dataset.webcanbeProjectCount = String(showcaseProjects.length);
      syncCollectionHeight();
      if (collection.dataset.webcanbeResizeReady !== 'true') {
        collection.dataset.webcanbeResizeReady = 'true';
        window.addEventListener('resize', () => window.requestAnimationFrame(syncCollectionHeight), { passive: true });
      }
      section.querySelectorAll('[data-framer-name="CMS Project Counter"] p, [data-framer-name="CMS Project Counter"] span').forEach((counter) => {
        if (counter.children.length === 0 && /^\d+$/.test(counter.textContent.trim())) counter.textContent = String(showcaseProjects.length);
      });
    });
    replaceImage('[data-framer-name="Section | How we work"] img[alt^="Abstract dark background"]', 'assets/webcanbe-process-storyboard.png', 'WebCanBe creator-website strategy and storyboard process');
    replaceImage('[data-framer-name="Section | How we work"] img[alt^="Futuristic black and white concept car"]', 'assets/webcanbe-process-detail.png', 'Responsive personal-brand website prototype review');
    const serviceImages = [
      ['assets/portfolio-vidora.jpg', 'VIDORA creator-business website example', '50% 50%'],
      ['assets/portfolio-mason-reed.png', 'Mason Reed personal-brand website example', '50% 28%'],
      ['assets/portfolio-maeve.jpg', 'MAEVE creator-brand and commerce website example', '50% 32%'],
      ['https://framerusercontent.com/images/0VDbrfao2M2kp6IWzpDkyyyEFYI.jpg?scale-down-to=512&width=1920&height=1920', 'THE SIGNAL independent publication example', '50% 50%'],
      ['https://framerusercontent.com/images/1IZjMkHfxZEUwlavYO22U4cOE.png?scale-down-to=2048&width=4800&height=2976', 'OFF RECORD cinematic podcast example', '50% 50%'],
      ['https://framerusercontent.com/images/Vb9zseAb0YK9TtzGRZQbW16Qro.png?scale-down-to=2048&width=5120&height=2881', 'THE CREATOR SYSTEM launch example', '50% 50%'],
      ['https://framerusercontent.com/images/4ssprDQQhoDagf6Qy75EdLiUJmg.jpg?scale-down-to=2048&width=2464&height=1856', 'THE OPERATOR CLUB community example', '50% 50%']
    ];
    document.querySelectorAll('[data-framer-name="Section | Services"]').forEach((section) => {
      [...section.querySelectorAll('img')].forEach((image, index) => {
        const asset = serviceImages[index];
        if (!asset) return;
        image.src = asset[0];
        image.removeAttribute('srcset');
        image.alt = asset[1];
        image.style.objectPosition = asset[2];
      });
    });
    replaceImage('[data-framer-name="Section | Blog Teaser"] img[alt="Abstract 3D composition of floating spheres and cubes in monochrome tones with soft lighting."]', 'assets/webcanbe-guide-content-structure.png', 'Structuring content for a creator website');
    replaceImage('[data-framer-name="Section | Blog Teaser"] img[alt^="A person in a white hoodie and joggers"]', 'assets/webcanbe-guide-link-vs-site.png', 'Link-in-bio compared with an owned website');
    replaceImage('[data-framer-name="Section | Blog Teaser"] img[alt="Modern glass building photographed from below"]', 'assets/webcanbe-guide-first-screen.png', 'Designing the first screen of a personal-brand website');
    replaceImage('[data-framer-name="Section | Blog Teaser"] img[alt="Electric Bike behind Pillar"]', 'assets/webcanbe-guide-creator-commerce.png', 'Creator-commerce website content flow');
    replaceImage('[data-framer-name="Section | Blog Teaser"] img[alt="red sports car in front of a showroom with bright lights"]', 'assets/webcanbe-guide-site-operations.png', 'Operating a creator website after launch');
    replaceImage('img[alt="Logo"]', 'assets/webcanbe-wordmark.svg', 'WebCanBe');
    replaceImage('img[src*="aJxLydBlZv1oYCCj63OZdiRqLuQ"]', 'assets/webcanbe-wordmark.svg', 'WebCanBe');
    replaceImage('[data-framer-name="Benefit Cards"] img[alt^="Minimalist stack of guideline with clean typography and red covers"]', 'assets/webcanbe-design-process.png', 'WebCanBe custom website-design process');
    replaceImage('[data-framer-name="Benefit Cards"] img[alt^="Minimalist stack of guideline with clean typography and blue covers"]', 'assets/webcanbe-creator-workspace.png', 'Creator working on a personal-brand website');
    replaceImage('[data-framer-name="Benefit Cards"] img[alt^="Minimalist stack of guideline with clean typography and monochrome covers"]', 'assets/webcanbe-benefit-launch.png', 'Responsive creator-website launch review');
    replaceImage('[data-framer-name="Section | Pricing"] img[alt^="Minimalist stack of guideline with clean typography and red covers"]', 'assets/webcanbe-option-start.png', 'START creator website scope');
    replaceImage('[data-framer-name="Section | Pricing"] img[alt^="Minimalist stack of guideline with clean typography and blue covers"]', 'assets/webcanbe-option-custom.png', 'CUSTOM personal-brand website scope');
    replaceImage('[data-framer-name="Section | Pricing"] img[alt^="Minimalist stack of guideline with clean typography and monochrome covers"]', 'assets/webcanbe-option-expand.png', 'EXPAND creator-commerce website scope');
    replaceImage('[data-framer-name="Section | Book a Call"] img[alt^="Man with short hair and beard"]', 'assets/webcanbe-contact-creator.png', 'Creator preparing a personal-brand website project');
    replaceImage('[data-framer-name="Section | Testimonial"] img[alt^="Smiling man wearing glasses and a grey shirt"]', 'assets/portfolio-maeve.jpg', 'Fashion and editorial art direction behind the MAEVE project');
    replaceImage('[data-framer-name="Section | Testimonial"] [data-framer-name="Avatar"] img', 'assets/portfolio-maeve.jpg', 'Fashion and editorial art direction behind the MAEVE project');
    document.querySelectorAll('[data-framer-name="Section | Testimonial"] img').forEach((image) => {
      if (image.closest('[data-framer-name="Logo Mark"]')) return;
      image.src = 'assets/portfolio-maeve.jpg';
      image.removeAttribute('srcset');
      image.alt = 'Fashion and editorial art direction behind the MAEVE project';
      image.style.objectPosition = '50% 32%';
    });
    const perspectiveCopy = new Map([
      ['채널 운영 방식과 제공 서비스를 첫 화면에서 바로 이해할 수 있도록 정보 순서를 설계했습니다.', 'The opening frame establishes the collection before asking the audience to shop.'],
      ['전략, 운영 과정과 상담 예약이 자연스럽게 이어지는 흐름을 만들었습니다.', 'Each collection moves naturally from editorial story to drop detail.'],
      ['프로그램과 코치 정보를 멤버십과 방문 예약으로 연결했습니다.', 'Product information stays clear without competing with the visual identity.'],
      ['코트의 분위기와 훈련 프로그램이 하나의 클럽 경험으로 느껴지도록 구성했습니다.', 'Monochrome art direction and deliberate space make the identity land first.'],
      ['콘텐츠 운영 서비스의 범위와 상담 경로를 짧고 분명하게 정리했습니다.', 'Distinct collections stay recognizable inside one consistent brand language.'],
      ['수업 선택부터 클럽 방문까지 필요한 정보를 한 흐름으로 구성했습니다.', 'The experience connects collection discovery directly to product choice.']
    ]);
    document.querySelectorAll('[data-framer-name="Section | Testimonial"] p').forEach((label) => {
      const value = label.textContent.replace(/\s+/g, ' ').trim();
      const perspective = perspectiveCopy.get(value);
      if (perspective) label.textContent = perspective;
      else if (/^(VIDORA|BASELINE|FACELESS)$/i.test(value)) label.textContent = 'MAEVE';
      else if (/^(CREATOR · CHANNEL GROWTH|SPORTS · ACADEMY)$/i.test(value)) label.textContent = 'FASHION · EDITORIAL';
      else if (/Backed by feedback from/i.test(value)) label.textContent = 'A closer look at the decisions shaping the live experience.';
      else if (/^(Rachel Morgan|Edward Bright|WEBCANBE)$/i.test(value)) label.textContent = 'MAEVE';
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
    replaceImage('[data-framer-name^="Benefit Card 06"] img[alt^="3D character wearing an orange jumpsuit"]', 'assets/webcanbe-benefit-launch.png', 'Responsive creator-website launch review');
    document.querySelectorAll('[data-framer-name="Benefit Cards"] [data-framer-name="Stars"]').forEach((stars) => stars.style.display = 'none');
    document.querySelectorAll('[data-framer-name^="Benefit Card 06"] video').forEach((video) => {
      video.pause();
      video.poster = 'assets/webcanbe-creator-workspace.png';
      video.removeAttribute('src');
      video.querySelectorAll('source').forEach((source) => source.remove());
      video.setAttribute('aria-label', 'Creator shaping a personal-brand website');
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
      control.setAttribute('aria-label', 'Play or pause the hero video');
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
        label.textContent = 'CUSTOM DESIGN · OWNED WEBSITE';
      }
    });
    document.querySelectorAll('[data-framer-name="Section | Featured Projects"] a[data-framer-name="Icon - Orange"]').forEach((link) => {
      link.href = '#showcase';
      link.removeAttribute('target');
      link.removeAttribute('rel');
      link.setAttribute('aria-label', 'Return to the start of selected work');
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
        ['공개포트폴리오', 'FEATURED PROJECTS'],
        ['서로다른방향', 'CREATOR BUSINESS MODELS'],
        ['공식브랜드공간', 'OWNED BRAND HOME'],
        ['언제든열리는채널', 'ALWAYS-ON DESTINATION']
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
    document.querySelectorAll('input[placeholder="Enter Your Email"]').forEach((input) => input.placeholder = 'Email address');
    document.querySelectorAll('[data-framer-name="Socials Links"]').forEach((links) => {
      links.style.display = 'none';
      links.setAttribute('aria-hidden', 'true');
    });
    document.querySelectorAll('[aria-label="Social media link"]').forEach((link) => link.setAttribute('aria-label', 'WebCanBe link'));
    document.querySelectorAll('[data-framer-name="Section | Pricing"] p').forEach((label) => {
      if (label.textContent.trim() === 'was') label.textContent = 'SCOPE';
    });
    document.querySelectorAll('[data-framer-name="Section | Pricing"]').forEach((section) => {
      replaceTextWithin(section, new Map([
        ['소개', 'CUSTOM'], ['STARTER PLAN', 'CREATOR WEBSITE'],
        ['ADVANCED PLAN', 'PERSONAL BRAND WEBSITE'], ['GROWTH PLAN', 'CREATOR COMMERCE']
      ]));
      const planLabels = new Map([
        ['STARTER PLAN', 'CREATOR WEBSITE'], ['ADVANCED PLAN', 'PERSONAL BRAND WEBSITE'],
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
      ['WebCanBe Guide', 'WEBSITE GUIDE'],
      ['Lucas Marino', 'WebCanBe'],
      ['Technical Director', 'CONTENT STRUCTURE'],
      ['FASHION · EDITORIAL', 'OWNED BRAND SPACE'],
      ['SPORTS · ACADEMY', 'PERSONAL BRAND'],
      ['VIDORA', 'WebCanBe'],
      ['CREATOR · CHANNEL GROWTH', 'CREATOR COMMERCE']
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
      /What a Creator Homepage|When a Link-in-Bio|Why Personal Brands|Turning Content Into|Website Stack Behind/.test(link.textContent)
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
      link.setAttribute('aria-label', 'WebCanBe project-process visual');
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
    let form = document.querySelector('form[data-framer-name="Contact form"]');
    if (!form) return;
    if (form.dataset.webcanbeDetachedForm !== 'true') {
      const detachedForm = form.cloneNode(true);
      detachedForm.dataset.webcanbeDetachedForm = 'true';
      form.replaceWith(detachedForm);
      form = detachedForm;
    }
    const setButtonLabel = (button, label) => {
      const paragraphs = [...button.querySelectorAll('p')];
      if (paragraphs.length) paragraphs.forEach((paragraph) => paragraph.textContent = label);
      else button.textContent = label;
    };
    if (document.documentElement.dataset.webcanbeContactDelegate !== 'true') {
      document.documentElement.dataset.webcanbeContactDelegate = 'true';
      const submitContact = async (event, liveForm, submitButton) => {
        event.preventDefault();
        event.stopImmediatePropagation();
        const name = liveForm.querySelector('input[name="name"]');
        const company = liveForm.querySelector('input[name="social"]');
        const email = liveForm.querySelector('input[name="email"]');
        const type = liveForm.querySelector('select[name="siteType"]');
        const message = liveForm.querySelector('textarea[name="message"]');
        if (!name || !company || !email || !type || !message || !submitButton) return;
        const validations = [
          [name, 'Please enter your name.', !name.value.trim()],
          [email, 'Please enter a valid email address.', !/^\S+@\S+\.\S+$/.test(email.value.trim())],
          [type, 'Please select what you are building.', !type.value],
          [message, 'Please tell us about the project.', !message.value.trim()]
        ];
        validations.forEach(([field, validationMessage, invalid]) => field.setCustomValidity(invalid ? validationMessage : ''));
        if (!liveForm.reportValidity()) return;
        submitButton.disabled = true;
        setButtonLabel(submitButton, 'SENDING…');
        try {
          const response = await fetch('/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: name.value, email: email.value, social: company.value, siteType: type.value, message: message.value })
          });
          if (!response.ok) throw new Error('Unable to send the inquiry.');
          liveForm.reset();
          setButtonLabel(submitButton, 'PROJECT INQUIRY SENT');
        } catch (error) {
          submitButton.disabled = false;
          setButtonLabel(submitButton, 'SEND FAILED — EMAIL US INSTEAD');
        }
      };
      window.addEventListener('click', (event) => {
        const submitButton = event.target.closest?.('button[data-webcanbe-submit]');
        const liveForm = submitButton?.closest('form[data-framer-name="Contact form"]');
        if (liveForm) submitContact(event, liveForm, submitButton);
      }, true);
      window.addEventListener('submit', (event) => {
        const liveForm = event.target.closest?.('form[data-framer-name="Contact form"]');
        const submitButton = liveForm?.querySelector('button[data-webcanbe-submit]');
        if (liveForm && submitButton) submitContact(event, liveForm, submitButton);
      }, true);
    }
    const syncFormButtons = () => {
      const buttons = [...form.querySelectorAll('button')];
      const submitButton = form.querySelector('[data-webcanbe-submit]')
        || buttons.find((button) => /SUBMIT|SEND PROJECT|PROJECT INQUIRY|SEND FAILED/i.test(button.textContent || ''))
        || buttons.at(-1);
      const fieldLabelCopy = new Map([
        ['YOUR NAME', 'NAME'], ['NAME', 'NAME'],
        ['COMPANY', 'WEBSITE / CHANNEL'], ['WEBSITE / CHANNEL', 'WEBSITE / CHANNEL'],
        ['EMAIL', 'EMAIL']
      ]);
      buttons.filter((button) => button !== submitButton).forEach((button) => {
        const label = fieldLabelCopy.get((button.textContent || '').replace(/\s+/g, ' ').trim().toUpperCase());
        if (label) setButtonLabel(button, label);
        button.type = 'button';
        button.tabIndex = -1;
      });
      if (submitButton) {
        submitButton.dataset.webcanbeSubmit = 'true';
        submitButton.type = 'submit';
        submitButton.disabled = false;
        submitButton.style.opacity = '1';
        if (!/SENDING|PROJECT INQUIRY SENT|SEND FAILED/i.test(submitButton.textContent || '')) {
          setButtonLabel(submitButton, 'SEND PROJECT INQUIRY');
        }
        submitButton.dataset.webcanbeSubmitReady = 'true';
        submitButton.onclick = (event) => {
          event.preventDefault();
          form.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));
        };
      }
      return submitButton;
    };
    const configureFields = () => {
      const inputs = [...form.querySelectorAll('input:not([type="hidden"])')];
      const name = form.querySelector('input[name="name"]') || inputs[0];
      const company = form.querySelector('input[name="social"]') || inputs[1];
      let email = form.querySelector('input[name="email"]') || inputs[2];
      const message = form.querySelector('textarea[name="message"]') || form.querySelector('textarea');
      if (!name || !company || !email || !message) return null;
      if (email.dataset.webcanbeDetached !== 'true') {
        const detachedEmail = email.cloneNode(true);
        detachedEmail.dataset.webcanbeDetached = 'true';
        email.replaceWith(detachedEmail);
        email = detachedEmail;
      }
      name.name = 'name'; name.placeholder = 'Name';
      company.name = 'social'; company.placeholder = 'Website / channel (optional)'; company.required = false;
      email.name = 'email'; email.type = 'email'; email.placeholder = 'Email';
      message.name = 'message'; message.placeholder = 'Tell us about the project';
      name.required = true; email.required = true; message.required = true;
      let type = form.querySelector('select[name="siteType"]');
      if (!type) {
        type = document.createElement('select');
        type.name = 'siteType';
        type.className = company.className;
        type.setAttribute('aria-label', 'What are you building?');
        type.innerHTML = '<option value="">What are you building?</option><option>Creator Website</option><option>Personal Brand</option><option>Creator Commerce</option><option>Launch Page</option><option>Interactive Website</option><option>Redesign</option><option>Other</option>';
        company.parentElement?.parentElement?.after(type);
      }
      type.required = true;
      const validations = [
        [name, 'Please enter your name.', () => !name.value.trim()],
        [email, 'Please enter a valid email address.', () => !/^\S+@\S+\.\S+$/.test(email.value.trim())],
        [type, 'Please select what you are building.', () => !type.value],
        [message, 'Please tell us about the project.', () => !message.value.trim()]
      ];
      const validate = () => validations.forEach(([field, validationMessage, isInvalid]) => {
        field.setCustomValidity(isInvalid() ? validationMessage : '');
      });
      validations.forEach(([field]) => {
        if (field.dataset.webcanbeValidationReady === 'true') return;
        field.dataset.webcanbeValidationReady = 'true';
        ['input', 'change'].forEach((eventName) => field.addEventListener(eventName, (event) => {
          if (field === email) {
            event.stopPropagation();
            const enteredValue = email.value;
            email.dataset.webcanbeValue = enteredValue;
            window.setTimeout(() => {
              if (email.isConnected && email.value !== enteredValue) email.value = enteredValue;
              validate();
            }, 0);
          }
          validate();
        }));
      });
      validate();
      return { name, company, email, message, type, validate };
    };
    configureFields();
    syncFormButtons();
    form.dataset.webcanbeContactReady = 'true';
    form.onsubmit = async (event) => {
      event.preventDefault();
      const fields = configureFields();
      if (!fields) return;
      fields.validate();
      if (!form.reportValidity()) return;
      const submit = syncFormButtons();
      if (submit) { submit.disabled = true; setButtonLabel(submit, 'SENDING…'); }
      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: fields.name.value,
            email: fields.email.value,
            social: fields.company.value,
            siteType: fields.type.value,
            message: fields.message.value
          })
        });
        if (!response.ok) throw new Error('Unable to send the inquiry.');
        form.reset();
        configureFields();
        if (submit) setButtonLabel(submit, 'PROJECT INQUIRY SENT');
      } catch (error) {
        if (submit) { submit.disabled = false; setButtonLabel(submit, 'SEND FAILED — EMAIL US INSTEAD'); }
      }
    };
  };

  const applyInternationalCopy = () => {
    replaceTextWithin(document.body, internationalCopy);
    document.querySelectorAll('[alt], [title], [aria-label], [placeholder]').forEach((element) => {
      ['alt', 'title', 'aria-label', 'placeholder'].forEach((attribute) => {
        const value = element.getAttribute(attribute);
        if (!value) return;
        const replacement = internationalCopy.get(value.replace(/\s+/g, ' ').trim());
        if (replacement !== undefined) element.setAttribute(attribute, replacement);
      });
    });
  };

  const refineInternationalSections = () => {
    const replaceInSection = (name, pairs) => document.querySelectorAll(`[data-framer-name="${name}"]`).forEach((section) => {
      replaceTextWithin(section, new Map(pairs));
    });
    replaceInSection('Section | Introduction', [['WEB DESIGN', 'BUILD']]);
    replaceInSection('Section | Services', [
      ['OFFICIAL SITE', 'CREATOR WEBSITE'],
      ['LAUNCH', 'CREATOR COMMERCE'],
      ['PORTFOLIO', 'LAUNCH EXPERIENCE'],
      ['INTERACTIVE', 'INTERACTIVE WEBSITE'],
      ['WEB DESIGN', 'WEB DEVELOPMENT']
    ]);
    replaceInSection('Section | Why Choose Us', [['ABOUT', 'CUSTOM']]);
    replaceInSection('Section | Pricing', [['ABOUT', 'CUSTOM'], ['OFFICIAL WEBSITE', 'CREATOR WEBSITE']]);
    replaceInSection('Section | Testimonial', [
      ['READY TO GROW', 'PROJECT PERSPECTIVE'],
      ['UX Lead', 'FASHION · EDITORIAL']
    ]);
    document.querySelectorAll('[data-framer-name="Section | Hero"] a').forEach((link) => {
      if (/(?:EXPLORE|VIEW)\s+OUR\s+WORK/i.test(link.textContent || '')) link.href = '#showcase';
    });
  };

  const refineCreatorBusinessSections = () => {
    const setText = (element, value) => {
      if (!element) return;
      const current = element.textContent.replace(/\s+/g, ' ').trim();
      if (current === value) return;
      const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT);
      const nodes = [];
      while (walker.nextNode()) nodes.push(walker.currentNode);
      if (nodes.length <= 1) {
        if (nodes[0]) nodes[0].nodeValue = value;
        else element.textContent = value;
        return;
      }
      const tokens = value.match(/\S+\s*/g) || [value];
      let tokenIndex = 0;
      nodes.forEach((node, index) => {
        const originalLength = Math.max(node.nodeValue.length, 1);
        let segment = '';
        if (index === nodes.length - 1) segment = tokens.slice(tokenIndex).join('');
        else {
          while (tokenIndex < tokens.length) {
            const token = tokens[tokenIndex];
            if (segment && segment.length + token.length > originalLength) break;
            segment += token;
            tokenIndex += 1;
            if (segment.length >= originalLength) break;
          }
        }
        node.nodeValue = segment.replace(/ /g, '\u00a0');
      });
    };
    const setMatchingText = (root, from, to) => {
      const normalize = (value) => value.replace(/\s+/g, ' ').trim();
      const candidates = [...root.querySelectorAll('*')]
        .filter((element) => normalize(element.textContent || '') === from)
        .sort((a, b) => a.childElementCount - b.childElementCount);
      const target = candidates.find((element) => !candidates.some((other) => other !== element && element.contains(other)));
      setText(target, to);
    };
    const setPatternText = (root, pattern, to) => {
      const normalize = (value) => value.replace(/\s+/g, ' ').trim();
      const candidates = [...root.querySelectorAll('*')]
        .filter((element) => pattern.test(normalize(element.textContent || '')))
        .sort((a, b) => a.childElementCount - b.childElementCount);
      const target = candidates.find((element) => !candidates.some((other) => other !== element && element.contains(other)));
      setText(target, to);
    };

    document.querySelectorAll('[data-framer-name="Section | Services"]').forEach((section) => {
      const serviceExamples = [
        { category: 'CREATOR BUSINESS WEBSITE', headline: 'CREATOR BUSINESS', description: 'Content, audience, media and partnership paths in one owned home.', features: ['Content architecture', 'Media and content hub', 'Newsletter integration', 'Partnership inquiry paths', 'Responsive development'], project: 'VIDORA', url: 'https://webcanbe-portfoliovidora.vercel.app/', image: 'assets/portfolio-vidora.jpg', alt: 'VIDORA creator-business website example' },
        { category: 'PERSONAL BRAND WEBSITE', headline: 'PERSONAL BRAND', description: 'Expertise, content, products and services built around one recognizable personal brand.', features: ['Expertise and positioning', 'Content and resource structure', 'Courses, products and services', 'Advisory inquiry paths', 'Responsive development'], project: 'MASON REED', url: 'https://webcanbe-mason-reed.vercel.app/', image: 'assets/portfolio-mason-reed.png', alt: 'MASON REED personal-brand website example' },
        { category: 'CREATOR BRAND / COMMERCE', headline: 'CREATOR COMMERCE', description: 'Editorial storytelling, campaigns and products for creator-owned brands.', features: ['Editorial art direction', 'Campaign and collection stories', 'Product and commerce paths', 'Collaboration inquiries', 'Responsive development'], project: 'MAEVE', url: 'https://webcanbe-maeve.vercel.app/', image: 'assets/portfolio-maeve.jpg', alt: 'MAEVE creator-brand and commerce website example' },
        { category: 'NEWSLETTER / MEDIA', headline: 'NEWSLETTER MEDIA', description: 'A publication, newsletter and content archive built into an owned media business.', features: ['Editorial system', 'Newsletter and archive', 'Topics and resources', 'Sponsorship paths', 'Responsive development'], project: 'THE SIGNAL', url: 'https://webcanbe-narric.vercel.app/', image: 'https://framerusercontent.com/images/0VDbrfao2M2kp6IWzpDkyyyEFYI.jpg?scale-down-to=512&width=1920&height=1920', alt: 'THE SIGNAL publication example' },
        { category: 'PODCAST / MEDIA', headline: 'PODCAST MEDIA', description: 'Episodes, guests, stories, partnerships and audience relationships in one media home.', features: ['Episode library', 'Guest and story pages', 'Audience subscriptions', 'Partnership inquiry paths', 'Responsive development'], project: 'OFF RECORD', url: 'https://webcanbe-lisyn.vercel.app/', image: 'https://framerusercontent.com/images/1IZjMkHfxZEUwlavYO22U4cOE.png?scale-down-to=2048&width=4800&height=2976', alt: 'OFF RECORD cinematic podcast example' },
        { category: 'LAUNCH EXPERIENCE', headline: 'LAUNCH EXPERIENCE', description: 'A focused launch experience for courses, programs, products and major creator offers.', features: ['Launch narrative', 'Offer and program flow', 'Conversion paths', 'Platform integrations', 'Launch handoff'], project: 'THE CREATOR SYSTEM', url: 'https://webcanbe-skillfunnel.vercel.app/', image: 'https://framerusercontent.com/images/Vb9zseAb0YK9TtzGRZQbW16Qro.png?scale-down-to=2048&width=5120&height=2881', alt: 'THE CREATOR SYSTEM launch example' },
        { category: 'MEMBERSHIP / COMMUNITY', headline: 'MEMBERSHIP COMMUNITY', description: 'A premium home for private membership, community, resources and applications.', features: ['Membership positioning', 'Resources and member flows', 'Application path', 'Private community system', 'Responsive development'], project: 'THE OPERATOR CLUB', url: 'https://webcanbe-theboard.vercel.app/', image: 'https://framerusercontent.com/images/4ssprDQQhoDagf6Qy75EdLiUJmg.jpg?scale-down-to=2048&width=2464&height=1856', alt: 'THE OPERATOR CLUB community example' }
      ];
      ['Desktop', 'Phone'].forEach((variant) => {
      let cards = [...section.querySelectorAll(`[data-framer-name^="${variant} - Service "]`)]
        .sort((a, b) => Number(a.getAttribute('data-framer-name').match(/(\d+)$/)?.[1]) - Number(b.getAttribute('data-framer-name').match(/(\d+)$/)?.[1]));
      if (cards.length === 6) {
        const source = cards[5];
        const clone = source.cloneNode(true);
        clone.setAttribute('data-framer-name', `${variant} - Service 7`);
        clone.dataset.webcanbeServiceClone = 'true';
        source.parentElement?.appendChild(clone);
        cards = [...cards, clone];
      }
      cards.slice(0, serviceExamples.length).forEach((card, index) => {
        const example = serviceExamples[index];
        const labels = [...card.querySelectorAll('p')].filter((label) => label.textContent.replace(/\s+/g, ' ').trim());
        setText(labels[0], example.category);
        setText(labels[1], '/0');
        setText(labels[2], String(index + 1));
        setText(labels[3], example.headline);
        setText(labels[4], example.description);
        if (index >= 3) labels[3].style.fontSize = variant === 'Phone' ? 'clamp(36px, 12vw, 54px)' : 'clamp(54px, 7.8vw, 94px)';
        card.querySelectorAll('img').forEach((image) => { image.src = example.image; image.removeAttribute('srcset'); image.alt = example.alt; image.style.objectPosition = '50% 50%'; });
        const description = [...card.querySelectorAll('[data-framer-name="Description"]')].find((element) => element.querySelector('p'));
        if (description) {
          description.classList.add('webcanbe-service-description-with-example');
          let exampleLink = description.querySelector('.webcanbe-service-example');
          if (!exampleLink) { exampleLink = document.createElement('a'); exampleLink.className = 'webcanbe-service-example'; description.appendChild(exampleLink); }
          exampleLink.textContent = 'VIEW EXAMPLE'; exampleLink.href = example.url; exampleLink.target = '_blank'; exampleLink.rel = 'noopener noreferrer'; exampleLink.setAttribute('aria-label', `View the ${example.project} live website example in a new tab`);
          let startLink = description.querySelector('.webcanbe-service-start');
          if (!startLink) { startLink = document.createElement('a'); startLink.className = 'webcanbe-service-start'; description.appendChild(startLink); }
          startLink.textContent = 'START A PROJECT'; startLink.href = 'contact.html'; startLink.setAttribute('aria-label', 'Start a WebCanBe project');
        }
        [6, 8, 10, 12, 14].forEach((labelIndex, featureIndex) => setText(labels[labelIndex], example.features[featureIndex]));
      });
      });
    });
    document.querySelectorAll('[data-framer-name^="Benefit Card 02"], [data-framer-name="Benefit Card 04 -Phone"]').forEach((card) => {
      setMatchingText(card, 'BUILT AROUND YOU', 'BUILT FOR YOU');
      setMatchingText(card, 'NOT A GENERIC TEMPLATE', 'CUSTOM');
      setMatchingText(card, 'ONE CLEAR EXPERIENCE', 'ONE CLEAR FLOW');
      setMatchingText(card, 'TO NEWSLETTERS, PRODUCTS + INQUIRIES', 'OFFERS + INQUIRIES');
      setMatchingText(card, 'DESIGN + DEVELOPMENT', 'DESIGN + BUILD');
      setMatchingText(card, 'READY TO GROW', 'CUSTOM BY DEFAULT');
      setMatchingText(card, 'A site that can grow with the business behind your audience.', 'Never from a generic template.');
    });
    document.querySelectorAll('[data-framer-name="Benefit Card 05"], [data-framer-name="Benefit Card 05 - Phone"]').forEach((card) => {
      setMatchingText(card, 'BUILT FOR WHAT COMES NEXT', 'READY TO GROW');
      setMatchingText(card, 'Your site should keep pace with your business.', 'Built to grow with you.');
    });

    const pricingPlans = [
      {
        category: 'FOCUSED WEBSITE',
        summary: 'For a focused, premium home for your brand.',
        prefix: 'FROM',
        price: '$2,500',
        priceLabel: 'PROJECT FEE',
        description: 'For creators who need a clear, premium home without unnecessary complexity.',
        features: ['1–3 core pages', 'Responsive design', 'Newsletter or contact integration', 'Content structure', 'Essential motion', 'Domain and launch support', 'Launch-ready handoff'],
        notes: ['Clear scope and schedule', 'Written feedback', '50% to start · 50% before launch']
      },
      {
        category: 'CREATOR BUSINESS WEBSITE',
        summary: 'For an established audience with multiple content and revenue channels.',
        prefix: 'TYPICALLY',
        price: '$3,500–$5,000',
        priceLabel: 'PROJECT RANGE',
        description: 'A custom site that brings content, offers and partnerships into one owned home.',
        features: ['Custom site structure', '5–8 pages', 'CMS and content hub', 'Newsletter integration', 'Products, courses and services', 'Partnership inquiry flow', 'Custom interactions'],
        notes: ['Defined revision rounds', 'Async-first workflow', '50% to start · 50% before launch']
      },
      {
        category: 'ADVANCED WEBSITE',
        summary: 'For a larger creator business with a more complex digital ecosystem.',
        prefix: 'FROM',
        price: '$6,500',
        priceLabel: 'PROJECT FEE',
        description: 'For commerce, advanced publishing and conversion paths that need deeper systems.',
        features: ['Complex CMS', 'Commerce', 'Advanced integrations', 'Advanced motion', 'Multiple conversion paths', 'Larger content ecosystem', 'Operational handoff'],
        notes: ['Scope-led proposal', 'Written reviews and approvals', '50% to start · 50% before launch']
      }
    ];
    const pricingCards = [...document.querySelectorAll('[data-framer-name="Section | Pricing"] [data-framer-name]')]
      .filter((card) => {
        const paragraphs = [...card.querySelectorAll('p')].filter((label) => label.textContent.trim());
        return paragraphs.length >= 24 && /^(?:START|CUSTOM|EXPAND)$/.test(paragraphs[0]?.textContent.trim());
      });
    pricingCards.forEach((card) => {
      const paragraphs = [...card.querySelectorAll('p')].filter((label) => label.textContent.trim());
      const planIndex = new Map([['START', 0], ['CUSTOM', 1], ['EXPAND', 2]]).get(paragraphs[0]?.textContent.trim());
      if (planIndex === undefined) return;
      const plan = pricingPlans[planIndex];
      setText(paragraphs[1], plan.category);
      setText(paragraphs[2], plan.summary);
      setText(paragraphs[3], plan.summary);
      setText(paragraphs[4], plan.prefix);
      setText(paragraphs[5], plan.price);
      setText(paragraphs[6], plan.priceLabel);
      setText(paragraphs[7], 'CLEAR SCOPE');
      setText(paragraphs[8], 'NO HOURLY BILLING');
      setText(paragraphs[9], plan.description);
      plan.features.forEach((feature, featureIndex) => setText(paragraphs[10 + featureIndex], feature));
      plan.notes.forEach((note, noteIndex) => setText(paragraphs[18 + noteIndex * 2], note));
    });

    const faqCopy = [
      ['Who do you work with?', 'Educators, experts, consultants, authors and independent businesses built around an audience.'],
      ['How much does a project cost?', 'Projects start at $2,500. Most creator-business websites are $3,500–$5,000, depending on scope.'],
      ['Do I need to schedule calls?', 'No. Projects can run entirely through email, shared documents and visual feedback. The workflow is built for clear written decisions, not recurring meetings.'],
      ['Can you redesign an existing creator website?', 'Yes. We keep what works, rethink what does not and rebuild around the business you operate today.'],
      ['Can you connect newsletters, courses and stores?', 'Yes. We can connect the platforms you already use for publishing, email, courses, products and payments.'],
      ['Do you work internationally?', 'Yes. WebCanBe is a remote studio built to work asynchronously with clients across time zones.'],
      ['How are payments handled?', 'A 50% deposit starts the project. The remaining 50% is due before final handoff and launch.'],
      ['What happens after launch?', 'You receive a tested, responsive site and a clear handoff. Ongoing updates and support can be scoped separately.']
    ];
    document.querySelectorAll('[data-framer-name="Section | FAQ"] [class*="-item-"]').forEach((item, index) => {
      const content = faqCopy[index];
      if (!content) {
        item.hidden = true;
        item.style.display = 'none';
        item.setAttribute('aria-hidden', 'true');
        return;
      }
      setText(item.querySelector('span'), content[0]);
      setText(item.querySelector('p'), content[1]);
    });
    document.querySelectorAll('[data-framer-name="Section | Pricing"]').forEach((section) => setPatternText(section, /^PRIC[A-Z0-9]{1,8}$/, 'PRICING'));
    document.querySelectorAll('[data-framer-name="Section | FAQ"]').forEach((section) => setPatternText(section, /^F(?!AQ$)[A-Z0-9]{1,5}$/, 'FAQ'));
    document.querySelectorAll('[data-framer-name="Section | How we work"]').forEach((section) => setPatternText(section, /^HOW [A-Z0-9]{4,10}$/, 'PROCESS'));

    document.querySelectorAll('[data-framer-name="Section | Testimonial"]').forEach((section) => {
      setMatchingText(section, 'READY TO GROW', 'THE THINKING BEHIND THE WORK');
      setMatchingText(section, 'Design notes from the work.', 'The thinking behind the work.');
      setMatchingText(section, 'An editorial commerce system where image, collection and product live in the same world.', "The goal wasn't to give the business more links. It was to give the entire experience one clear place to live.");
      const perspectiveStatements = [
        'Collection imagery and product details share one visual language, so shopping never breaks the editorial mood.',
        'The opening frame establishes the collection before asking the audience to shop.',
        'Each drop moves from story to product without sending the visitor through disconnected pages.',
        'Monochrome art direction and deliberate space make the identity land before the interface does.'
      ];
      [...section.querySelectorAll('p')]
        .filter((label) => /^(?:Collection imagery|The opening frame|Each collection|Strategy,|Essential information|Art direction|Strong fashion|The service offer|The experience)/.test(label.textContent.replace(/\s+/g, ' ').trim()))
        .forEach((label, index) => setText(label, perspectiveStatements[index % perspectiveStatements.length]));
    });

    document.querySelectorAll('[data-framer-name="Section | Blog Teaser"]').forEach((section) => {
      setPatternText(section, /^WH[A-Z0-9]{2,10}$/, 'JOURNAL');
      setMatchingText(section, 'DESIGNED TO LAST on creators, brands and the web.', 'Ideas for creator-led businesses.');
    });
    document.querySelectorAll('[data-framer-name="Section | Book a Call"]').forEach((section) => {
      setMatchingText(section, 'ONE ABOUT', 'ONE OWNED HOME');
    });
    document.querySelectorAll('form[data-framer-name="Contact form"]').forEach((form) => {
      setMatchingText(form, 'By submitting, you agree to our Privacy Policy.', 'Privacy applies.');
      setMatchingText(form, 'Privacy Policy applies.', 'Privacy applies.');
    });

    const updateNavLabel = (link, label) => {
      link.querySelectorAll('p, span').forEach((node) => {
        if (node.children.length === 0 && node.textContent.trim()) setText(node, label);
      });
      link.setAttribute('aria-label', label);
    };
    const isHome = /(?:\/|\/index\.html)$/.test(window.location.pathname);
    const sectionHref = (id) => isHome ? `#${id}` : `index.html#${id}`;
    document.querySelectorAll('[data-framer-name="Footer"]').forEach((footer) => {
      footer.querySelectorAll('a').forEach((link) => {
        const label = link.innerText.replace(/\s+/g, ' ').trim();
        if (/^HOME(?: HOME)?$/i.test(label)) { link.href = sectionHref('showcase'); updateNavLabel(link, 'WORK'); }
        else if (/^SERVICES(?: SERVICES)?$/i.test(label)) link.href = sectionHref('services');
        else if (/^ABOUT(?: ABOUT)?$/i.test(label)) { link.href = sectionHref('process'); updateNavLabel(link, 'PROCESS'); }
      });
      const primaryLinks = [...footer.querySelectorAll('[data-framer-name="Navigate Wrapper"] a[data-framer-name="Navigation"]')].slice(0, 5);
      [
        ['WORK', sectionHref('showcase')],
        ['SERVICES', sectionHref('services')],
        ['PROCESS', sectionHref('process')],
        ['JOURNAL', isHome ? 'whispers.html' : '../whispers.html'],
        ['CONTACT', isHome ? 'contact.html' : '../contact.html']
      ].forEach(([label, href], index) => {
        const link = primaryLinks[index];
        if (!link) return;
        link.href = href;
        updateNavLabel(link, label);
      });
      footer.querySelectorAll('[data-framer-name="Links Wrapper"] a').forEach((link) => {
        if (/^404(?: 404)?$/.test(link.innerText.replace(/\s+/g, ' ').trim()) || /\/404(?:\.html)?$/.test(link.getAttribute('href') || '')) {
          link.remove();
        }
      });
      footer.querySelectorAll('p').forEach((label) => {
        if (/^Content, products, partnerships and audience/.test(label.textContent.trim())) setText(label, 'Premium websites for creator-led businesses.');
      });
    });
    document.querySelectorAll('a[data-framer-name="Navigation"]').forEach((link) => {
      const label = link.innerText.replace(/\s+/g, ' ').trim();
      if (/^ABOUT(?: ABOUT)?$/i.test(label)) { link.href = sectionHref('process'); updateNavLabel(link, 'PROCESS'); }
      else if (/^SERVICES(?: SERVICES)?$/i.test(label)) link.href = sectionHref('services');
      else if (/^HOME(?: HOME)?$/i.test(label)) { link.href = sectionHref('showcase'); updateNavLabel(link, 'WORK'); }
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
      [/샘플/g, '참고'],
      [/\bCreate®?\b/g, 'WebCanBe']
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
    applyInternationalCopy();
    refineInternationalSections();
    refineCreatorBusinessSections();
    setContactForm();
    sanitizeUserFacingSignals();
  };
  const run = () => { refreshContent(); observeBenefitCards(); observeDynamicSections(); observeLinkTargets(); };
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
    window.setTimeout(refreshContent, 10500);
    window.setTimeout(refreshContent, 14000);
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
