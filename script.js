const pages = [
    { name: "FRRO & Residence", url: "sections/frro.html" },
    { name: "Bank Account", url: "sections/bank.html" },
    { name: "SIM & WiFi", url: "sections/sim.html" },
    { name: "Universities in Pune", url: "sections/edu.html" },
    { name: "Aadhaar & PAN", url: "sections/important-cards.html" },
    { name: "blog", url: "sections/blog.html" },
    { name: "c-form", url: "sections/c-form-guide.html" },
    { name: "rp, url: "sections/step-by-step-guide.html" }
];

function searchPages() {
    let input = document.getElementById("searchInput").value.toLowerCase();
    let resultsList = document.getElementById("searchResults");
    resultsList.innerHTML = "";

    if (input === "") return;

    let results = pages.filter(page => page.name.toLowerCase().includes(input));

    results.forEach(page => {
        let li = document.createElement("li");
        let a = document.createElement("a");
        a.href = page.url;
        a.textContent = page.name;
        li.appendChild(a);
        resultsList.appendChild(li);
    });
}

