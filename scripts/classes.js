const CLASSES_DATA = RESUME_DATA.skills.map((className) => {
    return `
    <div class="inline-flex items-center rounded-md border px-2 py-0.5 text-xs font-semibold font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap border-transparent bg-primary/80 text-primary-foreground hover:bg-primary/60">
        ${className}
    </div>
    `;
}).join("");

document.querySelector(".js-classes").innerHTML += CLASSES_DATA;
