const express = require('express');
const path = require('path');
const app = express();

const projects = [
  { name: 'SaaS Product Suite – CRM / HRM / E-commerce', stack: ['Laravel', 'MySQL', 'Docker', 'Dokploy'], desc: 'Multi-tenant SaaS with subscription billing, wildcard tenant subdomains, RBAC and payment gateway integration.' },
  { name: 'StockFinance ERP', stack: ['Node.js', 'Express.js', 'PostgreSQL'], desc: 'ERP backend: PostgreSQL schema design, queries and data-access layer behind REST APIs.' },
  { name: 'Employee Management System', stack: ['Python', 'CRUD', 'RBAC'], desc: 'Employee records with admin / manager / staff permissions.' },
  { name: 'DarAlSafwa – Property Rental', stack: ['Laravel', 'MySQL', 'Firebase'], desc: 'Property search, booking, complaints and real-time agent/technician coordination.' },
  { name: 'Ecotourism Management System', stack: ['Laravel', 'React', 'MySQL'], desc: 'Booking and admin platform for Kerala forest ecotourism centres.' },
  { name: 'Aarohana – ERP', stack: ['CodeIgniter', 'PHP', 'MySQL'], desc: 'Service requests, tax payments, workflow tracking and dashboards.' },
  { name: 'Radel – Logistics', stack: ['CodeIgniter', 'PHP', 'MySQL'], desc: 'Trip tracking, vehicle inspections and driver mobile updates.' },
  { name: 'Aiossp – Matrimony', stack: ['CodeIgniter', 'PHP', 'MySQL'], desc: 'Matching, payments, WhatsApp notifications, agency portal.' }
];

app.use(express.json());
app.get('/api/projects', (req, res) => res.json(projects));
app.use(express.static(path.join(__dirname, '..', 'public')));

module.exports = app;
