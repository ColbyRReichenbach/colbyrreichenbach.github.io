
document.addEventListener('DOMContentLoaded', () => {

    // --- 3D CARD PHYSICS ---
    const card = document.querySelector('.business-card');
    const container = document.querySelector('.hero-section');
    const flipBackBtn = document.getElementById('flipBackBtn');

    let isFlipped = false;
    let isDesktop = window.innerWidth >= 768;

    // Optimize Resize: Update variable instead of querying DOM in loop
    // window.addEventListener('resize', () => {
    //    isDesktop = window.innerWidth >= 768; // Removed restriction
    // });

    // Flip Logic
    if (card) {
        // Click to flip – but ignore if we already flipped via mousedown
        card.addEventListener('click', (e) => {
            if (mouseDownFlip) {
                // Reset flag; keep the current flipped state
                mouseDownFlip = false;
                return;
            }
            if (!e.target.closest('a') && !e.target.closest('button')) {
                isFlipped = !isFlipped;
                card.classList.toggle('is-flipped', isFlipped);

                if (typeof gtag === 'function') {
                    gtag('event', 'card_flip', {
                        'event_category': 'Interaction',
                        'event_label': isFlipped ? 'Back' : 'Front'
                    });
                }
            }
        });
        // Also flip on mouse down (press & hold) for better UX
        card.addEventListener('mousedown', (e) => {
            if (!e.target.closest('a') && !e.target.closest('button')) {
                isFlipped = true;
                mouseDownFlip = true; // Set flag because flip originated from mousedown
                card.classList.add('is-flipped');
                if (typeof gtag === 'function') {
                    gtag('event', 'card_flip', {
                        'event_category': 'Interaction',
                        'event_label': 'Back'
                    });
                }
            }
        });
        // Prevent mouseup from unintentionally resetting flip
        card.addEventListener('mouseup', (e) => {
            // Do nothing – keep current flip state until another click toggles it
        });

        const interactiveElements = card.querySelectorAll('a, button');
        interactiveElements.forEach(el => {
            el.addEventListener('click', (e) => {
                e.stopPropagation();
            });
        });
    }

    if (flipBackBtn) {
        flipBackBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            isFlipped = false;
            card.classList.remove('is-flipped');
        });
    }

    // Parallax Tilt (Desktop) - Optimized
    if (container && card) {
        container.addEventListener('mousemove', (e) => {
            // if (!isDesktop) return; // Allow on all screen sizes for responsive testing

            if (isFlipped) {
                card.style.transform = `rotateY(180deg)`;
                return;
            }

            const rect = container.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = ((y - centerY) / centerY) * -25;
            const rotateY = ((x - centerX) / centerX) * 25;

            requestAnimationFrame(() => {
                card.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
            });
        });

        container.addEventListener('mouseleave', () => {
            let baseRotateY = isFlipped ? 180 : 0;
            card.style.transform = `rotateY(${baseRotateY}deg) rotateX(0deg)`;
        });
    }


    // --- SCROLL ANIMATIONS ---
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.scroll-reveal').forEach(el => observer.observe(el));


    // --- MODAL LOGIC (Event Delegation) ---
    let projectStartTime = 0;

    // Event Delegation: Listen for clicks on the bento-grid
    const bentoGrid = document.querySelector('.bento-grid');
    if (bentoGrid) {
        bentoGrid.addEventListener('click', (e) => {
            const card = e.target.closest('.bento-card');
            if (card) {
                const modalId = card.getAttribute('data-modal-target');
                if (modalId) {
                    openModal(modalId);
                }
            }
        });
    }

    function openModal(modalId) {
        const modal = document.getElementById(modalId);
        if (!modal) return;

        projectStartTime = Date.now();
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';

        const markdownSrc = modal.getAttribute('data-markdown-source');
        const contentContainer = modal.querySelector('.markdown-content');

        if (markdownSrc && contentContainer) {
            if (!contentContainer.dataset.loaded) {
                contentContainer.innerHTML = `
                    <div class="skeleton-loader">
                        <div class="skeleton-text title"></div>
                        <div class="skeleton-text"></div>
                        <div class="skeleton-text"></div>
                        <div class="skeleton-text short"></div>
                    </div>`;

                fetch(markdownSrc)
                    .then(res => res.text())
                    .then(text => {
                        if (typeof marked !== 'undefined') {
                            contentContainer.innerHTML = marked.parse(text);
                        } else {
                            contentContainer.innerHTML = text;
                        }
                        contentContainer.dataset.loaded = "true";
                    })
                    .catch(err => {
                        console.error("Failed to load markdown", err);
                        contentContainer.innerHTML = "<p>Could not load project details.</p>";
                    });
            }
        }

        if (typeof gtag === 'function') {
            gtag('event', 'view_project', {
                'event_category': 'Portfolio',
                'event_label': modalId
            });
        }
    };

    // Close logic
    document.querySelectorAll('.close-project').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const modal = e.target.closest('.project-modal');
            closeModal(modal);
        });
    });

    // Close on background click
    window.onclick = function (event) {
        if (event.target.classList.contains('project-modal')) {
            closeModal(event.target);
        }
        if (event.target === document.getElementById('contact-modal')) {
            document.getElementById('contact-modal').classList.remove('active');
            document.body.style.overflow = 'auto'; // Re-enable scroll
        }
    };

    function closeModal(modal) {
        if (modal) {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';

            // GA4 Dwell Time Logic
            if (projectStartTime > 0 && typeof gtag === 'function') {
                const duration = Math.round((Date.now() - projectStartTime) / 1000);
                const projectTitle = modal.querySelector('h3') ? modal.querySelector('h3').textContent : 'Unknown';

                // Only track meaningful reads (> 2 seconds)
                if (duration > 2) {
                    gtag('event', 'project_read_time', {
                        'event_category': 'Engagement',
                        'event_label': projectTitle,
                        'value': duration, // seconds
                        'project_name': projectTitle
                    });
                }
                projectStartTime = 0; // Reset
            }
        }
    }


    // --- FAB & CONTACT FORM ---
    const fab = document.getElementById('fab-contact');
    const contactModal = document.getElementById('contact-modal');
    const closeFormBtn = document.querySelector('.close-form-btn');

    if (fab && contactModal) {
        fab.addEventListener('click', () => {
            contactModal.classList.add('active');
            document.body.style.overflow = 'hidden'; // Lock scroll
            if (typeof gtag === 'function') {
                gtag('event', 'open_contact_form', { 'event_category': 'Conversion' });
            }
        });
    }

    if (closeFormBtn) {
        closeFormBtn.addEventListener('click', () => {
            contactModal.classList.remove('active');
            document.body.style.overflow = 'auto'; // Re-enable scroll
        });
    }

    // --- ADVANCED ANALYTICS (GA4) ---

    // 1. Resume Download Tracking
    const resumeBtn = document.getElementById('resume-btn');
    if (resumeBtn) {
        resumeBtn.addEventListener('click', () => {
            if (typeof gtag === 'function') {
                gtag('event', 'resume_download', {
                    'event_category': 'Conversion',
                    'file_name': 'ColbyReichenbach_Resume'
                });
            }
        });
    }

    // 2. Universal Outbound Link Tracking (GitHub, Streamlit, Tableau, external)
    document.body.addEventListener('click', (e) => {
        const link = e.target.closest('a');
        if (link && link.hostname !== window.location.hostname && typeof gtag === 'function') {
            // Check if it's inside a project modal
            const modal = link.closest('.project-modal');
            const projectName = modal ? (modal.querySelector('h3')?.textContent || 'Unknown Project') : 'General';

            gtag('event', 'click', {
                'event_category': 'Outbound Link',
                'event_label': link.href,
                'link_url': link.href,
                'link_domain': link.hostname,
                'context': projectName
            });
        }
    });

    // 3. Track Social Contact Clicks (Business Card)
    const contactLinks = document.querySelectorAll('.contact-item');
    contactLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (typeof gtag === 'function') {
                let platform = 'Unknown';
                if (link.querySelector('.fa-linkedin')) platform = 'LinkedIn';
                else if (link.querySelector('.fa-github')) platform = 'GitHub';
                else if (link.querySelector('.fa-envelope')) platform = 'Email';

                gtag('event', 'social_contact_click', {
                    'event_category': 'Engagement',
                    'event_label': platform,
                    'platform': platform
                });
            }
        });
    });

    // 4. Enhanced Time Tracking (Handle Tab Close/Switch)
    document.addEventListener("visibilitychange", () => {
        if (document.visibilityState === 'hidden') {
            // If a modal is currently open, track time now
            const activeModal = document.querySelector('.project-modal.active');
            if (activeModal && projectStartTime > 0) {
                const duration = Math.round((Date.now() - projectStartTime) / 1000);
                const projectTitle = activeModal.querySelector('h3')?.textContent || 'Unknown';

                if (duration > 2 && typeof gtag === 'function') {
                    gtag('event', 'project_read_time', {
                        'event_category': 'Engagement',
                        'event_label': projectTitle,
                        'value': duration,
                        'project_name': projectTitle,
                        'trigger': 'tab_hidden'
                    });
                }
                // Reset time so we don't double count if they come back
                projectStartTime = Date.now();
            }
        }
    });

    // 5. Scroll Depth Tracking
    let scrollDepths = { 25: false, 50: false, 75: false, 100: false };
    window.addEventListener('scroll', () => {
        if (typeof gtag !== 'function') return;

        const winHeight = window.innerHeight;
        const docHeight = document.documentElement.scrollHeight;
        const scrollTop = window.scrollY;
        const scrollPercent = Math.round(((scrollTop + winHeight) / docHeight) * 100);

        [25, 50, 75, 100].forEach(threshold => {
            if (scrollPercent >= threshold && !scrollDepths[threshold]) {
                scrollDepths[threshold] = true;
                gtag('event', 'scroll_depth', {
                    'event_category': 'Engagement',
                    'value': threshold,
                    'percent_scrolled': threshold + '%'
                });
            }
        });
    }, { passive: true });

});
