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
//   'slideshow'   - slides 배열 필요 (각 슬라이드: {url, caption})
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

    @keyframes spin {
        from { transform: rotate(0deg); }
        to   { transform: rotate(360deg); }
    }

    .kpi-loading {
        grid-column: span 2;
        font-size: 12px; color: #9ca3af; font-style: italic;
        padding: 8px 0;
    }

    /* Slideshow Styles */
    .slideshow-container {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 10px;
    }
    
    .slideshow-viewer {
        width: 100%;
        height: 85%;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
    }

    .slideshow-viewer img {
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
        border-radius: 8px;
        animation: fadeIn 0.5s ease-in-out;
    }

    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }

    .slideshow-caption {
        font-size: 11px;
        color: #6b7280;
        text-align: center;
        padding: 0 10px;
        line-height: 1.4;
        height: 15%;
        display: flex;
        align-items: center;
        justify-content: center;
        border-top: 1px solid #e5e7eb;
        width: 100%;
    }

    .slideshow-indicators {
        display: flex;
        gap: 6px;
        justify-content: center;
    }

    .slideshow-dot {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: #d1d5db;
        cursor: pointer;
        transition: all 0.3s;
    }

    .slideshow-dot.active {
        background: #2563EB;
        width: 24px;
        border-radius: 4px;
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
    SERVICE: { bg: '#FFF1F2', text: '#E11D48' },
    DEMAND:  { bg: '#F0F9FF', text: '#0284C7' }
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

// ── 섹션 렌더러 ──────────────────────────────────────────────
function _renderSection(section) {
    const wrap = document.createElement('div');
    wrap.style.marginBottom = '24px';

    if (!section.label && !section.type) return wrap;

    // 섹션 제목
    const label = document.createElement('div');
    label.className = 'modal-section-label';
    label.innerText = section.label || '';
    wrap.appendChild(label);

    // 섹션 type별 렌더링
    switch (section.type) {
        case 'list': {
            if (section.title) {
                const title = document.createElement('p');
                title.style.cssText = 'font-size:12px; font-weight:600; color:#4B5563; margin-bottom:10px;';
                title.innerHTML = section.title;
                wrap.appendChild(title);
            }

            const items = (section.items || []).map(item => {
                const li = document.createElement('div');
                li.style.cssText = 'font-size:11px; color:#6B7280; line-height:1.8; padding-left:12px; position:relative; margin-bottom:2px;';
                li.innerHTML = `<span style="position:absolute; left:0;">·</span> ${item}`;
                return li;
            });

            const ul = document.createElement('div');
            items.forEach(item => ul.appendChild(item));
            wrap.appendChild(ul);
            break;
        }

        case 'tags': {
            const container = document.createElement('div');
            container.style.display = 'flex';
            container.style.flexWrap = 'wrap';
            container.style.gap = '6px';

            (section.items || []).forEach(tag => {
                const span = document.createElement('span');
                span.className = 'modal-tech-tag';
                span.innerText = tag;
                container.appendChild(span);
            });

            wrap.appendChild(container);
            break;
        }

        case 'kpi-static': {
            const grid = document.createElement('div');
            grid.style.display = 'grid';
            grid.style.gridTemplateColumns = '1fr 1fr';
            grid.style.gap = '10px';

            (section.items || []).forEach(kpi => {
                const card = document.createElement('div');
                card.className = 'modal-kpi-card';
                card.innerHTML = `
                    <div class="modal-kpi-label">${kpi.label}</div>
                    <div class="modal-kpi-val" style="color:${kpi.color || '#2563EB'}">
                        ${kpi.value}${kpi.unit ? `<span class="modal-kpi-unit">${kpi.unit}</span>` : ''}
                    </div>
                `;
                grid.appendChild(card);
            });

            wrap.appendChild(grid);
            break;
        }

        case 'kpi-api': {
            const grid = document.createElement('div');
            grid.id = `kpi-grid-${Date.now()}`;
            grid.style.display = 'grid';
            grid.style.gridTemplateColumns = '1fr 1fr';
            grid.style.gap = '10px';

            const loadingDiv = document.createElement('div');
            loadingDiv.className = 'kpi-loading';
            loadingDiv.innerText = 'KPI 데이터 조회 중...';
            grid.appendChild(loadingDiv);

            wrap.appendChild(grid);

            const KPI_TIMEOUT_MS = 5000;
            const endpoints = section.endpoints || [];

            Promise.all(
                endpoints.map(ep => {
                    const controller = new AbortController();
                    const timeoutId = setTimeout(() => controller.abort(), KPI_TIMEOUT_MS);

                    return fetch(ep.url, { signal: controller.signal })
                        .then(r => {
                            clearTimeout(timeoutId);
                            if (!r.ok) throw new Error(`HTTP ${r.status}`);
                            return r.json();
                        })
                        .then(data => {
                            const val = data[ep.key];
                            return { ...ep, result: val, error: null };
                        })
                        .catch(err => {
                            clearTimeout(timeoutId);
                            let reason = '조회 실패';
                            if (err.name === 'AbortError') reason = '시간 초과';
                            else if (err.message && err.message.includes('Failed to fetch')) reason = '연결 불가';
                            else if (err.message && err.message.startsWith('HTTP')) reason = err.message;
                            return { ...ep, result: null, error: reason };
                        });
                })
            ).then(results => {
                grid.innerHTML = results.map(ep => {
                    if (ep.error) {
                        return `<div class="modal-kpi-card" style="opacity:0.6;">
                            <div class="modal-kpi-label">${ep.label}</div>
                            <div class="modal-kpi-val" style="color:#9ca3af; font-size:13px;">
                                <i class="fas fa-exclamation-triangle" style="font-size:10px; margin-right:4px; color:#f59e0b;"></i>${ep.error}
                            </div>
                        </div>`;
                    }
                    const displayVal = (ep.result != null && !isNaN(Number(ep.result)))
                        ? Number(ep.result).toLocaleString()
                        : (ep.result != null ? ep.result : '-');
                    return `<div class="modal-kpi-card">
                        <div class="modal-kpi-label">${ep.label}</div>
                        <div class="modal-kpi-val" style="color:${ep.color || '#2563EB'}">
                            ${displayVal}${ep.unit ? `<span class="modal-kpi-unit">${ep.unit}</span>` : ''}
                        </div>
                    </div>`;
                }).join('');
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
        case 'image': {
            container.style.padding = '0';
            container.style.display = 'flex';
            container.style.flexDirection = 'column';
            container.style.alignItems = 'center';
            container.style.justifyContent = 'center';
            container.style.gap = '10px';

            const isVideo = preview.url && preview.url.toLowerCase().endsWith('.mp4');
            
            let mediaHTML = '';
            if (isVideo) {
                mediaHTML = `
                    <video src="${preview.url}" controls autoplay muted loop
                           style="max-width:100%; max-height:90%; object-fit:contain; border-radius:8px;">
                        Your browser does not support the video tag.
                    </video>`;
            } else {
                mediaHTML = `
                    <img src="${preview.url}" alt="${name}"
                         style="max-width:100%; max-height:90%; object-fit:contain; border-radius:8px;" />`;
            }

            container.innerHTML = `
                ${mediaHTML}
                ${preview.caption
                    ? `<p style="font-size:11px; color:#9ca3af; text-align:center;">${preview.caption}</p>`
                    : ''}`;
            break;
        }

        // 슬라이드쇼
        case 'slideshow': {
            container.style.padding = '0';
            container.style.display = 'flex';
            
            const slides = preview.slides || [];
            if (slides.length === 0) {
                container.innerHTML = `<p style="color:#9ca3af;">슬라이드 데이터가 없습니다.</p>`;
                break;
            }

            let currentIndex = 0;
            let slideshowInterval;

            const renderSlide = () => {
                const slide = slides[currentIndex];
                container.innerHTML = `
                    <div class="slideshow-container">
                        <div class="slideshow-viewer">
                            <img src="${slide.url}"
                                 alt="Slide ${currentIndex + 1}"
                                 onerror="this.onerror=null; this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+CiAgPHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzZiNzI4MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+CiAgICDsnbTrr7jsp4Drpbwg66Gc65OcIO2VoCDsiJgg7JeG7Iq164uI64ukCiAgPC90ZXh0Pgo8L3N2Zz4=';" />
                        </div>
                        <div class="slideshow-caption">${slide.caption || ''}</div>
                        <div class="slideshow-indicators">
                            ${slides.map((_, idx) => `
                                <div class="slideshow-dot ${idx === currentIndex ? 'active' : ''}"
                                     onclick="slideshowGoto(${idx})"></div>
                            `).join('')}
                        </div>
                    </div>
                `;
                
                // 이미지 로드 상태 확인
                const img = container.querySelector('.slideshow-viewer img');
                img.addEventListener('load', function() {
                    console.log(`슬라이드 ${currentIndex + 1} 이미지 로드 성공:`, slide.url);
                });
                img.addEventListener('error', function() {
                    console.error(`슬라이드 ${currentIndex + 1} 이미지 로드 실패:`, slide.url);
                });
            };

            // 전역 함수로 정의 (클릭 핸들러에서 접근 가능하게)
            window.slideshowGoto = (idx) => {
                currentIndex = idx;
                clearInterval(slideshowInterval);
                renderSlide();
                startAutoPlay();
            };

            const nextSlide = () => {
                currentIndex = (currentIndex + 1) % slides.length;
                renderSlide();
            };

            const startAutoPlay = () => {
                slideshowInterval = setInterval(nextSlide, 5000);
            };

            renderSlide();
            startAutoPlay();

            // cleanup (모달 닫힐 때 interval 정리)
            const originalCloseModal = window.closeCompanyPopup;
            window.closeCompanyPopup = function() {
                clearInterval(slideshowInterval);
                originalCloseModal.call(this);
            };

            break;
        }

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
    const descEl = document.getElementById('modal-desc');
    if (Array.isArray(desc)) {
        // 배열인 경우 리스트로 표시
        descEl.innerHTML = desc.map(item => `<li style="margin-bottom: 8px;">${item}</li>`).join('');
        descEl.style.listStyleType = 'disc';
        descEl.style.paddingLeft = '20px';
        descEl.style.margin = '0';
    } else {
        // 문자열인 경우 기존처럼 표시
        descEl.innerText = desc;
        descEl.style.listStyleType = 'none';
        descEl.style.paddingLeft = '0';
    }

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