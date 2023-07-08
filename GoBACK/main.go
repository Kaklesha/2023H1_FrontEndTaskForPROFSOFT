package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	
)

type Article struct {
	Title   string `json:"Title"`
	Desc    string `json:'"desc"`
	Content string `json:""content`
}

type Articles []Article

func allAtricles(w http.ResponseWriter, r *http.Request) {
	articles := Articles{
		Article{Title: "Test Title", Desc: "Test Description", Content: "Hello World"},
	}

	fmt.Println("Endponut")
	json.NewEncoder(w).Encode(articles)
}

func homePage(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Hmepage Endpoint Hit")
}

func handleRequests() {
	http.HandleFunc("/", homePage)
	http.HandleFunc("/articles", allAtricles)
	log.Fatal(http.ListenAndServe(":8082", nil))
}

func main() {
	fmt.Println("Citizix - Hello World!")
	handleRequests()
}
