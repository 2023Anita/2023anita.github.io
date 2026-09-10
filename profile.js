
const content={
  en:{
    nav:{home:'Home',portfolio:'Portfolio',system:'Anita OS',about:'About',competitions:'Competitions',awards:'Awards',communication:'Communication',projects:'Projects',openSource:'Open Source',appointments:'Appointments',skills:'Skills',contact:'Contact'},
    hero:{
      kicker:'Clinical AI Workstation',
      name:'Lixin Yin',
      role:'Anesthesiologist & Medical AI Researcher',
      institution:"Jiangyin People's Hospital, Jiangsu, China",
      tags:['Anesthesiology','Medical AI','Deep Learning','Clinical Decision Support','AI Workflows','Sleep Magician'],
      bio:'I start with clinical problems and build with code. I create AI tools, test research ideas, and turn knowledge into practice.',
      email:'Email Me',
      launchDone:'Workspace unlocked · Scroll to enter',
      launchLines:[
        '$ boot clinical-ai.workstation',
        '> loading clinician profile...',
        '$ whoami',
        '> Lixin Yin · anesthesiologist · medical AI builder',
        '$ cat operating-system.md',
        '> perioperative safety + sleep health + AI agents + open source',
        '$ open anita-os.app',
        '> workspace ready'
      ],
      terminal:[
        {prompt:'whoami',output:'anesthesiologist / medical AI builder / sleep health communicator'},
        {prompt:'cat focus.md',output:'perioperative safety · life-science AI · sleep management · agent workflows'},
        {prompt:'open sleep-magician.channel',output:'WeChat public account: Sleep Magician'}
      ],
      signals:[
        {value:'4',label:'Kaggle medals',desc:'Life-science competitions translated into clinical AI practice.'},
        {value:'31',label:'Merged PRs',desc:'Small, verifiable contributions across high-star open source projects.'},
        {value:'AI+Health',label:'Project lane',desc:'Clinical AI, agent workflows, medical education, and public communication.'},
        {value:'Sleep Magician',label:'Public channel',desc:'AI workflows, healthcare technology, and practical public education.'}
      ]
    },
    portfolio:{label:'Evidence Portfolio',title:'Clinical questions. AI tools.',subtitle:'I build, test, and share medical AI. Explore my projects, competitions, and open-source contributions.'},
    competitions:{label:'International Competitions',title:'Kaggle Competition Honors'},
    awards:{label:'National & Regional Recognition',title:'Awards & Projects'},
    communication:{label:'AI Workflows & Healthcare Communication',title:'Practical AI for Healthcare and Learning'},
    projects:{label:'Owned GitHub Work',title:'GitHub Projects',link:'View Repository',site:'Live Website',repo:'GitHub',stars:'stars'},
    openSource:{
      label:'Open Source Contributions',
      title:'Merged PRs in High-Star GitHub Projects',
      typesTitle:'Contribution patterns',
      reposTitle:'Selected projects over 10K stars',
      note:'Stats use merged PRs authored by 2023Anita and current public GitHub star counts as of Jun 2026.'
    },
    appointments:{label:'Academic Service',title:'Professional Appointments'},
    skills:{label:'Technical Expertise',title:'Key Skills'},
    contact:{title:'Get in Touch',desc:'Interested in collaboration, research discussion, medical AI projects, or practical AI education? Feel free to reach out.',wechat:'WeChat: Sleep Magician'},
    footer:"© 2026 Lixin Yin · Jiangyin People's Hospital",
    medals:[
      {icon:'🥈',kind:'silver',title:'Stanford RNA 3D Folding',rank:'Rank 55 / 1,516 teams — Top 3.6%',org:'Organizer: Stanford University',desc:'Built high-accuracy deep learning models to predict RNA molecular 3D folding structures, tackling a key computational challenge in life science.',date:'Sep 2025'},
      {icon:'🥈',kind:'silver',title:'CIBMTR — Post-HCT Survival Equity',rank:'Rank 83 / 3,325 teams — Top 2.5%',org:'Organizer: CIBMTR',desc:'Applied AutoML and ensemble methods to build equitable survival prediction models for hematopoietic stem cell transplant patients across diverse populations.',date:'Mar 2025'},
      {icon:'🥉',kind:'bronze',title:'CZII — CryoET Object Identification',rank:'Rank 51 / 931 teams — Top 5.5%',org:'Organizer: CZ Imaging Institute',desc:'Developed a high-recall 3D object detection model to identify protein complexes in cryo-electron tomography data.',date:'Feb 2025'}
    ],
    awardsList:[
      {badge:'3rd Prize',title:'2025 Inaugural "AI Navigation Cup" — AI+ Skills Contest',project:'AnesGuardian — Intelligent Anesthesia Guardian System',meta:'Organizer: Internet Society of China · Track: AI + Medical Health · Nov 2025',desc:'Participated in developing a perioperative intelligent monitoring and early-warning system to enhance anesthesia safety.'},
      {badge:'Top 8 · Best Practice',title:'2025 Digital China Innovation Contest',project:'AI-Powered Full-Cycle Sleep Management Platform',meta:'Organizer: 8th Digital China Summit · Track: Artificial Intelligence · Apr 2025',desc:'Led the algorithm design for a full-cycle sleep intervention and management system; recognized for practical application value.'},
      {badge:'Outstanding Case',title:'2025 Data Content Annual Case Collection',project:'Smart-Fit-Agent',meta:'Organizer: Fudan University & The Paper · Feb 2025',desc:'Designed and developed an AI-driven personalized health adaptation agent and explored LLM-agent applications in health management.'},
      {badge:'3rd Prize',title:'2025 Jiangsu Province "Data Factor ×" Jiangyin Regional Competition',project:'Medical Health Data Factor Development & Utilization',meta:'Organizer: Jiangyin Data Bureau & Jiangyin Federation of Trade Unions · Oct 2025',desc:'Explored practical use of healthcare data elements in regional digital-health scenarios.'},
      {badge:'3rd Prize',title:'2025 National Smart Medical Insurance Competition',project:'Medical Insurance Value Compass (Agent Edition)',meta:"Organizer: National Healthcare Security Administration · Team: Datapower · Jiangyin People's Hospital",desc:'Built an agent-style view of medical-insurance value assessment for healthcare decision support.'}
    ],
    communicationList:[
      {name:'Sleep Magician',role:'WeChat public account',desc:'A clinician-led public channel that explains AI workflows, agent systems, medical AI, and health education in plain language—with sleep and perioperative health as clinical anchors.',tags:['AI Workflows','Medical AI','Healthcare Education','Public Communication'],qrLabel:'Scan to follow on WeChat',qrAlt:'WeChat QR code for Sleep Magician',metrics:[{value:'AI',label:'Workflows and agent practice'},{value:'Health',label:'Clinician-led medical context'},{value:'Learn',label:'Guides, courses, and explainers'}]}
    ],
    projectsList:[
      {name:'AI and Anesthesia Teaching Courseware',stars:3,url:'https://github.com/2023Anita/anesthesia-teaching-courseware',siteUrl:'https://2023anita.github.io/anesthesia-teaching-courseware/',image:'assets/ai-anesthesia-teaching-courseware.png',imageAlt:'AI and Anesthesia Teaching Courseware website preview',desc:'A bilingual, visual anesthesia teaching website for Cornell first-year students and early medical learners, created through a clinician-led, AI-assisted workflow.',tags:['Anesthesiology','Medical Education','AI Courseware','GitHub Pages']},
      {name:'MedicalAI-Platform',stars:48,url:'https://github.com/2023Anita/MedicalAI-Platform',desc:'A multi-agent medical analysis platform for structured health-report interpretation and clinical reasoning workflows.',tags:['TypeScript','Medical AI','Agents']},
      {name:'Smart-Fit-Agent',stars:10,url:'https://github.com/2023Anita/Smart-Fit-Agent',desc:'An AI-powered health management app for personalized meal plans, exercise routines, and food analysis.',tags:['TypeScript','Health Agent','Lifestyle']},
      {name:'med-dataset-platform',stars:3,url:'https://github.com/2023Anita/med-dataset-platform',desc:'A professional platform for generating, managing, and exporting medical AI datasets.',tags:['JavaScript','Dataset','Medical AI']},
      {name:'AnesGuardian',stars:0,url:'https://github.com/2023Anita/AnesGuardian',desc:'A perioperative anesthesia assessment and decision-support platform focused on anesthesia safety.',tags:['TypeScript','Anesthesia','CDSS']},
      {name:'emergency-mdt-ai-platform',stars:0,url:'https://github.com/2023Anita/emergency-mdt-ai-platform',desc:'An emergency MDT decision-support platform for triage, differential diagnosis, OCR report parsing, and patient workflow design.',tags:['TypeScript','Emergency','Workflow']},
      {name:'openai-agents-medical-research-guide',stars:0,url:'https://github.com/2023Anita/openai-agents-medical-research-guide',desc:'A multilingual OpenAI Agents SDK course built around a safety-first medical research assistant.',tags:['MDX','Course','OpenAI Agents']},
      {name:'agent-token-budget',stars:3,url:'https://github.com/2023Anita/agent-token-budget',desc:'A visual, copy-ready guide for AI coding agent token budgets and safety boundaries.',tags:['CSS','AI Coding','Guide']},
      {name:'ai-coding-intel-radar',stars:2,url:'https://github.com/2023Anita/ai-coding-intel-radar',desc:'A Cloudflare + Codex + Obsidian template for a daily AI coding intelligence radar.',tags:['JavaScript','Cloudflare','Obsidian']},
      {name:'codex-video-director-skill',stars:0,url:'https://github.com/2023Anita/codex-video-director-skill',desc:'A storyboard-driven Codex skill for AI video production and dual-style demos.',tags:['JavaScript','Video','Skill']},
      {name:'idea-evaluator',stars:0,url:'https://github.com/2023Anita/idea-evaluator',desc:'A skill-orchestration and idea-evaluation toolkit for AI developers.',tags:['Shell','AI Tools','Skills']}
    ],
    contributionStats:[
      {value:'31',label:'merged PRs'},
      {value:'41',label:'merged commits'},
      {value:'15',label:'external projects'},
      {value:'~598K',label:'stars reached'}
    ],
    contributionTypes:[
      {name:'Reliability fixes',desc:'Targeted bug fixes for tests, cleanup paths, encoding edge cases, dependency gates, and agent workflow reliability.'},
      {name:'Documentation quality',desc:'Small, verifiable updates to stale links, resource references, project formats, and terminology in widely used repositories.'},
      {name:'Research and clinical AI guidance',desc:'Contributions that translate clinical research habits into safer AI-agent, citation, and review workflows.'}
    ],
    contributionRepos:[
      {name:'EbookFoundation/free-programming-books',stars:390557,prs:'1 merged PR',url:'https://github.com/EbookFoundation/free-programming-books',desc:'A global collection of freely available programming books; contributed a course-link HTTPS update.'},
      {name:'DietrichGebert/ponytail',stars:43925,prs:'1 merged PR',url:'https://github.com/DietrichGebert/ponytail',desc:'An AI-agent engineering tool; contributed a test reliability fix that cleans temporary hook directories on failure.'},
      {name:'github/awesome-copilot',stars:35350,prs:'1 merged PR',url:'https://github.com/github/awesome-copilot',desc:'GitHub Copilot community instructions, agents, skills, and configuration resources; clarified .NET Framework project formats.'},
      {name:'Imbad0202/academic-research-skills',stars:33147,prs:'8 merged PRs',url:'https://github.com/Imbad0202/academic-research-skills',desc:'Claude Code skills for academic research, writing, review, and revision; contributed review, safety, and clinical citation guidance.'},
      {name:'aishwaryanr/awesome-generative-ai-guide',stars:27802,prs:'1 merged PR',url:'https://github.com/aishwaryanr/awesome-generative-ai-guide',desc:'A curated guide to generative AI research and learning resources; updated a DeepLearning.AI resource link.'},
      {name:'HKUDS/DeepTutor',stars:24859,prs:'3 merged PRs',url:'https://github.com/HKUDS/DeepTutor',desc:'An agent-native personalized tutoring project; contributed fixes for encoding, nested output handling, and Python dependency gates.'},
      {name:'OthmanAdi/planning-with-files',stars:23683,prs:'1 merged PR',url:'https://github.com/OthmanAdi/planning-with-files',desc:'Persistent file-based planning for AI coding agents; contributed a non-blocking Codex stop hook fix.'}
    ],
    appointmentsList:[
      {icon:'shield',role:'Expert Reviewer',org:'Fuzhou Municipal Health Science & Technology Program Expert Panel',date:'Enrolled Oct 2025 · Specialties: Anesthesiology, Clinical Decision Support'},
      {icon:'book',role:'Peer Reviewer',org:'Chinese Medical Association — Digital Medicine and Health Journal',date:'Enrolled Jun 2024 · Specialty: Medicine × AI Interdisciplinary'}
    ],
    skillsList:[
      {cat:'Clinical Medicine',items:['Clinical anesthesia management','Perioperative medicine','Physiological parameter monitoring']},
      {cat:'Deep Learning',items:['PyTorch / TensorFlow','Transformer architectures','CNN, ResNet variants']},
      {cat:'Computer Vision',items:['3D medical image processing','CryoET / CT / MRI analysis','3D object detection']},
      {cat:'Bioinformatics',items:['RNA / protein structure prediction','AlphaFold-related methods','Molecular property modeling']},
      {cat:'Structured Data Analysis',items:['Survival analysis','AutoML / ensemble methods','Clinical outcome modeling']},
      {cat:'AI Agents & LLMs',items:['LLM-based agent design','Health management applications','Clinical AI deployment']}
    ],
    system:{
      label:'Personal Operating System',
      title:'Anita Clinical AI OS',
      desc:'A map of recurring loops connecting my clinical work, research, AI workflows, teaching, open source, and public communication.',
      core:'Clinical AI Workstation',
      canvasLabel:'Workflow Map',
      canvasTitle:'From clinical signal to reusable AI work',
      canvasDesc:'My OS is less a static identity map and more a repeatable loop: clinical questions become datasets, models, agent procedures, teaching assets, open-source fixes, and public-facing explainers, then return to real-world validation.',
      nodes:[
        {name:'Perioperative Medicine',desc:'Clinical anesthesia, monitoring, and safety questions from the bedside.',color:'#01696f'},
        {name:'Anesthesia Safety',desc:'Risk warning, decision support, and quality-control scenarios.',color:'#0f766e'},
        {name:'Sleep Health',desc:'Sleep intervention, recovery, and longitudinal health management.',color:'#8a4f17'},
        {name:'Kaggle Life Science',desc:'RNA folding, survival modeling, and CryoET object detection.',color:'#2f5f9f'},
        {name:'AI Agent Workflows',desc:'Codex, research assistants, and repeatable clinical AI procedures.',color:'#5c6f33'},
        {name:'Medical Education',desc:'Anesthesia courseware and beginner-friendly clinical visualization.',color:'#9a5f3d'},
        {name:'Open Source PRs',desc:'Reliability fixes and documentation improvements in high-star projects.',color:'#50606a'},
        {name:'Sleep Magician',desc:'A WeChat channel connecting AI workflows, healthcare technology, and public education.',color:'#b35a28'}
      ],
      workflows:[
        {title:'Clinical question loop',source:'Bedside signal',desc:'Anesthesia monitoring, perioperative safety, and sleep recovery questions.',color:'#01696f',steps:[{label:'Frame',text:'Translate bedside uncertainty into a computable question.'},{label:'Model',text:'Use structured data, imaging, or agent workflows to test it.'},{label:'Review',text:'Return to clinical safety, explainability, and practical use.'}],output:'Decision support / quality-control prototype'},
        {title:'Competition to clinic loop',source:'Kaggle lab',desc:'Life-science modeling practice becomes a reusable evaluation habit.',color:'#2f5f9f',steps:[{label:'Benchmark',text:'Build against public tasks and measurable leaderboards.'},{label:'Extract',text:'Keep reusable modeling, validation, and error-analysis patterns.'},{label:'Transfer',text:'Apply the patterns to clinical AI and medical education systems.'}],output:'Robust modeling playbooks'},
        {title:'Agent workflow loop',source:'Codex workspace',desc:'Repeatable research, writing, review, and implementation workflows.',color:'#5c6f33',steps:[{label:'Specify',text:'Define boundaries, evidence, and testable outputs.'},{label:'Automate',text:'Create local agent procedures, skills, and guardrails.'},{label:'Verify',text:'Check links, tests, citations, and deployment state before claiming.'}],output:'Reusable AI operating procedures'},
        {title:'AI & healthcare communication loop',source:'Sleep Magician',desc:'Translate AI workflows, healthcare technology, and clinical lessons into public-facing explainers and practical guides.',color:'#b35a28',steps:[{label:'Observe',text:'Track recurring questions from clinical work, AI tools, and readers.'},{label:'Explain',text:'Turn complex systems into clear guides, articles, and courses.'},{label:'Iterate',text:'Use feedback and verification to improve content and workflows.'}],output:'AI and health education assets'}
      ],
      outputs:[
        {value:'Clinical',label:'safer perioperative decisions'},
        {value:'Research',label:'validated modeling habits'},
        {value:'Teaching',label:'beginner-friendly courseware'},
        {value:'Public',label:'AI & healthcare communication'}
      ]
    }
  },
  zh:{
    nav:{home:'主页',portfolio:'作品集',system:'Anita OS',about:'关于',competitions:'竞赛',awards:'奖项',communication:'内容传播',projects:'项目',openSource:'开源贡献',appointments:'任职',skills:'技能',contact:'联系'},
    hero:{
      kicker:'Clinical AI Workstation',
      name:'殷利鑫',
      role:'麻醉医生 / 医疗人工智能实践者',
      institution:'江阴市人民医院，江苏，中国',
      tags:['麻醉学','医疗 AI','深度学习','临床决策支持','AI 工作流','睡眠魔法师'],
      bio:'从临床出发，用代码拓展医学的可能。构建 AI 工具，验证研究想法，让知识走向实践。',
      email:'给我发邮件',
      launchDone:'工作站已打开 · 向下进入正文',
      launchLines:[
        '$ boot clinical-ai.workstation',
        '> 正在载入临床 AI 档案...',
        '$ whoami',
        '> 殷利鑫 · 麻醉医生 · 医疗 AI 实践者',
        '$ cat operating-system.md',
        '> 围术期安全 + 睡眠健康 + AI Agent + 开源贡献',
        '$ open anita-os.app',
        '> 工作站准备完成'
      ],
      terminal:[
        {prompt:'whoami',output:'麻醉医生 / 医疗 AI 实践者 / 睡眠健康科普作者'},
        {prompt:'cat focus.md',output:'围术期安全 · 生命科学 AI · 睡眠管理 · Agent 工作流'},
        {prompt:'open sleep-magician.channel',output:'微信公众号：睡眠魔法师'}
      ],
      signals:[
        {value:'4',label:'Kaggle 奖牌',desc:'把生命科学竞赛经验转化为临床 AI 实践。'},
        {value:'31',label:'已合并 PR',desc:'在高星开源项目中持续提交小范围、可验证贡献。'},
        {value:'AI+医疗',label:'项目主线',desc:'临床 AI、Agent 工作流、医学教学与健康传播。'},
        {value:'睡眠魔法师',label:'公众内容',desc:'用通俗语言解释 AI 工作方式、医疗科技与健康教育。'}
      ]
    },
    portfolio:{label:'Evidence Portfolio',title:'从临床问题，到 AI 工具。',subtitle:'我构建、测试并分享医学 AI。这里是项目、竞赛与开源贡献。'},
    competitions:{label:'国际竞赛',title:'Kaggle 竞赛荣誉'},
    awards:{label:'国家与区域成果',title:'奖项与项目'},
    communication:{label:'AI 工作方式与医疗健康传播',title:'面向医护与学习者的 AI 实践分享'},
    projects:{label:'个人 GitHub 作品',title:'GitHub 代表项目',link:'查看仓库',site:'访问网站',repo:'GitHub',stars:'stars'},
    openSource:{
      label:'开源贡献',
      title:'已合并到高星 GitHub 项目的 PR',
      typesTitle:'贡献类型',
      reposTitle:'超过 1 万星的代表项目',
      note:'统计口径为 2023Anita 发起并已合并的 PR，星标数采用 2026 年 6 月查询时的公开 GitHub 数据。'
    },
    appointments:{label:'学术服务',title:'专业任职'},
    skills:{label:'技术能力',title:'核心技能'},
    contact:{title:'联系我',desc:'如果你对医学人工智能、科研协作、临床 AI 项目或 AI 教学感兴趣，欢迎联系。',wechat:'微信公众号：睡眠魔法师'},
    footer:'© 2026 殷利鑫 · 江阴市人民医院',
    medals:[
      {icon:'🥈',kind:'silver',title:'Stanford RNA 3D Folding',rank:'第 55 / 1,516 队 — Top 3.6%',org:'主办方：斯坦福大学',desc:'构建高精度深度学习模型预测 RNA 分子三维折叠结构，解决生命科学中的关键计算问题。',date:'2025 年 9 月'},
      {icon:'🥈',kind:'silver',title:'CIBMTR — Post-HCT Survival Equity',rank:'第 83 / 3,325 队 — Top 2.5%',org:'主办方：CIBMTR',desc:'结合 AutoML 与集成学习，构建造血干细胞移植后患者生存率公平性预测模型。',date:'2025 年 3 月'},
      {icon:'🥉',kind:'bronze',title:'CZII — CryoET Object Identification',rank:'第 51 / 931 队 — Top 5.5%',org:'主办方：CZ Imaging Institute',desc:'开发高召回率 3D 目标检测模型，在冷冻电子断层扫描数据中识别细胞内蛋白复合物。',date:'2025 年 2 月'}
    ],
    awardsList:[
      {badge:'三等奖',title:'2025 首届“AI 领航杯”人工智能+应用与技能大赛',project:'AnesGuardian - 智能麻醉守护神',meta:'主办方：中国互联网协会 · AI+医疗健康赛道 · 2025 年 11 月',desc:'参与开发围术期智能监测与预警系统，面向麻醉安全场景提升风险识别能力。'},
      {badge:'第八名 · 最具实践应用奖',title:'2025 中国数字创新大赛',project:'AI 智助入梦，精准守护深眠 - 全周期睡眠管理平台',meta:'主办方：第八届数字中国建设峰会组委会 · 人工智能赛道 · 2025 年 4 月',desc:'主导睡眠干预与管理系统的算法逻辑设计，项目获得实践应用价值认可。'},
      {badge:'AI 应用杰出案例',title:'2025 数据内容年度案例征集',project:'Smart-Fit-Agent',meta:'主办方：复旦大学与澎湃新闻 · 2025 年 2 月',desc:'设计并开发个性化健康适应代理，探索大模型 Agent 在个人健康管理中的应用路径。'},
      {badge:'三等奖',title:'2025 年江苏省“数据要素×”江阴区域赛',project:'医疗健康数据要素开发与利用',meta:'主办方：江阴市数据局、江阴市总工会 · 2025 年 10 月',desc:'围绕区域数字健康场景，探索医疗数据要素的实际开发利用。'},
      {badge:'三等奖',title:'2025 全国智慧医保大赛',project:'医保价值罗盘（Agent 版）',meta:'主办方：国家医疗保障局 · Datapower 团队 · 江阴市人民医院',desc:'以智能体方式呈现医保价值评估视角，服务医疗决策支持。'}
    ],
    communicationList:[
      {name:'睡眠魔法师',role:'微信公众号主理人',desc:'以临床经验为底，把 AI 工作流、Agent、医疗 AI、医学教学和健康问题讲成普通人能理解、能实践的内容；睡眠与围术期健康仍是重要的临床锚点。',tags:['AI 工作流','医疗 AI','医学教学','公众传播'],qrLabel:'扫码关注公众号',qrAlt:'睡眠魔法师微信公众号二维码',metrics:[{value:'AI',label:'工作流与 Agent 实践'},{value:'医疗',label:'医生视角的真实场景'},{value:'学习',label:'教程、课程与通俗解读'}]}
    ],
    projectsList:[
      {name:'AI and Anesthesia Teaching Courseware',stars:3,url:'https://github.com/2023Anita/anesthesia-teaching-courseware',siteUrl:'https://2023anita.github.io/anesthesia-teaching-courseware/',image:'assets/ai-anesthesia-teaching-courseware.png',imageAlt:'AI and Anesthesia Teaching Courseware 网站截图',desc:'面向康奈尔大一学生和医学初学者的中英双语麻醉见习课件网站，结合临床带教、AI 辅助内容生成、医学可视化与 GitHub Pages 发布。',tags:['麻醉学','医学教育','AI 课件','GitHub Pages']},
      {name:'MedicalAI-Platform',stars:48,url:'https://github.com/2023Anita/MedicalAI-Platform',desc:'多智能体医疗分析平台，面向体检报告结构化解读和临床推理工作流。',tags:['TypeScript','医疗 AI','Agents']},
      {name:'Smart-Fit-Agent',stars:10,url:'https://github.com/2023Anita/Smart-Fit-Agent',desc:'个性化健康管理应用，支持饮食计划、运动方案和食物智能分析。',tags:['TypeScript','健康 Agent','生活方式']},
      {name:'med-dataset-platform',stars:3,url:'https://github.com/2023Anita/med-dataset-platform',desc:'专业医疗 AI 数据集生成、管理与导出平台。',tags:['JavaScript','数据集','医疗 AI']},
      {name:'AnesGuardian',stars:0,url:'https://github.com/2023Anita/AnesGuardian',desc:'围术期麻醉评估与决策支持平台，聚焦麻醉安全。',tags:['TypeScript','麻醉','临床决策']},
      {name:'emergency-mdt-ai-platform',stars:0,url:'https://github.com/2023Anita/emergency-mdt-ai-platform',desc:'急诊 MDT 决策支持平台，覆盖分诊、鉴别诊断、报告 OCR 和患者流程设计。',tags:['TypeScript','急诊','工作流']},
      {name:'openai-agents-medical-research-guide',stars:0,url:'https://github.com/2023Anita/openai-agents-medical-research-guide',desc:'围绕安全医学科研助手构建的 OpenAI Agents SDK 多语言课程。',tags:['MDX','课程','OpenAI Agents']},
      {name:'agent-token-budget',stars:3,url:'https://github.com/2023Anita/agent-token-budget',desc:'面向 AI 编程智能体的 token 预算与安全边界可视化指南。',tags:['CSS','AI Coding','指南']},
      {name:'ai-coding-intel-radar',stars:2,url:'https://github.com/2023Anita/ai-coding-intel-radar',desc:'Cloudflare + Codex + Obsidian 的每日 AI 编程情报雷达模板。',tags:['JavaScript','Cloudflare','Obsidian']},
      {name:'codex-video-director-skill',stars:0,url:'https://github.com/2023Anita/codex-video-director-skill',desc:'基于 storyboard 的 AI 视频生产 Codex skill 与双风格演示。',tags:['JavaScript','视频','Skill']},
      {name:'idea-evaluator',stars:0,url:'https://github.com/2023Anita/idea-evaluator',desc:'面向 AI 开发者的 skill 编排与想法评估工具。',tags:['Shell','AI 工具','Skills']}
    ],
    contributionStats:[
      {value:'31',label:'已合并 PR'},
      {value:'41',label:'已合并提交'},
      {value:'15',label:'外部项目'},
      {value:'约 59.8 万',label:'覆盖项目星标'}
    ],
    contributionTypes:[
      {name:'可靠性修复',desc:'围绕测试清理、编码兼容、依赖版本门控和 AI agent 工作流稳定性，提交可验证的小范围修复。'},
      {name:'文档质量改进',desc:'修复失效链接、更新资源引用、澄清项目格式和术语，让高使用量仓库的文档更准确。'},
      {name:'科研与临床 AI 方法',desc:'把临床科研中的引用核验、安全边界和审阅习惯，转化为 AI agent 与科研技能仓库中的可执行指南。'}
    ],
    contributionRepos:[
      {name:'EbookFoundation/free-programming-books',stars:390557,prs:'1 个 merged PR',url:'https://github.com/EbookFoundation/free-programming-books',desc:'全球免费编程书籍资源库；贡献内容是更新课程链接为 HTTPS。'},
      {name:'DietrichGebert/ponytail',stars:43925,prs:'1 个 merged PR',url:'https://github.com/DietrichGebert/ponytail',desc:'面向 AI agent 的工程工具；贡献内容是修复测试失败时临时 hook 目录残留的问题。'},
      {name:'github/awesome-copilot',stars:35350,prs:'1 个 merged PR',url:'https://github.com/github/awesome-copilot',desc:'GitHub Copilot 指令、agent、skill 与配置资源集合；贡献内容是澄清 .NET Framework 项目格式。'},
      {name:'Imbad0202/academic-research-skills',stars:33147,prs:'8 个 merged PR',url:'https://github.com/Imbad0202/academic-research-skills',desc:'面向 Claude Code 的学术研究、写作、审阅和修订技能库；贡献内容覆盖审阅、安全边界和临床引用核验。'},
      {name:'aishwaryanr/awesome-generative-ai-guide',stars:27802,prs:'1 个 merged PR',url:'https://github.com/aishwaryanr/awesome-generative-ai-guide',desc:'生成式 AI 研究与学习资源指南；贡献内容是更新 DeepLearning.AI 相关资源链接。'},
      {name:'HKUDS/DeepTutor',stars:24859,prs:'3 个 merged PR',url:'https://github.com/HKUDS/DeepTutor',desc:'Agent-native 个性化教学项目；贡献内容包括编码兼容、嵌套输出处理和 Python 依赖版本门控。'},
      {name:'OthmanAdi/planning-with-files',stars:23683,prs:'1 个 merged PR',url:'https://github.com/OthmanAdi/planning-with-files',desc:'面向 AI coding agents 的持久化文件计划系统；贡献内容是修复 Codex stop hook 阻塞问题。'}
    ],
    appointmentsList:[
      {icon:'shield',role:'评审专家',org:'福州市卫生健康科技计划项目专家库',date:'2025 年 10 月入库 · 专业方向：麻醉学、临床决策支持'},
      {icon:'book',role:'审稿专家',org:'中华医学会《数字医学与健康》期刊',date:'2024 年 6 月入库 · 医学与人工智能交叉方向'}
    ],
    skillsList:[
      {cat:'临床医学',items:['临床麻醉管理','围术期医学','生理参数监测与分析']},
      {cat:'深度学习',items:['PyTorch / TensorFlow','Transformer 架构','CNN 与 ResNet 变体']},
      {cat:'计算机视觉',items:['3D 医学影像处理','CryoET / CT / MRI 分析','三维目标检测']},
      {cat:'生物信息学',items:['RNA / 蛋白结构预测','AlphaFold 相关方法','分子性质建模']},
      {cat:'结构化数据分析',items:['生存分析','AutoML / 集成学习','临床结局建模']},
      {cat:'AI Agents 与大模型',items:['LLM Agent 设计','健康管理应用','临床 AI 部署']}
    ],
    system:{
      label:'个人操作系统',
      title:'Anita Clinical AI OS',
      desc:'把我的临床、科研、AI 工作流、教学、开源和公众号内容放在同一张图里，展示长期可复用的工作循环。',
      core:'临床 AI 工作站',
      canvasLabel:'Workflow Map',
      canvasTitle:'从临床信号到可复用 AI 工作',
      canvasDesc:'这个 OS 不只是身份标签，而是一套循环：临床问题进入数据、模型、Agent、教学、开源修复和面向公众的解释性内容，再回到真实场景验证。',
      nodes:[
        {name:'围术期医学',desc:'来自临床一线的麻醉管理、监测与安全问题。',color:'#01696f'},
        {name:'麻醉安全',desc:'风险预警、临床决策支持与质量控制场景。',color:'#0f766e'},
        {name:'睡眠健康',desc:'睡眠干预、恢复管理与长期健康管理。',color:'#8a4f17'},
        {name:'Kaggle 生命科学',desc:'RNA 折叠、生存预测和 CryoET 三维目标检测。',color:'#2f5f9f'},
        {name:'AI Agent 工作流',desc:'Codex、科研助手和可复盘的临床 AI 流程。',color:'#5c6f33'},
        {name:'医学教学',desc:'麻醉课件、初学者友好的临床可视化内容。',color:'#9a5f3d'},
        {name:'开源 PR',desc:'在高星项目中做可靠性修复和文档质量改进。',color:'#50606a'},
        {name:'睡眠魔法师',desc:'连接 AI 工作流、医疗科技、医学科普和面向公众的教育。',color:'#b35a28'}
      ],
      workflows:[
        {title:'临床问题循环',source:'一线临床信号',desc:'来自麻醉监测、围术期安全和睡眠恢复管理的问题。',color:'#01696f',steps:[{label:'定义',text:'把床旁不确定性转成可计算的问题。'},{label:'建模',text:'用结构化数据、影像或 Agent 工作流做验证。'},{label:'回看',text:'回到临床安全、可解释性和真实可用性。'}],output:'临床决策支持 / 质控预警原型'},
        {title:'竞赛到临床循环',source:'Kaggle 实验场',desc:'把生命科学竞赛经验沉淀成可迁移的评估习惯。',color:'#2f5f9f',steps:[{label:'基准',text:'在公开任务和可量化 leaderboard 中训练。'},{label:'抽取',text:'保留建模、验证和错误分析的可复用模式。'},{label:'迁移',text:'迁移到临床 AI、医学教学和数据工具。'}],output:'稳健建模与验证 playbook'},
        {title:'Agent 工作流循环',source:'Codex 工作台',desc:'把科研、写作、审阅和实现流程变成可复盘步骤。',color:'#5c6f33',steps:[{label:'规格化',text:'定义边界、证据来源和可测试输出。'},{label:'自动化',text:'形成本地 agent 流程、skill 和安全约束。'},{label:'验证',text:'在声明完成前检查链接、测试、引用和发布状态。'}],output:'可复用 AI 操作规程'},
        {title:'AI 与医疗传播循环',source:'睡眠魔法师',desc:'把 AI 工作流、医疗科技和临床经验转化为面向公众的解释与实践指南。',color:'#b35a28',steps:[{label:'观察',text:'收集临床工作、AI 工具和读者反复出现的问题。'},{label:'解释',text:'把复杂系统转化成清晰的文章、教程和课程。'},{label:'迭代',text:'用反馈与验证结果改进内容和工作流。'}],output:'AI 与健康教育资产'}
      ],
      outputs:[
        {value:'临床',label:'更安全的围术期决策'},
        {value:'科研',label:'可验证的建模习惯'},
        {value:'教学',label:'初学者友好的医学课件'},
        {value:'公众',label:'AI 与医疗健康传播'}
      ]
    }
  },
  ja:{
    nav:{home:'ホーム',portfolio:'作品集',system:'Anita OS',about:'概要',competitions:'コンペ',awards:'受賞',communication:'発信',projects:'プロジェクト',openSource:'OSS貢献',appointments:'専門活動',skills:'スキル',contact:'連絡先'},
    hero:{
      kicker:'Clinical AI Workstation',
      name:'殷 利鑫',
      role:'麻酔科医 / 医療 AI 実践者',
      institution:'江陰市人民医院（中国・江蘇省）',
      tags:['麻酔学','医療 AI','深層学習','臨床意思決定支援','AI ワークフロー','睡眠魔法師'],
      bio:'臨床の課題から出発し、コードで医療の可能性を広げる。AI ツールをつくり、研究の着想を検証し、知識を実践につなげる。',
      email:'メールする',
      launchDone:'Workspace unlocked · 下へ進む',
      launchLines:[
        '$ boot clinical-ai.workstation',
        '> 臨床 AI プロファイルを読み込み中...',
        '$ whoami',
        '> 殷 利鑫 · 麻酔科医 · 医療 AI 実践者',
        '$ cat operating-system.md',
        '> 周術期安全 + 睡眠健康 + AI Agent + OSS 貢献',
        '$ open anita-os.app',
        '> ワークスペース準備完了'
      ],
      terminal:[
        {prompt:'whoami',output:'麻酔科医 / 医療 AI 実践者 / 睡眠健康コミュニケーター'},
        {prompt:'cat focus.md',output:'周術期安全 · 生命科学 AI · 睡眠管理 · Agent ワークフロー'},
        {prompt:'open sleep-magician.channel',output:'WeChat 公式アカウント：睡眠魔法師'}
      ],
      signals:[
        {value:'4',label:'Kaggle メダル',desc:'生命科学コンペの経験を臨床 AI 実践へ接続。'},
        {value:'31',label:'Merged PRs',desc:'高スター OSS への小さく検証可能な継続貢献。'},
        {value:'AI+医療',label:'プロジェクト軸',desc:'臨床 AI、Agent ワークフロー、医学教育、健康発信。'},
        {value:'睡眠魔法師',label:'発信チャンネル',desc:'AI の働き方、医療テクノロジー、健康教育をわかりやすく発信。'}
      ]
    },
    portfolio:{label:'Evidence Portfolio',title:'臨床の問いから、AI ツールへ。',subtitle:'医療 AI をつくり、検証し、共有する。プロジェクト、コンペ、オープンソースへの貢献を紹介します。'},
    competitions:{label:'国際コンペティション',title:'Kaggle 受賞歴'},
    awards:{label:'国内・地域での評価',title:'受賞とプロジェクト'},
    communication:{label:'AI ワークフローと医療コミュニケーション',title:'医療と学びのための実践的 AI'},
    projects:{label:'個人 GitHub 作品',title:'GitHub 代表プロジェクト',link:'リポジトリを見る',site:'サイトを見る',repo:'GitHub',stars:'stars'},
    openSource:{
      label:'Open Source Contributions',
      title:'高スター GitHub プロジェクトにマージされた PR',
      typesTitle:'貢献のタイプ',
      reposTitle:'1 万スター以上の代表プロジェクト',
      note:'統計は 2023Anita が作成しマージされた PR と、2026 年 6 月時点の公開 GitHub star 数に基づきます。'
    },
    appointments:{label:'学術サービス',title:'専門活動'},
    skills:{label:'技術領域',title:'主要スキル'},
    contact:{title:'お問い合わせ',desc:'医療 AI、研究協力、臨床 AI プロジェクト、実践的な AI 教育に関心がありましたら、お気軽にご連絡ください。',wechat:'WeChat：睡眠魔法師'},
    footer:'© 2026 殷 利鑫 · 江陰市人民医院',
    medals:[
      {icon:'🥈',kind:'silver',title:'Stanford RNA 3D Folding',rank:'55 位 / 1,516 チーム — Top 3.6%',org:'主催：Stanford University',desc:'RNA 分子の三次元折りたたみ構造を予測する高精度な深層学習モデルを構築し、生命科学上の重要な計算課題に取り組みました。',date:'2025 年 9 月'},
      {icon:'🥈',kind:'silver',title:'CIBMTR — Post-HCT Survival Equity',rank:'83 位 / 3,325 チーム — Top 2.5%',org:'主催：CIBMTR',desc:'AutoML とアンサンブル手法を用いて、造血幹細胞移植後の生存予測における公平性を重視したモデルを構築しました。',date:'2025 年 3 月'},
      {icon:'🥉',kind:'bronze',title:'CZII — CryoET Object Identification',rank:'51 位 / 931 チーム — Top 5.5%',org:'主催：CZ Imaging Institute',desc:'クライオ電子線トモグラフィー画像から細胞内タンパク質複合体を検出する、高再現率の 3D 物体検出モデルを開発しました。',date:'2025 年 2 月'}
    ],
    awardsList:[
      {badge:'三等賞',title:'2025 第1回「AI Navigation Cup」AI+ 応用・技能コンテスト',project:'AnesGuardian - Intelligent Anesthesia Guardian System',meta:'主催：中国インターネット協会 · AI+医療健康部門 · 2025 年 11 月',desc:'周術期のモニタリングと早期警告を支援するシステム開発に参加し、麻酔安全の向上を目指しました。'},
      {badge:'Top 8 · Best Practice',title:'2025 Digital China Innovation Contest',project:'AI による全周期睡眠管理プラットフォーム',meta:'主催：第8回 Digital China Summit 組織委員会 · AI 部門 · 2025 年 4 月',desc:'睡眠介入・管理システムのアルゴリズム設計を主導し、実践応用価値が評価されました。'},
      {badge:'優秀事例',title:'2025 Data Content Annual Case Collection',project:'Smart-Fit-Agent',meta:'主催：復旦大学・澎湃新聞 · 2025 年 2 月',desc:'個別化された健康適応エージェントを設計・開発し、大規模言語モデル Agent の健康管理応用を探りました。'},
      {badge:'三等賞',title:'2025 江蘇省「Data Factor ×」江陰地域コンペティション',project:'医療健康データ要素の開発と活用',meta:'主催：江陰市データ局・江陰市総工会 · 2025 年 10 月',desc:'地域デジタルヘルスの文脈で、医療データ要素の実践的な活用を検討しました。'},
      {badge:'三等賞',title:'2025 全国スマート医療保険コンテスト',project:'Medical Insurance Value Compass（Agent 版）',meta:'主催：国家医療保障局 · Team Datapower · 江陰市人民医院',desc:'医療保険価値評価を Agent 形式で整理し、医療意思決定支援に活用する視点を示しました。'}
    ],
    communicationList:[
      {name:'睡眠魔法師',role:'WeChat 公式アカウント運営',desc:'臨床経験を土台に、AI ワークフロー、Agent、医療 AI、医学教育、健康課題をわかりやすく実践的に伝えるチャンネル。睡眠と周術期健康は重要な臨床アンカーです。',tags:['AI ワークフロー','医療 AI','医学教育','パブリック発信'],qrLabel:'WeChatでフォロー',qrAlt:'睡眠魔法師 WeChat QRコード',metrics:[{value:'AI',label:'ワークフローと Agent 実践'},{value:'Health',label:'臨床医の視点'},{value:'Learn',label:'ガイド、教材、解説'}]}
    ],
    projectsList:[
      {name:'AI and Anesthesia Teaching Courseware',stars:3,url:'https://github.com/2023Anita/anesthesia-teaching-courseware',siteUrl:'https://2023anita.github.io/anesthesia-teaching-courseware/',image:'assets/ai-anesthesia-teaching-courseware.png',imageAlt:'AI and Anesthesia Teaching Courseware website preview',desc:'Cornell の一年生と医学初学者向けに作成した、英中バイリンガルの麻酔見学コースウェア。臨床医主導の教育と AI 支援による教材設計を組み合わせています。',tags:['麻酔学','医学教育','AI 教材','GitHub Pages']},
      {name:'MedicalAI-Platform',stars:48,url:'https://github.com/2023Anita/MedicalAI-Platform',desc:'健診レポートの構造化解釈と臨床推論ワークフローを支援する、マルチエージェント医療分析プラットフォーム。',tags:['TypeScript','医療 AI','Agents']},
      {name:'Smart-Fit-Agent',stars:10,url:'https://github.com/2023Anita/Smart-Fit-Agent',desc:'食事計画、運動プラン、食品分析を支援する個別化健康管理アプリ。',tags:['TypeScript','健康 Agent','生活習慣']},
      {name:'med-dataset-platform',stars:3,url:'https://github.com/2023Anita/med-dataset-platform',desc:'医療 AI データセットの生成、管理、エクスポートを行う専門プラットフォーム。',tags:['JavaScript','データセット','医療 AI']},
      {name:'AnesGuardian',stars:0,url:'https://github.com/2023Anita/AnesGuardian',desc:'麻酔安全を重視した、周術期麻酔評価・意思決定支援プラットフォーム。',tags:['TypeScript','麻酔','CDSS']},
      {name:'emergency-mdt-ai-platform',stars:0,url:'https://github.com/2023Anita/emergency-mdt-ai-platform',desc:'トリアージ、鑑別診断、OCR レポート解析、患者ワークフロー設計を支援する救急 MDT プラットフォーム。',tags:['TypeScript','救急','ワークフロー']},
      {name:'openai-agents-medical-research-guide',stars:0,url:'https://github.com/2023Anita/openai-agents-medical-research-guide',desc:'安全性を重視した医学研究アシスタントを題材にした、OpenAI Agents SDK の多言語コース。',tags:['MDX','コース','OpenAI Agents']},
      {name:'agent-token-budget',stars:3,url:'https://github.com/2023Anita/agent-token-budget',desc:'AI コーディングエージェントの token 予算と安全境界を可視化した実用ガイド。',tags:['CSS','AI Coding','ガイド']},
      {name:'ai-coding-intel-radar',stars:2,url:'https://github.com/2023Anita/ai-coding-intel-radar',desc:'Cloudflare、Codex、Obsidian を組み合わせた日次 AI コーディング情報レーダーのテンプレート。',tags:['JavaScript','Cloudflare','Obsidian']},
      {name:'codex-video-director-skill',stars:0,url:'https://github.com/2023Anita/codex-video-director-skill',desc:'ストーリーボード駆動の AI 動画制作を支援する Codex skill とデモ。',tags:['JavaScript','動画','Skill']},
      {name:'idea-evaluator',stars:0,url:'https://github.com/2023Anita/idea-evaluator',desc:'AI 開発者向けの skill オーケストレーションとアイデア評価ツール。',tags:['Shell','AI ツール','Skills']}
    ],
    contributionStats:[
      {value:'31',label:'merged PRs'},
      {value:'41',label:'merged commits'},
      {value:'15',label:'外部プロジェクト'},
      {value:'約 59.8 万',label:'到達スター数'}
    ],
    contributionTypes:[
      {name:'Reliability fixes',desc:'テスト後片付け、文字エンコーディング、依存関係のバージョン制約、AI agent ワークフローの安定性に関する小さく検証可能な修正。'},
      {name:'Documentation quality',desc:'古いリンク、リソース参照、プロジェクト形式、用語説明を整え、利用者の多いリポジトリの文書品質を改善。'},
      {name:'Research and clinical AI guidance',desc:'臨床研究で重視される引用確認、安全境界、レビュー習慣を、AI agent と研究 skill の実践的ガイドに反映。'}
    ],
    contributionRepos:[
      {name:'EbookFoundation/free-programming-books',stars:390557,prs:'1 merged PR',url:'https://github.com/EbookFoundation/free-programming-books',desc:'無料で読めるプログラミング書籍の世界的リスト。コースリンクを HTTPS に更新しました。'},
      {name:'DietrichGebert/ponytail',stars:43925,prs:'1 merged PR',url:'https://github.com/DietrichGebert/ponytail',desc:'AI agent 向けの開発支援ツール。テスト失敗時に一時 hook ディレクトリを確実に片付ける修正を行いました。'},
      {name:'github/awesome-copilot',stars:35350,prs:'1 merged PR',url:'https://github.com/github/awesome-copilot',desc:'GitHub Copilot の instructions、agents、skills、設定を集めたコミュニティリソース。.NET Framework プロジェクト形式の説明を明確化しました。'},
      {name:'Imbad0202/academic-research-skills',stars:33147,prs:'8 merged PRs',url:'https://github.com/Imbad0202/academic-research-skills',desc:'Claude Code 向けの学術研究、執筆、レビュー、修正 skill 集。レビュー、安全境界、臨床引用確認に関する貢献を行いました。'},
      {name:'aishwaryanr/awesome-generative-ai-guide',stars:27802,prs:'1 merged PR',url:'https://github.com/aishwaryanr/awesome-generative-ai-guide',desc:'生成 AI の研究・学習リソースガイド。DeepLearning.AI 関連リンクを更新しました。'},
      {name:'HKUDS/DeepTutor',stars:24859,prs:'3 merged PRs',url:'https://github.com/HKUDS/DeepTutor',desc:'Agent-native な個別化チュータリングプロジェクト。エンコーディング、ネスト出力、Python 依存関係の修正を行いました。'},
      {name:'OthmanAdi/planning-with-files',stars:23683,prs:'1 merged PR',url:'https://github.com/OthmanAdi/planning-with-files',desc:'AI coding agents 向けの永続的なファイルベース計画システム。Codex stop hook を非ブロッキングにする修正を行いました。'}
    ],
    appointmentsList:[
      {icon:'shield',role:'評価専門家',org:'福州市衛生健康科学技術計画プロジェクト専門家パネル',date:'2025 年 10 月登録 · 専門：麻酔学、臨床意思決定支援'},
      {icon:'book',role:'査読者',org:'中華医学会「Digital Medicine and Health」誌',date:'2024 年 6 月登録 · 医学と AI の学際領域'}
    ],
    skillsList:[
      {cat:'臨床医学',items:['臨床麻酔管理','周術期医学','生理パラメータの監視と分析']},
      {cat:'深層学習',items:['PyTorch / TensorFlow','Transformer アーキテクチャ','CNN と ResNet 系モデル']},
      {cat:'コンピュータビジョン',items:['3D 医用画像処理','CryoET / CT / MRI 解析','3D 物体検出']},
      {cat:'バイオインフォマティクス',items:['RNA / タンパク質構造予測','AlphaFold 関連手法','分子特性モデリング']},
      {cat:'構造化データ分析',items:['生存分析','AutoML / アンサンブル手法','臨床アウトカムモデリング']},
      {cat:'AI Agents と LLM',items:['LLM ベースの Agent 設計','健康管理アプリケーション','臨床 AI の実装']}
    ],
    system:{
      label:'Personal Operating System',
      title:'Anita Clinical AI OS',
      desc:'臨床、研究、AI ワークフロー、教育、OSS、公式アカウント発信を一つの地図として整理したワークシステムです。',
      core:'Clinical AI Workstation',
      canvasLabel:'Workflow Map',
      canvasTitle:'臨床シグナルから再利用可能な AI ワークへ',
      canvasDesc:'この OS は静的な自己紹介ではなく、臨床課題をデータ、モデル、Agent、教育、OSS 修正、一般向けの解説へつなぎ、現場で検証する反復ループです。',
      nodes:[
        {name:'周術期医学',desc:'臨床現場から生まれる麻酔管理、モニタリング、安全課題。',color:'#01696f'},
        {name:'麻酔安全',desc:'リスク警告、意思決定支援、品質管理のシナリオ。',color:'#0f766e'},
        {name:'睡眠健康',desc:'睡眠介入、回復管理、長期的な健康管理。',color:'#8a4f17'},
        {name:'Kaggle 生命科学',desc:'RNA folding、生存予測、CryoET 3D 物体検出。',color:'#2f5f9f'},
        {name:'AI Agent ワークフロー',desc:'Codex、研究アシスタント、再現可能な臨床 AI 手順。',color:'#5c6f33'},
        {name:'医学教育',desc:'麻酔コースウェアと初学者向け臨床ビジュアライゼーション。',color:'#9a5f3d'},
        {name:'OSS PR',desc:'高スター OSS への信頼性修正と文書品質改善。',color:'#50606a'},
        {name:'睡眠魔法師',desc:'AI ワークフロー、医療テクノロジー、医学発信をつなぐチャンネル。',color:'#b35a28'}
      ],
      workflows:[
        {title:'臨床課題ループ',source:'Bedside signal',desc:'麻酔モニタリング、周術期安全、睡眠回復から生まれる問い。',color:'#01696f',steps:[{label:'Frame',text:'臨床の不確実性を計算可能な問いへ変換。'},{label:'Model',text:'構造化データ、画像、Agent ワークフローで検証。'},{label:'Review',text:'安全性、説明可能性、実用性へ戻して評価。'}],output:'意思決定支援 / 品質管理プロトタイプ'},
        {title:'コンペから臨床へ',source:'Kaggle lab',desc:'生命科学コンペで得た経験を再利用可能な評価習慣へ。',color:'#2f5f9f',steps:[{label:'Benchmark',text:'公開タスクと測定可能な leaderboard で訓練。'},{label:'Extract',text:'モデリング、検証、エラー分析の型を抽出。'},{label:'Transfer',text:'臨床 AI、医学教育、データ基盤へ転用。'}],output:'堅牢なモデリング playbook'},
        {title:'Agent ワークフロー',source:'Codex workspace',desc:'研究、執筆、レビュー、実装を再現可能な手順へ。',color:'#5c6f33',steps:[{label:'Specify',text:'境界、根拠、テスト可能な成果物を定義。'},{label:'Automate',text:'ローカル Agent 手順、skill、安全制約を整備。'},{label:'Verify',text:'完了前にリンク、テスト、引用、公開状態を確認。'}],output:'再利用可能な AI 操作手順'},
        {title:'AI と医療の発信ループ',source:'睡眠魔法師',desc:'AI ワークフロー、医療テクノロジー、臨床経験を実践的な解説へ変換。',color:'#b35a28',steps:[{label:'Observe',text:'臨床、AI ツール、読者から繰り返し出る問いを整理。'},{label:'Explain',text:'複雑なシステムを明快な記事、ガイド、教材へ。'},{label:'Iterate',text:'反応と検証結果をもとに内容とワークフローを改善。'}],output:'AI と健康教育の素材'}
      ],
      outputs:[
        {value:'Clinical',label:'より安全な周術期意思決定'},
        {value:'Research',label:'検証可能なモデリング習慣'},
        {value:'Teaching',label:'初学者向け医学教材'},
        {value:'Public',label:'AI と医療の健康発信'}
      ]
    }
  }
};

const icons={
  shield:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
  book:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>'
};

function escapeHtml(value){
  return String(value).replace(/[&<>"']/g,match=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[match]));
}

function getByPath(obj,path){
  return path.split('.').reduce((acc,key)=>acc&&acc[key],obj);
}

function render(lang){
  const c=content[lang]||content.en;
  document.documentElement.lang=lang==='zh'?'zh-CN':lang;
  document.title=lang==='en'?'Lixin Yin — Anesthesiologist & Medical AI Researcher':lang==='zh'?'殷利鑫 — 麻醉医生与医疗人工智能实践者':'殷 利鑫 — 麻酔科医・医療AI実践者';
  document.querySelector('meta[name="description"]').setAttribute('content',c.hero.bio);
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const value=getByPath(c,el.dataset.i18n);
    if(value!==undefined) el.textContent=value;
  });
  document.querySelector('[data-render="heroTags"]').innerHTML=c.hero.tags.map(tag=>`<span class="tag">${escapeHtml(tag)}</span>`).join('');
  runLaunchIntro(c.hero.launchLines);
  document.querySelector('[data-render="terminalLines"]').innerHTML=c.hero.terminal.map((line,index)=>`
    <span class="terminal-line"><span class="terminal-prompt">$ ${escapeHtml(line.prompt)}</span></span>
    <span class="terminal-line terminal-output">&gt; ${escapeHtml(line.output)}${index===c.hero.terminal.length-1?'<span class="terminal-cursor"></span>':''}</span>`).join('');
  document.querySelector('[data-render="identitySignals"]').innerHTML=c.hero.signals.map(item=>`
    <article class="signal-card">
      <div class="signal-value">${escapeHtml(item.value)}</div>
      <div class="signal-label">${escapeHtml(item.label)}</div>
      <p class="signal-desc">${escapeHtml(item.desc)}</p>
    </article>`).join('');
  renderKaggleHonors(lang);
  document.querySelector('[data-render="awards"]').innerHTML=c.awardsList.map(item=>`
    <article class="award-item">
      <span class="award-badge">${escapeHtml(item.badge)}</span>
      <div>
        <h3 class="award-title">${escapeHtml(item.title)}</h3>
        <p class="award-project">${escapeHtml(item.project)}</p>
        <p class="award-meta">${escapeHtml(item.meta)}<br>${escapeHtml(item.desc)}</p>
      </div>
    </article>`).join('');
  document.querySelector('[data-render="communication"]').innerHTML=c.communicationList.map(item=>`
    <article class="communication-card featured">
      <div class="communication-feature-layout">
        <div class="communication-copy">
          <h3 class="communication-name">${escapeHtml(item.name)}</h3>
          <p class="communication-role">${escapeHtml(item.role)}</p>
          <p class="communication-desc">${escapeHtml(item.desc)}</p>
          <div class="communication-tags">${item.tags.map(tag=>`<span class="communication-tag">${escapeHtml(tag)}</span>`).join('')}</div>
        </div>
        <a class="communication-qr" href="assets/sleep-magician-qr.png" target="_blank" rel="noopener noreferrer" aria-label="${escapeHtml(item.qrLabel)}">
          <img src="assets/sleep-magician-qr.png" alt="${escapeHtml(item.qrAlt)}" loading="lazy">
          <span class="communication-qr-label">${escapeHtml(item.qrLabel)}</span>
        </a>
      </div>
    </article>
    <div class="communication-metrics">
      ${item.metrics.map(metric=>`
        <article class="communication-metric">
          <strong>${escapeHtml(metric.value)}</strong>
          <span>${escapeHtml(metric.label)}</span>
        </article>`).join('')}
    </div>`).join('');
  document.querySelector('[data-render="projects"]').innerHTML=c.projectsList.map(item=>{
    const links=item.siteUrl
      ? `<div class="project-actions">
          <a class="project-link" href="${escapeHtml(item.siteUrl)}" target="_blank" rel="noopener noreferrer">${escapeHtml(c.projects.site)}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17 17 7"/><path d="M7 7h10v10"/></svg>
          </a>
          <a class="project-link" href="${escapeHtml(item.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(c.projects.repo)}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17 17 7"/><path d="M7 7h10v10"/></svg>
          </a>
        </div>`
      : `<a class="project-link" href="${escapeHtml(item.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(c.projects.link)}
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17 17 7"/><path d="M7 7h10v10"/></svg>
        </a>`;
    const body=`
      <div class="project-body">
        <div class="project-top">
          <h3 class="project-title">${escapeHtml(item.name)}</h3>
          ${item.stars>0?`<span class="project-stars">${item.stars} ${escapeHtml(c.projects.stars)}</span>`:''}
        </div>
        <p class="project-desc">${escapeHtml(item.desc)}</p>
        <div class="project-tags">${item.tags.map(tag=>`<span class="project-tag">${escapeHtml(tag)}</span>`).join('')}</div>
        ${links}
      </div>`;
    return item.image
      ? `<article class="project-card featured-project tilt-card">
          <figure class="project-media">
            <img src="${escapeHtml(item.image)}" alt="${escapeHtml(item.imageAlt||item.name)}" loading="lazy">
          </figure>
          ${body}
        </article>`
      : `<article class="project-card tilt-card">${body}</article>`;
  }).join('');
  document.querySelector('[data-render="contribStats"]').innerHTML=c.contributionStats.map(item=>`
    <article class="contrib-stat">
      <span class="contrib-stat-value">${escapeHtml(item.value)}</span>
      <span class="contrib-stat-label">${escapeHtml(item.label)}</span>
    </article>`).join('');
  document.querySelector('[data-render="contribTypes"]').innerHTML=c.contributionTypes.map(item=>`
    <article class="contrib-type">
      <h4 class="contrib-type-name">${escapeHtml(item.name)}</h4>
      <p class="contrib-type-desc">${escapeHtml(item.desc)}</p>
    </article>`).join('');
  const maxStars=Math.max(...c.contributionRepos.map(item=>item.stars));
  document.querySelector('[data-render="contribRepos"]').innerHTML=c.contributionRepos.map(item=>`
    <article class="repo-item">
      <a class="repo-name" href="${escapeHtml(item.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(item.name)}</a>
      <span class="repo-meta">${item.stars.toLocaleString('en-US')} stars · ${escapeHtml(item.prs)}</span>
      <p class="repo-desc">${escapeHtml(item.desc)}</p>
      <div class="repo-bar" aria-hidden="true"><span class="repo-bar-fill" style="--bar-width:${Math.max(6,Math.round(item.stars/maxStars*100))}%"></span></div>
    </article>`).join('');
  document.querySelector('[data-render="appointments"]').innerHTML=c.appointmentsList.map(item=>`
    <article class="appt-card">
      <div class="appt-icon">${icons[item.icon]||icons.shield}</div>
      <h3 class="appt-role">${escapeHtml(item.role)}</h3>
      <p class="appt-org">${escapeHtml(item.org)}</p>
      <p class="appt-date">${escapeHtml(item.date)}</p>
    </article>`).join('');
  document.querySelector('[data-render="skills"]').innerHTML=c.skillsList.map(group=>`
    <article class="skill-card">
      <h3 class="skill-cat">${escapeHtml(group.cat)}</h3>
      <div class="skill-items">${group.items.map(item=>`<span class="skill-item">${escapeHtml(item)}</span>`).join('')}</div>
    </article>`).join('');
  document.querySelectorAll('.lang-btn').forEach(btn=>btn.setAttribute('aria-pressed',String(btn.dataset.lang===lang)));
  localStorage.setItem('preferred-language',lang);
  initCardTilt();
  syncActivePage();
}

let launchTimers=[];

function runLaunchIntro(lines){
  launchTimers.forEach(timer=>clearTimeout(timer));
  launchTimers=[];
  const about=document.getElementById('about');
  const target=document.querySelector('[data-render="launchTerminal"]');
  if(!about||!target) return;
  about.classList.remove('intro-complete');
  target.innerHTML='';

  if(matchMedia('(prefers-reduced-motion: reduce)').matches){
    target.innerHTML=lines.map(line=>{
      const cls=line.startsWith('$')?'launch-prompt':'launch-output';
      return `<span class="launch-line ${cls}">${escapeHtml(line)}</span>`;
    }).join('')+'<span class="launch-cursor" aria-hidden="true"></span>';
    about.classList.add('intro-complete');
    return;
  }

  let lineIndex=0;
  let charIndex=0;
  let activeSpan=null;

  function typeNext(){
    if(lineIndex>=lines.length){
      const cursor=document.createElement('span');
      cursor.className='launch-cursor';
      cursor.setAttribute('aria-hidden','true');
      target.appendChild(cursor);
      launchTimers.push(setTimeout(()=>{
        about.classList.add('intro-complete');
        if(currentWorkspacePage()==='about'&&window.scrollY<80){
          launchTimers.push(setTimeout(()=>{
            document.querySelector('.home-body')?.scrollIntoView({behavior:'smooth',block:'start'});
          },760));
        }
      },420));
      return;
    }

    const line=lines[lineIndex];
    if(!activeSpan){
      const row=document.createElement('span');
      row.className='launch-line';
      activeSpan=document.createElement('span');
      activeSpan.className=line.startsWith('$')?'launch-prompt':'launch-output';
      row.appendChild(activeSpan);
      target.appendChild(row);
    }

    activeSpan.textContent=line.slice(0,charIndex+1);
    charIndex+=1;
    if(charIndex<line.length){
      launchTimers.push(setTimeout(typeNext,24+Math.random()*18));
    }else{
      lineIndex+=1;
      charIndex=0;
      activeSpan=null;
      launchTimers.push(setTimeout(typeNext,line.startsWith('$')?260:420));
    }
  }

  launchTimers.push(setTimeout(typeNext,520));
}

function initCardTilt(){
  if(matchMedia('(prefers-reduced-motion: reduce)').matches||matchMedia('(pointer: coarse)').matches) return;
  document.querySelectorAll('.tilt-card:not([data-tilt-ready])').forEach(card=>{
    card.dataset.tiltReady='true';
    card.addEventListener('pointermove',event=>{
      const rect=card.getBoundingClientRect();
      const x=(event.clientX-rect.left)/rect.width-0.5;
      const y=(event.clientY-rect.top)/rect.height-0.5;
      card.style.setProperty('--tilt-y',`${(x*7).toFixed(2)}deg`);
      card.style.setProperty('--tilt-x',`${(-y*7).toFixed(2)}deg`);
    });
    card.addEventListener('pointerleave',()=>{
      card.style.setProperty('--tilt-x','0deg');
      card.style.setProperty('--tilt-y','0deg');
    });
  });
}

function initAmbientCanvas(){
  const canvas=document.querySelector('[data-ambient-canvas]');
  if(!canvas||matchMedia('(prefers-reduced-motion: reduce)').matches||matchMedia('(pointer: coarse)').matches) return;

  const ctx=canvas.getContext('2d');
  const pointer={x:window.innerWidth*0.68,y:window.innerHeight*0.28,active:false};
  const nodes=[];
  const sparks=[];
  let width=0;
  let height=0;
  let dpr=1;

  function resize(){
    dpr=Math.min(window.devicePixelRatio||1,2);
    width=window.innerWidth;
    height=window.innerHeight;
    canvas.width=Math.floor(width*dpr);
    canvas.height=Math.floor(height*dpr);
    canvas.style.width=`${width}px`;
    canvas.style.height=`${height}px`;
    ctx.setTransform(dpr,0,0,dpr,0,0);
    seedNodes();
  }

  function seedNodes(){
    nodes.length=0;
    const count=Math.max(34,Math.min(76,Math.floor(width*height/26000)));
    for(let i=0;i<count;i++){
      nodes.push({
        x:Math.random()*width,
        y:Math.random()*height,
        vx:(Math.random()-0.5)*0.18,
        vy:(Math.random()-0.5)*0.18,
        r:Math.random()*1.6+0.5
      });
    }
  }

  function color(alpha){
    const isDark=document.documentElement.getAttribute('data-theme')==='dark';
    return isDark?`rgba(79,152,163,${alpha})`:`rgba(1,105,111,${alpha})`;
  }

  function addSpark(event){
    pointer.x=event.clientX;
    pointer.y=event.clientY;
    pointer.active=true;
    const amount=event.pointerType==='mouse'?3:1;
    for(let i=0;i<amount;i++){
      sparks.push({
        x:pointer.x+(Math.random()-0.5)*7,
        y:pointer.y+(Math.random()-0.5)*7,
        vx:(Math.random()-0.5)*0.9,
        vy:(Math.random()-0.5)*0.9,
        life:1,
        size:Math.random()*2.6+1.2
      });
    }
    if(sparks.length>130) sparks.splice(0,sparks.length-130);
  }

  function draw(){
    ctx.clearRect(0,0,width,height);
    ctx.lineWidth=1;

    nodes.forEach(node=>{
      node.x+=node.vx;
      node.y+=node.vy;
      if(node.x<0||node.x>width) node.vx*=-1;
      if(node.y<0||node.y>height) node.vy*=-1;
    });

    for(let i=0;i<nodes.length;i++){
      const a=nodes[i];
      for(let j=i+1;j<nodes.length;j++){
        const b=nodes[j];
        const dx=a.x-b.x;
        const dy=a.y-b.y;
        const dist=Math.hypot(dx,dy);
        if(dist<118){
          ctx.strokeStyle=color((1-dist/118)*0.08);
          ctx.beginPath();
          ctx.moveTo(a.x,a.y);
          ctx.lineTo(b.x,b.y);
          ctx.stroke();
        }
      }
      const pd=Math.hypot(a.x-pointer.x,a.y-pointer.y);
      if(pointer.active&&pd<180){
        ctx.strokeStyle=color((1-pd/180)*0.22);
        ctx.beginPath();
        ctx.moveTo(a.x,a.y);
        ctx.lineTo(pointer.x,pointer.y);
        ctx.stroke();
      }
      ctx.fillStyle=color(0.18);
      ctx.beginPath();
      ctx.arc(a.x,a.y,a.r,0,Math.PI*2);
      ctx.fill();
    }

    for(let i=sparks.length-1;i>=0;i--){
      const spark=sparks[i];
      spark.x+=spark.vx;
      spark.y+=spark.vy;
      spark.life-=0.018;
      if(spark.life<=0){
        sparks.splice(i,1);
        continue;
      }
      ctx.fillStyle=color(spark.life*0.45);
      ctx.beginPath();
      ctx.arc(spark.x,spark.y,spark.size*spark.life,0,Math.PI*2);
      ctx.fill();
    }

    requestAnimationFrame(draw);
  }

  resize();
  window.addEventListener('resize',resize,{passive:true});
  window.addEventListener('pointermove',addSpark,{passive:true});
  window.addEventListener('pointerleave',()=>{pointer.active=false},{passive:true});
  draw();
}

function initSystemParticles(){
  const field=document.querySelector('[data-system-particles]');
  if(!field) return;
  if(matchMedia('(prefers-reduced-motion: reduce)').matches||matchMedia('(pointer: coarse)').matches){
    field.innerHTML='';
    return;
  }
  const count=34;
  field.innerHTML=Array.from({length:count},(_,index)=>{
    const x=(7+(index*23)%88)+((index%3)*0.6);
    const y=(6+(index*37)%86)+((index%4)*0.4);
    const size=2+(index%5)*0.8;
    const delay=-(index%11)*0.7;
    const duration=8+(index%7)*1.15;
    const driftX=((index%2===0)?1:-1)*(14+(index%6)*7);
    const driftY=-18-(index%8)*8;
    return `<span class="system-particle" style="--x:${x.toFixed(1)}%;--y:${y.toFixed(1)}%;--size:${size.toFixed(1)}px;--delay:${delay.toFixed(2)}s;--duration:${duration.toFixed(2)}s;--drift-x:${driftX}px;--drift-y:${driftY}px"></span>`;
  }).join('');
}

const pageByHash={
  about:'about',
  home:'about',
  portfolio:'portfolio',
  competitions:'portfolio',
  awards:'portfolio',
  communication:'portfolio',
  projects:'portfolio',
  'open-source':'portfolio',
  appointments:'portfolio',
  skills:'portfolio',
  system:'system'
};

function currentWorkspacePage(){
  return document.querySelector('.workspace-page.active')?.dataset.page||'about';
}

function syncActivePage(targetId){
  const id=targetId||(location.hash||'#about').slice(1)||'about';
  const page=id==='contact'?(currentWorkspacePage()==='system'?'about':currentWorkspacePage()):(pageByHash[id]||'about');
  document.querySelectorAll('.workspace-page').forEach(section=>{
    section.classList.toggle('active',section.dataset.page===page);
  });
  document.querySelectorAll('[data-page-link]').forEach(link=>{
    if(link.dataset.pageLink===page) link.setAttribute('aria-current','page');
    else link.removeAttribute('aria-current');
  });
}

function navigateToHash(hash,shouldScroll){
  const id=(hash||'#about').replace(/^#/,'')||'about';
  syncActivePage(id);
  if(shouldScroll){
    window.setTimeout(()=>{
      const target=document.getElementById(id);
      target?.scrollIntoView({behavior:'smooth',block:'start'});
    },30);
  }
}

(function(){
  document.documentElement.classList.add('js-ready');
  const root=document.documentElement;
  const themeToggle=document.querySelector('[data-theme-toggle]');
  let theme=matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light';

  function setTheme(next){
    theme=next;
    root.setAttribute('data-theme',theme);
    if(!themeToggle) return;
    themeToggle.innerHTML=theme==='dark'
      ?'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>'
      :'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
    themeToggle.setAttribute('aria-label',theme==='dark'?'Switch to light mode':'Switch to dark mode');
  }

  document.querySelectorAll('.lang-btn').forEach(btn=>{
    btn.addEventListener('click',()=>render(btn.dataset.lang));
  });
  themeToggle?.addEventListener('click',()=>setTheme(theme==='dark'?'light':'dark'));
  document.querySelectorAll('a[href^="#"]').forEach(link=>{
    link.addEventListener('click',event=>{
      const href=link.getAttribute('href');
      if(!href||href==='#') return;
      event.preventDefault();
      history.pushState(null,'',href);
      navigateToHash(href,true);
    });
  });
  window.addEventListener('popstate',()=>navigateToHash(location.hash,true));

  const stored=localStorage.getItem('preferred-language');
  const browser=(navigator.language||'en').toLowerCase();
  const requested=new URLSearchParams(location.search).get('lang');
  const initial=['zh','en','ja'].includes(requested)?requested:stored||((browser.startsWith('zh'))?'zh':(browser.startsWith('ja')?'ja':'en'));
  setTheme(theme);
  render(initial);
  initAmbientCanvas();
  initSystemParticles();
})();
