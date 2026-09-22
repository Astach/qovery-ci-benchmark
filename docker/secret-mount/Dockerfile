# Case G, treatment — the same work via a BuildKit secret mount.
# Supported by the Qovery engine since 2026-09-08 (commit d7e6b142f, v1.362.1).
# Set a Qovery environment variable named BENCH_TOKEN; the engine matches the
# mount id by name and passes it as --secret. The value never enters a layer.
#
# Known interaction: q-core parses ARG names but not mount ids, so a Dockerfile
# using a secret mount sends tag_build_args = null and loses the pre-clone cache
# check. Measuring that cost is the point of this pair.
FROM alpine:3.21
RUN --mount=type=secret,id=BENCH_TOKEN \
    test -s /run/secrets/BENCH_TOKEN && \
    echo "token seen, length $(wc -c < /run/secrets/BENCH_TOKEN)" > /result.txt
CMD ["sh", "-c", "cat /result.txt && sleep infinity"]
