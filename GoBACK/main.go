package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"github.com/gorilla/mux"
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

func testPostAtricles(w http.ResponseWriter, r *http.Request){
	fmt.Fprintf(w, "TEst POST Endpoint Hi")
}

func homePage(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Hmepage Endpoint Hit")
}

func handleRequests() {

	myRouter := mux.NewRouter().StrictSlash(true)


	myRouter.HandleFunc("/", homePage)
	myRouter.HandleFunc("/articles", allAtricles).Methods("GET")
	myRouter.HandleFunc("/articles", testPostAtricles).Methods("POST")
	log.Fatal(http.ListenAndServe(":8082", myRouter))
}

func main() {
	fmt.Println("Citizix - Hello World!")
	handleRequests()
}
