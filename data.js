// ═══════════════════════════════════════════════════════════════
// 📋 사업 메타데이터
// ═══════════════════════════════════════════════════════════════
const projectMeta = {
    name: '스마트그린 산업단지 제조산업 특화 초거대 제조 AI 서비스 개발 및 실증',
    shortName: '초거대 제조AI',
    period: {
        total: '2024.05.01 ~ 2026.12.31',
        year3: '2026.01.01 ~ 2026.12.31'
    },
    summary: {
        totalBudget: '229.4억원',
        year3Budget: '97.35억원',
        totalOrgs: 15,
        demandOrgs: 2,
        framework: 'DAINOS'
    },
    budget: {
        government: { label: '정부출연금', amount: 62, unit: '억원', ratio: 63.7 },
        local:      { label: '지방비',     amount: 29, unit: '억원', ratio: 29.8 },
        private:    { label: '민간부담금', amount: 6.35, unit: '억원', ratio: 6.5 }
    },
    timeline: [
        { year: 1, label: '기반 구축',   period: '2024', progress: 100, phases: ['설계 완료', '요구사항 분석', '아키텍처 설계', '프로토타입'] },
        { year: 2, label: '고도화',       period: '2025', progress: 100, phases: ['핵심기술 개발', '인프라 구축', '통신망 구축', 'AI 모델 개발', '서비스 개발'] },
        { year: 3, label: '통합 완성',    period: '2026', progress: 85,  phases: ['EBC 구축', 'AI 모델 고도화', '실증·검증', '성과 측정', '사업 종료'] }
    ],
    controlAccounts: [
        { id: 'CA1', name: '사업관리',          ratio: 8 },
        { id: 'CA2', name: '운영환경/핵심기술', ratio: 45 },
        { id: 'CA3', name: '응용서비스',        ratio: 40 },
        { id: 'CA4', name: '인력양성',          ratio: 7 }
    ]
};

// ═══════════════════════════════════════════════════════════════
// 🔧 서비스 플로우 단계 설정
// ═══════════════════════════════════════════════════════════════
const stageConfig = [
    { id: 1, name: '데이터 수집',    nameEn: 'Data Collection', icon: 'fas fa-database',   color: 'blue' },
    { id: 2, name: '데이터 전송',    nameEn: 'Transfer',        icon: 'fas fa-wifi',       color: 'emerald' },
    { id: 3, name: '플랫폼 & AAS',  nameEn: 'Platform & AAS',  icon: 'fas fa-server',     color: 'indigo' },
    { id: 4, name: 'AI 분석',       nameEn: 'AI Analysis',     icon: 'fas fa-brain',      color: 'purple' },
    { id: 5, name: '서비스 활용',    nameEn: 'Application',     icon: 'fas fa-cogs',       color: 'rose' },
    { id: 6, name: '운영 관리',      nameEn: 'Management',      icon: 'fas fa-chart-line', color: 'orange' }
];

// ═══════════════════════════════════════════════════════════════
// 🏢 참여기관 데이터 (15개)
// ═══════════════════════════════════════════════════════════════
const companies = [
    // ── DATA 도메인 ──────────────────────────────────────────
    { 
        id: 'kyungnam',
        type: 'DATA',
        category: '참여',
        ca: 'CA2',
        name: '경남대학교',
        role: '데이터 표준화',
        roleEn: 'Standardization',
        desc: 'AAS 기반 이기종 설비 데이터 표준 모델링',
        icon: 'fas fa-project-diagram',
        color: 'blue',
        status: 'normal',
        stage: 3,
        details: '제조 현장에서 수집되는 다양한 형태의 데이터를 자산관리쉘(AAS) 기반의 표준 모델로 변환하여 데이터의 일관성과 활용성을 높입니다.',
        techStack: ['AAS', '데이터 모델링', 'Knowledge Graph'],
        externalUrl: 'https://aas-system.netlify.app',
        results: {
            title: 'AAS Infer-Repository 및 보안 통합',
            year3Goal: 'Knowledge Graph 기반 제조데이터 온톨로지 완성 및 AAS 보안 체계 구축',
            kpis: [
                { label: 'AAS 변환 모델 수', value: '1,204', unit: 'Models', target: '1,000', achievement: 120.4, status: 'achieved' },
                { label: '데이터 표준화율', value: '95.2', unit: '%', target: '90', achievement: 105.8, status: 'achieved' }
            ],
            deliverables: [
                'AAS Infer-Repository v3.0',
                'Knowledge Graph 온톨로지 스키마',
                'AAS 보안 프레임워크',
                'IDTA 표준 Submodel 연동 모듈'
            ],
            screenshot: null
        }
    },
    { 
        id: 'markbase',
        type: 'DATA',
        category: '참여',
        ca: 'CA2',
        name: '마크베이스',
        role: '시계열 DB',
        roleEn: 'High-Speed DB',
        desc: '초당 100만 건 데이터 처리 성능 확보',
        icon: 'fas fa-tachometer-alt',
        color: 'blue',
        status: 'normal',
        stage: 1,
        details: '설비의 PLC, 센서 등 OT(운영 기술) 환경에서 발생하는 대용량 시계열 데이터를 초당 100만 건 이상 처리할 수 있는 고성능 데이터베이스를 제공합니다.',
        techStack: ['시계열 DB', 'Real-time Processing', 'Big Data'],
        externalUrl: 'https://www.machbase.com/',
        results: {
            title: '시계열 DB 200만건/초 처리 고도화',
            year3Goal: '200만건/초 데이터 처리 성능 달성 및 에지컴퓨팅 연동',
            kpis: [
                { label: 'DB 처리속도', value: '1.21M', unit: 'rec/s', target: '2.0M', achievement: 60.5, status: 'in-progress' },
                { label: '데이터 수집 안정성', value: '99.8', unit: '%', target: '99.5', achievement: 100.3, status: 'achieved' }
            ],
            deliverables: [
                '시계열 DB v3.0',
                'Edge-DB 연동 모듈',
                '실시간 데이터 수집기'
            ],
            screenshot: null
        }
    },
    { 
        id: 'amiqu',
        type: 'DATA',
        category: '참여',
        ca: 'CA3',
        name: '아미크',
        role: '스마트팩토리 ERP',
        roleEn: 'Legacy Connect',
        desc: '기존 ERP 데이터 연동 파이프라인 구축',
        icon: 'fas fa-link',
        color: 'blue',
        status: 'normal',
        stage: 1,
        details: '기업의 기존 ERP, MES 등 IT(정보기술) 시스템과 초거대 AI 플랫폼을 안정적으로 연동하기 위한 데이터 파이프라인을 구축합니다.',
        techStack: ['ETL', 'Data Pipeline', 'API Integration'],
        externalUrl: 'http://www.amiqu.com/',
        results: {
            title: 'ERP-AI 연동 및 데이터 파이프라인 고도화',
            year3Goal: 'ERP-AI 연동 완성 및 데이터 파이프라인 안정화',
            kpis: [
                { label: 'ERP 연동 성공률', value: '99.8', unit: '%', target: '99', achievement: 100.8, status: 'achieved' },
                { label: '파이프라인 처리량', value: '50K', unit: 'events/min', target: '30K', achievement: 166.7, status: 'achieved' }
            ],
            deliverables: [
                'ERP-AI 연동 모듈',
                '데이터 파이프라인 v3.0',
                'API Gateway'
            ],
            screenshot: null
        }
    },
    { 
        id: 'nestfield',
        type: 'DATA',
        category: '참여',
        ca: 'CA3',
        name: '네스트필드',
        role: '데이터 교환',
        roleEn: 'Interoperability',
        desc: '이종 시스템 간 데이터 상호운용성 확보',
        icon: 'fas fa-exchange-alt',
        color: 'blue',
        status: 'warning',
        stage: 3,
        details: '다양한 제조 장비와 시스템 간의 데이터 교환을 위한 표준 인터페이스를 제공하여 상호운용성을 보장합니다.',
        techStack: ['Middleware', 'Protocol Conversion', 'API Gateway'],
        externalUrl: 'http://www.nestfield.co.kr/',
        results: {
            title: 'EDC 기반 기업간 데이터 교환 서비스',
            year3Goal: 'EDC 기반 기업간 데이터 교환 서비스 완성',
            kpis: [
                { label: 'API 연동율', value: '85', unit: '%', target: '95', achievement: 89.5, status: 'in-progress' },
                { label: '데이터 교환 건수', value: '1,200', unit: '건/일', target: '1,500', achievement: 80.0, status: 'in-progress' }
            ],
            deliverables: [
                'EDC 데이터 교환 플랫폼',
                '기업간 데이터 공유 프로토콜',
                'Middleware v3.0'
            ],
            screenshot: null
        }
    },
    { 
        id: 'keti',
        type: 'DATA',
        category: '참여',
        ca: 'CA2',
        name: 'KETI',
        role: 'AIoT 엣지',
        roleEn: 'AIoT Edge',
        desc: '현장 설비 부착형 지능형 엣지 개발',
        icon: 'fas fa-microchip',
        color: 'blue',
        status: 'normal',
        stage: 1,
        details: '데이터가 발생하는 현장에 AIoT 엣지 디바이스를 설치하여 비전, 음향 등 비정형 데이터를 1차적으로 처리하고 분석합니다.',
        techStack: ['Edge Computing', 'AIoT', 'Embedded AI'],
        externalUrl: 'https://www.keti.re.kr/',
        results: {
            title: 'AIoT 엣지 컴퓨팅 실증',
            year3Goal: 'AIoT 엣지 컴퓨팅 실증 및 클라우드-엣지 연동 완성',
            kpis: [
                { label: '배포 디바이스 수', value: '24', unit: 'Devices', target: '20', achievement: 120.0, status: 'achieved' },
                { label: '엣지 추론 지연시간', value: '12', unit: 'ms', target: '20', achievement: 140.0, status: 'achieved' }
            ],
            deliverables: [
                'AIoT 엣지 디바이스 v3.0',
                '클라우드-엣지 연동 모듈',
                '실시간 이상감지 엔진'
            ],
            screenshot: null
        }
    },

    // ── AI 도메인 ────────────────────────────────────────────
    { 
        id: 'kaist',
        type: 'AI',
        category: '참여',
        ca: 'CA2',
        name: 'KAIST',
        role: '초거대 AI 모델',
        roleEn: 'Hyperscale AI',
        desc: '제조 특화 LLM 모델 개발 및 질의응답',
        icon: 'fas fa-brain',
        color: 'purple',
        status: 'normal',
        stage: 4,
        details: '플랫폼의 핵심 두뇌 역할을 하는 제조 특화 초거대 언어모델(LLM)을 개발합니다. 이 모델은 공정 이상 원인 분석, 해결책 제안 등의 기능을 수행합니다.',
        techStack: ['LLM', '생성형 AI', 'Fine-tuning', 'MoE'],
        externalUrl: 'https://www.kaist.ac.kr/',
        results: {
            title: 'MoE 통합 제조 AI 모델 개발',
            year3Goal: 'MoE 아키텍처 기반 도메인별 Expert 모델 통합 및 제조 LLM 파인튜닝',
            kpis: [
                { label: 'MoE 모델 정확도', value: '92', unit: '%', target: '90', achievement: 102.2, status: 'achieved' },
                { label: 'Expert 모델 수', value: '6', unit: 'Models', target: '6', achievement: 100.0, status: 'achieved' },
                { label: '추론 응답시간', value: '1.2', unit: 's', target: '2.0', achievement: 140.0, status: 'achieved' }
            ],
            deliverables: [
                'MoE 통합 모델 v1.0',
                '제조 LLM 파인튜닝 모델',
                'Expert Router 모듈',
                'AI 추론 API 서버'
            ],
            screenshot: null
        }
    },
    { 
        id: 'nextstudio',
        type: 'AI',
        category: '참여',
        ca: 'CA3',
        name: '넥스트스튜디오',
        role: 'ESG AI / UX',
        roleEn: 'ESG AI',
        desc: '탄소 배출량 예측 및 저감 관리 모델',
        icon: 'fas fa-leaf',
        color: 'purple',
        status: 'normal',
        stage: 4,
        details: '제조 공정에서 발생하는 탄소 배출량을 예측하고, 생산 계획에 따른 저감 방안을 시뮬레이션하는 ESG 특화 AI 모델을 개발합니다.',
        techStack: ['예측 모델링', '시뮬레이션', 'ESG Analytics', 'UX/UI'],
        externalUrl: 'http://www.next-studio.co.kr/',
        results: {
            title: '탄소 배출량 예측 모델 + 통합 UX/UI',
            year3Goal: '탄소 배출량 예측 모델 고도화 및 통합 프론트엔드 완성',
            kpis: [
                { label: 'CO₂ 예측 정확도', value: '88.5', unit: '%', target: '85', achievement: 104.1, status: 'achieved' },
                { label: 'CO₂ 저감률', value: '-7.5', unit: '%', target: '-5', achievement: 150.0, status: 'achieved' }
            ],
            deliverables: [
                'ESG AI 모델 v2.0',
                '탄소 시뮬레이션 대시보드',
                '통합 UX/UI 프레임워크'
            ],
            screenshot: null
        }
    },

    // ── INFRA 도메인 ─────────────────────────────────────────
    { 
        id: 'megazone',
        type: 'INFRA',
        category: '참여',
        ca: 'CA2',
        name: '메가존클라우드',
        role: '클라우드 인프라',
        roleEn: 'Cloud Infra',
        desc: '하이브리드 AI 클라우드 센터(EBC) 구축',
        icon: 'fas fa-cloud',
        color: 'gray',
        status: 'normal',
        stage: 3,
        details: 'AI 모델 학습 및 서비스 운영을 위한 하이브리드 클라우드 인프라(EBC)를 구축하고 안정적으로 운영합니다.',
        techStack: ['Hybrid Cloud', 'Kubernetes', 'MLOps', 'GCP'],
        externalUrl: 'https://www.megazone.com/',
        results: {
            title: '하이브리드 클라우드 MLOps 파이프라인 완성',
            year3Goal: 'On-premise + GCP 하이브리드 클라우드 MLOps 자동화 완성',
            kpis: [
                { label: '클라우드 가동률', value: '99.98', unit: '%', target: '99.9', achievement: 100.1, status: 'achieved' },
                { label: 'MLOps 자동화율', value: '85', unit: '%', target: '80', achievement: 106.3, status: 'achieved' }
            ],
            deliverables: [
                '하이브리드 클라우드 v3.0',
                'MLOps 파이프라인',
                'AI DevOps 자동화 도구'
            ],
            screenshot: null
        }
    },

    // ── NETWORK 도메인 ───────────────────────────────────────
    { 
        id: 'limecsi',
        type: 'NETWORK',
        category: '참여',
        ca: 'CA2',
        name: '라임씨에스아이',
        role: '5G/WiFi 7 특화망',
        roleEn: '5G Network',
        desc: '공장 내 음영 구역 없는 5G 특화망 구축',
        icon: 'fas fa-wifi',
        color: 'emerald',
        status: 'normal',
        stage: 2,
        details: '공장 내 데이터 통신 음영 구역을 해소하고, 대용량 데이터를 초저지연으로 전송하기 위한 5G 특화망 인프라를 구축합니다.',
        techStack: ['5G', 'WiFi 7', 'Network Slicing', 'NMS'],
        externalUrl: 'http://www.limecsi.com/',
        results: {
            title: 'WiFi 7 + 5G 특화망 NMS 통합',
            year3Goal: 'WiFi 7 인프라 구축 및 5G 특화망 NMS 통합 관리 완성',
            kpis: [
                { label: '네트워크 지연시간', value: '1.5', unit: 'ms', target: '3', achievement: 150.0, status: 'achieved' },
                { label: '커버리지 달성률', value: '98', unit: '%', target: '95', achievement: 103.2, status: 'achieved' }
            ],
            deliverables: [
                'WiFi 7 AP 설치 완료',
                '5G 특화망 인프라',
                'NMS 통합 관리 시스템'
            ],
            screenshot: null
        }
    },

    // ── ORG 도메인 ───────────────────────────────────────────
    { 
        id: 'gntp',
        type: 'ORG',
        category: '주관',
        ca: 'CA1',
        name: '경남TP',
        role: '사업 총괄',
        roleEn: 'Project Management',
        desc: '사업 총괄 및 참여 기관 관리',
        icon: 'fas fa-clipboard',
        color: 'orange',
        status: 'normal',
        stage: 6,
        details: '프로젝트의 전반적인 운영 및 관리를 책임지며, 참여 기관 간의 협력을 조율하고 사업 목표 달성을 위한 전략을 수립합니다.',
        techStack: ['프로젝트 관리', 'PMBOK', '성과 관리', 'EVM'],
        externalUrl: 'https://www.gntp.or.kr/',
        results: {
            title: '사업 관리 및 인력양성/확산',
            year3Goal: '3차년도 사업 목표 달성, EBC 운영, 기업 확산, 인력양성',
            kpis: [
                { label: '사업 진행률', value: '85', unit: '%', target: '100', achievement: 85.0, status: 'in-progress' },
                { label: '교육 수료생', value: '120', unit: '명', target: '150', achievement: 80.0, status: 'in-progress' },
                { label: '확산 기업 수', value: '5', unit: '기업', target: '8', achievement: 62.5, status: 'in-progress' }
            ],
            deliverables: [
                '사업 관리 보고서',
                'EBC 운영 보고서',
                '인력양성 교육과정',
                '기업 확산 실적 보고서'
            ],
            screenshot: null
        }
    },
    { 
        id: 'ktl',
        type: 'ORG',
        category: '참여',
        ca: 'CA3',
        name: 'KTL',
        role: '품질/시험인증',
        roleEn: 'Verification',
        desc: 'AI 모델 및 데이터 품질 신뢰성 검증',
        icon: 'fas fa-check-double',
        color: 'orange',
        status: 'normal',
        stage: 6,
        details: '개발된 AI 모델과 데이터의 품질, 신뢰성을 검증하는 역할을 수행합니다. 객관적인 평가 지표를 통해 솔루션의 완성도를 높입니다.',
        techStack: ['시스템 엔지니어링', '품질 보증', 'Testing', '시험인증'],
        externalUrl: 'https://www.ktl.re.kr/',
        results: {
            title: '시험인증 AI 서비스 및 품질 검증',
            year3Goal: 'AI 모델/데이터 품질 검증 완료 및 시험인증 AI 서비스 구축',
            kpis: [
                { label: '검증 완료', value: 'Pass', unit: '', target: 'Pass', achievement: 100.0, status: 'achieved' },
                { label: '시험인증 AI 정확도', value: '91', unit: '%', target: '88', achievement: 103.4, status: 'achieved' }
            ],
            deliverables: [
                '품질 검증 보고서',
                '시험인증 AI 서비스',
                '신뢰성 평가 리포트'
            ],
            screenshot: null
        }
    },

    // ── SERVICE 도메인 ───────────────────────────────────────
    { 
        id: 'sortech',
        type: 'SERVICE',
        category: '참여',
        ca: 'CA3',
        name: '소르테크',
        role: 'QMS / Vision AI',
        roleEn: 'Vision AI',
        desc: '육안 검사 대비 속도 2배 향상 불량 검출',
        icon: 'fas fa-camera-retro',
        color: 'rose',
        status: 'danger',
        stage: 5,
        details: 'AI 비전 기술을 활용하여 생산 라인의 제품 불량을 실시간으로 검출합니다. sLM Agent 기반 QMS로 품질관리 자동화 및 ESG 규제 대응을 수행합니다.',
        techStack: ['Computer Vision', 'sLM Agent', 'RAG', 'QMS'],
        externalUrl: 'http://www.sortech.co.kr/',
        results: {
            title: 'sLM Agent 기반 QMS + ESG 규제대응',
            year3Goal: 'RAG 기반 sLM Agent QMS 완성 및 ESG 규제대응 자동화',
            kpis: [
                { label: '불량 검출 속도', value: '15', unit: 'Defects/h', target: '20', achievement: 75.0, status: 'in-progress' },
                { label: 'sLM Agent 정확도', value: '87', unit: '%', target: '85', achievement: 102.4, status: 'achieved' }
            ],
            deliverables: [
                'sLM Agent QMS v2.0',
                'RAG 기반 Q&A 시스템',
                'ESG 규제대응 모듈'
            ],
            screenshot: null
        }
    },
    { 
        id: 'dxsolutions',
        type: 'SERVICE',
        category: '참여',
        ca: 'CA3',
        name: 'DX솔루션즈',
        role: '불량 역추적',
        roleEn: 'Traceability',
        desc: '불량 발생 원인 자동 역추적 시스템',
        icon: 'fas fa-search-location',
        color: 'rose',
        status: 'normal',
        stage: 5,
        details: '제품 불량 발생 시, 해당 제품의 생산 이력과 데이터를 역추적하여 어떤 공정에서 어떤 원인으로 문제가 발생했는지 자동으로 분석합니다.',
        techStack: ['Data Tracking', 'AI Analytics', 'Root Cause Analysis', 'MES'],
        externalUrl: 'http://www.dxsolutions.co.kr/',
        results: {
            title: 'AI 기반 불량 역추적 시스템 + MES 연동',
            year3Goal: '불량 역추적 시스템 고도화 및 MES 연동 완성',
            kpis: [
                { label: '역추적 소요시간', value: '3.2', unit: 'min/case', target: '5', achievement: 136.0, status: 'achieved' },
                { label: '역추적 정확도', value: '94', unit: '%', target: '90', achievement: 104.4, status: 'achieved' }
            ],
            deliverables: [
                '불량 역추적 시스템 v3.0',
                'MES 연동 모듈',
                '원인 분석 대시보드'
            ],
            screenshot: null
        }
    },
    { 
        id: 'sdtech',
        type: 'SERVICE',
        category: '참여',
        ca: 'CA3',
        name: '에스디테크',
        role: 'IIoT 센싱',
        roleEn: 'Sensing',
        desc: '설비 진동/온도 실시간 데이터 수집',
        icon: 'fas fa-wave-square',
        color: 'rose',
        status: 'normal',
        stage: 5,
        details: '설비의 진동, 온도 등 IIoT 센서 데이터를 실시간으로 수집하고 분석하여 공정 품질을 안정적으로 유지하고 관리합니다.',
        techStack: ['IIoT', 'Sensor Analytics', 'Predictive Maintenance'],
        externalUrl: null,
        results: {
            title: 'IIoT 데이터 수집 고도화',
            year3Goal: 'IIoT 센서 데이터 수집 고도화 및 공정 품질 관리 자동화',
            kpis: [
                { label: '데이터 수집률', value: '99.7', unit: '%', target: '99', achievement: 100.7, status: 'achieved' },
                { label: '센서 배치 수', value: '48', unit: 'Sensors', target: '40', achievement: 120.0, status: 'achieved' }
            ],
            deliverables: [
                'IIoT 센서 모듈 v3.0',
                '실시간 데이터 수집기',
                '공정 품질 모니터링 시스템'
            ],
            screenshot: null
        }
    },
    { 
        id: 'metaisquare',
        type: 'SERVICE',
        category: '참여',
        ca: 'CA3',
        name: '메타아이스퀘어',
        role: '음성 AI / 관제',
        roleEn: 'Monitoring',
        desc: '제조 공정 이상 징후 실시간 관제',
        icon: 'fas fa-chart-line',
        color: 'rose',
        status: 'normal',
        stage: 5,
        details: '작업자의 음성 명령을 인식하고, 수집된 데이터를 종합하여 제조 공정의 이상 징후를 실시간으로 관제하는 대시보드를 제공합니다.',
        techStack: ['음성인식', 'Data Visualization', 'Real-time Monitoring'],
        externalUrl: null,
        results: {
            title: '한국어 음성인식 현장 적용 + 관제 대시보드',
            year3Goal: '한국어 음성인식 AI 현장 적용 및 실시간 관제 대시보드 완성',
            kpis: [
                { label: '음성인식 정확도', value: '92', unit: '%', target: '90', achievement: 102.2, status: 'achieved' },
                { label: '이상 징후 감지율', value: '88', unit: '%', target: '85', achievement: 103.5, status: 'achieved' }
            ],
            deliverables: [
                '한국어 음성인식 AI v3.0',
                '실시간 관제 대시보드',
                '이상 징후 알림 시스템'
            ],
            screenshot: null
        }
    }
];

// ═══════════════════════════════════════════════════════════════
// 🔧 유틸리티 함수
// ═══════════════════════════════════════════════════════════════

/** DAINOS 도메인 색상 매핑 */
const domainColors = {
    DATA:    { bg: 'bg-blue-50',    text: 'text-blue-600',    border: 'border-blue-200',    badge: 'bg-blue-100' },
    AI:      { bg: 'bg-purple-50',  text: 'text-purple-600',  border: 'border-purple-200',  badge: 'bg-purple-100' },
    INFRA:   { bg: 'bg-gray-50',    text: 'text-gray-600',    border: 'border-gray-200',    badge: 'bg-gray-100' },
    NETWORK: { bg: 'bg-emerald-50', text: 'text-emerald-600', border: 'border-emerald-200', badge: 'bg-emerald-100' },
    ORG:     { bg: 'bg-orange-50',  text: 'text-orange-600',  border: 'border-orange-200',  badge: 'bg-orange-100' },
    SERVICE: { bg: 'bg-rose-50',    text: 'text-rose-600',    border: 'border-rose-200',    badge: 'bg-rose-100' }
};

/** KPI 달성 상태 색상 */
const kpiStatusColors = {
    'achieved':    { bg: 'bg-green-100', text: 'text-green-700', label: '달성' },
    'in-progress': { bg: 'bg-amber-100', text: 'text-amber-700', label: '진행중' },
    'not-started': { bg: 'bg-gray-100',  text: 'text-gray-500',  label: '미착수' }
};

/** 기관 상태 색상 */
const statusColors = {
    'normal':  { bg: 'bg-green-400',  label: '정상' },
    'warning': { bg: 'bg-amber-400',  label: '점검' },
    'danger':  { bg: 'bg-red-400',    label: '장애' }
};

/** 도메인별 기관 필터링 */
function getCompaniesByDomain(domain) {
    if (!domain || domain === 'ALL') return companies;
    return companies.filter(c => c.type === domain);
}

/** 스테이지별 기관 필터링 */
function getCompaniesByStage(stageId) {
    return companies.filter(c => c.stage === stageId);
}

/** ID로 기관 찾기 */
function getCompanyById(id) {
    return companies.find(c => c.id === id);
}

/** 전체 KPI 달성률 평균 계산 */
function getOverallAchievement() {
    const allKpis = companies.flatMap(c => c.results.kpis.filter(k => typeof k.achievement === 'number'));
    if (allKpis.length === 0) return 0;
    return Math.round(allKpis.reduce((sum, k) => sum + k.achievement, 0) / allKpis.length * 10) / 10;
}

/** 도메인별 KPI 달성률 평균 */
function getDomainAchievement(domain) {
    const domainCompanies = getCompaniesByDomain(domain);
    const allKpis = domainCompanies.flatMap(c => c.results.kpis.filter(k => typeof k.achievement === 'number'));
    if (allKpis.length === 0) return 0;
    return Math.round(allKpis.reduce((sum, k) => sum + k.achievement, 0) / allKpis.length * 10) / 10;
}
