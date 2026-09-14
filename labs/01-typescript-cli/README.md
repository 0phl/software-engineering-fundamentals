# Lab 01 — TypeScript Foundations

## What just happened?

You ran:

```bash
npm run lab:01
```

You saw:

```text
Lab 01 environment ready
```

That is correct. It only proves that Node.js and TypeScript can run the starter.

The task tracker is **not built yet**. You will build it through small steps.

## Do only Step 1 now

Create this file:

```text
labs/01-typescript-cli/src/domain/task.ts
```

Define a TypeScript type named `Task` with these fields:

| Field         | Requirement                |
| ------------- | -------------------------- |
| `id`          | text                       |
| `title`       | text                       |
| `status`      | only `open` or `completed` |
| `createdAt`   | text                       |
| `completedAt` | optional text              |

Do not build commands, storage, or the full application yet.

## Check your work

From the repository root:

```bash
npm run check
```

If it passes, show the contents of `task.ts` for review.

## What Step 1 teaches

- Object shapes
- String types
- Union types
- Optional fields
- Exporting a type

## Progress

| Step | Topic                         | Status      |
| ---- | ----------------------------- | ----------- |
| 1    | Define the `Task` type        | **Current** |
| 2    | Write the first task function | Locked      |
| 3    | Write tests                   | Locked      |
| 4    | Parse CLI commands            | Locked      |
| 5    | Save tasks to JSON            | Locked      |
| 6    | Connect the complete CLI      | Locked      |

The complete destination is in [`FULL-SPEC.md`](FULL-SPEC.md). It is reference material, not today's assignment.
