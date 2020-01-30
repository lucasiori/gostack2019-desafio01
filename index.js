const express = require('express');

const server = express();

server.use(express.json());

const projects = [];
let requests_number = 0;

server.use((req, res, next) => {
  requests_number++;

  console.log(`Requests number: ${requests_number}`)

  next();
});

function checkProjectExists(req, res, next) {
  const { id: project_id  } = req.params;

  const project = projects.find((item) => item.id === project_id);

  if (!project) {
    return res.status(400).send({ error: "Project does not found" });
  }

  return next();
}

server.get('/projects', (req, res) => {
  return res.json(projects);
});

server.post('/projects', (req, res) => {
  const { id, title } = req.body;

  const project = {
    id,
    title,
    tasks: []
  }

  projects.push(project);

  return res.json(project);
});

server.post('/projects/:id/tasks', checkProjectExists, (req, res) => {
  const { id: project_id  } = req.params;
  const { title } = req.body;

  const project = projects.find((item) => item.id === project_id);

  project.tasks.push(title);

  return res.json(project);
});

server.put('/projects/:id', checkProjectExists, (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  const project = projects.find((item) => item.id === id);

  project.title = title;

  return res.json(project);
});

server.delete('/projects/:id', checkProjectExists, (req, res) => {
  const { id } = req.params;

  const index = projects.findIndex((item) => item.id === id);

  projects.splice(index, 1);

  return res.send();
});

server.listen(3000);