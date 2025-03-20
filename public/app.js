
// Define your project data
const projects = [
    {
        title: "Football Dashboard - Tableau ",
        link: "https://public.tableau.com/app/profile/andrew.ramirez8465/viz/FantasyFootballInsights2019-2021_16566917760970/FantasyOppEfficiency",
        image: "https://images.unsplash.com/photo-1566577739112-5180d4bf9390?q=80&w=3126&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        title: "Digital Scratchers - Sequential Testing*",
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
