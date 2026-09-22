# One of six independent build targets in a single repository, built from the
# same commit. Small on purpose: the measurement is how many builds are run,
# not how long one takes.
FROM golang:1.23-alpine AS build
WORKDIR /src
COPY main.go .
RUN go build -o /out/svc main.go

FROM alpine:3.21
COPY --from=build /out/svc /usr/local/bin/svc
EXPOSE 8080
CMD ["svc"]
