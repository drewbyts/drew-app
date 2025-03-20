
// Define your project data
const projects = [
    {
        title: "R: Markdown and Tidyverse",
        link: "https://drewbyts.github.io/Market-Analysis/",
        image: "https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?auto=format&fit=crop&w=1776&q=80",
    },
    {
        title: "SQL",
        link: "https://dune.xyz/drewbyts/",
        image: "./images/dune_analytics.png",
    },
];

// Select the container where the project cards will be added
const projectContainer = document.querySelector("#project-container");

// Loop through the projects array and add cards dynamically
projects.forEach((project) => {
    projectContainer.innerHTML += `
        <div class="p-4 lg:w-1/2">
            <div class="h-full border-2 border-gray-800 border-opacity-60 rounded-lg flex flex-col">
                <a href="${project.link}" target="_blank" rel="noopener noreferrer">
                    <img
                        class="w-full h-48 object-cover rounded-t-md"
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
