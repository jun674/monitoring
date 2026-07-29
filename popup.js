// ═══════════════════════════════════════════════════════════════
// 📋 팝업 모달 컴포넌트 (Clean Enterprise Light Style)
// ═══════════════════════════════════════════════════════════════

const popupStyles = `
<style id="popup-styles">
    #modal-left-panel::-webkit-scrollbar { width: 4px; }
    #modal-left-panel::-webkit-scrollbar-thumb { background: #CBD5E1; border-radius: 4px; }
    #modal-left-panel::-webkit-scrollbar-track { background: transparent; }

    .pipeline-chip {
        font-size: 10px; padding: 4px 10px; border-radius: 12px;
        border: 1px solid #E2E8F0; white-space: nowrap; font-weight: 500;
        color: #64748B; background: #F8FAFC;
    }
    .pipeline-chip.active {
        background: #EFF6FF; color: #2563EB; border-color: #BFDBFE; font-weight: 700;
    }

    .modal-kpi-card {
        background: #F8FAFC; border-radius: 12px; padding: 12px 14px;
        border: 1px solid #E2E8F0;
    }
    .modal-kpi-label { font-size: 10px; font-weight: 600; color: #64748B; margin-bottom: 4px; }
    .modal-kpi-val { font-size: 18px; font-weight: 800; line-height: 1.2; color: #0F172A; }
    .modal-kpi-unit { font-size: 11px; font-weight: 500; margin-left: 2px; color: #64748B; }

    .modal-tech-tag {
        font-size: 11px; font-weight: 500; padding: 4px 10px; border-radius: 8px;
        background: #F1F5F9; color: #334155; border: 1px solid #E2E8F0;
    }

    .modal-section-label {
        font-size: 11px; font-weight: 700; color: #94A3B8;
        letter-spacing: 0.06em; text-transform: uppercase; margin-bottom: 8px;
    }

    #detail-modal .modal-enter {
        animation: modalIn 0.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    }
    @keyframes modalIn {
        from { transform: scale(0.97) translateY(8px); opacity: 0; }
        to   { transform: scale(1) translateY(0); opacity: 1; }
    }

    /* Slideshow Styles */
    .slideshow-container {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 12px;
    }
    
    .slideshow-viewer {
        width: 100%;
        height: 82%;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
    }

    .slideshow-viewer img {
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
        border-radius: 12px;
    }

    .slideshow-caption {
        font-size: 12px;
        font-weight: 500;
        color: #475569;
        text-align: center;
        padding: 0 12px;
        line-height: 1.4;
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
        background: #CBD5E1;
        cursor: pointer;
        transition: all 0.25s;
    }

    .slideshow-dot.active {
        background: #2563EB;
        width: 24px;
        border-radius: 4px;
    }
</style>`;

const popupHTML = `
<div id="detail-modal" class="fixed inset-0 z-50 hidden"
     style="background:rgba(15,23,42,0.4); backdrop-filter:blur(8px); transition: opacity 0.2s; display: none;">
    <div id="modal-content" class="modal-enter bg-white rounded-2xl md:rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-slate-200 m-2 md:m-0"
         style="width:780px; height:820px; max-width:94vw; max-height:92vh;">
        
        <!-- Header -->
        <div class="flex items-center justify-between px-5 py-4 shrink-0 border-b border-slate-100 bg-slate-50/50">
            <div>
                <div class="flex items-center gap-2">
                    <h3 id="modal-title" class="font-extrabold text-slate-900 text-base md:text-lg">업체명</h3>
                    <span id="modal-type" class="font-bold px-2 py-0.5 rounded-md text-[10px] uppercase border">TYPE</span>
                </div>
                <p id="modal-role-en" class="text-slate-400 font-medium text-xs mt-0.5 truncate max-w-xs sm:max-w-md"></p>
            </div>
            <button id="close-modal-btn" class="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-400 hover:text-slate-800 flex items-center justify-center transition-all shrink-0">
                <i class="fas fa-times text-sm"></i>
            </button>
        </div>

        <!-- Body Vertical Layout -->
        <div class="flex flex-col flex-1 overflow-y-auto">

            <!-- Top Panel Info (Description, Pipeline, Sections) -->
            <div class="w-full p-5 md:p-6 border-b border-slate-100 shrink-0" id="modal-left-panel">

                <!-- Description -->
                <div class="mb-5">
                    <div class="modal-section-label">Description</div>
                    <div id="modal-desc" class="text-slate-600 text-xs leading-relaxed bg-slate-50 p-3.5 rounded-2xl border border-slate-100"></div>
                </div>

                <!-- Pipeline Position -->
                <div class="mb-5">
                    <div class="modal-section-label">파이프라인 위치</div>
                    <div id="modal-pipeline" class="flex flex-wrap gap-1.5"></div>
                </div>

                <!-- Dynamic Sections -->
                <div id="modal-sections"></div>

            </div>

            <!-- Bottom Panel Preview (Preview & Demo) -->
            <div class="w-full flex flex-col min-h-[380px] p-5 md:p-6 bg-slate-50/50 shrink-0">
                <div class="flex items-center justify-between pb-3 mb-3 border-b border-slate-200/80">
                    <span class="text-xs font-bold text-slate-700">결과물 및 데모 미리보기</span>
                    <div id="modal-ext-link"></div>
                </div>
                <div class="flex-1 w-full h-full">
                    <div id="modal-preview" class="w-full h-[320px] rounded-2xl bg-white border border-slate-200 overflow-hidden flex items-center justify-center p-4">
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>`;

let modal = null;

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

const _pipelineStages = [
    { id: 1, name: '01. 수집' },
    { id: 2, name: '02. 전송' },
    { id: 3, name: '03. 플랫폼' },
    { id: 4, name: '04. AI 분석' },
    { id: 5, name: '05. 서비스' },
    { id: 6, name: '06. 총괄' }
];

function _renderSection(section) {
    const wrap = document.createElement('div');
    wrap.style.marginBottom = '20px';

    if (!section.label && !section.type) return wrap;

    const label = document.createElement('div');
    label.className = 'modal-section-label';
    label.innerText = section.label || '';
    wrap.appendChild(label);

    switch (section.type) {
        case 'list': {
            if (section.title) {
                const title = document.createElement('p');
                title.style.cssText = 'font-size:12px; font-weight:600; color:#334155; margin-bottom:8px; line-height:1.5;';
                title.innerHTML = section.title;
                wrap.appendChild(title);
            }

            if (section.items && section.items.length > 0) {
                const ul = document.createElement('div');
                ul.className = 'space-y-1.5';
                section.items.forEach(item => {
                    const li = document.createElement('div');
                    li.className = 'text-xs text-slate-600 flex items-start gap-2 bg-white p-2 rounded-xl border border-slate-100';
                    li.innerHTML = `<i class="fas fa-check text-[10px] text-blue-600 mt-0.5"></i> <span>${item}</span>`;
                    ul.appendChild(li);
                });
                wrap.appendChild(ul);
            }
            break;
        }

        case 'tags': {
            const container = document.createElement('div');
            container.className = 'flex flex-wrap gap-1.5';
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
            grid.className = 'grid grid-cols-2 gap-2.5';
            (section.items || []).forEach(kpi => {
                const card = document.createElement('div');
                card.className = 'modal-kpi-card';
                card.innerHTML = `
                    <div class="modal-kpi-label">${kpi.label}</div>
                    <div class="modal-kpi-val" style="color:${kpi.color || '#0F172A'}">
                        ${kpi.value}${kpi.unit ? `<span class="modal-kpi-unit">${kpi.unit}</span>` : ''}
                    </div>
                `;
                grid.appendChild(card);
            });
            wrap.appendChild(grid);
            break;
        }
    }

    return wrap;
}

let currentSlideshowTimer = null;

function _stopSlideshowTimer() {
    if (currentSlideshowTimer) {
        clearInterval(currentSlideshowTimer);
        currentSlideshowTimer = null;
    }
}

function _renderPreview(preview, name, externalUrl) {
    _stopSlideshowTimer();
    const container = document.getElementById('modal-preview');

    if (!preview || preview.type === 'placeholder') {
        container.innerHTML = `
            <div class="text-center space-y-2 p-6">
                <div class="text-4xl">🖥️</div>
                <div class="text-xs text-slate-500">
                    <b class="text-slate-800">${name}</b> 데모 또는 연동 준비 중입니다.
                </div>
            </div>`;
        return;
    }

    switch (preview.type) {
        case 'image': {
            const isVideo = preview.url && preview.url.toLowerCase().endsWith('.mp4');
            if (isVideo) {
                container.innerHTML = `
                    <div class="w-full h-full flex flex-col items-center justify-center gap-3">
                        <video src="${preview.url}" controls autoplay muted loop class="max-w-full max-h-[88%] rounded-xl shadow-sm">
                        </video>
                        ${preview.caption ? `<p class="text-xs text-slate-500 font-medium">${preview.caption}</p>` : ''}
                    </div>`;
            } else {
                container.innerHTML = `
                    <div class="w-full h-full flex flex-col items-center justify-center gap-3">
                        <img src="${preview.url}" alt="${name}" class="max-w-full max-h-[88%] object-contain rounded-xl shadow-sm" />
                        ${preview.caption ? `<p class="text-xs text-slate-500 font-medium">${preview.caption}</p>` : ''}
                    </div>`;
            }
            break;
        }

        case 'slideshow': {
            const slides = preview.slides || [];
            if (slides.length === 0) {
                container.innerHTML = `<p class="text-xs text-slate-400">슬라이드 데이터가 없습니다.</p>`;
                break;
            }

            let currentIndex = 0;

            const renderSlide = () => {
                const slide = slides[currentIndex];
                container.innerHTML = `
                    <div class="slideshow-container">
                        <div class="slideshow-viewer">
                            <img src="${slide.url}" alt="Slide ${currentIndex + 1}" />
                        </div>
                        <div class="slideshow-caption">${slide.caption || ''}</div>
                        <div class="slideshow-indicators">
                            ${slides.map((_, idx) => `
                                <div class="slideshow-dot ${idx === currentIndex ? 'active' : ''}" onclick="slideshowGoto(${idx})"></div>
                            `).join('')}
                        </div>
                    </div>
                `;
            };

            window.slideshowGoto = (idx) => {
                currentIndex = idx;
                _stopSlideshowTimer();
                renderSlide();
                startAutoPlay();
            };

            const nextSlide = () => {
                currentIndex = (currentIndex + 1) % slides.length;
                renderSlide();
            };

            const startAutoPlay = () => {
                _stopSlideshowTimer();
                currentSlideshowTimer = setInterval(nextSlide, 4000);
            };

            renderSlide();
            startAutoPlay();
            break;
        }
    }
}

function showCompanyPopup(item) {
    if (!modal) return;

    const name = item.name || '';
    const role = item.role || '';
    const roleEn = item.roleEn || '';
    const type = item.type || '';
    const desc = item.details || item.desc || '';
    const stage = item.stage || 0;
    const sections = item.sections || [];
    const preview = item.preview || null;
    const externalUrl = item.externalUrl || null;

    const _domainTagMap = {
        ORG: { label: 'ORGANIZING', cls: 'bg-amber-100 text-amber-800 border-amber-200' },
        DATA: { label: 'DATA', cls: 'bg-teal-100 text-teal-800 border-teal-200' },
        AI: { label: 'AI', cls: 'bg-blue-100 text-blue-800 border-blue-200' },
        INFRA: { label: 'INFRASTRUCTURE', cls: 'bg-purple-100 text-purple-800 border-purple-200' },
        NETWORK: { label: 'NETWORK', cls: 'bg-orange-100 text-orange-800 border-orange-200' },
        SERVICE: { label: 'SERVICE', cls: 'bg-rose-100 text-rose-800 border-rose-200' }
    };
    const tagInfo = _domainTagMap[type] || { label: type, cls: 'bg-slate-100 text-slate-700 border-slate-200' };

    document.getElementById('modal-title').innerText = name;
    document.getElementById('modal-role-en').innerText = `${role} · ${roleEn}`;

    const typeEl = document.getElementById('modal-type');
    typeEl.innerText = tagInfo.label;
    typeEl.className = `font-bold px-2.5 py-0.5 rounded-md text-[10px] uppercase border ${tagInfo.cls}`;

    const descEl = document.getElementById('modal-desc');
    if (Array.isArray(desc)) {
        descEl.innerHTML = `<ul class="list-disc pl-4 space-y-1">${desc.map(d => `<li>${d}</li>`).join('')}</ul>`;
    } else {
        descEl.innerText = desc;
    }

    const pipelineContainer = document.getElementById('modal-pipeline');
    pipelineContainer.innerHTML = _pipelineStages.map(s =>
        `<span class="pipeline-chip ${s.id === stage ? 'active' : ''}">${s.name}</span>`
    ).join('');

    const sectionsContainer = document.getElementById('modal-sections');
    sectionsContainer.innerHTML = '';
    sections.forEach(s => {
        sectionsContainer.appendChild(_renderSection(s));
    });

    const extLinkEl = document.getElementById('modal-ext-link');
    if (extLinkEl) {
        extLinkEl.innerHTML = '';
    }

    _renderPreview(preview, name, externalUrl);

    modal.style.display = 'flex';
    modal.style.alignItems = 'center';
    modal.style.justifyContent = 'center';
    modal.classList.remove('hidden');
}

function closeCompanyPopup() {
    _stopSlideshowTimer();
    if (!modal) return;
    modal.classList.add('hidden');
    setTimeout(() => {
        modal.style.display = 'none';
    }, 200);
}
