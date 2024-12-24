// Backend: Node.js/Express API
const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors({ origin: 'https://monalisa-cruise.github.io' }));
const PORT = 50000;

// Mock data for candidates
const candidates = [
    { id: 1, name: 'Alice Johnson', skills: ['JavaScript', 'React'], experience: 5 },
    { id: 2, name: 'Bob Smith', skills: ['Python', 'Django'], experience: 7 },
    { id: 3, name: 'Charlie Brown', skills: ['Java', 'Spring'], experience: 10 },
    { id: 4, name: 'Diana Prince', skills: ['C#', '.NET'], experience: 4 },
    { id: 5, name: 'Eve Adams', skills: ['Ruby', 'Rails'], experience: 6 },
    { id: 6, name: 'Frank Castle', skills: ['Go', 'Docker'], experience: 3 },
    { id: 7, name: 'Grace Hopper', skills: ['C', 'Assembly'], experience: 15 },
    { id: 8, name: 'Hank Pym', skills: ['Kotlin', 'Android'], experience: 8 },
    { id: 9, name: 'Ivy League', skills: ['Swift', 'iOS'], experience: 9 },
    { id: 10, name: 'John Doe', skills: ['PHP', 'Laravel'], experience: 2 }
];

// API endpoint
app.get('/api/candidates', (req, res) => {
    res.json(candidates);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
