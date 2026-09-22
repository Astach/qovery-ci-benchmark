# Case D — the orchestration floor.
# Nothing to build, so the measured time is queue + provision + registry +
# clone + push + deploy. If this is slow, no build optimisation will help.
FROM alpine:3.21
RUN echo "floor" > /floor.txt
CMD ["sh", "-c", "echo floor && sleep infinity"]
