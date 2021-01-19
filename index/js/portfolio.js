const links = [{
        label: "Week 01 Notes",
        url: "week1/notes.html"
    },
    {
        label: "Week 02 Notes",
        url: "week2/notes.html"
    },
    {
        label: "Week 02 Application",
        url: "week2/app.html"
    },

    {
        label: "Week 03 Notes",
        url: "week3/notes.html"
    },
    {
        label: "Week 03 Application",
        url: "week3/app.html"
    },

    {
        label: "Week 03 Application",
        url: "week3/heroes.html"
    }
]

const ol = document.getElementById("myWork")

for (const item of links) {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.setAttribute("href", item.url);
    a.textContent = item.label;
    li.appendChild(a);

    ol.appendChild(li);
}

const team = [{
    label: "Week 02 Team Activity",
    url: "teamActivities/team02.html"
}]

const teams = document.getElementById("teams")

for (const item of team) {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.setAttribute("href", item.url);
    a.textContent = item.label;
    li.appendChild(a);

    teams.appendChild(li);
}