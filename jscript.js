let skill = [];
let progress = [
    { name: 'skill-1', progress: 80 },
    { name: 'skill-2', progress: 70 },
    { name: 'skill-3', progress: 60 },
    { name: 'skill-4', progress: 50 },
    { name: 'skill-5', progress: 40 },
    { name: 'skill-6', progress: 30 },
    { name: 'skill-7', progress: 20 },
    { name: 'skill-8', progress: 40}
];
for (let i = 1; i <= progress.length; i++) {
    skill[i - 1] = document.getElementById(`${progress[i-1].name}`);
    skill[i - 1].style.background = `conic-gradient(red ${progress[i-1].progress*360/100}deg, white ${progress[i-1].progress*360/100}deg)`;
}
