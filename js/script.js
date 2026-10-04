// PROJECT DATA
const projects = [
    {
        title: "Building Security Lab Competition",
        image: "assets/images/security-lab.png"
    },
    {
        title: "Project API - Go",
        image: "assets/images/project-api.png"
    },
    {
        title: "Panen Temu",
        image: "assets/images/panen-temu.png"
    },
    {
        title: "DESTY5 - Proyek Akhir",
        image: "assets/images/desty5.png"
    },
    {
        title: "Sistem Pembayaran PAM",
        image: "assets/images/pembayaran-pam.png"
    },
    {
        title: "Krevi's Project",
        image: "assets/images/krevi.png"
    }
];

// DISPLAY PROJECTS
const projectList = document.getElementById("project-list");

projects.forEach((project, index) => {

    const projectCard = document.createElement("div");

    projectCard.className = `
        project-card
        group
        relative
        overflow-hidden
        rounded-[2rem]
        border border-white/10
        bg-[#0b0b0b]
        hover:border-red-500/30
        transition
        duration-300
    `;

    projectCard.innerHTML = `
        <div class="aspect-video bg-[#111111] overflow-hidden relative">

            <img
                src="${project.image}"
                alt="${project.title}"
                class="project-image w-full h-full object-cover"
                onerror="this.style.display='none'"
            >

            <!-- Subtle dark overlay -->
            <div class="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none"></div>

        </div>

        <div class="p-5 sm:p-6">

            <div class="flex items-center justify-between gap-4">

                <h3 class="text-lg font-semibold text-white group-hover:text-red-400 transition">
                    ${project.title}
                </h3>

                <span class="text-xs text-red-500/70 font-medium shrink-0">
                    ${String(index + 1).padStart(2, "0")}
                </span>

            </div>

        </div>
    `;

    projectList.appendChild(projectCard);
});

// MOBILE NAVBAR
const menuButton = document.getElementById("menu-button");
const mobileMenu = document.getElementById("mobile-menu");

if (menuButton && mobileMenu) {

    menuButton.addEventListener("click", () => {
        mobileMenu.classList.toggle("active");
    });

}

// CLOSE MOBILE MENU AFTER CLICK
if (mobileMenu) {

    const mobileLinks = mobileMenu.querySelectorAll("a");

    mobileLinks.forEach((link) => {

        link.addEventListener("click", () => {
            mobileMenu.classList.remove("active");
        });

    });

}

