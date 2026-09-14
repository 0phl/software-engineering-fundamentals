# Full-Stack Concept Map

```text
User action
  ↓
React event handler
  ↓
HTTP request from the browser
  ↓
DNS lookup → TCP connection → TLS → reverse proxy
  ↓
Node.js process
  ↓
Router/controller → application service → domain rules
  ↓
Repository → SQL query → PostgreSQL
  ↓
Rows → domain result → JSON HTTP response
  ↓
React state update → browser render
```

## Cross-cutting concerns

Every layer also needs:

- Validation
- Authentication and authorization
- Error handling
- Logging
- Tests
- Configuration and secret handling
- Monitoring
- Backups and rollback

## Learning order

```text
Language
  → runtime
  → HTTP
  → database
  → framework
  → architecture
  → browser UI
  → security and testing
  → deployment and operations
```

Frameworks come after their underlying mechanism so the abstraction can be explained and debugged.
