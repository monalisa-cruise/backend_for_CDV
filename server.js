// Backend: Node.js/Express API
const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors({ origin: 'https://monalisa-cruise.github.io' }));
const PORT = 50000;

// Mock data for candidates
const candidates = [
    { id: 1, name: 'Aayush Mehra ', skills: ['JavaScript', 'React'], experience: 5 },
    { id: 2, name: 'Babli Chaudhari ', skills: ['Python', 'Django'], experience: 7 },
    { id: 3, name: 'Christan Methow', skills: ['Java', 'Spring'], experience: 10 },
    { id: 4, name: 'Danish  Abdul', skills: ['C#', '.NET'], experience: 4 },
    { id: 5, name: 'Eleza Beth', skills: ['Ruby', 'Rails'], experience: 6 },
    { id: 6, name: 'Fiza Usman ', skills: ['Go', 'Docker'], experience: 3 },
    { id: 7, name: 'Gaurav Pandey', skills: ['C', 'Assembly'], experience: 15 },
    { id: 8, name: 'Himansu Tripathi', skills: ['Kotlin', 'Android'], experience: 8 },
    { id: 9, name: 'Isha League', skills: ['Swift', 'iOS'], experience: 9 },
    { id: 10, name: 'Janvi Sharma', skills: ['PHP', 'Laravel'], experience: 2 }
];

// API endpoint
app.get('/api/candidates', (req, res) => {
    res.json(candidates);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
