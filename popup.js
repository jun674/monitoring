const popupHTML = `<div id="detail-modal" class="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/10 backdrop-blur-md hidden transition-opacity duration-300">
    <div class="w-[90%] h-[90%] max-w-[1400px] bg-white rounded-[32px] shadow-2xl flex flex-col overflow-hidden animate-enter border border-white/50">
        
        <div class="h-20 flex items-center justify-between px-8 border-b border-gray-100 bg-white/80 backdrop-blur-md">
            <div class="flex items-center gap-5">
                <div class="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 border border-gray-100">
                    <i id="modal-icon" class="fas fa-cube"></i>
                </div>
                <div>
                    <div class="flex items-center gap-3">
                        <h3 id="modal-title" class="text-xl font-bold text-gray-900">업체명</h3>
                        <span id="modal-type" class="text-xs font-bold px-2 py-0.5 rounded bg-gray-100 text-gray-500">TYPE</span>
                    </div>
                    <p id="modal-badge" class="text-sm font-medium text-gray-400 mt-0.5">Role</p>
                </div>
            </div>
            <button id="close-modal-btn" class="w-10 h-10 rounded-full bg-gray-50 hover:bg-gray-100 text-gray-400 hover:text-gray-900 flex items-center justify-center transition-all">
                <i class="fas fa-times text-lg"></i>
            </button>
        </div>

        <div class="flex-1 flex flex-col lg:flex-row overflow-hidden bg-gray-50/50">
            
            <div class="w-full lg:w-[400px] bg-white border-r border-gray-100 p-8 overflow-y-auto shrink-0">
                <div class="space-y-8">
                    <div>
                        <h4 class="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Description</h4>
                        <p id="modal-desc" class="text-[15px] text-gray-600 leading-7 font-medium"></p>
                    </div>
                    
                    <div class="p-5 bg-gray-50 rounded-2xl border border-gray-100">
                        <h4 class="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">주요 역할 및 기술</h4>
                        <div id="modal-details" class="text-sm text-gray-600 leading-relaxed"></div>
                    </div>

                    <div>
                        <h4 class="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Tech Stack</h4>
                        <div id="modal-tech-stack" class="flex flex-wrap gap-2"></div>
                    </div>
                </div>
            </div>

            <div class="flex-1 relative p-6">
                <div class="w-full h-full bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden relative">
                     <div class="absolute inset-0 flex items-center justify-center text-gray-300 z-0">
                        <div class="flex flex-col items-center">
                            <i class="fas fa-circle-notch fa-spin text-2xl mb-3 text-gray-400"></i>
                            <p class="text-sm font-medium">Loading...</p>
                        </div>
                    </div>
                    <iframe id="company-iframe" src="" class="absolute inset-0 w-full h-full z-10" frameborder="0"></iframe>
                </div>
            </div>
        </div>

    </div>
</div>`;

let modal = null;
let iframe = null;

document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('detail-modal')) return;

    const modalContainer = document.createElement('div');
    modalContainer.innerHTML = popupHTML;
    document.body.appendChild(modalContainer);
    
    modal = document.getElementById('detail-modal');
    iframe = document.getElementById('company-iframe');

    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeCompanyPopup();
    });

    document.getElementById('close-modal-btn').addEventListener('click', closeCompanyPopup);

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeCompanyPopup();
    });
});

function showCompanyPopup(item) {
    if (!modal) {
        console.error("Popup not initialized!");
        return;
    }

    // Normalize data from both dainos.html and process.html
    const name = item.name || '';
    const role = item.role || '';
    const type = item.type || '';
    const icon = item.icon || 'fas fa-cube';
    const desc = item.desc || '';
    const details = item.details || '';
    const techStack = item.techStack || [];
    const iframeSrc = item.iframeSrc || item.url || 'about:blank';

    document.getElementById('modal-title').innerText = name;
    document.getElementById('modal-badge').innerText = role;
    
    const modalTypeEl = document.getElementById('modal-type');
    if (type) {
        modalTypeEl.innerText = type;
        modalTypeEl.classList.remove('hidden');
    } else {
        modalTypeEl.classList.add('hidden');
    }

    document.getElementById('modal-icon').className = icon;
    
    document.getElementById('modal-desc').innerText = desc;
    document.getElementById('modal-details').innerText = details;

    const techStackContainer = document.getElementById('modal-tech-stack');
    techStackContainer.innerHTML = '';
    techStack.forEach(tech => {
        const techBadge = document.createElement('span');
        techBadge.className = 'px-3 py-1.5 text-xs font-semibold bg-white text-gray-600 rounded-lg border border-gray-200 shadow-sm';
        techBadge.innerText = tech;
        techStackContainer.appendChild(techBadge);
    });

    if (iframeSrc && iframeSrc !== 'about:blank' && iframeSrc !== '#') {
        iframe.src = iframeSrc;
        iframe.removeAttribute('srcdoc');
    } else if (item.iframeContent) {
        iframe.removeAttribute('src');
        iframe.srcdoc = `
            <html>
            <head>
                <script src="https://cdn.tailwindcss.com"><\/script>
                <style>body { margin: 0; background-color: #ffffff; }</style>
            </head>
            <body>${item.iframeContent}</body>
            </html>
        `;
    }
    else {
        iframe.src = 'about:blank';
        iframe.removeAttribute('srcdoc');
    }

    modal.classList.remove('hidden');
}

function closeCompanyPopup() {
    if (!modal) return;
    modal.classList.add('hidden');
    setTimeout(() => {
        if(iframe) {
            iframe.src = "about:blank";
            iframe.removeAttribute('srcdoc');
        }
    }, 200);
}
