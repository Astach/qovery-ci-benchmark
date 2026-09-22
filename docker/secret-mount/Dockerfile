# Build-time credential supplied as a BuildKit secret mount.
#
# The value is exposed as a file for the duration of a single RUN and is not
# written to any layer, so it does not appear in the image or its history.
# Pair this with ../secret-arg, which does the same work the leaky way.
FROM alpine:3.21
RUN --mount=type=secret,id=BENCH_TOKEN \
    test -s /run/secrets/BENCH_TOKEN && \
    echo "token seen, length $(wc -c < /run/secrets/BENCH_TOKEN)" > /result.txt
CMD ["sh", "-c", "cat /result.txt && sleep infinity"]
