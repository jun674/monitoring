const companies = [
    { 
        id: 'kyungnam', type: 'DATA', name: '경남대학교', role: 'Standardization', 
        desc: 'AAS 기반 이기종 설비 데이터 표준 모델링', 
        icon: 'fas fa-project-diagram', color: 'blue', 
        details: '제조 현장에서 수집되는 다양한 형태의 데이터를 자산관리쉘(AAS) 기반의 표준 모델로 변환하여 데이터의 일관성과 활용성을 높입니다.', 
        techStack: ['AAS', '데이터 모델링', 'Knowledge Graph'], 
        iframeSrc: 'https://aas-system.netlify.app',
        stage: 3, kpi: "1,204 Models", status: "normal" 
    },
    { 
        id: 'markbase', type: 'DATA', name: '마크베이스', role: 'High-Speed DB', 
        desc: '초당 100만 건 데이터 처리 성능 확보', 
        icon: 'fas fa-tachometer-alt', color: 'blue', 
        details: '설비의 PLC, 센서 등 OT(운영 기술) 환경에서 발생하는 대용량 시계열 데이터를 초당 100만 건 이상 처리할 수 있는 고성능 데이터베이스를 제공합니다.', 
        techStack: ['시계열 DB', 'Real-time Processing', 'Big Data'], 
        iframeSrc: "https://www.machbase.com/",
        stage: 1, kpi: "1.21M rec/s", status: "normal"
    },
    { 
        id: 'amiqu', type: 'DATA', name: '아미크', role: 'Legacy Connect', 
        desc: '기존 ERP 데이터 연동 파이프라인 구축', 
        icon: 'fas fa-link', color: 'blue', 
        details: '기업의 기존 ERP, MES 등 IT(정보기술) 시스템과 초거대 AI 플랫폼을 안정적으로 연동하기 위한 데이터 파이프라인을 구축합니다.', 
        techStack: ['ETL', 'Data Pipeline', 'API Integration'], 
        iframeSrc: "http://www.amiqu.com/",
        stage: 1, kpi: "99.8% Success", status: "normal"
    },
    { 
        id: 'nestfield', type: 'DATA', name: '네스트필드', role: 'Interoperability', 
        desc: '이종 시스템 간 데이터 상호운용성 확보', 
        icon: 'fas fa-exchange-alt', color: 'blue', 
        details: '다양한 제조 장비와 시스템 간의 데이터 교환을 위한 표준 인터페이스를 제공하여 상호운용성을 보장합니다.', 
        techStack: ['Middleware', 'Protocol Conversion', 'API Gateway'], 
        iframeSrc: "http://www.nestfield.co.kr/",
        stage: 3, kpi: "85% API rate", status: "warning"
    },
    { 
        id: 'keti', type: 'DATA', name: 'KETI', role: 'AIoT Edge', 
        desc: '현장 설비 부착형 지능형 엣지 개발', 
        icon: 'fas fa-microchip', color: 'blue', 
        details: '데이터가 발생하는 현장에 AIoT 엣지 디바이스를 설치하여 비전, 음향 등 비정형 데이터를 1차적으로 처리하고 분석합니다.', 
        techStack: ['Edge Computing', 'AIoT', 'Embedded AI'], 
        iframeSrc: "https://www.keti.re.kr/",
        stage: 1, kpi: "24 Devices", status: "normal"
    },
    { 
        id: 'kaist', type: 'AI', name: 'KAIST', role: 'Hyperscale AI', 
        desc: '제조 특화 LLM 모델 개발 및 질의응답', 
        icon: 'fas fa-brain', color: 'purple', 
        details: '플랫폼의 핵심 두뇌 역할을 하는 제조 특화 초거대 언어모델(LLM)을 개발합니다. 이 모델은 공정 이상 원인 분석, 해결책 제안 등의 기능을 수행합니다.', 
        techStack: ['LLM', '생성형 AI', 'Fine-tuning'], 
        iframeSrc: "https://www.kaist.ac.kr/",
        stage: 4, kpi: "92% Accuracy", status: "normal"
    },
    { 
        id: 'nextstudio', type: 'AI', name: '넥스트스튜디오', role: 'ESG AI', 
        desc: '탄소 배출량 예측 및 저감 관리 모델', 
        icon: 'fas fa-leaf', color: 'purple', 
        details: '제조 공정에서 발생하는 탄소 배출량을 예측하고, 생산 계획에 따른 저감 방안을 시뮬레이션하는 ESG 특화 AI 모델을 개발합니다.', 
        techStack: ['예측 모델링', '시뮬레이션', 'ESG Analytics'], 
        iframeSrc: "http://www.next-studio.co.kr/",
        stage: 4, kpi: "-7.5% CO2", status: "normal"
    },
    { 
        id: 'megazone', type: 'INFRA', name: '메가존클라우드', role: 'Cloud Infra', 
        desc: '하이브리드 AI 클라우드 센터(EBC) 구축', 
        icon: 'fas fa-cloud', color: 'gray', 
        details: 'AI 모델 학습 및 서비스 운영을 위한 하이브리드 클라우드 인프라(EBC)를 구축하고 안정적으로 운영합니다.', 
        techStack: ['Hybrid Cloud', 'Kubernetes', 'MLOps'], 
        iframeSrc: "https://www.megazone.com/",
        stage: 3, kpi: "99.98% Uptime", status: "normal"
    },
    { 
        id: 'limecsi', type: 'NETWORK', name: '라임씨에스아이', role: '5G Network', 
        desc: '공장 내 음영 구역 없는 5G 특화망 구축', 
        icon: 'fas fa-wifi', color: 'emerald', 
        details: '공장 내 데이터 통신 음영 구역을 해소하고, 대용량 데이터를 초저지연으로 전송하기 위한 5G 특화망 인프라를 구축합니다.', 
        techStack: ['5G', 'Network Slicing', 'Edge Network'], 
        iframeSrc: "http://www.limecsi.com/",
        stage: 2, kpi: "1.5ms Latency", status: "normal"
    },
    { 
        id: 'gntp', type: 'ORG', name: '경남TP', role: 'Project Management', 
        desc: '사업 총괄 및 참여 기관 관리', 
        icon: 'fas fa-clipboard', color: 'orange', 
        details: '프로젝트의 전반적인 운영 및 관리를 책임지며, 참여 기관 간의 협력을 조율하고 사업 목표 달성을 위한 전략을 수립합니다.', 
        techStack: ['프로젝트 관리', 'PMBOK', '성과 관리'], 
        iframeSrc: "https://www.gntp.or.kr/",
        stage: 6, kpi: "85% Progress", status: "normal"
    },
    { 
        id: 'ktl', type: 'ORG', name: 'KTL', role: 'Verification', 
        desc: 'AI 모델 및 데이터 품질 신뢰성 검증', 
        icon: 'fas fa-check-double', color: 'orange', 
        details: '개발된 AI 모델과 데이터의 품질, 신뢰성을 검증하는 역할을 수행합니다. 객관적인 평가 지표를 통해 솔루션의 완성도를 높입니다.', 
        techStack: ['시스템 엔지니어링', '품질 보증', 'Testing'], 
        iframeSrc: "https://www.ktl.re.kr/",
        stage: 6, kpi: "Pass", status: "normal"
    },
    { 
        id: 'sortech', type: 'SERVICE', name: '소르테크', role: 'Vision AI', 
        desc: '육안 검사 대비 속도 2배 향상 불량 검출', 
        icon: 'fas fa-camera-retro', color: 'rose', 
        details: 'AI 비전 기술을 활용하여 생산 라인의 제품 불량을 실시간으로 검출합니다. 기존 육안 검사 대비 속도와 정확도를 획기적으로 향상시킵니다.', 
        techStack: ['Computer Vision', 'Deep Learning', 'Object Detection'], 
        iframeSrc: "http://www.sortech.co.kr/",
        stage: 5, kpi: "15 Defects/h", status: "danger"
    },
    { 
        id: 'dxsolutions', type: 'SERVICE', name: 'DX솔루션즈', role: 'Traceability', 
        desc: '불량 발생 원인 자동 역추적 시스템', 
        icon: 'fas fa-search-location', color: 'rose', 
        details: '제품 불량 발생 시, 해당 제품의 생산 이력과 데이터를 역추적하여 어떤 공정에서 어떤 원인으로 문제가 발생했는지 자동으로 분석합니다.', 
        techStack: ['Data Tracking', 'AI Analytics', 'Root Cause Analysis'], 
        iframeSrc: "http://www.dxsolutions.co.kr/",
        stage: 5, kpi: "3.2 min/case", status: "normal"
    },
    { 
        id: 'sdtech', type: 'SERVICE', name: '에스디테크', role: 'Sensing', 
        desc: '설비 진동/온도 실시간 데이터 수집', 
        icon: 'fas fa-wave-square', color: 'rose', 
        details: '설비의 진동, 온도 등 IIoT 센서 데이터를 실시간으로 수집하고 분석하여 공정 품질을 안정적으로 유지하고 관리합니다.', 
        techStack: ['IIoT', 'Sensor Analytics', 'Predictive Maintenance'], 
        iframeSrc: "#",
        stage: 5, kpi: "99.7%", status: "normal"
    },
    { 
        id: 'metaisquare', type: 'SERVICE', name: '메타아이스퀘어', role: 'Monitoring', 
        desc: '제조 공정 이상 징후 실시간 관제', 
        icon: 'fas fa-chart-line', color: 'rose', 
        details: '작업자의 음성 명령을 인식하고, 수집된 데이터를 종합하여 제조 공정의 이상 징후를 실시간으로 관제하는 대시보드를 제공합니다.', 
        techStack: ['음성인식', 'Data Visualization', 'Real-time Monitoring'], 
        iframeContent: '<div class="flex items-center justify-center h-full bg-white text-gray-800"><h1 class="text-3xl font-bold">메타아이스퀘어: 통합 관제 대시보드</h1></div>',
        stage: 5, kpi: "N/A", status: "normal" // stage/kpi/status added as placeholder
    }
];