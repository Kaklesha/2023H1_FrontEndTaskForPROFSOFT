package main

import (
	"encoding/json"
	"fmt"
	"log"
	//"database/sql"
	"net/http"
	"github.com/gorilla/mux"
	//"github.com/go-sql-driver/mysql"
)

type Article struct {
	id 		 int	   `json:"id"`
	name     string `json:"name"`
	salary   int	   `json:"salary"`
	increase bool `json:"increase"`
	like 	 bool `json:"like"`
}

type Articles []Article

func allAtricles(w http.ResponseWriter, r *http.Request) {
	articles := Articles{
		//Article{1, "Test Title", 10000, false, true},
		 Article{id: 2, name: "Title", salary: 18000, increase: true, like: false},
		 Article{id: 3, name: "Guth", salary: 21000, increase: false, like: true},
		Article{id: 4, name: "Ivan", salary: 35000, increase: true, like: false},
		

	}
	fmt.Println(articles)
	fmt.Println("Endpoint")
	w.Header().Set("Accept","application/json")
	w.Header().Set("Accept-Control-Allow-Origin","*")
	json.NewEncoder(w).Encode(articles)
}

func testPostAtricles(w http.ResponseWriter, r *http.Request){
	fmt.Fprintf(w, "TEst POST Endpoint Hi")
}

func homePage(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Hmepage Endpoint Hit")
}

func Router() *mux.Router {

	myRouter := mux.NewRouter().StrictSlash(true)


	//myRouter.HandleFunc("/", homePage)
	myRouter.HandleFunc("/api/employees", allAtricles).Methods("GET","OPTIONS")
	//myRouter.HandleFunc("/articles", testPostAtricles).Methods("POST")

	return 	myRouter
}

func main() {
	fmt.Println("Citizix - Hello World!")

	
	r := Router()
	log.Fatal(http.ListenAndServe(":8082", r))
}
