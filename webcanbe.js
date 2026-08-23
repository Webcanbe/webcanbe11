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
    ["Services built on process, precision, and people.", "상담부터 배포까지"],
    ["We combine strategy, design, content, and technology, giving you a single partner for every stage of your brand’s growth.", "01 상담 · 02 구조 · 03 디자인 · 04 개발 · 05 배포"],
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
    , ["What our clients say", "WEBCANBE STANDARD"]
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
    , ["Backed by feedback from 맞춤형 brands we’ve worked with.", "디자인부터 배포까지 한 흐름으로 진행합니다."]
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
    , ["Aurelis Beach Resort", "CREATOR WEBSITE"]
    , ["Hospitality branding and website", "콘텐츠 · 프로필 · 협업"]
    , ["Blackwell Motors", "PERSONAL BRAND"]
    , ["Automotive digital transformation", "이름 · 소개 · 서비스"]
    , ["Aspen® 877", "CREATOR COMMERCE"]
    , ["Aspen®", "CREATOR"]
    , ["E-Mobility brand launch", "강의 · 상품 · 뉴스레터"]
    , ["we listen", "듣습니다"]
    , ["we imagine", "설계합니다"]
    , ["we create", "만듭니다"]
    , ["More Projects", "서비스 쇼케이스"]
    , ["Get Template", "WebCanBe"]
    , ["See whats inside", "프로젝트 문의"]
    , ["JOIN OUR NEWSLETTER", "제작 상담하기"]
    , ["Enter Your Email", "이메일을 입력하세요"]
    , ["we listen.", "듣고"]
    , ["we imagine.", "설계하고"]
    , ["we create.", "만듭니다"]
    , ["Ideas", "당신에게서 시작하는"]
    , ["that start with you", "하나뿐인 웹사이트"]
    , ["Client Satisfaction Rate", "제작 원칙"]
    , ["99.9%", "맞춤형"]
    , ["12+", "콘텐츠"]
    , ["INDUSTRIES SERVED", "활동을 한곳에"]
    , ["24H", "소통"]
    , ["AVERAGE RESPONSE TIME", "빠르게 확인"]
    , ["96%", "모바일"]
    , ["FIRST DRAFT APPROVED", "화면에 맞게"]
    , ["99%", "런칭"]
    , ["SHIP ON-TIME", "배포까지"]
    , ["5 / 5 (98 reviews)", "하나의 제작 흐름"]
    , ["Backed by feedback from 120+ brands we’ve worked with.", "디자인부터 배포까지 한 흐름으로 진행합니다."]
    , ["No reheated or pre-made.", "정해진 틀을 쓰지 않습니다."]
    , ["Every project starts fresh.", "처음부터 프로젝트에 맞게."]
    , ["Custom work", "맞춤 제작"]
    , ["from day one.", "첫 단계부터."]
    , ["Simple Pricing", "명확한 제작 방식"]
    , ["Plans that scale with your project and give you room for unlimited creative opportunities.", "필요한 것부터 정리하고 범위에 맞춰 제작합니다."]
    , ["CORE", "기본"]
    , ["FOR STARTUPS AND FIRST LAUNCHES", "공식 사이트의 핵심부터"]
    , ["STUDIO", "맞춤"]
    , ["FOR GROWING TEAMS AND SERIOUS BUILDS", "브랜드에 맞춘 완전한 구성"]
    , ["SCALE", "인터랙티브"]
    , ["FOR ESTABLISHED TEAMS AND LONG-TERM GROWTH", "모션과 기능까지 맞춤 제작"]
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
    , ["WE LISTEN", "듣습니다"]
    , ["WE IMAGINE", "설계합니다"]
    , ["WE CREATE", "만듭니다"]
    , ["beautiful things", "웹으로 완성"]
    , ["—— From first launches to lasting collaborations, we’re trusted to deliver on time and at quality.", "콘텐츠와 활동을 하나의 공식 사이트로 정리합니다."]
    , ["PROJECTS SHIPPED", "맞춤 설계"]
    , ["REPEAT COLLABORATIONS", "반응형 개발"]
    , ["INDUSTRY AWARDS", "인터랙션"]
    , ["CLIENT RETENTION RATE", "런칭 지원"]
    , ["—— We work with clarity, precision. Every step designed to move your project forward with confidence.", "필요한 과정을 분명하게 정리하고, 단계마다 함께 확인합니다."]
    , ["We start by listening. Goals, challenges, and vision are mapped out clearly, setting the foundation for everything that follows.", "목표와 필요한 내용을 듣고 프로젝트의 방향을 정리합니다."]
    , ["With insights in place, we define the roadmap. Positioning, priorities, and the best way to align design and execution.", "필요한 페이지와 콘텐츠를 정리하고 사이트의 흐름을 설계합니다."]
    , ["Ideas take shape. From visuals to digital experiences, we design and develop with sharp attention to detail.", "브랜드와 콘텐츠에 맞는 화면과 경험을 디자인합니다."]
    , ["Delivery is just the beginning. We measure, refine, and scale to ensure your project continues to perform.", "디자인을 실제 웹으로 구현하고 움직임과 디테일까지 완성합니다."]
    , ["Step inside one of our featured projects. From first brief to launch, follow the process that shows what makes Create® different.", "상담부터 배포까지, 하나의 흐름으로 진행합니다."]
    , ["Our process in motion", "하나의 흐름으로 완성합니다."]
    , ["Explore a real case where strategy, design, and delivery lined up exactly as we work today.", "방향을 정하고 디자인한 뒤, 개발과 검수를 거쳐 공개합니다."]
    , ["Explore Case Studies", "프로젝트 상담하기"]
    , ["WHY CHOOSE US", "WHY WEBCANBE"]
    , ["Designed to Make Your Life Easier", "좋은 웹사이트는 과정도 명확해야 합니다."]
    , ["—— Clear process, quick reviews, and a clean launch at the end. We keep the steps simple so projects never get stuck.", "방향을 정하고 빠르게 확인해, 완성된 사이트를 실제로 공개합니다."]
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
    , ["Plans built to fit your next project", "프로젝트에 맞춘 제작 범위"]
    , ["—— Designed around your specs, each plan gives you clarity on scope, features, and cost so you can move forward with confidence.", "필요한 페이지와 기능을 확인한 뒤 범위와 비용을 분명하게 안내합니다."]
    , ["For startups and first launches", "첫 공식 사이트를 위한 구성"]
    , ["Simple, fast, and effective, so you can focus on growing your business.", "핵심 페이지에 집중해 빠르고 명확하게 시작합니다."]
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
    , ["For growing teams and serious builds", "브랜드를 확장하는 맞춤 구성"]
    , ["A complete package with flexibility, advanced design, and the support you need to grow faster.", "브랜드와 콘텐츠에 맞춰 페이지와 기능을 유연하게 구성합니다."]
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
    , ["For established teams and long-term growth", "장기 운영과 확장을 위한 구성"]
    , ["Strategy, design, and dedicated support for complex projects that demand scalability and polish.", "전략부터 디자인과 개발, 운영 지원까지 하나의 흐름으로 진행합니다."]
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
    , ["WHAT OUR CLIENTS SAY", "WEBCANBE STANDARD"]
    , ["Partnerships that last, results that stick.", "완성도를 만드는 기준"]
    , ["From kickoff to launch, brands trust us to stay close, adapt fast, and deliver without any drama.", "빠른 진행보다 중요한 것은 방향과 디테일을 끝까지 지키는 것입니다."]
    , ["WRITE A REVIEW", "제작 상담하기"]
    , ["Spotlight", "PROJECT STANDARD"]
    , ["“They didn’t just hit the brief, they raised it. The project felt collaborative from start to finish, with clear updates, quick turns, and a final product that carried our brand further than we imagined.”", "목표와 콘텐츠를 먼저 정리하고, 필요한 결정은 단계마다 함께 확인합니다."]
    , ["Samuel Laronde", "PROCESS"]
    , ["Marketing Lead", "명확한 제작 흐름"]
    , ["September 2025", "WebCanBe"]
    , ["“From kickoff to launch, the process was fast-moving but never chaotic. Create kept everyone in the loop, solved issues before they became problems, and shipped exactly when they said they would.”", "진행 상황을 투명하게 공유하고, 문제는 배포 전에 확인해 해결합니다."]
    , ["Matthew Parker", "LAUNCH"]
    , ["Head of Product", "검수와 배포"]
    , ["“They didn’t just design a website, they built a framework we can grow with. Every decision was backed with clarity, and the final product looks polished while staying practical for our team.”", "지금 필요한 화면을 만들고, 이후 콘텐츠와 기능을 확장할 수 있도록 설계합니다."]
    , ["Maya Chen", "STRUCTURE"]
    , ["Brand Manager", "확장 가능한 구조"]
    , ["“They don’t just deliver a project and walk away. The team stayed close, fixed details on the fly, and made sure launch was smooth.”", "오픈 이후에도 필요한 수정과 운영 지원을 이어갈 수 있습니다."]
    , ["Mark Miller", "SUPPORT"]
    , ["Creative Lead", "오픈 이후 지원"]
    , ["“Working with Create felt effortless. They understood our vision from day one and kept us aligned through clear milestones. The end result was a site that actually elevated our brand voice, not just dressed it up.”", "브랜드의 목소리가 화면과 콘텐츠 전체에서 일관되게 보이도록 정리합니다."]
    , ["Jordan Ellis", "DESIGN"]
    , ["Creative Director", "브랜드와 콘텐츠"]
    , ["BLACKWELL", "CREATOR WEBSITE"]
    , ["“Every meeting felt productive, every deadline was hit, and the end result nailed our brand better than we could describe.”", "필요한 논의만 선명하게 진행하고, 결정된 범위에 집중해 완성합니다."]
    , ["Head of Design", "프로젝트 디렉션"]
    , ["“Create took our messy brief and turned it into a site we’re proud to show. Fast, sharp, and no overthinking.”", "흩어진 자료를 정리해 자신 있게 보여줄 수 있는 공식 사이트로 만듭니다."]
    , ["MADISON SQUARE", "PERSONAL BRAND"]
    , ["Madison Square", "PERSONAL BRAND"]
    , ["“Create has a rare balance of speed and detail. They made complex flows simple, turned feedback into quick iterations, and delivered a product that’s both user-friendly and brand-right.”", "복잡한 흐름은 단순하게 정리하고, 피드백은 빠르게 반영해 디테일까지 완성합니다."]
    , ["Margaret Brooks", "INTERACTION"]
    , ["What bubbles up needs to be shared", "제작 이야기를 나눕니다"]
    , ["—— From new launches to design explorations and team experiments, this is where ideas take shape and stories unfold.", "크리에이터 웹사이트의 구조와 콘텐츠, 운영에 관한 실용적인 가이드입니다."]
    , ["Whispers - Blog", "제작 가이드"]
    , ["From small sparks to big ideas.", "작은 아이디어부터 공식 사이트까지."]
    , ["Articles, notes on creativity, strategy and making things work.", "기획과 디자인, 실제 제작에 필요한 내용을 정리합니다."]
    , ["Studio projects and case studies", "크리에이터 사이트 사례"]
    , ["Notes on design and process", "디자인과 제작 과정"]
    , ["Ideas, insights, and inspiration", "콘텐츠와 운영 아이디어"]
    , ["Rethinking Product Design with Intelligence", "콘텐츠를 공식 사이트로 정리하는 법"]
    , ["A SaaS product team approached us with an AI add-on. The challenge was to rethink AI not as a widget but as a foundation for smarter systems.", "여러 플랫폼에 흩어진 콘텐츠를 방문자가 이해하기 쉬운 하나의 흐름으로 정리합니다."]
    , ["Digital Identities Across Cultures", "개인 브랜드의 디지털 아이덴티티"]
    , ["Numeriq approached us to redefine their online presence. The challenge was balancing their street-level origins with their luxury aspirations.", "프로필과 활동, 상품이 같은 인상으로 이어지도록 웹사이트의 기준을 세웁니다."]
    , ["Architecture in the Digital Age", "포트폴리오를 웹 경험으로 만드는 법"]
    , ["An architecture studio wanted its online presence to feel as ambitious as its buildings. The challenge was to move beyond static portfolios and reflect authority and vision.", "작업을 나열하는 데서 그치지 않고 시선의 흐름과 인터랙션으로 포트폴리오를 보여줍니다."]
    , ["The Future of E-Mobility Marketing from Lindholm", "크리에이터 커머스의 사이트 구조"]
    , ["Lindholm launched CREATOR 877, a new e-bike. The challenge was positioning it as both a lifestyle product and a piece of cutting-edge mobility tech.", "콘텐츠에서 상품과 강의, 뉴스레터까지 자연스럽게 이어지는 구조를 설계합니다."]
    , ["UX Strategist", "WebCanBe Guide"]
    , ["How Automotive Brands Win Online", "브랜드를 보여주는 온라인 공간"]
    , ["An automotive brand asked us to build a digital showroom. The challenge was giving customers an online experience that could rival the thrill of being behind the wheel.", "링크 모음이 아니라 이름과 활동의 가치를 충분히 보여주는 공식 공간을 만듭니다."]
    , ["More Whispers", "가이드 더 보기"]
    , ["9 years", "ONE STUDIO"]
    , ["Building lasting partnerships, scaling brands, and shipping work that stands out.", "처음 상담부터 공개 이후까지 한 팀이 함께합니다."]
    , ["120+ projects delivered", "맞춤 구조 설계"]
    , ["99% on-time launches", "반응형 개발"]
    , ["84% average boost in engagement", "런칭과 운영 지원"]
    , ["\"We listen first, stay transparent, and deliver what we promise.", "먼저 듣고, 과정을 투명하게 공유하며, 약속한 범위까지 완성합니다."]
    , ["Every project matters to us.\"", "모든 프로젝트를 같은 기준으로 다룹니다."]
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
    ["Industries served", "한곳에"],
    ["24h", "소통"],
    ["Average Response Time", "빠르게 확인"],
    ["First Draft Approved", "화면에 맞게"],
    ["Ship on-Time", "배포까지"],
    ["Core", "기본"],
    ["For startups and first launches", "공식 사이트의 핵심부터"],
    ["Studio", "맞춤"],
    ["For growing teams and serious builds", "브랜드에 맞춘 완전한 구성"],
    ["Scale", "인터랙티브"],
    ["For established teams and long-term growth", "모션과 기능까지 맞춤 제작"]
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
      ['Digital experiences that connect, scale and perform', '크리에이터를 위한 공식 웹사이트'],
      ['Digital experiences that connect, scale and perform.', '크리에이터를 위한 공식 웹사이트'],
      ['SEE WORK', '서비스 보기'],
      ["LET'S CHAT", '제작 상담하기'],
      ['120+', '맞춤형'],
      ['Create\\Studio', 'WebCanBe'],
      ['WE LISTEN', '듣습니다'],
      ['WE IMAGINE', '설계합니다'],
      ['WE CREATE', '만듭니다'],
      ['beautiful things', '웹으로 완성'],
      ['Services built on process, precision, and people.', '상담부터 배포까지'],
      ['We combine strategy, design, content, and technology, giving you a single partner for every stage of your brand’s growth.', '01 상담 · 02 구조 · 03 디자인 · 04 개발 · 05 배포'],
      ['Our process in motion', '하나의 흐름으로 완성합니다'],
      ['Designed to Make Your Life Easier', '좋은 웹사이트는 과정도 명확해야 합니다'],
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
      ['Every project is led by senior designers and developers. No handoffs to juniors figuring things out on the fly.', '프로젝트 방향에 따라 스크롤과 전환, 마우스 반응을 적용할 수 있습니다.'],
      ['We keep things simple: one main contact, weekly updates, and quick replies when you need us.', '최종 사이트 배포와 기본 도메인 연결까지 진행할 수 있습니다.'],
      ['We can stay involved — fixing issues, rolling out updates, or handling ongoing support if that’s part of your plan.', '필요에 따라 외부 결제·판매 플랫폼 또는 맞춤 기능을 연결할 수 있습니다.'],
      ['Let us inspire your next project', '웹에 남기세요'],
      ['BOOK A CALL', '상담하기'],
      ['Keep you in the loop.', 'WebCanBe와 시작하세요'],
      ['Get the latest news, insights directly to your inbox.', '크리에이터와 1인 브랜드를 위한 웹사이트 스튜디오'],
      ['we listen.', '듣고'],
      ['we imagine.', '설계하고'],
      ['we create.', '만듭니다'],
      ['Ideas', '당신에게서 시작하는'],
      ['that start with you', '하나뿐인 웹사이트'],
      ['Client Satisfaction Rate', '제작 원칙'],
      ['99.9%', '맞춤형'],
      ['12+', '콘텐츠'],
      ['INDUSTRIES SERVED', '활동을 한곳에'],
      ['24H', '소통'],
      ['AVERAGE RESPONSE TIME', '빠르게 확인'],
      ['96%', '모바일'],
      ['FIRST DRAFT APPROVED', '화면에 맞게'],
      ['99%', '런칭'],
      ['SHIP ON-TIME', '배포까지'],
      ['5 / 5 (98 reviews)', '하나의 제작 흐름'],
      ['Backed by feedback from 120+ brands we’ve worked with.', '디자인부터 배포까지 한 흐름으로 진행합니다.'],
      ['No reheated or pre-made.', '정해진 틀을 쓰지 않습니다.'],
      ['Every project starts fresh.', '처음부터 프로젝트에 맞게.'],
      ['Custom work', '맞춤 제작'],
      ['from day one.', '첫 단계부터.'],
      ['Simple Pricing', '명확한 제작 방식'],
      ['Plans that scale with your project and give you room for unlimited creative opportunities.', '필요한 것부터 정리하고 범위에 맞춰 제작합니다.'],
      ['CORE', '기본'],
      ['FOR STARTUPS AND FIRST LAUNCHES', '공식 사이트의 핵심부터'],
      ['STUDIO', '맞춤'],
      ['FOR GROWING TEAMS AND SERIOUS BUILDS', '브랜드에 맞춘 완전한 구성'],
      ['SCALE', '인터랙티브'],
      ['FOR ESTABLISHED TEAMS AND LONG-TERM GROWTH', '모션과 기능까지 맞춤 제작'],
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
      ['What Our Clients Say', 'WEBCANBE STANDARD'],
      ['What our clients say', 'WEBCANBE STANDARD'],
      ['Madison Square', 'PERSONAL BRAND'],
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
    const description = "크리에이터와 1인 브랜드의 콘텐츠, 상품, 활동을 하나의 공식 웹사이트에 담는 WebCanBe.";
    document.querySelectorAll('meta[name="description"], meta[property="og:description"], meta[name="twitter:description"]').forEach((el) => el.content = description);
    document.querySelectorAll('meta[property="og:title"], meta[name="twitter:title"]').forEach((el) => el.content = document.title);
  };

  const setLinks = () => {
    const staticRoutes = new Map([
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
    document.querySelectorAll('a[href*="framerpod"], a[href*="framer.com"]').forEach((a) => {
      if (/template|more templates/i.test(a.textContent)) a.remove();
    });
    document.querySelectorAll('a').forEach((a) => {
      try {
        const url = new URL(a.href, window.location.href);
        const target = staticRoutes.get(url.pathname.replace(/\/$/, ''));
        if (target) a.href = `${target}${url.search}${url.hash}`;
      } catch (_) {}
      if (/제작 상담하기|프로젝트 상담하기|LET'S CHAT/i.test(a.textContent)) a.href = "contact.html";
      if (/서비스 보기|서비스/.test(a.textContent)) a.href = "#services";
      if (/소개/.test(a.textContent)) a.href = "#about";
      if (/가이드/.test(a.textContent)) a.href = "#faq";
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
    ['Section | Introduction', 'Section | Services', 'Section | How we work', 'Section | Why Choose Us', 'Section | Testimonial', 'Section | Blog Teaser', 'Section | Book a Call', 'Footer'].forEach((name) => {
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
    replaceImage('img[alt^="Close-up of black road bike"]', 'assets/webcanbe-creator-site-showcase.png', '크리에이터 커머스 웹사이트 쇼케이스');
    replaceImage('img[alt^="Abstract dark background"]', 'assets/webcanbe-creator-site-showcase.png', 'WebCanBe 크리에이터 웹사이트 비주얼');
    replaceImage('img[alt="Abstract 3D composition of floating spheres and cubes in monochrome tones with soft lighting."]', 'assets/webcanbe-design-process.png', 'WebCanBe 웹사이트 디자인 과정');
    replaceImage('img[alt^="A person in a white hoodie and joggers"]', 'assets/webcanbe-contact-creator.png', '개인 브랜드 크리에이터 에디토리얼 포트레이트');
    replaceImage('img[alt="Modern glass building photographed from below"]', 'assets/webcanbe-creator-site-showcase.png', '크리에이터 포트폴리오 웹사이트 쇼케이스');
    replaceImage('img[alt="Electric Bike behind Pillar"]', 'assets/webcanbe-creator-workspace.png', '크리에이터 커머스 웹사이트 제작 과정');
    replaceImage('img[alt="red sports car in front of a showroom with bright lights"]', 'assets/webcanbe-creator-portrait.png', '개인 브랜드 공식 웹사이트 포트레이트');
    replaceImage('img[alt="Logo"]', 'assets/webcanbe-wordmark.svg', 'WebCanBe');
    replaceImage('img[src*="aJxLydBlZv1oYCCj63OZdiRqLuQ"]', 'assets/webcanbe-wordmark.svg', 'WebCanBe');
    replaceImage('[data-framer-name="Benefit Cards"] img[alt^="Minimalist stack of guideline with clean typography and red covers"]', 'assets/webcanbe-design-process.png', 'WebCanBe의 맞춤 웹사이트 설계 과정');
    replaceImage('[data-framer-name="Benefit Cards"] img[alt^="Minimalist stack of guideline with clean typography and blue covers"]', 'assets/webcanbe-creator-workspace.png', '개인 브랜드 웹사이트를 설계하는 크리에이터 스튜디오');
    replaceImage('[data-framer-name="Benefit Cards"] img[alt^="Minimalist stack of guideline with clean typography and monochrome covers"]', 'assets/webcanbe-creator-site-showcase.png', 'WebCanBe 크리에이터 웹사이트 쇼케이스');
    replaceImage('[data-framer-name="Section | Pricing"] img[alt^="Minimalist stack of guideline with clean typography and red covers"]', 'assets/webcanbe-design-process.png', 'WebCanBe 맞춤 웹사이트 설계 자료');
    replaceImage('[data-framer-name="Section | Pricing"] img[alt^="Minimalist stack of guideline with clean typography and blue covers"]', 'assets/webcanbe-creator-workspace.png', '크리에이터 웹사이트 제작 과정');
    replaceImage('[data-framer-name="Section | Pricing"] img[alt^="Minimalist stack of guideline with clean typography and monochrome covers"]', 'assets/webcanbe-creator-site-showcase.png', 'WebCanBe 크리에이터 사이트 쇼케이스');
    replaceImage('img[alt="Person wearing white full-face hood with only eyes visible."]', 'assets/webcanbe-creator-workspace.png', '개인 브랜드 웹사이트를 설계하는 스튜디오');
    replaceImage('img[alt="Man wearing white bunny hat with fake glasses and mustache design."]', 'assets/webcanbe-design-process.png', 'WebCanBe 웹사이트 디자인 과정');
    replaceImage('img[alt="an in black hoodie and sunglasses holding finger to lips."]', 'assets/webcanbe-creator-portrait.png', '개인 브랜드 크리에이터 에디토리얼 포트레이트');
    replaceImage('img[alt="Person in sunglasses making playful face with tongue out."]', 'assets/webcanbe-contact-creator.png', '크리에이터 웹사이트를 준비하는 개인 브랜드');
    replaceImage('[data-framer-name="Section | Book a Call"] img[alt^="Man with short hair and beard"]', 'assets/webcanbe-contact-creator.png', '프로젝트를 준비하는 개인 브랜드 크리에이터');
    document.querySelectorAll('[data-framer-name="Section | Testimonial"] [data-framer-name="Logo Mark"] img').forEach((logo) => {
      logo.src = 'assets/webcanbe-wordmark.svg';
      logo.alt = 'WebCanBe';
      logo.setAttribute('aria-label', 'WebCanBe');
      logo.style.filter = 'none';
    });
    document.querySelectorAll('[data-framer-name="Section | Testimonial"] [data-framer-name="Stars"]').forEach((stars) => stars.style.display = 'none');
    document.querySelectorAll('[data-framer-name="Menu"] [data-framer-name="Logo Mark"] img').forEach((logo) => logo.style.filter = 'invert(1)');
    replaceImage('[data-framer-name^="Benefit Card 06"] img[alt^="3D character wearing an orange jumpsuit"]', 'assets/webcanbe-contact-creator.png', '개인 브랜드를 운영하는 크리에이터의 에디토리얼 포트레이트');
    document.querySelectorAll('[data-framer-name="Benefit Cards"] [data-framer-name="Stars"]').forEach((stars) => stars.style.display = 'none');
    document.querySelectorAll('[data-framer-name^="Benefit Card 06"] video').forEach((video) => {
      if (video.poster.endsWith('assets/webcanbe-creator-workspace.png')) return;
      video.pause();
      video.poster = 'assets/webcanbe-creator-workspace.png';
      video.removeAttribute('src');
      video.querySelectorAll('source').forEach((source) => source.remove());
      video.setAttribute('aria-label', '개인 브랜드 웹사이트를 설계하는 크리에이터');
      video.load();
    });
    document.querySelectorAll('[data-framer-name^="Benefit Card 06"] a').forEach((link) => link.href = 'contact.html');
    document.querySelectorAll('input[placeholder="Enter Your Email"]').forEach((input) => input.placeholder = '이메일을 입력하세요');
    document.querySelectorAll('[data-framer-name="Socials Links"]').forEach((links) => links.style.visibility = 'hidden');
    document.querySelectorAll('[aria-label="Social media link"]').forEach((link) => link.setAttribute('aria-label', 'WebCanBe 링크'));
    document.querySelectorAll('[data-framer-name="Section | Pricing"] p').forEach((label) => {
      if (label.textContent.trim() === 'was') label.textContent = '기존';
    });
    const projectLabels = new Map([
      ['Lindholm', 'PROCESS'], ['Monolith', 'STRUCTURE'], ['Vornberg', 'SUPPORT'],
      ['Wendrich', 'DESIGN'], ['Aurelis', 'CREATOR WEBSITE'], ['Morisson', 'INTERACTION']
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

  const refreshContent = () => { setMeta(); replaceAnimatedCopy(); replaceText(); setLinks(); removeUnsupportedClaims(); curateHome(); };
  const run = () => { refreshContent(); observeBenefitCards(); observeDynamicSections(); setContactForm(); };
  // Framer hydrates its exported markup asynchronously; apply content after it settles.
  const start = () => {
    window.setTimeout(run, 1800);
    window.setTimeout(refreshContent, 4200);
    window.setTimeout(refreshContent, 6800);
    window.setTimeout(refreshContent, 10500);
  };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start);
  else start();
})();
