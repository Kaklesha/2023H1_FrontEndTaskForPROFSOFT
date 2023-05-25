-- CREATE TABLE postOfWork (
-- 	id_postOfWork int NOT NULL IDENTITY(1,1) PRIMARY KEY
-- ,namePostOfWork nvarchar(20) NOT NULL
-- ,salary int NOT NULL)

-- insert into postofwork
-- values
-- (n'оператор эвм', 15000),
-- (n'админимтратор',20000),
-- (n'бухгалтер',25000),
-- (n'зам. директора',50000),
-- (n'директор',100000)
-- select * from postofwork


-- CREATE TABLE digitalWorkBook (
-- 	id_digitalWorkBook int NOT NULL IDENTITY(1,1) PRIMARY KEY
-- ,	id_employee int NOT NULL 
-- ,	beginOfWork date NOT NULL
-- ,	EndOfWork date 
-- ,	reason nvarchar(100) NOT NULL
-- ,	commanded nvarchar(30) NOT NULL
-- ,	FOREIGN KEY (id_employee) REFERENCES employee (id_employee) ON DELETE CASCADE
-- )


CREATE TABLE Positions (
    id int NOT NULL IDENTITY(1,1) PRIMARY KEY
    ,   title nvarchar(30) NOT NULL
)

insert into Positions
values
(N'оператор эвм'),
(N'админимтратор'),
(N'бухгалтер'),
(N'зам. директора'),
(N'директор')
-- select * from Positions


CREATE TABLE Restaurants (
    id int NOT NULL IDENTITY(1,1) PRIMARY KEY
    ,   name nvarchar(30) NOT NULL
    ,   address nvarchar(30) NOT NULL
    ,   phone nvarchar(30) NOT NULL
)

insert into Restaurants
values
(N'ДонКихот',N'Энгельс Нестерово 33',89878034733),

(N'ГолубаяУстрица', N'Энгельс Свободы 17',89878045678),
	
(N'Чайхана' , N'Энгельс Волоха 45', 89874568475),
	
(N'Рахмет', N'Энгельc Летная 47',89876453173),

(N'ЛавТу', N'Энгельс Свободы 77',89487652045)

-- select * from Restaurants


CREATE TABLE Employees (
    id int NOT NULL IDENTITY(1,1) PRIMARY KEY
    ,   restaurantID int NOT NULL
    ,   positionID int NOT NULL
    ,   firstName nvarchar(50) NOT NULL
    ,   lastName nvarchar(50) NOT NULL 
    ,   phone nvarchar(30) NOT NULL
    FOREIGN KEY (restaurantID) REFERENCES 
    Restaurants (id) ON DELETE CASCADE,
    FOREIGN KEY (positionID) REFERENCES 
    Positions (id) ON DELETE CASCADE


)

insert into Employees
values
(1,1,N'ИВан',N'ЛУчкий',89878044733),
(2,2,N'Серёжа',N'Трунь',89878144733),
(3,3,N'Георгий',N'Дац',89878049733),
(4,4,N'Константин',N'Устинов',89878044733),
(5,5,N'Дензел',N'Вашингтон',89878044733),
(1,1,N'Брут',N'Одз',89878094733),
(2,1,N'Вова',N'Флюс',89878024733),
(2,1,N'Георгий',N'Мысинов',89878024733),
-- select * from Employees

-- Select Restaurants.name from Restaurants where  
-- count(employee.positionID==1)>=2

-- select IIF((Select count(Employees.positionID) 
-- from Employees where Employees.positionID='1')='2',N'есть',N'нету') 
-- AS Restaurants.name
-- from Restaurants
-- RIGHT OUTER JOIN Employees On Restaurants.id=Employees.restaurantID;

select 
IIF(
  (Select count(Employees.positionID) from Employees where Employees.positionID=1)
  >=2,N'Gr',N'Sd') 
AS name
from Restaurants
RIGHT OUTER JOIN Employees On Restaurants.id=Employees.restaurantID;

-- select 
-- IIF((Select count(Employees.positionID) from Employees where Employees.positionID=1)>=2
--     ,Restaurants.name) 
-- AS Restaurants.name
-- from Restaurants
-- RIGHT OUTER JOIN Employees On Restaurants.id=Employees.restaurantID



--IIF(OldTicket=1,N'есть',N'нету') as OldTicket" 
-- IIF(employee.gender = 1 , N'мужчина', N'женщина') 


--             " from digitalWorkBook" +
--  " RIGHT OUTER JOIN employee On 
--  digitalWorkBook.id_employee = employee.id_employee";
