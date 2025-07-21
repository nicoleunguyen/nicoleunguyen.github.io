const COURSES_DATA = RESUME_DATA.relevant_courses.map((course) => {
    return `
    <a href="${course.link}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center rounded-md border px-2 py-0.5 text-xs font-semibold font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap border-transparent bg-primary/80 text-primary-foreground hover:bg-primary/60">
        ${course.title}
    </a>
    `;
}).join("");

document.querySelector(".js-relevant_courses").innerHTML += COURSES_DATA;
