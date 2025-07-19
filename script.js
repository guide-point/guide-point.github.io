const pages = [
    { name: "FRRO & Residence", url: "sections/frro.html" },
    { name: "Bank Account", url: "sections/bank.html" },
    { name: "SIM & WiFi", url: "sections/sim.html" },
    { name: "Universities in Pune", url: "sections/universities.html" },
    { name: "Aadhaar & PAN", url: "sections/important-cards.html" },
    { name: "Contact", url: "sections/contact.html" }
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

