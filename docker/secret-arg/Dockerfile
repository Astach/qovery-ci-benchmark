# Case G, control — the leaky way.
# The value lands in image metadata and is readable via `docker history`.
FROM alpine:3.21
ARG BENCH_TOKEN
RUN test -n "$BENCH_TOKEN" && echo "token seen, length ${#BENCH_TOKEN}" > /result.txt
CMD ["cat", "/result.txt"]
