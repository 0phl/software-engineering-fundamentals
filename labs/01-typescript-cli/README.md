# Lab 01 — TypeScript Task-Tracker CLI

Build a task tracker from TypeScript and Node.js primitives.

Do not use React, Express, NestJS, a database, or an ORM.

## Start

From the repository root:

```bash
npm install
npm run check
npm run lab:01
```

Expected baseline output:

```text
Lab 01 environment ready
```

The starter code only verifies the toolchain. The task tracker implementation is intentionally absent.

## Required commands

```text
add "Task title"
list
list --status open
complete <task-id>
remove <task-id>
help
```

## Required task data

```text
id          unique string
title       non-empty string after trimming
status      open | completed
createdAt   ISO timestamp
completedAt ISO timestamp only when completed
```

Choose the exact TypeScript types. Be ready to explain each choice.

## Milestone 1 — Domain model

- [ ] Define the task types.
- [ ] Add a task.
- [ ] List tasks.
- [ ] Complete a task.
- [ ] Remove a task.
- [ ] Avoid mutation unless it is intentional and explained.
- [ ] Test normal and invalid operations.

Suggested files:

```text
src/domain/task.ts
src/domain/task-service.ts
test/task-service.test.ts
```

## Milestone 2 — Command parsing

- [ ] Convert `process.argv` into a typed command.
- [ ] Reject unknown commands.
- [ ] Reject missing or invalid arguments.
- [ ] Keep parsing separate from task operations.
- [ ] Test parser success and failure cases.

Suggested files:

```text
src/cli/parse-command.ts
src/cli/run-command.ts
test/parse-command.test.ts
```

## Milestone 3 — JSON persistence

- [ ] Load tasks from a JSON file.
- [ ] Validate parsed JSON before treating it as task data.
- [ ] Handle the file-not-found case as an empty task list.
- [ ] Save without leaving a partially written file.
- [ ] Keep file I/O separate from domain logic.
- [ ] Test using a temporary directory.

Suggested files:

```text
src/storage/task-file-store.ts
test/task-file-store.test.ts
```

## Milestone 4 — Complete CLI

- [ ] Connect parsing, task operations, and storage.
- [ ] Print useful output for each command.
- [ ] Send errors to stderr.
- [ ] Return a non-zero exit code for invalid commands.
- [ ] Keep `main.ts` small.
- [ ] Run all checks successfully.

## Acceptance checks

```bash
npm run format
npm run check
npm run lab:01 -- add "Learn object references"
npm run lab:01 -- list
```

The final implementation must also demonstrate:

- Empty titles are rejected.
- Unknown task IDs are rejected.
- Completing an already completed task has defined behavior.
- Corrupt JSON produces a safe, useful error.
- Two task IDs never collide during the demonstrated workflow.

## Verbal mastery check

Be ready to explain these without written paragraphs:

1. Which values are copied and which are shared by reference?
2. Where does mutation happen?
3. Why is file I/O outside the domain service?
4. Why is parsed JSON `unknown` until validated?
5. What makes a function easy to test?
6. What happens from entering the command to saving the file?

## Completion evidence

Add only these short entries to [`../../PROGRESS.md`](../../PROGRESS.md):

- Status
- Commit link
- Test command
- One-line note, optional
