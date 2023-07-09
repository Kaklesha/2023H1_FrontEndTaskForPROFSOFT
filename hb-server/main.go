package main

import (
	"database/sql"
	"encoding/json"
	"fmt"
	"log"
	"net/http"

	_ "github.com/go-sql-driver/mysql"

	"github.com/gorilla/mux"
)

type Employee struct {
	ID         int    `json:"id"`
	Name       string `json:"name"`
	Salary     int    `json:"salary"`
	IsIncrease bool   `json:"isIncrease"`
	IsRise     bool   `json:"isRise"`
}

type Employees []Employee

func GetAllEmployees(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Accept", "application/json")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Methods", "GET")

	emps := Employees{}

	db, err := sql.Open("mysql", "root:password@tcp(127.0.0.1:3306)/employees")
	if err != nil {
		panic(err.Error())
	}
	defer db.Close()

	results, err := db.Query("SELECT * FROM employees")
	if err != nil {
		panic(err.Error())
	}
	for results.Next() {
		var employee Employee

		err = results.Scan(&employee.ID, &employee.Name, &employee.Salary, &employee.IsIncrease, &employee.IsRise)
		if err != nil {
			panic(err.Error())
		}
		emps = append(emps, employee)
	}
	defer results.Close()

	json.NewEncoder(w).Encode(emps)
}

func AddEmployee(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Accept", "application/json")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Methods", "POST")

	var emp Employee
	json.NewDecoder(r.Body).Decode(&emp)

	db, err := sql.Open("mysql", "root:password@tcp(127.0.0.1:3306)/employees")
	if err != nil {
		panic(err.Error())
	}
	defer db.Close()

	insert, err := db.Query("INSERT INTO employees VALUES(?, ?, ?, ?, ?);", emp.ID, emp.Name, emp.Salary, emp.IsIncrease, emp.IsRise)
	if err != nil {
		panic(err.Error())
	}
	defer insert.Close()

	json.NewEncoder(w).Encode(emp)
}

func DeleteEmployee(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Accept", "application/json")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Methods", "DELETE")

	params := mux.Vars(r)

	db, err := sql.Open("mysql", "root:password@tcp(127.0.0.1:3306)/employees")
	if err != nil {
		panic(err.Error())
	}
	defer db.Close()

	delete, err := db.Query("DELETE FROM employees WHERE id=?;", params["id"])
	if err != nil {
		panic(err.Error())
	}
	defer delete.Close()

	json.NewEncoder(w).Encode(params["id"])
}

func UpdateEmployee(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Accept", "application/json")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Methods", "PUT")

	var emp Employee
	json.NewDecoder(r.Body).Decode(&emp)

	db, err := sql.Open("mysql", "root:password@tcp(127.0.0.1:3306)/employees")
	if err != nil {
		panic(err.Error())
	}
	defer db.Close()

	update, err := db.Query("UPDATE employees SET salary = ?, isIncrease = ?, isRise = ? WHERE id = ?", emp.Salary, emp.IsIncrease, emp.IsRise, emp.ID)
	if err != nil {
		panic(err.Error())
	}
	defer update.Close()

	json.NewEncoder(w).Encode(emp)
}

func Router() *mux.Router {

	router := mux.NewRouter()
	router.HandleFunc("/api/employees", GetAllEmployees).Methods("GET", "OPTIONS")
	router.HandleFunc("/api/employee", AddEmployee).Methods("POST", "OPTIONS")
	router.HandleFunc("/api/alteremployee", UpdateEmployee).Methods("PUT", "OPTIONS")
	router.HandleFunc("/api/employee/{id}", DeleteEmployee).Methods("DELETE", "OPTIONS")
	return router
}

func main() {
	r := Router()
	fmt.Println("Starting the server on port 9000...")

	log.Fatal(http.ListenAndServe(":9000", r))
}
