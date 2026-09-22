# qovery-ci-benchmark

Fixtures for comparing Qovery build/deploy timing against GitHub Actions.

Design, use cases and fairness controls:
`~/Projects/Plans/ci-performance-observability/BENCHMARK.md`.

Each directory under `docker/` is one build target. They are deliberately small
where the case measures *orchestration* rather than build weight — if the app
took ten minutes to compile you could not tell fan-out cost from compile cost.

| Target | Case | Measures |
|---|---|---|
| `docker/floor` | D | Fixed overhead. Build is ~0, so everything left is orchestration |
| `docker/mono/svc-1..6` | A, E | Fan-out: one repo, one commit, six images |
| `docker/fat` | F | Large-artifact push: registry bandwidth and layer compression |
| `docker/secret-arg` | G | Build secret via `ARG` (leaks into image metadata) |
| `docker/secret-mount` | G | Same via `--mount=type=secret` |

Typical application shapes, because the cases above measure mechanics rather
than the builds customers actually run:

| Target | Shape |
|---|---|
| `docker/frontend-spa` | Vite + React + TypeScript, served by nginx |
| `docker/frontend-ssr` | Next.js, standalone output |
| `docker/backend-node` | Express + TypeScript API, usual middleware and clients |
| `docker/backend-python` | FastAPI, several native wheels |
| `docker/backend-php` | composer + Vite assets, PHP-FPM behind nginx |

Dependency versions are pinned exactly rather than ranged, so a rerun months
later resolves the same tree and stays comparable.

Heavy real-world builds live in separate forks (grpc-go, mastodon, n8n, cal.com)
and are wired straight into Qovery.
