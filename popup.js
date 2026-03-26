// ═══════════════════════════════════════════════════════════════
// 📋 팝업 모달 컴포넌트 (mockUp4 스타일 재설계)
//   좌측: Description + 파이프라인 위치 + 주요 역할 + Tech Stack + 성과 지표
//   우측: 결과물 미리보기 (스크린샷/URL)
// ═══════════════════════════════════════════════════════════════

const popupStyles = `
<style id="popup-styles">
    #modal-left-panel::-webkit-scrollbar { width: 3px; }
    #modal-left-panel::-webkit-scrollbar-thumb { background: #e5e7eb; border-radius: 2px; }
    #modal-left-panel::-webkit-scrollbar-track { background: transparent; }

    .pipeline-chip {
        font-size: 9px; padding: 3px 8px; border-radius: 12px;
        border: 1px solid; white-space: nowrap; font-weight: 500;
    }
    .pipeline-chip.active {
        background: rgba(37, 99, 235, 0.08); color: #2563EB; border-color: rgba(37, 99, 235, 0.25);
    }
    .pipeline-chip.inactive {
        background: #f9fafb; color: #9ca3af; border-color: #e5e7eb;
    }

    .modal-kpi-card {
        background: #f9fafb; border-radius: 8px; padding: 10px 12px;
        border: 1px solid #e5e7eb;
    }
    .modal-kpi-label { font-size: 9px; color: #9ca3af; margin-bottom: 4px; }
    .modal-kpi-val { font-size: 16px; font-weight: 700; line-height: 1.2; }
    .modal-kpi-unit { font-size: 10px; font-weight: 500; margin-left: 2px; opacity: 0.7; }

    .modal-tech-tag {
        font-size: 10px; padding: 3px 8px; border-radius: 5px;
        background: #f3f4f6; color: #6b7280; border: 1px solid #e5e7eb;
    }

    .preview-url-badge {
        font-size: 10px; color: #2563EB; background: rgba(37, 99, 235, 0.06);
        padding: 4px 10px; border-radius: 4px; border: 1px solid rgba(37, 99, 235, 0.15);
        text-decoration: none; transition: all 0.2s; display: inline-block;
    }
    .preview-url-badge:hover { background: rgba(37, 99, 235, 0.12); }

    .modal-section-label {
        font-size: 10px; font-weight: 600; color: #9ca3af;
        letter-spacing: 0.08em; text-transform: uppercase; margin-bottom: 8px;
    }

    #detail-modal .modal-enter {
        animation: modalIn 0.25s ease-out forwards;
    }
    @keyframes modalIn {
        from { transform: scale(0.96) translateY(10px); opacity: 0; }
        to   { transform: scale(1) translateY(0); opacity: 1; }
    }
</style>`;

const popupHTML = `<div id="detail-modal" class="fixed inset-0 z-50 flex items-center justify-center hidden"
     style="background:rgba(0,0,0,0.4); backdrop-filter:blur(6px); transition: opacity 0.25s;">
    <div class="modal-enter bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-200"
         style="width:920px; max-width:95vw; max-height:88vh;">
        
        <!-- 헤더 -->
        <div class="flex items-center justify-between px-6 shrink-0 border-b border-gray-100" style="padding-top:16px; padding-bottom:14px;">
            <div class="flex items-center gap-3">
                <div id="modal-icon-wrap" class="w-11 h-11 rounded-xl flex items-center justify-center border border-gray-100">
                    <i id="modal-icon" class="fas fa-cube text-lg"></i>
                </div>
                <div>
                    <div class="flex items-center gap-2">
                        <h3 id="modal-title" class="font-bold text-gray-900" style="font-size:17px;">업체명</h3>
                        <span id="modal-type" class="font-bold px-2 py-0.5 rounded-full uppercase" style="font-size:10px; letter-spacing:0.05em;">TYPE</span>
                        <span id="modal-category" class="font-semibold px-2 py-0.5 rounded-full" style="font-size:10px;">분류</span>
                    </div>
                    <p id="modal-role-en" class="text-gray-400 font-medium" style="font-size:11px; margin-top:2px;"></p>
                </div>
            </div>
            <button id="close-modal-btn" class="w-7 h-7 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-400 hover:text-gray-700 flex items-center justify-center transition-all shrink-0" style="font-size:14px;">
                ✕
            </button>
        </div>

        <!-- 본문 -->
        <div class="flex flex-1 overflow-hidden">
            
            <!-- 좌측 패널 -->
            <div class="border-r border-gray-100 overflow-y-auto" id="modal-left-panel" style="width:300px; min-width:300px; padding:20px;">
                
                <!-- Description -->
                <div style="margin-bottom:20px;">
                    <div class="modal-section-label">Description</div>
                    <p id="modal-desc" class="text-gray-500" style="font-size:12px; line-height:1.6;"></p>
                </div>

                <!-- 파이프라인 위치 -->
                <div style="margin-bottom:20px;">
                    <div class="modal-section-label">파이프라인 위치</div>
                    <div id="modal-pipeline" class="flex flex-wrap gap-1"></div>
                </div>

                <!-- 주요 역할 -->
                <div style="margin-bottom:20px;">
                    <div class="modal-section-label">주요 역할</div>
                    <div id="modal-roles"></div>
                </div>

                <!-- Tech Stack -->
                <div style="margin-bottom:20px;">
                    <div class="modal-section-label">Tech Stack</div>
                    <div id="modal-tech-stack" class="flex flex-wrap gap-1.5"></div>
                </div>

                <!-- 성과 지표 -->
                <div>
                    <div class="modal-section-label">성과 지표</div>
                    <div id="modal-kpis" class="grid grid-cols-2 gap-2"></div>
                </div>
            </div>

            <!-- 우측 패널 -->
            <div class="flex-1 flex flex-col overflow-hidden">
                <!-- 탭 바 (결과물 미리보기 only) -->
                <div class="flex border-b border-gray-100" style="padding:0 20px;">
                    <div class="font-semibold text-gray-900 cursor-default" 
                         style="padding:12px 14px; font-size:11px; border-bottom:2px solid #2563EB; margin-bottom:-1px;">
                        결과물 미리보기
                    </div>
                </div>
                <!-- 미리보기 영역 -->
                <div class="flex-1 overflow-hidden" style="padding:16px;">
                    <div id="modal-preview" class="w-full h-full rounded-xl bg-gray-50 border border-gray-200 overflow-auto"
                         style="display:flex; align-items:center; justify-content:center; flex-direction:column; gap:12px;">
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>`;

let modal = null;

// ── 초기화 ──────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('detail-modal')) return;

    // 스타일 삽입
    if (!document.getElementById('popup-styles')) {
        document.head.insertAdjacentHTML('beforeend', popupStyles);
    }

    const modalContainer = document.createElement('div');
    modalContainer.innerHTML = popupHTML;
    document.body.appendChild(modalContainer);
    
    modal = document.getElementById('detail-modal');

    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeCompanyPopup();
    });

    document.getElementById('close-modal-btn').addEventListener('click', closeCompanyPopup);

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeCompanyPopup();
    });
});

// ── 도메인 색상 (popup 내부 백업용) ──────────────────────────
const _domainBadge = {
    DATA:    { bg: '#EFF6FF', text: '#2563EB' },
    AI:      { bg: '#F5F3FF', text: '#7C3AED' },
    INFRA:   { bg: '#F9FAFB', text: '#4B5563' },
    NETWORK: { bg: '#ECFDF5', text: '#059669' },
    ORG:     { bg: '#FFF7ED', text: '#EA580C' },
    SERVICE: { bg: '#FFF1F2', text: '#E11D48' }
};

const _categoryBadge = {
    '주관':   { bg: '#FEF3C7', text: '#92400E' },
    '참여':   { bg: '#F3F4F6', text: '#374151' },
    '수요기업': { bg: '#DBEAFE', text: '#1E40AF' }
};

// 성과 지표 카드 색상 (순환)
const _kpiColors = ['#2563EB', '#059669', '#EA580C', '#7C3AED'];

// 파이프라인 스테이지 이름 (stageConfig 대응)
const _pipelineStages = [
    { id: 1, name: '데이터 수집' },
    { id: 2, name: '데이터 전송' },
    { id: 3, name: '플랫폼/AAS' },
    { id: 4, name: 'AI 분석' },
    { id: 5, name: '서비스 활용' },
    { id: 6, name: '운영 관리' }
];

// ── 팝업 열기 ───────────────────────────────────────────────
function showCompanyPopup(item) {
    if (!modal) {
        console.error("Popup not initialized!");
        return;
    }

    const name = item.name || '';
    const role = item.role || '';
    const roleEn = item.roleEn || '';
    const type = item.type || '';
    const category = item.category || '';
    const icon = item.icon || 'fas fa-cube';
    const desc = item.details || item.desc || '';
    const techStack = item.techStack || [];
    const externalUrl = item.externalUrl || null;
    const results = item.results || null;
    const stage = item.stage || 0;

    // ── 헤더 ──
    document.getElementById('modal-title').innerText = name;
    document.getElementById('modal-role-en').innerText = `${role} · ${roleEn}`;
    document.getElementById('modal-icon').className = icon;

    // 아이콘 색상
    const iconWrap = document.getElementById('modal-icon-wrap');
    const domainStyle = _domainBadge[type] || { bg: '#F3F4F6', text: '#6B7280' };
    iconWrap.style.backgroundColor = domainStyle.bg;
    iconWrap.style.borderColor = domainStyle.bg;
    document.getElementById('modal-icon').style.color = domainStyle.text;

    // 도메인 배지
    const typeEl = document.getElementById('modal-type');
    typeEl.innerText = type;
    typeEl.style.backgroundColor = domainStyle.bg;
    typeEl.style.color = domainStyle.text;

    // 카테고리 배지
    const catEl = document.getElementById('modal-category');
    const catStyle = _categoryBadge[category] || { bg: '#F3F4F6', text: '#6B7280' };
    catEl.innerText = category;
    catEl.style.backgroundColor = catStyle.bg;
    catEl.style.color = catStyle.text;

    // ────────────────────────────────────────────
    // 좌측 패널
    // ────────────────────────────────────────────

    // Description
    document.getElementById('modal-desc').innerText = desc;

    // 파이프라인 위치
    const pipelineContainer = document.getElementById('modal-pipeline');
    pipelineContainer.innerHTML = _pipelineStages.map(s =>
        `<span class="pipeline-chip ${s.id === stage ? 'active' : 'inactive'}">${s.name}</span>`
    ).join('');

    // 주요 역할
    const rolesContainer = document.getElementById('modal-roles');
    let roleHTML = '';
    if (results?.year3Goal) {
        roleHTML += `<div style="font-size:12px; color:#374151; font-weight:500; margin-bottom:8px; line-height:1.6;">${results.year3Goal}</div>`;
    }
    if (results?.deliverables && results.deliverables.length > 0) {
        roleHTML += results.deliverables.map(d =>
            `<div style="display:flex; align-items:flex-start; gap:6px; font-size:12px; color:#6b7280; line-height:1.5; margin-bottom:3px;">
                <span style="color:#d1d5db; margin-top:1px; flex-shrink:0;">•</span>
                <span>${d}</span>
            </div>`
        ).join('');
    }
    rolesContainer.innerHTML = roleHTML || '<span style="font-size:12px; color:#9ca3af; font-style:italic;">정보 없음</span>';

    // Tech Stack
    const techContainer = document.getElementById('modal-tech-stack');
    techContainer.innerHTML = techStack.map(tech =>
        `<span class="modal-tech-tag">${tech}</span>`
    ).join('');

    // 성과 지표 (2xN grid)
    const kpiContainer = document.getElementById('modal-kpis');
    if (results?.kpis && results.kpis.length > 0) {
        kpiContainer.innerHTML = results.kpis.map((kpi, i) => {
            const color = _kpiColors[i % _kpiColors.length];
            const unitHtml = kpi.unit ? `<span class="modal-kpi-unit">${kpi.unit}</span>` : '';
            return `<div class="modal-kpi-card">
                <div class="modal-kpi-label">${kpi.label}</div>
                <div class="modal-kpi-val" style="color:${color}">${kpi.value}${unitHtml}</div>
            </div>`;
        }).join('');
    } else {
        kpiContainer.innerHTML = '<div style="grid-column:span 2; font-size:12px; color:#9ca3af; font-style:italic;">KPI 데이터 없음</div>';
    }

    // ────────────────────────────────────────────
    // 우측 패널: 결과물 미리보기
    // ────────────────────────────────────────────
    const previewContainer = document.getElementById('modal-preview');

    if (results?.screenshot) {
        // 스크린샷 이미지
        previewContainer.innerHTML = `
            <img src="${results.screenshot}" alt="${name} 결과물" 
                 style="width:100%; height:100%; object-fit:contain;" />
        `;
        previewContainer.style.padding = '0';
        previewContainer.style.display = 'block';
    } else {
        // URL 플레이스홀더
        const urlDisplay = externalUrl || `https://${name.replace(/\s/g, '').toLowerCase()}.com`;
        previewContainer.style.padding = '';
        previewContainer.style.display = 'flex';
        previewContainer.innerHTML = `
            <div style="font-size:36px; opacity:0.25;">🖥️</div>
            <div style="font-size:12px; color:#9ca3af; text-align:center; line-height:1.6;">
                <b style="color:#6b7280;">${name}</b> 실제 서비스 URL 연결 시<br>여기에 결과물이 표시됩니다
            </div>
            ${externalUrl
                ? `<a href="${externalUrl}" target="_blank" rel="noopener" class="preview-url-badge">${externalUrl}</a>`
                : `<span class="preview-url-badge" style="cursor:default; opacity:0.6;">${urlDisplay}</span>`
            }
        `;
    }

    modal.classList.remove('hidden');
}

// ── 팝업 닫기 ───────────────────────────────────────────────
function closeCompanyPopup() {
    if (!modal) return;
    modal.classList.add('hidden');
}
