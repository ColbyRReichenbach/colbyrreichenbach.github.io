document.addEventListener("DOMContentLoaded", () => {
  const projects = {
    shelfops: {
      title: "ShelfOps",
      kicker: "/ Inventory Decision System",
      image: "static/images/shelfops.png",
      summary: "An inventory decision system that models store, SKU, supplier, and demand data into forecasts, risk signals, reorder recommendations, and reviewable replenishment workflows.",
      problem: "Inventory work is spread across transactions, on-hand inventory, supplier rules, receiving issues, reorder policies, promotions, and exception events.",
      system: "Async FastAPI backend, PostgreSQL and TimescaleDB persistence, Redis caching, Celery workers, Kafka-compatible ingestion patterns, React operations dashboard, and governance checks around forecasting workflows.",
      stack: "Python, FastAPI, SQLAlchemy, PostgreSQL, TimescaleDB, Redis, Celery, React, TypeScript, Docker",
      links: [{ label: "Repo", href: "https://github.com/ColbyRReichenbach/shelfops" }]
    },
    spec: {
      title: "SPEC-NYC",
      kicker: "/ Automated Valuation Workflow",
      image: "static/images/spec_valuation.png",
      summary: "A production-style valuation workflow on NYC property transactions with validation, explainability, segment scorecards, model comparison, and release governance.",
      problem: "Valuation work cannot stop at one aggregate model metric; reviewers need to know where performance holds, where it fails, and what evidence supports promotion.",
      system: "Raw data ingestion, Pandera contracts, XGBoost training, Optuna tuning, MLflow tracking, SHAP artifacts, champion-challenger comparison, FastAPI and Streamlit inspection surfaces.",
      stack: "Python, XGBoost, Optuna, MLflow, SHAP, Pandera, FastAPI, Streamlit, Docker",
      links: [{ label: "Repo", href: "https://github.com/ColbyRReichenbach/SPEC-NYC" }]
    },
    aibs: {
      title: "AiBS",
      kicker: "/ Real-Time Sports Analytics",
      image: "static/images/AIBS.png",
      summary: "A real-time baseball analytics product that normalizes ABS challenge events into warehouse tables, reporting views, editorial outputs, and interactive analysis.",
      problem: "ABS challenge events create analytical signals that are hard to inspect from isolated game events or static box scores.",
      system: "Next.js and TypeScript application surfaces, PostgreSQL serving data, Python ETL, warehouse-to-serving publishing, SQL-first analytical views, auth, publishing, comments, and release checks.",
      stack: "Next.js, React, TypeScript, PostgreSQL, Python ETL, Clerk, Vitest, Playwright",
      links: [
        { label: "Repo", href: "https://github.com/ColbyRReichenbach/abs-observatory" },
        { label: "Live", href: "https://abs-observatory.vercel.app" }
      ]
    },
    pulse: {
      title: "Pulse Tracker",
      kicker: "/ Multi-Tenant Coaching Platform",
      image: "static/images/pulse_preview.png",
      summary: "A coaching application with authenticated user data, Supabase RLS, rate limiting, request routing, safety checks, telemetry, and tested product behavior.",
      problem: "Generated coaching features need user context, data isolation, safe request handling, rate limits, and observability to be useful in practice.",
      system: "Next.js product interface, Supabase authentication and RLS, context routing, Upstash Redis rate limiting, Sentry monitoring, Vercel observability, and tested workout, analytics, profile, settings, onboarding, and admin surfaces.",
      stack: "Next.js, TypeScript, Supabase, Upstash Redis, Sentry, Vitest, Playwright, Vercel",
      links: [
        { label: "Repo", href: "https://github.com/ColbyRReichenbach/workout-web" },
        { label: "Live", href: "https://pulse-workout.vercel.app/" }
      ]
    },
    opportunity: {
      title: "Opportunity Radar",
      kicker: "/ Job, Company, and Contact Workflow System",
      image: null,
      summary: "A workflow system for structuring jobs, companies, contacts, emails, interviews, ATS signals, resume variants, and relationship context into an actionable search pipeline.",
      problem: "A serious search pipeline is fragmented across tabs, spreadsheets, inboxes, calendars, ATS systems, and memory.",
      system: "FastAPI backend, SQLAlchemy models, Alembic migrations, Google OAuth, Gmail and calendar sync, Celery workers, enrichment services, React and Vite dashboard, and a Chrome extension.",
      stack: "Python, FastAPI, SQLAlchemy, Alembic, Celery, Redis, Google APIs, React, Vite, Chrome Extension",
      links: []
    },
    retention: {
      title: "Proactive Retention Agent",
      kicker: "/ Churn Risk Decision Workflow",
      image: "static/images/proactive_retention_agent.png",
      summary: "A retention decision workflow that combines churn risk, complaint context, sentiment signals, and customer value into a ranked analyst queue.",
      problem: "A churn score alone does not tell a team what to do next; retention workflows need prioritization, business logic, and complaint context.",
      system: "XGBoost churn model served through FastAPI, Dockerized API layer, complaint theme and sentiment classification, priority logic, and Streamlit dashboard with transparent inspection paths.",
      stack: "Python, XGBoost, FastAPI, Docker, Streamlit, Pandas, Scikit-learn",
      links: [{ label: "Repo", href: "https://github.com/ColbyRReichenbach/proactive-retention-agent-build" }]
    },
    masters: {
      title: "Masters Tournament Intelligence",
      kicker: "/ Interactive Tournament Analytics",
      image: "static/images/masters_rewind.jpg",
      summary: "An interactive sports analytics app for scorecards, player views, leaderboard movement, and round-by-round tournament exploration.",
      problem: "Tournament coverage often collapses to raw scores and a leaderboard, leaving course context and round movement hard to inspect.",
      system: "Vite and React application, TypeScript pipeline scripts, generated JSON artifacts, scorecard validation, course-data validation, Recharts visualizations, Tailwind styling, and Vercel deployment configuration.",
      stack: "Vite, React, TypeScript, Tailwind, Recharts, Node pipeline, Vercel",
      links: []
    },
    draftkings: {
      title: "DK Sentinel",
      kicker: "/ Responsible Gaming Case Review",
      image: "static/images/draftkings.png",
      summary: "A responsible-gaming analytics project centered on risk-signal modeling, evidence tracking, case lifecycle management, and analyst review workflow.",
      problem: "Responsible-gaming analysts need deterministic checks, evidence inspection, case history, and state-specific compliance context.",
      system: "dbt-style transformation layer, DuckDB and Snowflake-style modeling, FastAPI backend, read-only SQL guardrails, React case queue, analyst notes, assisted review support, and manager-level throughput reporting.",
      stack: "Python, dbt, DuckDB, FastAPI, React, TypeScript, GitHub Actions, Vercel",
      links: []
    }
  };

  const orb = document.querySelector(".cursor-orb");
  const reveals = document.querySelectorAll(".reveal");
  const stage = document.getElementById("work-stage");
  const board = document.getElementById("canvas-board");
  const viewButtons = document.querySelectorAll("[data-view]");
  const filterButtons = document.querySelectorAll("[data-filter]");
  const cards = document.querySelectorAll(".project-card");
  const modal = document.getElementById("project-modal");
  const modalMedia = document.getElementById("modal-media");
  const modalTitle = document.getElementById("modal-title");
  const modalKicker = document.getElementById("modal-kicker");
  const modalSummary = document.getElementById("modal-summary");
  const modalProblem = document.getElementById("modal-problem");
  const modalSystem = document.getElementById("modal-system");
  const modalStack = document.getElementById("modal-stack");
  const modalLinks = document.getElementById("modal-links");
  let activeFilter = "all";
  let drag = null;
  let pan = { x: 0, y: 0 };

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  }, { threshold: 0.05, rootMargin: "0px 0px -40px 0px" });
  reveals.forEach((element) => revealObserver.observe(element));

  window.addEventListener("pointermove", (event) => {
    if (orb) orb.style.transform = `translate(${event.clientX - 160}px, ${event.clientY - 160}px)`;
  });

  document.querySelectorAll("[data-scramble]").forEach((element) => {
    const original = element.textContent;
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789/";
    element.addEventListener("mouseenter", () => {
      let tick = 0;
      const timer = setInterval(() => {
        element.textContent = original.split("").map((char, index) => {
          if (char === " " || index < tick) return original[index];
          return chars[Math.floor(Math.random() * chars.length)];
        }).join("");
        tick += 1;
        if (tick > original.length) clearInterval(timer);
      }, 28);
    });
  });

  function setView(view) {
    stage.classList.toggle("grid-mode", view === "grid");
    stage.classList.toggle("canvas-mode", view === "canvas");
    viewButtons.forEach((button) => {
      const active = button.dataset.view === view;
      button.classList.toggle("active", active);
      button.setAttribute("aria-pressed", String(active));
    });
  }

  function setFilter(filter) {
    activeFilter = filter;
    filterButtons.forEach((button) => {
      const active = button.dataset.filter === filter;
      button.classList.toggle("active", active);
      button.setAttribute("aria-pressed", String(active));
    });
    cards.forEach((card) => {
      const tags = card.dataset.tags || "";
      card.classList.toggle("filtered-out", filter !== "all" && !tags.includes(filter));
    });
  }

  viewButtons.forEach((button) => button.addEventListener("click", () => setView(button.dataset.view)));
  filterButtons.forEach((button) => button.addEventListener("click", () => setFilter(button.dataset.filter)));

  stage.addEventListener("pointerdown", (event) => {
    if (stage.classList.contains("grid-mode") || event.target.closest(".project-card")) return;
    drag = { startX: event.clientX, startY: event.clientY, baseX: pan.x, baseY: pan.y };
    stage.classList.add("dragging");
    stage.setPointerCapture(event.pointerId);
  });
  stage.addEventListener("pointermove", (event) => {
    if (!drag) return;
    pan = { x: drag.baseX + event.clientX - drag.startX, y: drag.baseY + event.clientY - drag.startY };
    board.style.setProperty("--pan-x", `${pan.x}px`);
    board.style.setProperty("--pan-y", `${pan.y}px`);
  });
  stage.addEventListener("pointerup", (event) => {
    if (!drag) return;
    drag = null;
    stage.classList.remove("dragging");
    stage.releasePointerCapture(event.pointerId);
  });

  function openProject(projectId) {
    const project = projects[projectId];
    if (!project) return;
    modalKicker.textContent = project.kicker;
    modalTitle.textContent = project.title;
    modalSummary.textContent = project.summary;
    modalProblem.textContent = project.problem;
    modalSystem.textContent = project.system;
    modalStack.textContent = project.stack;
    modalMedia.innerHTML = project.image
      ? `<img src="${project.image}" alt="${project.title} preview" />`
      : `<div class="project-art radar-art"><span>${project.title.replace(" ", "<br>")}</span></div>`;
    modalLinks.innerHTML = project.links.length
      ? project.links.map((link) => `<a href="${link.href}" target="_blank" rel="noopener noreferrer">${link.label}</a>`).join("")
      : `<a href="mailto:colbyrreichenbach@gmail.com?subject=${encodeURIComponent(project.title)}">Ask about this</a>`;
    modal.hidden = false;
    document.body.classList.add("modal-open");
    modal.querySelector(".modal-close").focus();
  }

  function closeProject() {
    modal.hidden = true;
    document.body.classList.remove("modal-open");
  }

  cards.forEach((card) => {
    card.tabIndex = 0;
    card.setAttribute("role", "button");
    card.setAttribute("aria-label", `Open ${projects[card.dataset.project]?.title || "project"} details`);
    card.addEventListener("click", () => {
      if (activeFilter !== "all" && card.classList.contains("filtered-out")) return;
      openProject(card.dataset.project);
    });
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openProject(card.dataset.project);
      }
    });
  });

  modal.addEventListener("click", (event) => {
    if (event.target.matches("[data-close-modal]")) closeProject();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !modal.hidden) closeProject();
  });
});
