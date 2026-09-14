# Software Engineering Fundamentals

A mastery-based learning repository for understanding what happens underneath a full-stack application.

The goal is not to collect tutorials. The goal is to build, explain, test, debug, and deploy each layer without depending on generated implementation code.

## Primary stack

- **Programming:** JavaScript fundamentals with TypeScript for implementation
- **Runtime:** Node.js
- **Database:** PostgreSQL and handwritten SQL before an ORM
- **Backend progression:** raw Node HTTP → Express → NestJS
- **Frontend:** React after the server and HTTP foundations
- **Operations:** Linux, containers, reverse proxy, CI/CD, logs, backups, and monitoring

## How this repository works

1. Work on one lab at a time.
2. Read the lab requirements, not a solution.
3. Write the first implementation manually.
4. Use documentation freely.
5. Use AI for hints, review, debugging questions, and quizzes—not the first implementation.
6. Prove completion with code, tests, and a short verbal explanation.
7. Update the checkbox and evidence link in [`PROGRESS.md`](PROGRESS.md).

No journal and no essays are required.

## Current module

**Lab 01: TypeScript CLI foundations**

```bash
npm install
npm run check
npm run lab:01
```

Then open [`labs/01-typescript-cli/README.md`](labs/01-typescript-cli/README.md).

## Repository map

| File                                           | Purpose                                      |
| ---------------------------------------------- | -------------------------------------------- |
| [`ROADMAP.md`](ROADMAP.md)                     | Ordered learning path and deliverables       |
| [`MASTERY-CHECKLIST.md`](MASTERY-CHECKLIST.md) | Skills that must be demonstrated             |
| [`PROGRESS.md`](PROGRESS.md)                   | Short status and evidence tracker            |
| [`LEARNING-RULES.md`](LEARNING-RULES.md)       | Rules for learning with documentation and AI |
| [`docs/CONCEPT-MAP.md`](docs/CONCEPT-MAP.md)   | How the application layers connect           |
| [`labs/`](labs/)                               | Hands-on implementations                     |

## What “mastered” means

A topic is mastered when all four are true:

- Build it from a blank file with documentation available.
- Explain the data flow without reading generated text.
- Test normal and failure paths.
- Debug a deliberately introduced fault.

Memorizing every API is not required. Understanding the model and knowing how to verify details is required.
