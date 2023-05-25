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
select * from Positions


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

select * from Restaurants


CREATE TABLE Positions (
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
