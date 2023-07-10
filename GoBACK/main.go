//skysql:dellis$ cat gomaria.go

package main

import (
	
	"fmt"
	// "log"
	"net/http"
	"encoding/json"
	"github.com/gorilla/mux"
	"database/sql"
	_ "github.com/go-sql-driver/mysql"
)

type Article struct {
	ID 		 int	    `json:"id"`
	Name     string 	`json:"name"`
	Salary   int	    `json:"salary"`
	Increase bool 		`json:"increase"`
	Like 	 bool 		`json:"like"`
}

type Articles []Article

func allAtricles(w http.ResponseWriter, r *http.Request) {
	epm := Articles{
		//Article{1, "Test Title", 10000, false, true},
		 Article{ID: 5, Name: "Title", Salary: 18000, Increase: true, Like: false},
		 Article{ID: 6, Name: "Guth", Salary: 21000, Increase: false, Like: true},
		Article{ID: 7, Name: "Ivan", Salary: 35000, Increase: true, Like: false},
		

	}
	fmt.Println(epm)
	fmt.Println("Endpoint")
	w.Header().Set("Accept","application/json")
	w.Header().Set("Access-Control-Allow-Origin","*")
	json.NewEncoder(w).Encode(epm)
}

// func testPostAtricles(w http.ResponseWriter, r *http.Request){
// 	fmt.Fprintf(w, "TEst POST Endpoint Hi")
// }

// func homePage(w http.ResponseWriter, r *http.Request) {
// 	fmt.Fprintf(w, "Hmepage Endpoint Hit")
// }

func Router() *mux.Router {

	myRouter := mux.NewRouter()

	myRouter.HandleFunc("/api/employees", allAtricles).Methods("GET","OPTIONS")

	return 	myRouter
}

func CountFromTable(){

	db, err := sql.Open("mysql", "test_user:1410@/my_db")

	count, err := db.Query("SELECT count(*) FROM Employees ")

	if err != nil{
		panic(err.Error())
	}
	
	for count.Next(){
	var inc int
	err = count.Scan(&inc)
	if err != nil{
		panic(err.Error())
	}
	fmt.Println(inc)
    }

	//return inc 

}


func main() {
	// fmt.Println("Citizix - Hello World!")
	// r := Router()
	// log.Fatal(http.ListenAndServe(":9000", r))

	fmt.Println("Check for connect DB")

	//db, err := sql.Open("mysql", "test_user:1410@tcp(127.0.0.1:3306)/my_db")
	db, err := sql.Open("mysql", "test_user:1410@/my_db")

	if err != nil{
		panic(err.Error())
	}
	defer db.Close()

	results, err := db.Query("SELECT id, name, salary, increase, rise FROM Employees ")
	if err != nil{
		panic(err.Error())
	}

		epm := Articles{}

	for results.Next(){
		var user Article
		err = results.Scan(&user.ID, &user.Name, &user.Salary, &user.Increase,&user.Like)
		if err != nil{
			panic(err.Error())
		}
		epm =append(epm , user)
		

		
	}
	fmt.Println(epm)


	fmt.Println("Successfully connected to MariaBD database")
	//fmt.Println("")

}


