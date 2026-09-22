package main

import (
	"fmt"
	"net/http"
)

const service = "svc-6"

func main() {
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprintf(w, "%s ok\n", service)
	})
	fmt.Println(service, "listening on :8080")
	http.ListenAndServe(":8080", nil)
}
