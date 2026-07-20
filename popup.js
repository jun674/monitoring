// ═══════════════════════════════════════════════════════════════
// 📋 팝업 모달 컴포넌트
//   좌측: sections 배열 기반 동적 렌더링
//   우측: preview.type 기반 동적 렌더링
//
// [sections type]
//   'list'       - 제목(title) + 불릿 목록(items)
//   'tags'       - 태그 뱃지 (items)
//   'kpi-static' - 하드코딩 수치 카드 (items: [{label, value, unit, color}])
//   'kpi-api'    - API 실시간 수치 카드 (endpoints: [{label, url, key, unit, color}])
//
// [preview type]
//   'iframe'      - url 필요
//   'youtube'     - videoId 필요
//   'image'       - url 필요, caption 선택
//   'placeholder' - 준비 중 표시
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

    .kpi-loading {
        grid-column: span 2;
        font-size: 12px; color: #9ca3af; font-style: italic;
        padding: 8px 0;
    }
</style>`;

const popupHTML = `<div id="detail-modal" class="fixed inset-0 z-50 hidden"
     style="background:rgba(0,0,0,0.4); backdrop-filter:blur(6px); transition: opacity 0.25s; display: none;">
    <div id="modal-content" class="modal-enter bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-200"
         style="width:1100px; height:700px; max-width:95vw; max-height:90vh;">
        
        <!-- 헤더 -->
        <div class="flex items-center justify-between px-6 shrink-0 border-b border-gray-100" style="padding-top:16px; padding-bottom:14px;">
            <div>
                <div class="flex items-center gap-2">
                    <h3 id="modal-title" class="font-bold text-gray-900" style="font-size:17px;">업체명</h3>
                    <span id="modal-type" class="font-bold px-2 py-0.5 rounded-full uppercase" style="font-size:10px; letter-spacing:0.05em;">TYPE</span>
                    <span id="modal-category" class="font-semibold px-2 py-0.5 rounded-full" style="font-size:10px;">분류</span>
                </div>
                <p id="modal-role-en" class="text-gray-400 font-medium" style="font-size:11px; margin-top:2px;"></p>
            </div>
            <button id="close-modal-btn" class="w-7 h-7 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-400 hover:text-gray-700 flex items-center justify-center transition-all shrink-0" style="font-size:14px;">
                ✕
            </button>
        </div>

        <!-- 본문 -->
        <div class="flex flex-1 overflow-hidden">

            <!-- 좌측 패널 -->
            <div class="border-r border-gray-100 overflow-y-auto flex-shrink-0" id="modal-left-panel" style="width:350px; min-width:350px; padding:24px;">

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

                <!-- 동적 섹션 렌더링 영역 -->
                <div id="modal-sections"></div>

            </div>

            <!-- 우측 패널 -->
            <div class="flex-1 flex flex-col overflow-hidden">
                <div class="flex border-b border-gray-100" style="padding:0 20px;">
                    <div class="font-semibold text-gray-900 cursor-default"
                         style="padding:12px 14px; font-size:11px; border-bottom:2px solid #2563EB; margin-bottom:-1px;">
                        결과물 미리보기
                    </div>
                </div>
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

// ── 도메인 / 카테고리 색상 ───────────────────────────────────
const _domainBadge = {
    DATA:    { bg: '#EFF6FF', text: '#2563EB' },
    AI:      { bg: '#F5F3FF', text: '#7C3AED' },
    INFRA:   { bg: '#F9FAFB', text: '#4B5563' },
    NETWORK: { bg: '#ECFDF5', text: '#059669' },
    ORG:     { bg: '#FFF7ED', text: '#EA580C' },
    SERVICE: { bg: '#FFF1F2', text: '#E11D48' }
};

const _categoryBadge = {
    '주관':    { bg: '#FEF3C7', text: '#92400E' },
    '참여':    { bg: '#F3F4F6', text: '#374151' },
    '수요기업': { bg: '#DBEAFE', text: '#1E40AF' }
};

const _pipelineStages = [
    { id: 1, name: '데이터 수집' },
    { id: 2, name: '데이터 전송' },
    { id: 3, name: '플랫폼/AAS' },
    { id: 4, name: 'AI 분석' },
    { id: 5, name: '서비스 활용' },
    { id: 6, name: '운영 관리' }
];

// ── 섹션 렌더러 ─────────────────────────────────────────────

function _renderSection(section) {
    const wrap = document.createElement('div');
    wrap.style.marginBottom = '20px';

    const label = `<div class="modal-section-label">${section.label}</div>`;

    switch (section.type) {

        // 불릿 목록
        case 'list': {
            let inner = label;
            if (section.title) {
                inner += `<div style="font-size:12px; color:#374151; font-weight:500; margin-bottom:8px; line-height:1.6;">${section.title}</div>`;
            }
            if (section.items && section.items.length > 0) {
                inner += section.items.map(d =>
                    `<div style="display:flex; align-items:flex-start; gap:6px; font-size:12px; color:#6b7280; line-height:1.5; margin-bottom:3px;">
                        <span style="color:#d1d5db; margin-top:1px; flex-shrink:0;">•</span>
                        <span>${d}</span>
                    </div>`
                ).join('');
            }
            wrap.innerHTML = inner;
            break;
        }

        // 태그 뱃지
        case 'tags': {
            const tags = (section.items || []).map(t =>
                `<span class="modal-tech-tag">${t}</span>`
            ).join('');
            wrap.innerHTML = label + `<div class="flex flex-wrap gap-1.5">${tags || '<span style="font-size:12px;color:#9ca3af;font-style:italic;">없음</span>'}</div>`;
            break;
        }

        // 하드코딩 KPI 카드
        case 'kpi-static': {
            const cards = (section.items || []).map(kpi =>
                `<div class="modal-kpi-card">
                    <div class="modal-kpi-label">${kpi.label}</div>
                    <div class="modal-kpi-val" style="color:${kpi.color || '#2563EB'}">
                        ${kpi.value}${kpi.unit ? `<span class="modal-kpi-unit">${kpi.unit}</span>` : ''}
                    </div>
                </div>`
            ).join('');
            wrap.innerHTML = label + `<div class="grid grid-cols-2 gap-2">${cards}</div>`;
            break;
        }

        // API 실시간 KPI 카드
        case 'kpi-api': {
            const grid = document.createElement('div');
            grid.className = 'grid grid-cols-2 gap-2';
            grid.innerHTML = `<div class="kpi-loading">데이터 로딩 중...</div>`;
            wrap.innerHTML = label;
            wrap.appendChild(grid);

            const endpoints = section.endpoints || [];
            Promise.all(
                endpoints.map(ep =>
                    fetch(ep.url)
                        .then(r => r.json())
                        .then(data => ({ ...ep, result: data[ep.key] }))
                )
            ).then(results => {
                grid.innerHTML = results.map(ep =>
                    `<div class="modal-kpi-card">
                        <div class="modal-kpi-label">${ep.label}</div>
                        <div class="modal-kpi-val" style="color:${ep.color || '#2563EB'}">
                            ${Number(ep.result).toLocaleString()}${ep.unit ? `<span class="modal-kpi-unit">${ep.unit}</span>` : ''}
                        </div>
                    </div>`
                ).join('');
            }).catch(() => {
                grid.innerHTML = `<div class="kpi-loading">데이터 조회 실패</div>`;
            });
            break;
        }

        default:
            break;
    }

    return wrap;
}

// ── 미리보기 렌더러 ──────────────────────────────────────────

function _renderPreview(preview, name, externalUrl) {
    const container = document.getElementById('modal-preview');

    if (!preview || preview.type === 'placeholder') {
        container.style.padding = '';
        container.style.display = 'flex';
        const url = externalUrl || null;
        container.innerHTML = `
            <div style="font-size:36px; opacity:0.25;">🖥️</div>
            <div style="font-size:12px; color:#9ca3af; text-align:center; line-height:1.6;">
                <b style="color:#6b7280;">${name}</b> 실제 서비스 URL 연결 시<br>여기에 결과물이 표시됩니다
            </div>
            ${url
                ? `<a href="${url}" target="_blank" rel="noopener" class="preview-url-badge">${url}</a>`
                : `<span class="preview-url-badge" style="cursor:default; opacity:0.6;">준비 중</span>`
            }`;
        return;
    }

    switch (preview.type) {

        // iframe
        case 'iframe':
            container.innerHTML = `
                <iframe src="${preview.url}"
                        style="width:100%; height:100%; border:none;"
                        title="${name}"></iframe>`;
            container.style.padding = '0';
            container.style.display = 'block';
            break;

        // 유튜브
        case 'youtube':
            container.innerHTML = `
                <iframe src="https://www.youtube.com/embed/${preview.videoId}?rel=0&modestbranding=1"
                        style="width:100%; height:100%; border:none;"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                        title="${name}"></iframe>`;
            container.style.padding = '0';
            container.style.display = 'block';
            break;

        // 이미지
        case 'image':
            container.style.padding = '0';
            container.style.display = 'flex';
            container.style.flexDirection = 'column';
            container.style.alignItems = 'center';
            container.style.justifyContent = 'center';
            container.style.gap = '10px';
            container.innerHTML = `
                <img src="${preview.url}" alt="${name}"
                     style="max-width:100%; max-height:90%; object-fit:contain; border-radius:8px;" />
                ${preview.caption
                    ? `<p style="font-size:11px; color:#9ca3af; text-align:center;">${preview.caption}</p>`
                    : ''}`;
            break;

        default:
            _renderPreview(null, name, externalUrl);
            break;
    }
}

// ── 팝업 열기 ───────────────────────────────────────────────
function showCompanyPopup(item) {
    if (!modal) {
        console.error('Popup not initialized!');
        return;
    }

    const name        = item.name     || '';
    const role        = item.role     || '';
    const roleEn      = item.roleEn   || '';
    const type        = item.type     || '';
    const category    = item.category || '';
    const desc        = item.details  || item.desc || '';
    const stage       = item.stage    || 0;
    const sections    = item.sections || [];
    const preview     = item.preview  || null;
    const externalUrl = item.externalUrl || null;

    // ── 헤더 ──
    document.getElementById('modal-title').innerText = name;
    document.getElementById('modal-role-en').innerText = `${role} · ${roleEn}`;

    const domainStyle = _domainBadge[type] || { bg: '#F3F4F6', text: '#6B7280' };
    const typeEl = document.getElementById('modal-type');
    typeEl.innerText = type;
    typeEl.style.backgroundColor = domainStyle.bg;
    typeEl.style.color = domainStyle.text;

    const catEl = document.getElementById('modal-category');
    const catStyle = _categoryBadge[category] || { bg: '#F3F4F6', text: '#6B7280' };
    catEl.innerText = category;
    catEl.style.backgroundColor = catStyle.bg;
    catEl.style.color = catStyle.text;

    // ── Description ──
    document.getElementById('modal-desc').innerText = desc;

    // ── 파이프라인 위치 ──
    const pipelineContainer = document.getElementById('modal-pipeline');
    pipelineContainer.innerHTML = _pipelineStages.map(s =>
        `<span class="pipeline-chip ${s.id === stage ? 'active' : 'inactive'}">${s.name}</span>`
    ).join('');

    // ── 동적 섹션 렌더링 ──
    const sectionsContainer = document.getElementById('modal-sections');
    sectionsContainer.innerHTML = '';
    sections.forEach(section => {
        sectionsContainer.appendChild(_renderSection(section));
    });

    // ── 우측 미리보기 ──
    _renderPreview(preview, name, externalUrl);

    modal.style.display = 'flex';
    modal.style.alignItems = 'center';
    modal.style.justifyContent = 'center';
    modal.classList.remove('hidden');
}

// ── 팝업 닫기 ───────────────────────────────────────────────
function closeCompanyPopup() {
    if (!modal) return;
    modal.classList.add('hidden');
    setTimeout(() => {
        modal.style.display = 'none';
    }, 250);
}