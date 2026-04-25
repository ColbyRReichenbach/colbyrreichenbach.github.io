document.addEventListener("DOMContentLoaded", () => {
  const card = document.querySelector(".business-card");
  const heroSection = document.querySelector(".hero-section");
  const flipBackBtn = document.getElementById("flipBackBtn");
  const contactModal = document.getElementById("contact-modal");
  const fab = document.getElementById("fab-contact");
  const closeFormBtn = document.querySelector(".close-form-btn");
  const contactForm = document.querySelector(".contact-form");
  const resumeBtn = document.getElementById("resume-btn");
  const filterButtons = Array.from(document.querySelectorAll("[data-project-filter]"));
  const shortcutButtons = Array.from(document.querySelectorAll("[data-project-shortcut]"));
  const projectCards = Array.from(document.querySelectorAll(".system-card[data-tags]"));
  const projectSections = Array.from(document.querySelectorAll("[data-project-section]"));
  const projectCloseButtons = Array.from(document.querySelectorAll(".close-project"));
  const cardExpandButtons = Array.from(document.querySelectorAll(".card-expand-toggle"));
  const cardModalButtons = Array.from(document.querySelectorAll(".card-modal-trigger"));
  const contactLinks = Array.from(document.querySelectorAll(".contact-item"));
  const filterContext = document.getElementById("filter-context");
  const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;
  const cardPerspectiveContent = {
    shelfops: {
      "data-engineering": {
        kicker: "Operational Data Model · Ingestion",
        summary:
          "Built around store, SKU, supplier, and order entities, this project shows the ingestion and serving layers behind replenishment operations.",
        stack: ["Python", "FastAPI", "PostgreSQL", "TimescaleDB", "Redis", "Celery", "Kafka-Compatible Ingestion"],
      },
      "analytics-engineering": {
        kicker: "Inventory Metrics · Decision Views",
        summary:
          "This view emphasizes the reporting layer that turns inventory, forecast, alert, and purchase-order data into replenishment review workflows.",
        stack: ["PostgreSQL", "TimescaleDB", "Python", "FastAPI", "React", "TypeScript", "Redis"],
      },
      mlops: {
        kicker: "Forecasting Governance · Model Ops",
        summary:
          "A forecasting workflow that combines demand models, alert generation, retraining checks, and promotion gates around inventory decisions.",
        stack: ["Python", "FastAPI", "PostgreSQL", "TimescaleDB", "Celery", "Redis", "React"],
      },
    },
    "spec-nyc": {
      "data-engineering": {
        kicker: "Validated Inputs · Feature Pipeline",
        summary:
          "A valuation pipeline that starts with raw transaction ingestion, typed validation, and reproducible feature sets before model training begins.",
        stack: ["Python", "Pandera", "NYC Open Data", "FastAPI", "Streamlit", "MLflow", "XGBoost"],
      },
      "analytics-engineering": {
        kicker: "Segment Scorecards · Valuation Reporting",
        summary:
          "A valuation analytics workflow with derived segments, model scorecards, and inspection surfaces for understanding where model performance holds or fails.",
        stack: ["Python", "Pandera", "SHAP", "Streamlit", "FastAPI", "MLflow", "XGBoost"],
      },
      mlops: {
        kicker: "Model Promotion · Release Checks",
        summary:
          "A model-governance workflow with experiment tracking, champion-challenger comparison, explainability artifacts, and controlled promotion checks.",
        stack: ["Python", "XGBoost", "Optuna", "MLflow", "SHAP", "Pandera", "FastAPI"],
      },
      "product-data-science": {
        kicker: "Error Analysis · Decision Support",
        summary:
          "A valuation system centered on segment-level error analysis, release readiness, and business-facing inspection rather than a single aggregate model score.",
        stack: ["Python", "XGBoost", "SHAP", "Streamlit", "FastAPI", "Optuna", "MLflow"],
      },
    },
    aibs: {
      "analytics-engineering": {
        kicker: "Analytical Views · Editorial Outputs",
        summary:
          "This view emphasizes the reporting layer that turns live ABS challenge events into normalized entities, SQL-first views, leaderboards, and article-ready analysis.",
        stack: ["PostgreSQL", "Python ETL", "Next.js", "TypeScript", "React", "Clerk", "Playwright"],
      },
      "data-engineering": {
        kicker: "Event Ingestion · Serving Tables",
        summary:
          "A real-time data pipeline that ingests ABS challenge events, normalizes domain entities, publishes serving tables, and exposes them through a production web surface.",
        stack: ["Python ETL", "PostgreSQL", "Next.js", "TypeScript", "React", "Clerk", "Vitest"],
      },
      "application-engineering": {
        kicker: "Event Reporting · Live Context",
        summary:
          "This view emphasizes the application layer: reporting views, publishing tools, and live context tied to game, team, and umpire pages.",
        stack: ["Next.js", "TypeScript", "PostgreSQL", "Python ETL", "Clerk", "Vitest", "Playwright"],
      },
      "full-stack-product": {
        kicker: "Live Data Product · Publishing",
        summary:
          "A full-stack sports application with authenticated user surfaces, editorial publishing, comments, moderation, and live analytics.",
        stack: ["Next.js", "React", "TypeScript", "PostgreSQL", "Clerk", "Python ETL", "Vitest"],
      },
    },
    pulse: {
      "application-engineering": {
        kicker: "Coaching Workflow · User Context",
        summary:
          "This view emphasizes the product layer: user-specific workout context, request safety checks, and observable response infrastructure.",
        stack: ["Next.js", "TypeScript", "Supabase", "Upstash Redis", "Sentry", "Vitest", "Playwright"],
      },
      "full-stack-product": {
        kicker: "Authenticated Product · Multi-Tenant Data",
        summary:
          "A full-stack coaching product with auth, row-level data isolation, analytics surfaces, rate limits, and production monitoring.",
        stack: ["Next.js", "TypeScript", "Supabase", "Upstash Redis", "Sentry", "Vercel", "Playwright"],
      },
      "product-data-science": {
        kicker: "Performance Tracking · User Analytics",
        summary:
          "A training analytics product that turns workout logs and benchmark history into user-level progress views and coaching context.",
        stack: ["Supabase", "Next.js", "TypeScript", "Upstash Redis", "Sentry", "Vitest", "Playwright"],
      },
    },
    "proactive-retention": {
      "analytics-engineering": {
        kicker: "Decision Queue · Complaint Signals",
        summary:
          "A retention workflow that combines churn scores, complaint-derived features, and business value into an analyst-facing prioritization queue.",
        stack: ["Python", "Pandas", "XGBoost", "FastAPI", "Streamlit", "Scikit-learn", "Docker"],
      },
      "application-engineering": {
        kicker: "Complaint Classification · Retention Workflow",
        summary:
          "This view emphasizes the application logic that layers complaint classification and theme extraction onto model-driven prioritization.",
        stack: ["Python", "FastAPI", "XGBoost", "Streamlit", "Docker", "Pandas", "Scikit-learn"],
      },
      "product-data-science": {
        kicker: "Churn Triage · Business Prioritization",
        summary:
          "A business-facing retention queue that balances churn risk, customer value, and complaint context for analyst action.",
        stack: ["Python", "XGBoost", "FastAPI", "Streamlit", "Pandas", "Scikit-learn", "Docker"],
      },
      mlops: {
        kicker: "Model Tuning · Serving Workflow",
        summary:
          "A churn modeling workflow with recall-oriented tuning, API serving, and reviewer-facing output inspection.",
        stack: ["Python", "XGBoost", "FastAPI", "Docker", "Streamlit", "Pandas", "Scikit-learn"],
      },
    },
    "opportunity-radar": {
      "data-engineering": {
        kicker: "Cross-System Data Model · Automation",
        summary:
          "A workflow platform that normalizes Gmail, calendar, ATS, company, and contact data into a structured search and follow-up system.",
        stack: ["FastAPI", "SQLAlchemy", "Alembic", "Celery", "Redis", "Google APIs", "React"],
      },
      "application-engineering": {
        kicker: "Enrichment Workflow · Opportunity Research",
        summary:
          "This view emphasizes the workflow logic that applies enrichment, parsing, and resume-tailoring steps to hiring pipeline data.",
        stack: ["FastAPI", "Celery", "Redis", "Google APIs", "React", "Vite", "Chrome Extension"],
      },
      "workflow-automation": {
        kicker: "Hiring Workflow · Multi-Step Automation",
        summary:
          "A workflow application for application tracking, follow-up timing, ATS parsing, and relationship management.",
        stack: ["FastAPI", "SQLAlchemy", "Alembic", "Celery", "Redis", "React", "Vite"],
      },
    },
    masters: {
      "analytics-engineering": {
        kicker: "Score Validation · Tournament Views",
        summary:
          "A sports analytics app that transforms tournament data into validated scorecards, leaderboard views, and comparative round analysis.",
        stack: ["TypeScript", "React", "Vite", "Recharts", "Tailwind", "Vercel", "Node Pipeline"],
      },
      "full-stack-product": {
        kicker: "Front-End Data Product · Interactive Story",
        summary:
          "An interactive analytics application that combines pipeline-generated artifacts with scorecard, profile, and tournament reporting views.",
        stack: ["React", "Vite", "TypeScript", "Recharts", "Tailwind", "Vercel", "Node.js"],
      },
    },
  };
  const filterDescriptions = {
    all: "Showing the default project view. Select a role to shift the summary and stack toward that kind of work.",
    "application-engineering": "Application Engineering view: emphasis on authenticated flows, request handling, monitoring, and product delivery.",
    "data-engineering": "Data Engineering view: emphasis on ingestion, data modeling, background processing, and serving layers.",
    "analytics-engineering": "Analytics Engineering view: emphasis on reporting models, analytical views, scorecards, and decision-facing outputs.",
    mlops: "MLOps view: emphasis on training workflows, validation, governance, release checks, and serving behavior.",
    "product-data-science": "Product Data Science view: emphasis on prioritization logic, analytical decision support, and business-facing measurement.",
    "full-stack-product": "Full-Stack Product view: emphasis on authenticated surfaces, application behavior, and user-facing delivery.",
    "workflow-automation": "Workflow Automation view: emphasis on orchestration, automation logic, integrations, alerts, and operational workflows.",
  };

  let isFlipped = false;
  let projectStartTime = 0;
  let lastModalTrigger = null;
  let lastContactTrigger = null;

  const cardBaseState = new Map();

  projectCards.forEach((cardElement) => {
    cardBaseState.set(cardElement, {
      kicker: cardElement.querySelector(".project-kicker")?.textContent || "",
      summary: cardElement.querySelector(".project-summary")?.textContent || "",
      stack: Array.from(cardElement.querySelectorAll(".tag-row-stack span")).map((tag) => tag.textContent || ""),
    });
  });

  function setCardExpandedState(cardElement, expanded) {
    if (!cardElement) return;

    const detail = cardElement.querySelector(".card-detail");
    const toggle = cardElement.querySelector(".card-expand-toggle");

    if (!detail || !toggle) return;

    detail.hidden = !expanded;
    toggle.setAttribute("aria-expanded", String(expanded));
    toggle.textContent = expanded ? "Collapse" : "Expand";
  }

  projectCards.forEach((cardElement, index) => {
    const detail = cardElement.querySelector(".card-detail");
    const toggle = cardElement.querySelector(".card-expand-toggle");
    const modalTrigger = cardElement.querySelector(".card-modal-trigger");
    const title = cardElement.querySelector("h3")?.textContent?.trim();
    const projectId = cardElement.dataset.projectId || `project-${index + 1}`;

    if (detail && toggle) {
      detail.id = detail.id || `${projectId}-details`;
      toggle.setAttribute("aria-controls", detail.id);
      if (title) {
        toggle.setAttribute("aria-label", `Expand project details for ${title}`);
      }
      setCardExpandedState(cardElement, false);
    }

    if (modalTrigger && title) {
      modalTrigger.setAttribute("aria-label", `Open detailed project write-up for ${title}`);
    }
  });

  if (typeof marked !== "undefined") {
    marked.setOptions({
      gfm: true,
      breaks: false,
    });
  }

  function setBodyScrollLocked(locked) {
    document.body.style.overflow = locked ? "hidden" : "";
  }

  function trackEvent(name, payload) {
    if (typeof gtag === "function") {
      gtag("event", name, payload);
    }
  }

  function flipCard() {
    if (!card) return;
    isFlipped = !isFlipped;
    card.classList.toggle("is-flipped", isFlipped);
    card.style.transform = isFlipped ? "rotateY(180deg)" : "rotateY(0deg)";

    trackEvent("card_flip", {
      event_category: "Interaction",
      event_label: isFlipped ? "Back" : "Front",
    });
  }

  if (card) {
    if (isTouchDevice) {
      let touchHandled = false;

      card.addEventListener(
        "touchstart",
        (event) => {
          if (!event.target.closest("a") && !event.target.closest("button")) {
            touchHandled = true;
          }
        },
        { passive: true }
      );

      card.addEventListener("touchend", (event) => {
        if (touchHandled && !event.target.closest("a") && !event.target.closest("button")) {
          event.preventDefault();
          flipCard();
        }
        touchHandled = false;
      });

      card.addEventListener("click", (event) => {
        if (!event.target.closest("a") && !event.target.closest("button")) {
          event.preventDefault();
          event.stopPropagation();
        }
      });
    } else {
      card.addEventListener("click", (event) => {
        if (!event.target.closest("a") && !event.target.closest("button")) {
          flipCard();
        }
      });
    }

    card.querySelectorAll("a, button").forEach((element) => {
      element.addEventListener("click", (event) => event.stopPropagation());
      element.addEventListener("touchend", (event) => event.stopPropagation());
    });
  }

  if (flipBackBtn) {
    flipBackBtn.addEventListener("click", (event) => {
      event.stopPropagation();
      isFlipped = false;
      if (card) {
        card.classList.remove("is-flipped");
        card.style.transform = "rotateY(0deg)";
      }
    });
  }

  if (heroSection && card && !isTouchDevice) {
    let targetRotateX = 0;
    let targetRotateY = 0;
    let currentRotateX = 0;
    let currentRotateY = 0;
    const lerpFactor = 0.08;
    const maxTilt = 14;

    const animate = () => {
      currentRotateX += (targetRotateX - currentRotateX) * lerpFactor;
      currentRotateY += (targetRotateY - currentRotateY) * lerpFactor;

      if (isFlipped) {
        card.style.transform = "rotateY(180deg)";
      } else {
        card.style.transform = `rotateY(${currentRotateY}deg) rotateX(${currentRotateX}deg)`;
      }

      requestAnimationFrame(animate);
    };

    animate();

    heroSection.addEventListener("mousemove", (event) => {
      if (isFlipped) return;

      const rect = heroSection.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      targetRotateX = ((y - centerY) / centerY) * -maxTilt;
      targetRotateY = ((x - centerX) / centerX) * maxTilt;
    });

    heroSection.addEventListener("mouseleave", () => {
      targetRotateX = 0;
      targetRotateY = 0;
    });
  } else if (card && isTouchDevice) {
    let targetRotateX = 0;
    let targetRotateY = 0;
    let currentRotateX = 0;
    let currentRotateY = 0;
    const lerpFactor = 0.1;
    const maxTilt = 10;

    const animateMobile = () => {
      currentRotateX += (targetRotateX - currentRotateX) * lerpFactor;
      currentRotateY += (targetRotateY - currentRotateY) * lerpFactor;

      if (isFlipped) {
        card.style.transform = "rotateY(180deg)";
      } else {
        card.style.transform = `rotateY(${currentRotateY}deg) rotateX(${currentRotateX}deg)`;
      }

      requestAnimationFrame(animateMobile);
    };

    animateMobile();

    const handleOrientation = (event) => {
      if (isFlipped) return;

      let beta = event.beta || 0;
      let gamma = event.gamma || 0;

      beta = Math.max(-45, Math.min(45, beta - 45));
      gamma = Math.max(-45, Math.min(45, gamma));

      targetRotateX = (beta / 45) * -maxTilt;
      targetRotateY = (gamma / 45) * maxTilt;
    };

    const isSecure = location.protocol === "https:" || location.hostname === "localhost";
    if (window.DeviceOrientationEvent && isSecure) {
      if (typeof DeviceOrientationEvent.requestPermission === "function") {
        const requestGyroPermission = () => {
          DeviceOrientationEvent.requestPermission()
            .then((response) => {
              if (response === "granted") {
                window.addEventListener("deviceorientation", handleOrientation);
              }
            })
            .catch((error) => {
              console.error("Gyroscope permission error:", error);
            });
        };

        card.addEventListener("touchstart", requestGyroPermission, { once: true });
      } else {
        window.addEventListener("deviceorientation", handleOrientation);
      }
    }
  }

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    document.querySelectorAll(".scroll-reveal").forEach((element) => observer.observe(element));
  } else {
    document.querySelectorAll(".scroll-reveal").forEach((element) => element.classList.add("visible"));
  }

  function loadModalContent(modal) {
    const markdownSrc = modal.getAttribute("data-markdown-source");
    const contentContainer = modal.querySelector(".markdown-content");
    if (!markdownSrc || !contentContainer || contentContainer.dataset.loaded) return;

    contentContainer.innerHTML = `
      <div class="skeleton-loader">
        <div class="skeleton-text title"></div>
        <div class="skeleton-text"></div>
        <div class="skeleton-text"></div>
        <div class="skeleton-text short"></div>
      </div>
    `;

    fetch(markdownSrc)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to load ${markdownSrc}`);
        }
        return response.text();
      })
      .then((text) => {
        contentContainer.innerHTML = typeof marked !== "undefined" ? marked.parse(text) : text;
        contentContainer.dataset.loaded = "true";
      })
      .catch((error) => {
        console.error("Failed to load markdown", error);
        contentContainer.innerHTML = "<p>Could not load project details.</p>";
      });
  }

  function openModal(modalId, trigger = null) {
    const modal = document.getElementById(modalId);
    if (!modal) return;

    lastModalTrigger = trigger;
    projectStartTime = Date.now();
    modal.classList.add("active");
    setBodyScrollLocked(true);
    loadModalContent(modal);

    const closeButton = modal.querySelector(".close-project");
    if (closeButton) {
      requestAnimationFrame(() => closeButton.focus());
    }

    trackEvent("view_project", {
      event_category: "Portfolio",
      event_label: modalId,
    });
  }

  function closeModal(modal) {
    if (!modal) return;

    modal.classList.remove("active");
    setBodyScrollLocked(false);

    if (projectStartTime > 0) {
      const duration = Math.round((Date.now() - projectStartTime) / 1000);
      const projectTitle = modal.querySelector(".markdown-content h1")?.textContent
        || modal.querySelector("h3")?.textContent
        || "Unknown Project";

      if (duration > 2) {
        trackEvent("project_read_time", {
          event_category: "Engagement",
          event_label: projectTitle,
          value: duration,
          project_name: projectTitle,
        });
      }
    }

    projectStartTime = 0;

    if (lastModalTrigger && typeof lastModalTrigger.focus === "function") {
      lastModalTrigger.focus();
    }
    lastModalTrigger = null;
  }

  cardExpandButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const cardElement = button.closest(".system-card");
      const detail = cardElement?.querySelector(".card-detail");
      if (!cardElement || !detail) return;

      setCardExpandedState(cardElement, detail.hidden);
    });
  });

  cardModalButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const cardElement = button.closest(".system-card");
      const modalId = cardElement?.getAttribute("data-modal-target");
      if (modalId) {
        openModal(modalId, button);
      }
    });
  });

  projectCloseButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      closeModal(event.currentTarget.closest(".project-modal"));
    });
  });

  function closeContactModal() {
    if (!contactModal) return;
    contactModal.classList.remove("active");
    setBodyScrollLocked(false);

    if (lastContactTrigger && typeof lastContactTrigger.focus === "function") {
      lastContactTrigger.focus();
    }
    lastContactTrigger = null;
  }

  if (fab && contactModal) {
    fab.addEventListener("click", () => {
      lastContactTrigger = fab;
      contactModal.classList.add("active");
      setBodyScrollLocked(true);
      closeFormBtn?.focus();

      trackEvent("open_contact_form", {
        event_category: "Conversion",
      });
    });
  }

  function updateFabVisibility() {
    if (!fab) return;
    const shouldShow = window.scrollY > Math.min(window.innerHeight * 0.7, 520);
    fab.classList.toggle("is-visible", shouldShow);
  }

  updateFabVisibility();
  window.addEventListener("scroll", updateFabVisibility, { passive: true });

  if (closeFormBtn) {
    closeFormBtn.addEventListener("click", closeContactModal);
  }

  window.addEventListener("click", (event) => {
    const projectModal = event.target.classList?.contains("project-modal") ? event.target : null;
    if (projectModal) {
      closeModal(projectModal);
    }

    if (event.target === contactModal) {
      closeContactModal();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;

    const activeProjectModal = document.querySelector(".project-modal.active");
    if (activeProjectModal) {
      closeModal(activeProjectModal);
      return;
    }

    if (contactModal?.classList.contains("active")) {
      closeContactModal();
    }
  });

  function applyFilter(filter) {
    filterButtons.forEach((button) => {
      const isActive = button.dataset.projectFilter === filter;
      button.classList.toggle("active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });

    projectCards.forEach((cardElement) => {
      const tags = (cardElement.dataset.tags || "").split(/\s+/).filter(Boolean);
      const shouldShow = filter === "all" || tags.includes(filter);
      cardElement.hidden = !shouldShow;
      setCardExpandedState(cardElement, false);
      updateCardPerspective(cardElement, filter);
    });

    projectSections.forEach((section) => {
      const visibleCount = section.querySelectorAll(".system-card:not([hidden])").length;
      section.hidden = visibleCount === 0;
    });

    if (filterContext) {
      filterContext.textContent = filterDescriptions[filter] || filterDescriptions.all;
    }
  }

  function renderTagList(container, items) {
    if (!container) return;
    container.innerHTML = items.map((item) => `<span>${item}</span>`).join("");
  }

  function updateCardPerspective(cardElement, filter) {
    const baseState = cardBaseState.get(cardElement);
    if (!baseState) return;

    const projectId = cardElement.dataset.projectId;
    const perspective = projectId ? cardPerspectiveContent[projectId]?.[filter] : null;
    const kickerElement = cardElement.querySelector(".project-kicker");
    const summaryElement = cardElement.querySelector(".project-summary");
    const stackContainer = cardElement.querySelector(".tag-row-stack");

    if (kickerElement) {
      kickerElement.textContent = perspective?.kicker || baseState.kicker;
    }

    if (summaryElement) {
      summaryElement.textContent = perspective?.summary || baseState.summary;
    }

    renderTagList(stackContainer, perspective?.stack || baseState.stack);
  }

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.dataset.projectFilter || "all";
      applyFilter(filter);

      trackEvent("project_filter", {
        event_category: "Portfolio",
        event_label: filter,
      });
    });
  });

  shortcutButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.dataset.projectShortcut || "all";
      applyFilter(filter);
      document.getElementById("flagship-systems")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  applyFilter("all");

  if (contactForm) {
    contactForm.addEventListener("submit", async (event) => {
      event.preventDefault();

      const submitBtn = contactForm.querySelector('button[type="submit"]');
      if (!submitBtn) return;

      const originalText = submitBtn.textContent;
      submitBtn.textContent = "Sending...";
      submitBtn.disabled = true;

      try {
        const response = await fetch(contactForm.action, {
          method: "POST",
          body: new FormData(contactForm),
          headers: { Accept: "application/json" },
        });

        if (!response.ok) {
          throw new Error("Form submission failed");
        }

        submitBtn.textContent = "Message sent";
        submitBtn.style.backgroundColor = "var(--color-success)";
        contactForm.reset();

        trackEvent("form_submission", {
          event_category: "Conversion",
          event_label: "Contact Form Success",
        });

        window.setTimeout(() => {
          submitBtn.textContent = originalText;
          submitBtn.style.backgroundColor = "";
          submitBtn.disabled = false;
          closeContactModal();
        }, 1800);
      } catch (error) {
        console.error("Form error:", error);
        submitBtn.textContent = "Error - try again";
        submitBtn.style.backgroundColor = "#b42318";
        submitBtn.disabled = false;

        window.setTimeout(() => {
          submitBtn.textContent = originalText;
          submitBtn.style.backgroundColor = "";
        }, 2400);
      }
    });
  }

  if (resumeBtn) {
    resumeBtn.addEventListener("click", () => {
      trackEvent("resume_download", {
        event_category: "Conversion",
        file_name: "ColbyReichenbach_Resume_1",
      });
    });
  }

  document.body.addEventListener("click", (event) => {
    const link = event.target.closest("a");
    if (!link || typeof gtag !== "function") return;
    if (!link.hostname || link.hostname === window.location.hostname) return;

    const modal = link.closest(".project-modal");
    const projectName = modal?.querySelector(".markdown-content h1")?.textContent
      || modal?.querySelector("h3")?.textContent
      || "General";

    gtag("event", "click", {
      event_category: "Outbound Link",
      event_label: link.href,
      link_url: link.href,
      link_domain: link.hostname,
      context: projectName,
    });
  });

  contactLinks.forEach((link) => {
    link.addEventListener("click", () => {
      let platform = "Unknown";
      if (link.querySelector(".fa-linkedin")) platform = "LinkedIn";
      if (link.querySelector(".fa-github")) platform = "GitHub";
      if (link.querySelector(".fa-envelope")) platform = "Email";

      trackEvent("social_contact_click", {
        event_category: "Engagement",
        event_label: platform,
        platform,
      });
    });
  });

  document.addEventListener("visibilitychange", () => {
    const activeModal = document.querySelector(".project-modal.active");
    if (document.visibilityState !== "hidden" || !activeModal || projectStartTime <= 0) return;

    const duration = Math.round((Date.now() - projectStartTime) / 1000);
    const projectTitle = activeModal.querySelector(".markdown-content h1")?.textContent
      || activeModal.querySelector("h3")?.textContent
      || "Unknown";

    if (duration > 2) {
      trackEvent("project_read_time", {
        event_category: "Engagement",
        event_label: projectTitle,
        value: duration,
        project_name: projectTitle,
        trigger: "tab_hidden",
      });
    }

    projectStartTime = Date.now();
  });

  const scrollDepths = { 25: false, 50: false, 75: false, 100: false };
  window.addEventListener(
    "scroll",
    () => {
      if (typeof gtag !== "function") return;

      const winHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const scrollPercent = Math.round(((scrollTop + winHeight) / docHeight) * 100);

      [25, 50, 75, 100].forEach((threshold) => {
        if (scrollPercent >= threshold && !scrollDepths[threshold]) {
          scrollDepths[threshold] = true;
          gtag("event", "scroll_depth", {
            event_category: "Engagement",
            value: threshold,
            percent_scrolled: `${threshold}%`,
          });
        }
      });
    },
    { passive: true }
  );
});
