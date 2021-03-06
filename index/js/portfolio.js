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
        label: "Week 04 Notes",
        url: "week4/notes.html"
    },
    {
        label: "Week 04 Application",
        url: "week4/app.html"
    },

    {
        label: "Week 05 Notes",
        url: "week5/note.html"
    },
    {
        label: "Week 05 Application",
        url: "week5/app.html"
    },
    {
        label: "Week 07 Notes",
        url: "week7/note.html"
    },
    {
        label: "Week 07 Application",
        url: "week7/app.html"
    },
    {
        label: "Week 08 Notes",
        url: "week8/note.html"
    },
    {
        label: "Week 08 Application",
        url: "week8/app.html"
    },{
        label: "Week 09 Notes",
        url: "week9/note.html"
    },
    {
        label: "Week 09 Application",
        url: "week9/app.html"
    },{
        label: "Week 010 Notes",
        url: "week10/note.html"
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
    },
    {
        label: "Week 03 Team Activity",
        url: "teamActivities/team03.html"
    },
    {
        label: "Week 04 Team Activity",
        url: "teamActivities/team04.html"
    }
]

const teams = document.getElementById("teams")

for (const item of team) {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.setAttribute("href", item.url);
    a.textContent = item.label;
    li.appendChild(a);

    teams.appendChild(li);
}

const challenge = [{
    label: "To Do List",
    url: "challenges/lists.html"
},
{
    label: "Final Project",
    url: "final/home.html"
},
{
    label: "Final Project Plan Page",
    url: "final/plan.html"
},
{
    label: "Quakes Near Me",
    url: "quakes/main.html"
}
]

const challenges = document.getElementById("challenges")

for (const item of challenge) {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.setAttribute("href", item.url);
    a.textContent = item.label;
    li.appendChild(a);

    challenges.appendChild(li);
}