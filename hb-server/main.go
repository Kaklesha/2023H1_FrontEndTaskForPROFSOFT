package main

import (
	"encoding/json"
	"fmt"
	"net/http"

	"database/sql"

	_ "github.com/go-sql-driver/mysql"

	"github.com/gorilla/mux"
)

type Employee struct {
	ID         int    `json:"id,omitempty"`
	Name       string `json:"name,omitempty"`
	Salary     int    `json:"salary,omitempty"`
	IsIncrease bool   `json:"isIncrease,omitempty"`
	IsRise     bool   `json:"isRise,omitempty"`
}

type Employees []Employee

func GetAllEmployees(w http.ResponseWriter, r *http.Request) {
	emps := Employees{
		Employee{1, "John", 1000, false, false},
		Employee{2, "Ada", 100, false, false},
		Employee{3, "William", 5000, true, true},
	}
	w.Header().Set("Accept", "application/json")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	json.NewEncoder(w).Encode(emps)
}

func Router() *mux.Router {

	router := mux.NewRouter()
	router.HandleFunc("/api/employees", GetAllEmployees).Methods("GET", "OPTIONS")
	return router
}

func main() {
	// r := Router()
	// fmt.Println("Starting the server on port 9000...")

	// log.Fatal(http.ListenAndServe(":9000", r))

	db, err := sql.Open("mysql", "root:password@tcp(127.0.0.1:3306)/employees")

	if err != nil {
		panic(err.Error())
	}

	defer db.Close()

	insert, err := db.Query("INSERT INTO users VALUES('ELIOT')")

	if err != nil {
		panic(err.Error())
	}

	defer insert.Close()

	fmt.Println("Successfully Connected to MySQL database")
}
