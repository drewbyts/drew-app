
// Configure navigation for shared header usage across pages
const navItems = [
    { label: "Home", href: "index.html" },
    { label: "Writings", href: "writings.html" },
];

const menu = document.querySelector("#menu");

if (menu) {
    const currentPath = window.location.pathname.split("/").pop() || "index.html";
    menu.innerHTML = navItems
        .map(({ label, href }) => {
            const isActive = href === currentPath;
            const baseClasses =
                "font-body uppercase tracking-wide text-sm px-3 py-2 transition-colors duration-200";
            const activeClasses = isActive
                ? "text-green-800 font-semibold"
                : "text-gray-700 hover:text-green-800";
            const ariaCurrent = isActive ? 'aria-current="page"' : "";

            return `<a href="${href}" class="${baseClasses} ${activeClasses}" ${ariaCurrent}>${label}</a>`;
        })
        .join("");
}

// Define your project data
const projects = [
    {
        title: "Football Dashboard - Tableau ",
        link: "https://public.tableau.com/app/profile/andrew.ramirez8465/viz/FantasyFootballInsights2019-2021_16566917760970/FantasyOppEfficiency",
        image: "https://images.unsplash.com/photo-1566577739112-5180d4bf9390?q=80&w=3126&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        title: "Digital Scratchers - React*",
        link: "https://digital-lotto.netlify.app/",
        image: "https://plus.unsplash.com/premium_photo-1718191345906-39c178e43133?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },

    {
        title: "Dynasty Dashboard - Streamlit*",
        link: "https://dynasty-dash.streamlit.app/",
        image: "https://plus.unsplash.com/premium_photo-1675706227475-5ad2e60fc31d?q=80&w=2160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },

];

// Select the container where the project cards will be added
const projectContainer = document.querySelector("#project-container");

// Loop through the projects array and add cards dynamically
if (projectContainer) {
    projects.forEach((project) => {
        projectContainer.innerHTML += `
            <div class="p-4 lg:w-2/3">
                <div class="max-h-full border-2 border-gray-800 border-opacity-60 rounded-lg hover:shadow-lg hover:scale-[2.00] transition-transform—">
                    <a href="${project.link}" target="_blank" rel="noopener noreferrer">
                        <img
                            class="w-full h-24 object-cover rounded-t-md"
                            src="${project.image}"
                            alt="${project.title}"
                            loading="lazy"
                        >
                        <div class="bg-gray-100 font-body font-extralight p-4 rounded-b-md flex-grow">
                            <h2 class="text-xs title-font font-body text-green-800 mb-1">${project.title}</h2>
                        </div>
                    </a>
                </div>
            </div>
        `;
    });
}

// Define writing data for the dedicated Writings page
const writings = [
    {
        title: "TBD",
        date: "TBD",
        description: "TBD",
        link: "",
    },
    {
        title: "TBD",
        date: "TBD",
        description:"TBD",
    },
    {
        title: "TBD",
        date: "TBD",
        description: "TBD",
    },
];

const writingContainer = document.querySelector("#writing-container");

if (writingContainer) {
    writingContainer.innerHTML = writings
        .map((piece) => {
            const cta = piece.link
                ? `<span class="mt-6 inline-flex items-center text-sm font-semibold text-green-800">Read more
                        <svg class="ml-2 h-4 w-4" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </span>`
                : `<span class="mt-6 text-sm font-semibold text-gray-700">Draft in progress</span>`;

            const wrapperStart = piece.link
                ? `<a href="${piece.link}" target="_blank" rel="noopener noreferrer" class="block h-full">`
                : '<div class="block h-full">';
            const wrapperEnd = piece.link ? "</a>" : "</div>";

            return `
                <article class="w-full md:w-[calc(50%-1.5rem)] xl:w-[calc(33.333%-1.5rem)]">
                    ${wrapperStart}
                        <div class="h-full bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-200 p-6 flex flex-col">
                            <p class="text-xs uppercase tracking-wide text-green-800 mb-2">${piece.date}</p>
                            <h3 class="text-xl font-semibold mb-3 text-gray-900">${piece.title}</h3>
                            <p class="text-gray-600 font-body flex-grow">${piece.description}</p>
                            ${cta}
                        </div>
                    ${wrapperEnd}
                </article>
            `;
        })
        .join("");
}

// Shared footer year update
document.addEventListener("DOMContentLoaded", () => {
    const yearElement = document.getElementById("year");
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
});
