# ci-benchmark

Container build fixtures for measuring build times across CI systems.

Each directory under `docker/` is one independent build target. Targets are
deliberately small where the measurement is about build *orchestration* rather
than build weight, so scheduling cost is not confounded with compile cost.

| Target | Shape |
|---|---|
| `docker/floor` | Minimal image. Build work is ~0, isolating fixed overhead |
| `docker/mono/svc-1..6` | Six small Go services in one repository |
| `docker/fat` | Large final layer (~2.5 GB), for registry throughput |
| `docker/secret-arg` | Build-time credential passed as a build argument |
| `docker/secret-mount` | Same, via a BuildKit secret mount |
| `docker/frontend-spa` | Vite + React + TypeScript, served by nginx |
| `docker/frontend-ssr` | Next.js, standalone output |
| `docker/backend-node` | Express + TypeScript API |
| `docker/backend-python` | FastAPI, several native wheels |
| `docker/backend-php` | composer + Vite assets, PHP-FPM behind nginx |

Dependency versions are pinned exactly rather than ranged, so a rerun months
later resolves the same tree and stays comparable.

Every Dockerfile copies manifests before sources, so a source change does not
reinstall dependencies.
