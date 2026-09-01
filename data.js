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
        totalOrgs: 16,
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
// 🏢 참여기관 데이터 (16개)
//
// [팝업 구조 설명]
//
// sections 배열: 좌측 패널에 표시될 섹션 목록 (순서대로 렌더링)
//   없으면 해당 섹션 자체가 나타나지 않음
//
//   섹션 type 종류:
//   - 'list'       : 제목(title, 선택) + 불릿 목록(items)
//   - 'tags'       : 태그 뱃지 나열 (items)
//   - 'kpi-static' : 하드코딩 수치 카드 (items: [{label, value, unit, color}])
//   - 'kpi-api'    : API 실시간 수치 카드
//                    (endpoints: [{label, url, key, unit, color}])
//
// preview 객체: 우측 패널 미리보기 방식
//   - type: 'iframe'      → url 필요
//   - type: 'youtube'     → videoId 필요
//   - type: 'image'       → url 필요, caption 선택
//   - type: 'placeholder' → 준비 중 표시 (url 선택, externalUrl 대체)
//
// ═══════════════════════════════════════════════════════════════
const companies = [

    // ── DATA 도메인 ──────────────────────────────────────────
    {
        id: 'kyungnam',
        type: 'DATA',
        category: '참여',
        isRealData: true,
        name: '경남대학교',
        role: '데이터 표준화 / 인력양성',
        roleEn: 'Data Standardization / Capacity Building',
        desc: '제조데이터 표준화와 AI 인재양성 거점',
        status: 'normal',
        stage: 3,
        details: 'AAS 기반 제조데이터 표준화 및 중요 데이터 보호 기술 개발, 초거대 제조 AI 통합 운영환경 구축·운영, 제조 현장 활용형 AI 전문인력 교육 및 산학협력 추진',
        sections: [
            {
                label: '3차년도 목표',
                type: 'list',
                title: '제조데이터 표준·기술 및 초거대 제조 AI 운영환경 고도화·실증, 제조 AI 전문인력 양성'
            },
            {
                label: '대표 산출물',
                type: 'list',
                items: [
                    'AAS 포털 사이트 (https://aas-system.netlify.app/)',
                    '비식별 소프트웨어 공인인증시험서',
                    '산업체 협력 프로젝트 운영 보고서'
                ]
            },
            {
                label: '기술 키워드',
                type: 'tags',
                items: ['데이터 표준화', '데이터 보안', '인력양성', '컴퓨팅 인프라']
            },
            {
                label: '성과 지표',
                type: 'kpi-static',
                items: [
                    { label: '초거대제조AI 플랫폼 대시보드 구축율', value: '100', unit: '%', color: '#2563EB' },
                    { label: '기업 기밀 데이터 비식별 대상 검출 기술', value: '10', unit: '종', color: '#059669' },
                    { label: '교육내용 기업 내 활용 보고서', value: '20', unit: '건', color: '#7C3AED' },
                    { label: '제조AI 전문인력 양성', value: '20', unit: '명', color: '#f59e0b' }
                ]
            }
        ],
        preview: {
            type: 'image',
            url: './images/kyungnam_v.mp4',
            caption: '비식별화 프로그램 데모 영상'
        },
        externalUrl: 'https://www.kyungnam.ac.kr/',
        results: {
            kpis: [
                { label: '플랫폼 대시보드 구축율', value: '100', unit: '%', target: '100', achievement: 100 },
                { label: '비식별 대상 검출 기술', value: '10', unit: '종', target: '10', achievement: 100 },
                { label: '기업 내 활용 보고서', value: '20', unit: '건', target: '40', achievement: 50 },
                { label: '제조AI 전문인력 양성', value: '20', unit: '명', target: '40', achievement: 50 }
            ],
            deliverables: [
                'AAS 포털 사이트',
                '비식별 소프트웨어 공인인증시험서',
                '산업체 협력 프로젝트 운영 보고서'
            ]
        }
    },
    {
        id: 'markbase',
        type: 'DATA',
        category: '참여',
        ca: 'CA2',
        isRealData: true,
        name: '마크베이스',
        role: '시계열DB',
        roleEn: 'High-Speed DB',
        desc: '초고속·대용량 시계열 데이터 처리 기술 자체 보유',
        status: 'normal',
        stage: 1,
        details: '설비의 PLC, 센서 등 OT(운영 기술) 환경에서 발생하는 대용량 시계열 데이터를 초당 200만 건 이상 처리할 수 있는 고성능 데이터베이스를 제공합니다.',
        sections: [
            {
                label: '3차년도 목표',
                type: 'list',
                title: '초당 200만 건 이상 데이터 수집 성능 확보 및 수집 설비 태그 수 3000개 이상 달성'
            },
            {
                label: '대표 산출물',
                type: 'list',
                items: [
                    'OPC-UA 방식 PLC 데이터 직접수집/저장 및 분석 설명서',
                    '설비 데이터 LLM 자연어 질의 및 리포트 생성 기능 설명서',
                    '데이터 수집 성능 시험 성적서',
                    '설비 태그 명세서'
                ]
            },
            {
                label: '기술 키워드',
                type: 'tags',
                items: ['Time-Series DBMS', 'OPC-UA', '초고속 데이터처리', 'Real-time Processing']
            },
            {
                label: '성과 지표',
                type: 'kpi-static',
                items: [
                    { label: '데이터 수집 성능', value: '167만', unit: '건/초', color: '#2563EB', target: '200만' },
                    { label: '수집 태그 수', value: '2,884', unit: '개', color: '#059669', target: '3,000' }
                ]
            }
        ],
        preview: {
            type: 'dual-youtube',
            videos: [
                {
                    videoId: 'BgrEGzDoQLU',
                    url: 'https://youtu.be/BgrEGzDoQLU?si=7AeJQI4QGmoXCDHk',
                    label: '01. 데이터 수집',
                    subLabel: 'OPC-UA 서버 연동',
                    caption: 'OPC-UA 서버 연결 및 데이터 수집'
                },
                {
                    videoId: 'fVrC9ji5Q5M',
                    url: 'https://youtu.be/fVrC9ji5Q5M?si=HUSfE1liPz8K0l7',
                    label: '02. LLM 질의·리포트',
                    subLabel: 'MCP 연동',
                    caption: 'MCP 연동을 통한 LLM 자연어 질의 및 리포트 생성'
                }
            ]
        },
        externalUrl: 'https://www.machbase.com/',
        results: {
            title: '초고속·대용량 시계열 데이터 처리 기술',
            year3Goal: '초당 200만 건 이상 데이터 수집 성능 확보 및 수집 설비 태그 수 3000개 이상 달성',
            kpis: [
                { label: '데이터 수집 성능', value: '167만', unit: '건/초', target: '200만', achievement: 83.5, status: 'in-progress' },
                { label: '수집 태그 수', value: '2,884', unit: '개', target: '3,000', achievement: 96.1, status: 'in-progress' }
            ],
            deliverables: [
                'OPC-UA 방식 PLC 데이터 직접수집/저장 및 분석 설명서',
                '설비 데이터 LLM 자연어 질의 및 리포트 생성 기능 설명서',
                '데이터 수집 성능 시험 성적서',
                '설비 태그 명세서'
            ],
            screenshot: null
        }
    },
    {
        id: 'amiqu',
        type: 'DATA',
        category: '참여',
        isRealData: true,
        name: '아미크',
        role: 'IT 데이터 파이프라인',
        roleEn: 'IT Data Pipeline',
        desc: '초당 10만 건의 IT 데이터 전송 성능 확보',
        status: 'normal',
        stage: 1,
        details: [
            '인공지능이 기업의 복잡한 IT 데이터를 쉽게 학습할 수 있도록 데이터를 가공하고 초고속으로 전달하는 IT 데이터 파이프라인 구축 역할.',
            '1초에 10만 건에 달하는 대용량 데이터를 지연 없이 전송하여, 줄어든 정보를 하나로 모아 AI에게 안정적으로 공급.',
            '이를 통해 지능형 AI 모델이 원활하게 작동할 수 있는 튼튼한 데이터 공급망 기반을 마련함.'
        ],
        sections: [
            {
                label: '3차년도 목표',
                type: 'list',
                title: '초당 10만 건의 IT 데이터 전송 성능 달성 및 경남대 EBC 연동'
            },
            {
                label: '대표 산출물',
                type: 'list',
                items: [
                    'IT 데이터 파이프라인 플랫폼',
                    '공인성적서 (100,000 row/Sec)',
                    '데이터 수집 및 전처리 데이터 셋 500만건'
                ]
            },
            {
                label: '기술 키워드',
                type: 'tags',
                items: ['IT Data Pipeline', 'Data Preprocessing', 'High-speed Transmission', 'AI']
            },
            {
                label: '성과 지표',
                type: 'kpi-static',
                items: [
                    { label: 'IT 데이터 파이프라인 플랫폼', value: '90', unit: '%', color: '#2563EB' },
                    { label: '공인성적서 (100,000 row/Sec)', value: '800,000', unit: 'row/Sec', color: '#059669' },
                    { label: '학습 데이터 셋 500만건', value: '0', unit: '건', color: '#7C3AED' }
                ]
            }
        ],
        preview: {
            type: 'image',
            url: './images/armiq_v.mp4',
            caption: '아미크 IT 데이터 파이프라인 데모 영상'
        },
        externalUrl: 'http://www.amiqu.com/',
        results: {
            kpis: [
                { label: 'IT 데이터 파이프라인 플랫폼', value: '90', unit: '%', target: '100', achievement: 90 },
                { label: '공인성적서 (100,000 row/Sec)', value: '800,000', unit: 'row/Sec', target: '100,000', achievement: 800 },
                { label: '학습 데이터 셋', value: '0', unit: '건', target: '5,000,000', achievement: 0 }
            ],
            deliverables: ['IT 데이터 파이프라인 플랫폼', '공인성적서 (100,000 row/Sec)', '데이터 수집 및 전처리 데이터 셋 500만건']
        }
    },
    {
        id: 'nestfield',
        type: 'DATA',
        category: '참여',
        ca: 'CA3',
        isRealData: true,
        name: '네스트필드',
        role: '데이터 교환',
        roleEn: 'Data Exchange',
        desc: '국제 표준(AAS) 기반 제조데이터 교환 체계 구축',
        icon: 'fas fa-exchange-alt',
        color: 'blue',
        status: 'normal',
        stage: 3,
        details: '국제 표준 AAS 기반의 데이터 교환 인터페이스를 제공하여, 기업보안 제조데이터의 글로벌 데이터 공유 생태계 연계 기반을 확보합니다.',
        sections: [
            {
                label: '3차년도 목표',
                type: 'list',
                title: 'AAS 기반 데이터 교환 프레임워크 고도화 및 IDTA 사례 등록'
            },
            {
                label: '대표 산출물',
                type: 'list',
                items: [
                    'AAS 메타 데이터 모델',
                    'AAS 기반 데이터 교환 프레임워크',
                    'EDC 기반 데이터 커넥터 기술',
                    'IDTA USE CASE'
                ]
            },
            {
                label: '기술 키워드',
                type: 'tags',
                items: ['AAS', 'EDC', 'Metadata', 'Data Space']
            },
            {
                label: '성과 지표',
                type: 'kpi-static',
                items: [
                    { label: 'AAS 메타데이터 모델', value: '3', unit: '종', color: '#2563EB' },
                    { label: 'IDTA 사례등록', value: '1', unit: '건', color: '#059669' }
                ]
            }
        ],
        preview: {
            type: 'slideshow',
            slides: [
                {
                    url: './images/nestfield_1.PNG',
                    caption: '그림 1. 대표 이미지: AAS 기반 데이터 교환 프레임워크 구조 및 성과'
                },
                {
                    url: './images/nestfield_2.PNG',
                    caption: '그림 2. AAS 데이터 교환 프레임워크 대시보드 스크린샷'
                },
                {
                    url: './images/nestfield_3.PNG',
                    caption: '그림 3. 기업보유 데이터 변환 AI 서비스 스크린샷'
                },
                {
                    url: './images/nestfield_4.PNG',
                    caption: '그림 4. IDTA USE CASE 등록'
                },
                {
                    url: './images/nestfield_5.PNG',
                    caption: '그림 5. 글로벌 테스트베드 공동 전시, 탄소추적 시범사업 어플리케이션 스크린샷 및 전시회 참여 사진'
                }
            ]
        },
        externalUrl: 'http://www.nestfield.co.kr/',
        results: {
            title: 'AAS 기반 데이터 교환 체계 구축',
            year3Goal: 'AAS 기반 데이터 교환 프레임워크 고도화 및 IDTA 사례 등록',
            kpis: [
                { label: 'AAS 메타데이터 모델', value: '3', unit: '종', target: '3', achievement: 100.0, status: 'achieved' },
                { label: 'IDTA 사례등록', value: '1', unit: '건', target: '1', achievement: 100.0, status: 'achieved' }
            ],
            deliverables: ['AAS 메타 데이터 모델', 'AAS 기반 데이터 교환 프레임워크', 'EDC 기반 데이터 커넥터 기술', 'IDTA USE CASE'],
            screenshot: null
        }
    },
    {
        id: 'keti',
        type: 'DATA',
        category: '참여',
        ca: 'CA2',
        isRealData: true,
        name: '한국전자기술연구원',
        role: 'AIoT 및 Edge 컴퓨팅 기술 개발',
        roleEn: 'Development of AIoT & Edge computing',
        desc: '현장의 작업자/품질 데이터를 실시간 수집·분석하는 지능형 엣지 AI 기술',
        icon: 'fas fa-microchip',
        color: 'blue',
        status: 'normal',
        stage: 1,
        details: [
            '제조 현장의 센서·이미지·영상 데이터를 가까운 엣지 장치에서 실시간으로 수집하고 분석하는 AIoT 기술을 개발합니다.',
            '작업자 행동 인식·분석, 제품 품질 분석 AI를 엣지 환경에서 실행하고, 실제 실증 현장에 적용할 수 있는 엣지 AI 모듈과 통합 시스템을 구축합니다.'
        ],
        sections: [
            {
                label: '3차년도 목표',
                type: 'list',
                title: 'AI 모델이 탑재된 엣지 모듈을 개발하고, AI를 엣지 환경에 최적화하여 제조 현장에 적용 가능한 AIoT·엣지 통합 시스템 구축'
            },
            {
                label: '대표 산출물',
                type: 'list',
                items: [
                    '작업자 행동/제품 품질 분석용 엣지 AI 연산 모듈',
                    '제조 현장 AIoT 데이터 수집 모듈',
                    '엣지 환경에 최적화된 작업자 행동/제품 품질 분석 AI 소프트웨어',
                    '현장 실증용 AIoT·엣지 통합 시스템'
                ]
            },
            {
                label: '기술 키워드',
                type: 'tags',
                items: ['Edge AI', 'AIoT', 'Edge Computing']
            },
            {
                label: '성과 지표',
                type: 'kpi-static',
                items: [
                    { label: '배포 디바이스 수', value: '12', unit: '개', color: '#2563EB', target: '5' },
                    { label: '영상 처리 성능', value: '18', unit: 'FPS', color: '#059669', target: '15' },
                    { label: 'AI 추론 지연', value: '90', unit: 'ms', color: '#7C3AED', target: '100' }
                ]
            }
        ],
        preview: {
            type: 'dual-video',
            videos: [
                {
                    url: './images/keti_v.mp4',
                    label: '작업자 행동 분석',
                    subLabel: 'Edge AI 실증',
                    caption: 'KETI_신성실증.mp4'
                },
                {
                    url: './images/keti_k.mp4',
                    label: '품질 분석',
                    subLabel: 'Edge AI 실증',
                    caption: 'KETI_KGM실증.mp4'
                }
            ]
        },
        externalUrl: 'https://www.keti.re.kr/',
        results: {
            title: 'AIoT 및 Edge 컴퓨팅 기술 개발',
            year3Goal: 'AI 모델이 탑재된 엣지 모듈을 개발하고, AI를 엣지 환경에 최적화하여 제조 현장에 적용 가능한 AIoT·엣지 통합 시스템 구축',
            kpis: [
                { label: '배포 디바이스 수', value: '12', unit: '개', target: '5', achievement: 240.0, status: 'achieved' },
                { label: '영상 처리 성능', value: '18', unit: 'FPS', target: '15', achievement: 120.0, status: 'achieved' },
                { label: 'AI 추론 지연', value: '90', unit: 'ms', target: '100', achievement: 111.1, status: 'achieved' }
            ],
            deliverables: [
                '작업자 행동/제품 품질 분석용 엣지 AI 연산 모듈',
                '제조 현장 AIoT 데이터 수집 모듈',
                '엣지 환경에 최적화된 작업자 행동/제품 품질 분석 AI 소프트웨어',
                '현장 실증용 AIoT·엣지 통합 시스템'
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
        isRealData: true,
        name: 'KAIST',
        role: '제조 특화 AI 모델 개발',
        roleEn: 'Manufacturing AI',
        desc: '품질 설비 이상 통합 대응 제조 AI',
        icon: 'fas fa-brain',
        color: 'purple',
        status: 'normal',
        stage: 4,
        details: [
            '제품 조립 공정과 설비 운영 공정에서 발생하는 품질 이상과 설비 이상을 AI로 감지 예측하는 통합 제조 AI 서비스입니다.',
            '비전 기반 불량 검출, 시계열 기반 설비 이상 예측, 제조 특화 LLM 기반 원인 분석 및 조치 지원을 연결하여 현장 작업자가 문제를 더 빠르게 이해하고 대응할 수 있도록 지원합니다.'
        ],
        sections: [
            {
                label: '3차년도 목표',
                type: 'list',
                title: '품질 이상 검출과 설비 이상 사전 대응 및 작업자의 의사결정 지원 체계 구축'
            },
            {
                label: '대표 산출물',
                type: 'list',
                items: [
                    '비전 기반 불량 역추적 모델',
                    '시계열 기반 불량 예측 모델',
                    '제조 특화 LLM 챗봇'
                ]
            },
            {
                label: '기술 키워드',
                type: 'tags',
                items: ['Merge-of-Experts', 'YOLO', 'LSTM', 'LLM', 'RAG']
            },
            {
                label: '성과 지표',
                type: 'kpi-static',
                items: [
                    { label: '비전 기반 불량 검출 평균 Accuracy', value: '98', unit: '%', color: '#2563EB' },
                    { label: '시계열 기반 설비 이상 예측 평균 F1-Score', value: '85', unit: '%', color: '#059669' },
                    { label: '제조 특화 LLM 응답 정확도', value: '100', unit: '%', color: '#7C3AED' }
                ]
            }
        ],
        preview: {
            type: 'slideshow',
            slides: [
                {
                    url: './images/kaist_1.png',
                    caption: '그림1: 비전 기반 불량 검출 및 유형별 대응 정보 제공 구조'
                },
                {
                    url: './images/kaist_2.png',
                    caption: '그림2: 비전 기반 불량 검출 모델의 유형별 성능 평가 결과'
                },
                {
                    url: './images/kaist_3.png',
                    caption: '그림3: 시계열 기반 이상 예측 및 LLM 연계 대응 가이드 생성 구조'
                },
                {
                    url: './images/kaist_4.png',
                    caption: '그림4: 시계열 기반 설비 이상 예측 모델의 성능 평가 결과'
                },
                {
                    url: './images/kaist_5.png',
                    caption: '그림5: 설비 이상 원인 분석 및 대응 조치를 제공하는 제조 특화 LLM 챗봇 구조'
                }
            ]
        },
        externalUrl: 'https://www.kaist.ac.kr/',
        results: {
            title: '품질 설비 이상 통합 대응 제조 AI',
            year3Goal: '품질 이상 검출과 설비 이상 사전 대응 및 작업자의 의사결정 지원 체계 구축',
            kpis: [
                { label: '비전 기반 불량 검출 평균 Accuracy', value: '98', unit: '%', target: '95', achievement: 103.2, status: 'achieved' },
                { label: '시계열 기반 설비 이상 예측 평균 F1-Score', value: '85', unit: '%', target: '85', achievement: 100.0, status: 'achieved' },
                { label: '제조 특화 LLM 응답 정확도', value: '100', unit: '%', target: '95', achievement: 105.3, status: 'achieved' }
            ],
            deliverables: ['비전 기반 불량 역추적 모델', '시계열 기반 불량 예측 모델', '제조 특화 LLM 챗봇'],
            screenshot: null
        }
    },
    {
        id: 'nextstudio',
        type: 'AI',
        category: '참여',
        ca: 'CA3',
        isRealData: true,
        name: '넥스트스튜디오',
        role: '제조 데이터 ESG 대응 AI 모델 개발',
        roleEn: 'Manufacturing ESG Regulatory Compliance AI Development',
        desc: '경남 주요 제조 수출품을 위한 글로벌 ESG 규제 기반 질의응답 AI',
        icon: 'fas fa-leaf',
        color: 'purple',
        status: 'normal',
        stage: 4,
        details: '넥스트스튜디오는 제조기업이 주요 수출국의 ESG 규제와 공급망 준수 요구사항을 빠르게 찾고 이해할 수 있도록 온프레미스 환경에서 운영 가능한 웹 기반 제조 ESG 규제 대응 AI를 개발합니다. 사용자의 질문과 관련된 공식 규제문서를 검색해 문서명과 근거 페이지를 함께 제시하며, 국가별 규제 대응 검토를 지원합니다. 도메인 특화 학습과 RAG 구조를 적용하고 RAGAS 지표로 응답 성능을 평가합니다.',
        sections: [
            {
                label: '3차년도 목표',
                type: 'list',
                title: '글로벌 제조 공급망의 ESG 준수 요구사항을 분석하고 규제 대응 프로세스를 정립하여, 온프레미스 환경에서 운영 가능한 웹 기반 제조 ESG 규제 대응용 sLM Agent를 개발·연동하고 성능평가를 완료합니다.'
            },
            {
                label: '대표 산출물',
                type: 'list',
                items: [
                    '글로벌 제조 공급망 ESG 준수 요구사항 분석서',
                    '제조 ESG 규제 대응용 sLM Agent 1종',
                    '성능평가 결과보고서 1건'
                ]
            },
            {
                label: '기술 키워드',
                type: 'tags',
                items: ['ESG 규제 대응', 'sLM Agent', '온프레미스', '도메인 특화 학습', 'RAGAS']
            },
            {
                label: '성과 지표',
                type: 'kpi-static',
                items: [
                    { label: 'Faithfulness (근거 충실도)', value: '0.934', unit: '점', color: '#2563EB', target: '0.738 이상' },
                    { label: 'Answer Relevancy (질문 적합도)', value: '0.751', unit: '점', color: '#059669', target: '0.720 이상' },
                    { label: 'Context Precision (검색 유용성)', value: '0.838', unit: '점', color: '#7C3AED', target: '0.765 이상' }
                ]
            }
        ],
        preview: {
            type: 'slideshow',
            slides: [
                {
                    url: './images/nextstud_1.png',
                    caption: '<strong>01. 공식 문서 근거 기반 ESG 질의응답</strong><br><span class="text-slate-500">설명: 사용자의 질문과 답변, 관련 공식 문서, 근거 페이지를 한 화면에서 확인하도록 구성한 대표 질의응답 화면입니다.</span><br><span class="text-slate-600 font-medium">캡션: 캐나다 온실가스 보고 고시를 기반으로 보고연도별 제출기한을 요약하고, 공식 문서명과 근거 페이지를 함께 제시하는 제조 ESG 규제 질의응답 화면</span>'
                },
                {
                    url: './images/nextstud_2.png',
                    caption: '<strong>02. 10개 관할권 공식 문서 자동 수집</strong><br><span class="text-slate-500">설명: 자동수집 작업자 상태, 검토 기반 업데이트 흐름, 공식 출처별 신규·무변경·검토 대기 현황을 한 화면에서 보여줍니다.</span><br><span class="text-slate-600 font-medium">캡션: 10개 관할권의 공식 출처를 주기적으로 확인해 신규 문서와 변경 후보를 발견하고, 검토 대기열에 안전하게 등록하는 자동 업데이트 화면</span>'
                },
                {
                    url: './images/nextstud_3.png',
                    caption: '<strong>03. 스마트 문서 버전관리</strong><br><span class="text-slate-500">설명: 수집된 후보 문서의 관계, 국가·관할권, 공식 출처, AI 검토 요약과 권고안을 확인하고 기존 문서 연결, 신규 문서 승인·거부를 결정하는 관리자 검토 화면입니다.</span><br><span class="text-slate-600 font-medium">캡션: 신규·변경 후보 문서의 메타데이터와 AI 검토 결과를 확인하고, 관리자 승인 후 최신 판본을 검색에 반영하는 문서 검토·승인 화면</span>'
                },
                {
                    url: './images/nextstud_4.png',
                    caption: '<strong>04. 옴부즈만 공개 질의와 관리자 사용량 집계</strong><br><span class="text-slate-500">설명: 왼쪽에는 별도 인증 없는 옴부즈만 바로 입장 영역, 오른쪽에는 질문·세션·사용자·피드백·옴부즈만 질문의 일별 사용량을 배치한 화면입니다.</span><br><span class="text-slate-600 font-medium">캡션: 별도 인증 없는 옴부즈만 질의 진입과 옴부즈만 채널 사용량을 관리자 화면에서 분리해 확인하는 운영 화면</span>'
                },
                {
                    url: './images/nextstud_5.png',
                    caption: '<strong>05. ESG AI 통합 운영 구조</strong><br><span class="text-slate-500">설명: 공식 출처 확인부터 변경 탐지, 판본 판정, 승인, 현행 지식베이스 반영, RAG 근거 검색과 출처 포함 답변까지의 흐름입니다.</span><br><span class="text-slate-600 font-medium">캡션: 공식 규제문서의 수집·판정·승인과 현행 지식베이스 갱신, 일반 사용자·옴부즈만 질의, 근거 기반 답변 및 관리자 운영지표의 연결 구조</span>'
                }
            ]
        },
        externalUrl: 'https://nextstud.io/',
        results: {
            title: '제조 데이터 ESG 대응 AI 모델 개발',
            year3Goal: '글로벌 제조 공급망의 ESG 준수 요구사항을 분석하고 규제 대응 프로세스를 정립하여, 온프레미스 환경에서 운영 가능한 웹 기반 제조 ESG 규제 대응용 sLM Agent를 개발·연동하고 성능평가를 완료합니다.',
            kpis: [
                { label: 'Faithfulness (근거 충실도)', value: '0.934', unit: '점', target: '0.738', achievement: 126.6, status: 'achieved' },
                { label: 'Answer Relevancy (질문 적합도)', value: '0.751', unit: '점', target: '0.720', achievement: 104.3, status: 'achieved' },
                { label: 'Context Precision (검색 유용성)', value: '0.838', unit: '점', target: '0.765', achievement: 109.5, status: 'achieved' }
            ],
            deliverables: [
                '글로벌 제조 공급망 ESG 준수 요구사항 분석서',
                '제조 ESG 규제 대응용 sLM Agent 1종',
                '성능평가 결과보고서 1건'
            ],
            screenshot: './images/nextstud_1.png'
        }
    },

    // ── INFRA 도메인 ─────────────────────────────────────────
    {
        id: 'megazone',
        type: 'INFRA',
        category: '참여',
        ca: 'CA2',
        isRealData: true,
        name: '메가존클라우드',
        role: '인프라스트럭처',
        roleEn: 'Infrastructure',
        desc: '초거대제조 AI 연구를 위한 EBC 구축 및 구글-EBC 하이브리드환경 구축',
        icon: 'fas fa-cloud',
        color: 'gray',
        status: 'normal',
        stage: 3,
        details: [
            '초거대제조 AI 연구를 위한 AI 데이터센터 구축 (경남대에 시설공사 및 장비도입)하고 클라우드 환경과 EBC(온프렘)의 하이브리드 환경을 통합된 관점에서 관리할 수 있는 MLOps(AIOps) 플랫폼을 구축합니다.',
            'AI Asset 기술 활용으로는 데이터의 검색 재활용성을 용이하게 하는 데이터카탈로그를 제공합니다.'
        ],
        sections: [
            {
                label: '3차년도 목표',
                type: 'list',
                title: '추가 GPU 2식을 도입하여 GPU 클러스터를 완성하고 방화벽을 도입하여 보안을 강화합니다. 아울러 GCP 기반으로 개발된 AIOps와 Datahub를 EBC에 적용하는 개발을 완료합니다.'
            },
            {
                label: '대표 산출물',
                type: 'list',
                items: [
                    'EBC 서버실 (GPU 3식, 스토리지, 네트워크 스위치, 방화벽)',
                    'EBC 준비실 모니터링 장비',
                    '클라우드 환경 (gnaix 구글 메일 계정 40개 이상)',
                    'MLOps/AIOps (Aiops.gnaix 사용자 및 관리자 프로그램)',
                    'AI Asset (Datahub.gnaix 사용자 프로그램 및 샘플 데이터)'
                ]
            },
            {
                label: '기술 키워드',
                type: 'tags',
                items: ['데이터센터', 'GPU 장비', 'AIOps', '데이터카탈로그']
            },
            {
                label: '성과 지표',
                type: 'kpi-static',
                items: [
                    { label: 'GPU 장비도입', value: '1', unit: '식', color: '#2563EB', target: '3' },
                    { label: '보안장비도입', value: '0', unit: '식', color: '#059669', target: '2' },
                    { label: 'AIOps 온프렘 확대적용', value: '1', unit: '식', color: '#7C3AED', target: '2' },
                    { label: 'Datahub 온프렘 확대적용', value: '1', unit: '식', color: '#f59e0b', target: '2' }
                ]
            }
        ],
        preview: {
            type: 'slideshow',
            slides: [
                {
                    url: './images/mzc_1.png',
                    caption: '일반사용자 EBC 인스턴스 생성 후 쥬피터노트북 환경'
                },
                {
                    url: './images/mzc_2.png',
                    caption: '관리자 모니터링 화면'
                },
                {
                    url: './images/mzc_3.png',
                    caption: 'AI Asset-데이터 카탈로그 화면'
                }
            ]
        },
        externalUrl: 'https://www.megazone.com/',
        results: {
            title: 'EBC 및 구글-EBC 하이브리드 MLOps/Datahub 구축',
            year3Goal: '추가 GPU 2식을 도입하여 GPU 클러스터를 완성하고 방화벽을 도입하여 보안을 강화합니다. 아울러 GCP 기반으로 개발된 AIOps와 Datahub를 EBC에 적용하는 개발을 완료합니다.',
            kpis: [
                { label: 'GPU 장비도입', value: '1', unit: '식', target: '3', achievement: 33.3, status: 'in-progress' },
                { label: '보안장비도입', value: '0', unit: '식', target: '2', achievement: 0.0, status: 'in-progress' },
                { label: 'AIOps 온프렘 확대적용', value: '1', unit: '식', target: '2', achievement: 50.0, status: 'in-progress' },
                { label: 'Datahub 온프렘 확대적용', value: '1', unit: '식', target: '2', achievement: 50.0, status: 'in-progress' }
            ],
            deliverables: [
                'EBC 서버실 (GPU 3식, 스토리지, 네트워크 스위치, 방화벽)',
                'EBC 준비실 모니터링 장비',
                '클라우드 환경 (gnaix 구글 메일 계정 40개 이상)',
                'MLOps/AIOps (Aiops.gnaix 사용자 및 관리자 프로그램)',
                'AI Asset (Datahub.gnaix 사용자 프로그램 및 샘플 데이터)'
            ],
            screenshot: './images/mzc_2.png'
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
        sections: [
            {
                label: '주요 역할',
                type: 'list',
                title: 'WiFi 7 인프라 구축 및 5G 특화망 NMS 통합 관리 완성',
                items: ['WiFi 7 AP 설치 완료', '5G 특화망 인프라', 'NMS 통합 관리 시스템']
            },
            {
                label: 'Tech Stack',
                type: 'tags',
                items: ['5G', 'WiFi 7', 'Network Slicing', 'NMS']
            },
            {
                label: '성과 지표',
                type: 'kpi-static',
                items: [
                    { label: '네트워크 지연시간', value: '1.5', unit: 'ms', color: '#2563EB' },
                    { label: '커버리지 달성률',  value: '98',  unit: '%',  color: '#059669' }
                ]
            }
        ],
        preview: { type: 'placeholder' },
        externalUrl: 'http://www.limecsi.com/',
        results: {
            title: 'WiFi 7 + 5G 특화망 NMS 통합',
            year3Goal: 'WiFi 7 인프라 구축 및 5G 특화망 NMS 통합 관리 완성',
            kpis: [
                { label: '네트워크 지연시간', value: '1.5', unit: 'ms', target: '3',  achievement: 150.0, status: 'achieved' },
                { label: '커버리지 달성률',  value: '98',  unit: '%',  target: '95', achievement: 103.2, status: 'achieved' }
            ],
            deliverables: ['WiFi 7 AP 설치 완료', '5G 특화망 인프라', 'NMS 통합 관리 시스템'],
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
        sections: [
            {
                label: '주요 역할',
                type: 'list',
                title: '3차년도 사업 목표 달성, EBC 운영, 기업 확산, 인력양성',
                items: ['사업 관리 보고서', 'EBC 운영 보고서', '인력양성 교육과정', '기업 확산 실적 보고서']
            },
            {
                label: 'Tech Stack',
                type: 'tags',
                items: ['프로젝트 관리', 'PMBOK', '성과 관리', 'EVM']
            },
            {
                label: '성과 지표',
                type: 'kpi-static',
                items: [
                    { label: '사업 진행률',  value: '85',  unit: '%',  color: '#2563EB' },
                    { label: '교육 수료생',  value: '120', unit: '명', color: '#059669' },
                    { label: '확산 기업 수', value: '5',   unit: '기업', color: '#7C3AED' }
                ]
            }
        ],
        preview: { type: 'placeholder' },
        externalUrl: 'https://www.gntp.or.kr/',
        results: {
            title: '사업 관리 및 인력양성/확산',
            year3Goal: '3차년도 사업 목표 달성, EBC 운영, 기업 확산, 인력양성',
            kpis: [
                { label: '사업 진행률',  value: '85',  unit: '%',    target: '100', achievement: 85.0, status: 'in-progress' },
                { label: '교육 수료생',  value: '120', unit: '명',   target: '150', achievement: 80.0, status: 'in-progress' },
                { label: '확산 기업 수', value: '5',   unit: '기업', target: '8',   achievement: 62.5, status: 'in-progress' }
            ],
            deliverables: ['사업 관리 보고서', 'EBC 운영 보고서', '인력양성 교육과정', '기업 확산 실적 보고서'],
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
        sections: [
            {
                label: '주요 역할',
                type: 'list',
                title: 'AI 모델/데이터 품질 검증 완료 및 시험인증 AI 서비스 구축',
                items: ['품질 검증 보고서', '시험인증 AI 서비스', '신뢰성 평가 리포트']
            },
            {
                label: 'Tech Stack',
                type: 'tags',
                items: ['시스템 엔지니어링', '품질 보증', 'Testing', '시험인증']
            },
            {
                label: '성과 지표',
                type: 'kpi-static',
                items: [
                    { label: '검증 완료',        value: 'Pass', unit: '',  color: '#059669' },
                    { label: '시험인증 AI 정확도', value: '91',   unit: '%', color: '#2563EB' }
                ]
            }
        ],
        preview: { type: 'placeholder' },
        externalUrl: 'https://www.ktl.re.kr/',
        results: {
            title: '시험인증 AI 서비스 및 품질 검증',
            year3Goal: 'AI 모델/데이터 품질 검증 완료 및 시험인증 AI 서비스 구축',
            kpis: [
                { label: '검증 완료',        value: 'Pass', unit: '', target: 'Pass', achievement: 100.0, status: 'achieved' },
                { label: '시험인증 AI 정확도', value: '91',   unit: '%', target: '88',   achievement: 103.4, status: 'achieved' }
            ],
            deliverables: ['품질 검증 보고서', '시험인증 AI 서비스', '신뢰성 평가 리포트'],
            screenshot: null
        }
    },

    // ── SERVICE 도메인 ───────────────────────────────────────
    {
        id: 'sortech',
        type: 'SERVICE',
        category: '참여',
        ca: 'CA3',
        isRealData: true,
        name: '소르테크',
        role: '품질 관리(Quality Control, QC)',
        roleEn: 'Quality Control (QC)',
        desc: '엔진 조립 공정 품질 검사 자동화 서비스',
        icon: 'fas fa-camera-retro',
        color: 'rose',
        status: 'normal',
        stage: 5,
        details: [
            '엔진 조립 공정 품질 검사 자동화 서비스 제공.',
            '품질검사시스템(QC다이나모) 현장 적용 및 실증.',
            '비전검사시스템 현장 적용, 공정반영 결과 분석 및 실증 (① Finger Follower, ② 엔진블록정보 매핑, ③ Sealant 도포).',
            'AI 기반 통합관리 대시보드 실증.'
        ],
        sections: [
            {
                label: '3차년도 목표',
                type: 'list',
                title: '품질검사시스템, 비전검사시스템, 광학문자인식 / 사무자동화, 전자문서 플랫폼, AI기반 통합관리 대시보드 실증'
            },
            {
                label: '대표 산출물',
                type: 'list',
                items: [
                    '품질관리시스템 실증 결과 보고서',
                    '비전검사시스템(Finger Follower, 블록매핑, 실런트) 실증 보고서',
                    '광학문자인식/사무자동화 실증 보고서',
                    'AI 기반 통합관리 대시보드 실증 보고서'
                ]
            },
            {
                label: '기술 키워드',
                type: 'tags',
                items: ['품질관리', '비전검사', '광학문자인식', '사무자동화', 'AI 대시보드']
            },
            {
                label: '성과 지표',
                type: 'kpi-static',
                items: [
                    { label: '생산성(P) 향상', value: '5', unit: '%', color: '#2563EB' },
                    { label: '불량률(Q) 감소', value: '5', unit: '%', color: '#059669' },
                    { label: '비용(C) 절감', value: '5', unit: '%', color: '#7C3AED' },
                    { label: '리드타임(D) 감소', value: '20', unit: '%', color: '#f59e0b' }
                ]
            }
        ],
        preview: {
            type: 'image',
            url: './images/sortech_v.mp4'
        },
        externalUrl: 'http://www.sortech.co.kr/',
        results: {
            title: '엔진 조립 공정 품질 검사 자동화 서비스',
            year3Goal: '품질검사시스템, 비전검사시스템, 광학문자인식 / 사무자동화, 전자문서 플랫폼, AI기반 통합관리 대시보드 실증',
            kpis: [
                { label: '생산성(P) 향상', value: '5', unit: '%', target: '5', achievement: 100.0, status: 'achieved' },
                { label: '불량률(Q) 감소', value: '5', unit: '%', target: '5', achievement: 100.0, status: 'achieved' },
                { label: '비용(C) 절감', value: '5', unit: '%', target: '5', achievement: 100.0, status: 'achieved' },
                { label: '리드타임(D) 감소', value: '20', unit: '%', target: '20', achievement: 100.0, status: 'achieved' }
            ],
            deliverables: [
                '품질관리시스템 실증 결과 보고서',
                '비전검사시스템(Finger Follower, 블록매핑, 실런트) 실증 보고서',
                '광학문자인식/사무자동화 실증 보고서',
                'AI 기반 통합관리 대시보드 실증 보고서'
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
        sections: [
            {
                label: '주요 역할',
                type: 'list',
                title: '불량 역추적 시스템 고도화 및 MES 연동 완성',
                items: ['불량 역추적 시스템 v3.0', 'MES 연동 모듈', '원인 분석 대시보드']
            },
            {
                label: 'Tech Stack',
                type: 'tags',
                items: ['Data Tracking', 'AI Analytics', 'Root Cause Analysis', 'MES']
            },
            {
                label: '성과 지표',
                type: 'kpi-static',
                items: [
                    { label: '역추적 소요시간', value: '3.2', unit: 'min/case', color: '#2563EB' },
                    { label: '역추적 정확도',   value: '94',  unit: '%',       color: '#059669' }
                ]
            }
        ],
        preview: { type: 'placeholder' },
        externalUrl: 'http://www.dxsolutions.co.kr/',
        results: {
            title: 'AI 기반 불량 역추적 시스템 + MES 연동',
            year3Goal: '불량 역추적 시스템 고도화 및 MES 연동 완성',
            kpis: [
                { label: '역추적 소요시간', value: '3.2', unit: 'min/case', target: '5',  achievement: 136.0, status: 'achieved' },
                { label: '역추적 정확도',   value: '94',  unit: '%',       target: '90', achievement: 104.4, status: 'achieved' }
            ],
            deliverables: ['불량 역추적 시스템 v3.0', 'MES 연동 모듈', '원인 분석 대시보드'],
            screenshot: null
        }
    },
    {
        id: 'sdtech',
        type: 'SERVICE',
        category: '참여',
        ca: 'CA3',
        isRealData: true,
        name: '에스디테크',
        role: '공정품질 데이터 수집·정합성 확보',
        roleEn: 'Process-Quality Data Collection & Consistency',
        desc: 'IIoT 기반 데이터 수집 실증',
        icon: 'fas fa-wave-square',
        color: 'rose',
        status: 'normal',
        stage: 1,
        details: '엔진 조립 가공공정에 IIoT 센서를 구축해 설비의 물리 데이터를 실시간으로 수집하고, IT/OT 이기종 데이터의 정합성을 확보해 참여기관 간 공유 가능한 체계로 실증',
        sections: [
            {
                label: '3차년도 목표',
                type: 'list',
                title: 'IIoT 기반 공정품질 데이터 정합성 확보 및 공유 체계 실증'
            },
            {
                label: '대표 산출물',
                type: 'list',
                items: [
                    '공정품질 데이터 정합성 확보 및 공유 체계 실증(기술문서 2건)'
                ]
            },
            {
                label: '기술 키워드',
                type: 'tags',
                items: ['IIoT', '공정데이터 정합성', '엣지컴퓨팅', '데이터 표준화']
            },
            {
                label: '성과 지표',
                type: 'kpi-static',
                items: [
                    { label: 'IIoT기반 공정품질 데이터 수집 시스템 구축', value: '1', unit: '건', color: '#2563EB', target: '1 (2025년 구축 완료)' },
                    { label: '공구불량 감소율', value: '-', unit: '%', color: '#059669', target: '10' }
                ]
            }
        ],
        preview: { type: 'placeholder' },
        externalUrl: 'http://www.sd-tech.kr/',
        results: {
            title: '공정품질 데이터 수집·정합성 확보',
            year3Goal: 'IIoT 기반 공정품질 데이터 정합성 확보 및 공유 체계 실증',
            kpis: [
                { label: 'IIoT기반 공정품질 데이터 수집 시스템 구축', value: '1', unit: '건', target: '1', achievement: 100.0, status: 'achieved' },
                { label: '공구불량 감소율', value: '-', unit: '%', target: '10', achievement: 0.0, status: 'in-progress' }
            ],
            deliverables: [
                '공정품질 데이터 정합성 확보 및 공유 체계 실증(기술문서 2건)'
            ],
            screenshot: null
        }
    },
    {
        id: 'metaisquare',
        type: 'SERVICE',
        category: '참여',
        ca: 'CA3',
        isRealData: true,
        name: '메타아이스퀘어',
        role: '한국어 음성인식',
        roleEn: 'Korean Speech Recognition (STT)',
        desc: '공장 소음 속에서도 정확한 한국어 음성인식·불량 조치 음성 안내',
        icon: 'fas fa-microphone-alt',
        color: 'rose',
        status: 'normal',
        stage: 5,
        details: '공장 소음, 마스크 착용, 현장 발화 습관 등 악조건에서도 높은 인식률을 갖는 한국어 STT 모델을 고도화합니다. SLM으로 발음 모호성을 교정하고, TTS로 불량 원인과 조치방법을 오퍼레이터에게 음성으로 안내하는 AI 기반 불량 역추적 서비스를 실증합니다.',
        sections: [
            {
                label: '3차년도 목표',
                type: 'list',
                title: '잡음 환경에서도 CER을 최소화한 한국어 음성인식(STT) 모델을 고도화하고, SLM·TTS 기반 불량 역추적 음성 안내 서비스를 실증한다.'
            },
            {
                label: '대표 산출물',
                type: 'list',
                items: [
                    'STT 개발 보고서',
                    '공인시험 성적서',
                    'STT 기술이 포함된 AI 기반 불량 역추적 서비스'
                ]
            },
            {
                label: '기술 키워드',
                type: 'tags',
                items: ['STT', 'CER 최소화', 'SLM', 'TTS', '노이즈 캔슬링']
            },
            {
                label: '성과 지표',
                type: 'kpi-static',
                items: [
                    { label: '한국어 STT 인식 오차율 (CER)', value: '14.43', unit: '%', color: '#2563EB', target: '25' }
                ]
            }
        ],
        preview: {
            type: 'image',
            url: './images/metaisquare_1.png',
            caption: 'Whisper 기반 STT 파인튜닝 및 Supertone 3 TTS 파이프라인 구조'
        },
        externalUrl: 'https://metaisquare.com/',
        results: {
            title: 'AI 기반 불량 역추적 음성 안내 서비스 실증',
            year3Goal: '잡음 환경에서도 CER을 최소화한 한국어 음성인식(STT) 모델을 고도화하고, SLM·TTS 기반 불량 역추적 음성 안내 서비스를 실증한다.',
            kpis: [
                { label: '한국어 STT 인식 오차율(CER)', value: '14.43', unit: '%', target: '25', achievement: 142.28, status: 'achieved' }
            ],
            deliverables: ['STT 개발 보고서', '공인시험 성적서', 'AI 기반 불량 역추적 서비스'],
            screenshot: './images/metaisquare_1.png'
        }
    },
    {
        id: 'sysnova',
        type: 'SERVICE',
        category: '참여',
        ca: 'CA3',
        isRealData: true,
        name: '시스노바',
        role: 'AI 도입지원 큐레이터 서비스 개발',
        roleEn: 'AI Adoption Support Curator Service Development',
        desc: 'RAG 기반 맞춤형 큐레이션으로 제조기업의 효율적인 AI 도입을 지원',
        icon: 'fas fa-robot',
        color: 'rose',
        status: 'normal',
        stage: 5,
        details: 'AI 도입에 어려움을 겪는 제조기업을 위해 기업의 규모와 상황에 맞는 맞춤형 AI 솔루션을 추천하고 진단해 주는 서비스입니다. 복잡한 전문 지식이 없어도 쉬운 웹 화면과 AI 상담을 통해 현장에 필요한 AI 도입 방향부터 구체적인 가이드까지 한눈에 안내받을 수 있습니다. 진단 결과를 바탕으로 컨설팅과 실증 사업 등 실제 AI 구축까지 연계해 기업의 성공적인 디지털 전환을 돕습니다.',
        sections: [
            {
                label: '3차년도 목표',
                type: 'list',
                title: '제조기업 AI 도입 지원 큐레이터 서비스 개발'
            },
            {
                label: '대표 산출물',
                type: 'list',
                items: [
                    '정책 정의서',
                    '화면 설계서',
                    'RAG 연계 아키텍처 설계서',
                    '큐레이터 Web Agent',
                    '기업별 AI 도입 진단·추천 리포트'
                ]
            },
            {
                label: '기술 키워드',
                type: 'tags',
                items: ['LLM', 'RAG', 'AI 에이전트', '지식베이스 & 메타데이터', '세그먼트 룰 엔진']
            },
            {
                label: '성과 지표',
                type: 'kpi-static',
                items: [
                    { label: '큐레이터 서비스 기능 구축률', value: '75', unit: '%', color: '#2563EB', target: '100' },
                    { label: '큐레이터 기반 AI 도입 진단·추천 리포트 발행 건수', value: '0', unit: '건', color: '#059669', target: '30' },
                    { label: '큐레이터 서비스 만족도', value: '0', unit: '%', color: '#7C3AED', target: '85' }
                ]
            }
        ],
        preview: {
            type: 'slideshow',
            slides: [
                {
                    url: './images/sysnova_1.png',
                    caption: '① AI 상담 화면 — 업종·현장 고민을 입력하면 맞춤형 AI 도입 방향을 안내'
                },
                {
                    url: './images/sysnova_2.png',
                    caption: '② 제조 AI 우수사례 — 공식 출처 기반 사례를 업종·AI유형별로 큐레이션'
                },
                {
                    url: './images/sysnova_3.png',
                    caption: '③ AI 도입 로드맵 — 단계별 활동·체크리스트로 실행 경로 제시'
                },
                {
                    url: './images/sysnova_4.png',
                    caption: '④ 도입 계획서 — 상담 결과 기반 내부 보고용 도입 계획서 자동 생성'
                },
                {
                    url: './images/sysnova_5.png',
                    caption: '⑤ 관리자 콘솔 대시보드 — 상담·회원·산출물 현황을 한눈에 모니터링'
                },
                {
                    url: './images/sysnova_6.png',
                    caption: '⑥ 로그인 / 회원가입 — 제조기업 담당자 계정 기반 서비스 접속'
                }
            ]
        },
        externalUrl: 'http://www.sysnova.com/',
        results: {
            title: 'AI 도입지원 큐레이터 서비스 개발',
            year3Goal: '제조기업 AI 도입 지원 큐레이터 서비스 개발',
            kpis: [
                { label: '큐레이터 서비스 기능 구축률', value: '75', unit: '%', target: '100', achievement: 75.0, status: 'in-progress' },
                { label: '큐레이터 기반 AI 도입 진단·추천 리포트 발행 건수', value: '0', unit: '건', target: '30', achievement: 0.0, status: 'in-progress' },
                { label: '큐레이터 서비스 만족도', value: '0', unit: '%', target: '85', achievement: 0.0, status: 'in-progress' }
            ],
            deliverables: [
                '정책 정의서',
                '화면 설계서',
                'RAG 연계 아키텍처 설계서',
                '큐레이터 Web Agent',
                '기업별 AI 도입 진단·추천 리포트'
            ],
            screenshot: './images/sysnova_1.png'
        }
    }
];

// ═══════════════════════════════════════════════════════════════
// 🔧 유틸리티 함수
// ═══════════════════════════════════════════════════════════════

const domainColors = {
    DATA:    { bg: 'bg-blue-50',    text: 'text-blue-600',    border: 'border-blue-200',    badge: 'bg-blue-100' },
    AI:      { bg: 'bg-purple-50',  text: 'text-purple-600',  border: 'border-purple-200',  badge: 'bg-purple-100' },
    INFRA:   { bg: 'bg-gray-50',    text: 'text-gray-600',    border: 'border-gray-200',    badge: 'bg-gray-100' },
    NETWORK: { bg: 'bg-emerald-50', text: 'text-emerald-600', border: 'border-emerald-200', badge: 'bg-emerald-100' },
    ORG:     { bg: 'bg-orange-50',  text: 'text-orange-600',  border: 'border-orange-200',  badge: 'bg-orange-100' },
    SERVICE: { bg: 'bg-rose-50',    text: 'text-rose-600',    border: 'border-rose-200',    badge: 'bg-rose-100' }
};

const kpiStatusColors = {
    'achieved':    { bg: 'bg-green-100', text: 'text-green-700', label: '달성' },
    'in-progress': { bg: 'bg-amber-100', text: 'text-amber-700', label: '진행중' },
    'not-started': { bg: 'bg-gray-100',  text: 'text-gray-500',  label: '미착수' }
};

const statusColors = {
    'normal':  { bg: 'bg-green-400', label: '정상' },
    'warning': { bg: 'bg-amber-400', label: '점검' },
    'danger':  { bg: 'bg-red-400',   label: '장애' }
};

function getCompaniesByDomain(domain) {
    if (!domain || domain === 'ALL') return companies;
    if (domain === 'REAL') return companies.filter(c => c.isRealData);
    return companies.filter(c => c.type === domain);
}

function getRealDataCompanies() {
    return companies.filter(c => c.isRealData);
}

function getCompaniesByStage(stageId) {
    return companies.filter(c => c.stage === stageId);
}

function getCompanyById(id) {
    return companies.find(c => c.id === id);
}

function getOverallAchievement() {
    const allKpis = companies.flatMap(c => c.results.kpis.filter(k => typeof k.achievement === 'number'));
    if (allKpis.length === 0) return 0;
    return Math.round(allKpis.reduce((sum, k) => sum + k.achievement, 0) / allKpis.length * 10) / 10;
}

function getDomainAchievement(domain) {
    const domainCompanies = getCompaniesByDomain(domain);
    const allKpis = domainCompanies.flatMap(c => c.results.kpis.filter(k => typeof k.achievement === 'number'));
    if (allKpis.length === 0) return 0;
    return Math.round(allKpis.reduce((sum, k) => sum + k.achievement, 0) / allKpis.length * 10) / 10;
}
