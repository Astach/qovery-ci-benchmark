# Build-time credential supplied as a build argument.
#
# The value is recorded in image metadata and is readable with `docker history`.
# Present as the control for ../secret-mount, not as a pattern to copy.
FROM alpine:3.21
ARG BENCH_TOKEN
RUN test -n "$BENCH_TOKEN" && echo "token seen, length ${#BENCH_TOKEN}" > /result.txt
CMD ["sh", "-c", "cat /result.txt && sleep infinity"]
