document.addEventListener("DOMContentLoaded", () => {
  const projects = Array.isArray(window.PORTFOLIO_PROJECTS) ? window.PORTFOLIO_PROJECTS : [];
  const projectMap = new Map(projects.map((project) => [project.id, project]));
  const orb = document.querySelector(".cursor-orb");
  const reveals = document.querySelectorAll(".reveal");
  const modal = document.getElementById("project-modal");
  const modalMedia = document.getElementById("modal-media");
  const modalTitle = document.getElementById("modal-title");
  const modalKicker = document.getElementById("modal-kicker");
  const modalSummary = document.getElementById("modal-summary");
  const modalProblem = document.getElementById("modal-problem");
  const modalSystem = document.getElementById("modal-system");
  const modalStack = document.getElementById("modal-stack");
  const modalEvidence = document.getElementById("modal-evidence");
  const modalLinks = document.getElementById("modal-links");
  let activeFilter = "all";
  let activeTrigger = null;

  function createRadarArt(project) {
    const art = document.createElement("div");
    art.className = "project-art radar-art";
    art.setAttribute("aria-hidden", "true");

    const label = document.createElement("span");
    label.innerHTML = project.title === "AppTrail" ? "App<br>Trail" : project.title.replace(" ", "<br>");
    art.append(label);
    return art;
  }

  function createImage(src, alt) {
    const image = document.createElement("img");
    image.src = src;
    image.alt = alt || "";
    return image;
  }

  function createProjectVisual(project, options = {}) {
    if (!project.image) return createRadarArt(project);

    if (options.flipbook) {
      const flipbook = document.createElement("span");
      flipbook.className = "flipbook";
      flipbook.append(createImage(project.image, project.cardAlt));
      if (project.homeSecondaryImage) {
        flipbook.append(createImage(project.homeSecondaryImage, ""));
      }
      return flipbook;
    }

    return createImage(project.image, project.cardAlt);
  }

  function renderHomeProjects() {
    const homeProjects = document.querySelector("[data-render-home-projects]");
    if (!homeProjects) return;

    const positions = ["card-a", "card-b", "card-c", "card-d"];
    const featured = projects.filter((project) => project.homeFeatured).slice(0, 4);
    homeProjects.replaceChildren(...featured.map((project, index) => {
      const button = document.createElement("button");
      button.className = `home-project-card ${positions[index] || ""}`.trim();
      button.type = "button";
      button.dataset.project = project.id;
      button.append(createProjectVisual(project, { flipbook: true }));

      const title = document.createElement("strong");
      title.textContent = project.cardTitle || project.title;
      button.append(title);
      return button;
    }));
  }

  function renderWorkGrid() {
    const workGrid = document.querySelector("[data-render-work-grid]");
    if (!workGrid) return;

    workGrid.replaceChildren(...projects.map((project) => {
      const card = document.createElement("article");
      card.className = `project-card ${project.cardSize || "size-md"}`;
      card.dataset.project = project.id;
      card.dataset.tags = project.tags.join(" ");
      card.append(createProjectVisual(project));

      const caption = document.createElement("div");
      caption.className = "project-card-caption";

      const title = document.createElement("span");
      title.textContent = project.cardTitle || project.title;

      const subtitle = document.createElement("small");
      subtitle.textContent = project.cardSubtitle || project.subtitle;

      caption.append(title, subtitle);

      const description = document.createElement("p");
      description.className = "project-card-description";
      description.textContent = project.cardDescription;

      card.append(caption, description);
      return card;
    }));
  }

  renderHomeProjects();
  renderWorkGrid();

  const filterButtons = document.querySelectorAll("[data-filter]");
  const cards = document.querySelectorAll(".project-card, .home-project-card");

  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("visible");
      });
    }, { threshold: 0.05, rootMargin: "0px 0px -40px 0px" });
    reveals.forEach((element) => revealObserver.observe(element));
  }

  window.addEventListener("pointermove", (event) => {
    if (orb) orb.style.transform = `translate(${event.clientX - 160}px, ${event.clientY - 160}px)`;
  });

  function setFilter(filter) {
    activeFilter = filter;
    filterButtons.forEach((button) => {
      const active = button.dataset.filter === filter;
      button.classList.toggle("active", active);
      button.setAttribute("aria-pressed", String(active));
    });
    cards.forEach((card) => {
      const tags = (card.dataset.tags || "").split(/\s+/).filter(Boolean);
      card.classList.toggle("filtered-out", filter !== "all" && !tags.includes(filter));
    });
  }

  function clearElement(element) {
    if (element) element.replaceChildren();
  }

  function populateLinks(project) {
    clearElement(modalLinks);
    if (!modalLinks) return;

    if (project.links.length) {
      project.links.forEach((link) => {
        const anchor = document.createElement("a");
        anchor.href = link.href;
        anchor.textContent = link.label;
        if (!link.href.startsWith("/")) {
          anchor.target = "_blank";
          anchor.rel = "noopener noreferrer";
        }
        modalLinks.append(anchor);
      });
      return;
    }

    const fallback = document.createElement("a");
    fallback.href = `mailto:colbyrreichenbach@gmail.com?subject=${encodeURIComponent(project.title)}`;
    fallback.textContent = "Ask about this";
    modalLinks.append(fallback);
  }

  function populateEvidence(project) {
    clearElement(modalEvidence);
    if (!modalEvidence) return;

    project.evidence.forEach((item) => {
      const chip = document.createElement("span");
      chip.textContent = item;
      modalEvidence.append(chip);
    });
  }

  function focusableElements() {
    if (!modal) return [];
    return [...modal.querySelectorAll("a[href], button:not([disabled]), [tabindex]:not([tabindex='-1'])")]
      .filter((element) => element.offsetParent !== null);
  }

  function openProject(projectId, trigger) {
    const project = projectMap.get(projectId);
    if (!project || !modal) return;
    if (!modalKicker || !modalTitle || !modalSummary || !modalProblem || !modalSystem || !modalStack || !modalMedia || !modalLinks) return;

    activeTrigger = trigger || document.activeElement;
    modalKicker.textContent = project.kicker;
    modalTitle.textContent = project.title;
    modalSummary.textContent = project.summary;
    modalProblem.textContent = project.problem;
    modalSystem.textContent = project.system;
    modalStack.textContent = project.stack;
    modalMedia.replaceChildren(createProjectVisual(project));
    populateEvidence(project);
    populateLinks(project);

    modal.hidden = false;
    document.body.classList.add("modal-open");
    const closeButton = modal.querySelector(".modal-close");
    if (closeButton) closeButton.focus();
  }

  function closeProject() {
    if (!modal || modal.hidden) return;
    modal.hidden = true;
    document.body.classList.remove("modal-open");
    if (activeTrigger && typeof activeTrigger.focus === "function") {
      activeTrigger.focus();
    }
    activeTrigger = null;
  }

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => setFilter(button.dataset.filter));
  });

  cards.forEach((card) => {
    card.tabIndex = 0;
    card.setAttribute("role", "button");
    card.setAttribute("aria-label", `Open ${projectMap.get(card.dataset.project)?.title || "project"} details`);
    card.addEventListener("click", () => {
      if (activeFilter !== "all" && card.classList.contains("filtered-out")) return;
      openProject(card.dataset.project, card);
    });
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openProject(card.dataset.project, card);
      }
    });
  });

  if (modal) {
    modal.addEventListener("click", (event) => {
      if (event.target.matches("[data-close-modal]")) closeProject();
    });
  }

  document.addEventListener("keydown", (event) => {
    if (!modal || modal.hidden) return;

    if (event.key === "Escape") {
      closeProject();
      return;
    }

    if (event.key !== "Tab") return;
    const focusable = focusableElements();
    if (!focusable.length) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });
});
