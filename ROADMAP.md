# Roadmap

Progress is mastery-based, not deadline-based. Complete the gate before moving to the next module.

| #   | Module                      | Main deliverable                    | Gate                                                        |
| --- | --------------------------- | ----------------------------------- | ----------------------------------------------------------- |
| 00  | Tools and workflow          | Git, shell, Node, npm, tests        | Explain and run the local workflow                          |
| 01  | TypeScript foundations      | Persistent task-tracker CLI         | Model data and test logic without a framework               |
| 02  | JavaScript and Node runtime | Async file-processing tool          | Explain scope, references, promises, event loop, and errors |
| 03  | HTTP fundamentals           | API using Node's `http` module      | Trace and debug a complete HTTP request                     |
| 04  | PostgreSQL and SQL          | API backed by handwritten SQL       | Design schema, query, transact, index, backup, and restore  |
| 05  | Express                     | Rebuild the raw HTTP API            | Identify exactly what Express abstracts                     |
| 06  | NestJS and architecture     | Modular monolith API                | Defend module boundaries and dependency direction           |
| 07  | Browser and React           | React client for the API            | Explain rendering, state, forms, fetch, CORS, and caching   |
| 08  | Testing and security        | Tested and hardened application     | Cover failures, authorization, validation, and abuse cases  |
| 09  | DevOps and operations       | Reproducible deployment             | Deploy, observe, back up, restore, and roll back            |
| 10  | Capstone                    | Production-shaped full-stack system | Build and operate the complete path independently           |

## Module 00 — Tools and workflow

- [ ] Navigate and inspect files from the shell.
- [ ] Explain working tree, staging area, commit, branch, and remote.
- [ ] Run formatting, type checks, tests, and builds.
- [ ] Read a stack trace from the first relevant frame.
- [ ] Make small commits with descriptive messages.

**Evidence:** one clean local run of `npm run check` and one pushed commit.

## Module 01 — TypeScript foundations

- [ ] Model tasks with explicit types.
- [ ] Write pure functions for task operations.
- [ ] Validate invalid input.
- [ ] Test normal, edge, and failure paths.
- [ ] Parse CLI arguments.
- [ ] Persist and reload JSON safely.
- [ ] Explain values, references, mutation, and return values.

**Deliverable:** [`labs/01-typescript-cli`](labs/01-typescript-cli)

## Module 02 — JavaScript and Node runtime

- [ ] Explain lexical scope and closures.
- [ ] Compare primitive values and object references.
- [ ] Explain synchronous code, promises, timers, and I/O ordering.
- [ ] Handle rejected promises and process failures.
- [ ] Use streams for a file larger than available memory.
- [ ] Inspect a running Node process with the debugger.

**Deliverable:** asynchronous log-file analyzer with bounded memory use.

## Module 03 — HTTP fundamentals

- [ ] Create a server with `node:http` only.
- [ ] Parse method, URL, headers, and JSON body.
- [ ] Return correct status codes and content types.
- [ ] Implement routing and middleware-like functions manually.
- [ ] Explain DNS, TCP, TLS, HTTP, and keep-alive boundaries.
- [ ] Reproduce requests with `curl`.

**Deliverable:** task API without Express or NestJS.

## Module 04 — PostgreSQL and SQL

- [ ] Design tables, keys, constraints, and relationships.
- [ ] Write CRUD, joins, aggregates, and pagination queries.
- [ ] Use parameterized SQL.
- [ ] Use a transaction for a multi-step invariant.
- [ ] Add and justify an index using `EXPLAIN`.
- [ ] Perform a backup and restore test.

**Deliverable:** raw HTTP API backed by PostgreSQL using `pg`, without an ORM.

## Module 05 — Express

- [ ] Rebuild routing and middleware using Express.
- [ ] Centralize validation and error handling.
- [ ] Compare raw Node behavior with Express behavior.
- [ ] Preserve the existing API contract and tests.

**Deliverable:** Express version of the same API.

## Module 06 — NestJS and architecture

- [ ] Separate controllers, application services, and persistence.
- [ ] Explain dependency injection without decorators.
- [ ] Define module boundaries around capabilities.
- [ ] Keep domain logic independent of HTTP and PostgreSQL.
- [ ] Use migrations and transactions deliberately.

**Deliverable:** modular NestJS version of the same API.

## Module 07 — Browser and React

- [ ] Explain browser navigation and rendering at a high level.
- [ ] Manage local, server, and URL state separately.
- [ ] Build accessible forms with validation.
- [ ] Handle loading, empty, success, and error states.
- [ ] Explain cookies, tokens, CORS, and browser storage risks.

**Deliverable:** React client that consumes the API.

## Module 08 — Testing and security

- [ ] Separate unit, integration, contract, and end-to-end tests.
- [ ] Test authorization and validation failures.
- [ ] Prevent SQL injection and unsafe output.
- [ ] Add rate limits and safe error responses.
- [ ] Keep secrets out of source control and logs.
- [ ] Produce useful structured logs.

**Deliverable:** threat model plus automated security-relevant tests.

## Module 09 — DevOps and operations

- [ ] Build a minimal container image.
- [ ] Run services with least privilege.
- [ ] Configure a reverse proxy and TLS.
- [ ] Add health checks and graceful shutdown.
- [ ] Create CI checks and a repeatable deployment.
- [ ] Verify backup, restore, monitoring, and rollback.

**Deliverable:** deployed application with an operations runbook.

## Module 10 — Capstone

- [ ] Design from requirements before coding.
- [ ] Record architecture decisions as short bullet points.
- [ ] Build the system in tested increments.
- [ ] Deploy it reproducibly.
- [ ] Diagnose an injected application, database, and network fault.
- [ ] Demonstrate backup restoration and rollback.

**Deliverable:** one production-shaped full-stack application and live walkthrough.
