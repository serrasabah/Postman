var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
const request = require('index.js');

//Connect Ms server with Node.js
 var sql = require("mssql");
    // config for your database
    var config = {
        user: 'serra',
        password: '2',
        server: 'LAPTOP-5MH69C15\\SQLEXPRESS',
        database: 'NORTHWND',
      //  port: 1434,
        options: {
            trustedConnection: false,
           // encrypt: true,
            enableArithAbort: true,
            trustServerCertificate: true,

        }
    };


//Get Categoryies data
app.get('/getCategories', function (req, res) {
    // connect to your database
    sql.connect(config, function (err) {

        if (err) console.log(err);

        // create Request objectnode server.js
        var request = new sql.Request();

        // query to the database and get the records
        request.query('select  CategoryID, CategoryName, Description from Categories', function (err, rs) {

            if (err) console.log(err)

            // send records as a response
            res.send(rs);

        });
    });
});



//Get Categoryies data (musteri tum urunleri görmek yerine sectiği kategori görmesi)
app.post('/getCategoriesbyrequest',jsonParser, function (req, res) {
    // connect to your database
    sql.connect(config, function (err) {

        if (err) console.log(err);

        // create Request objectnode server.js
        var request = new sql.Request();

        // query to the database and get the records
             request.query("select CategoryID, CategoryName,Description from Categories where CategoryName='"+req.body.CategoryName+"'", function (err, rs) {

            if (err) console.log(err)

            // send records as a response
            res.send(rs);

        });
    });
});

//Get Products Data
app.get('/getProducts', function (req, res) {
    // connect to your database
    sql.connect(config, function (err) {

        if (err) console.log(err);

        // create Request objectnode server.js
        var request = new sql.Request();

        // query to the database and get the records
        request.query('select * from Products', function (err, rs) {

            if (err) console.log(err)

            // send records as a response
            res.send(rs);

        });
    });
});

//Get Customers Data
app.get('/getCustomers', function (req, res) {
    // connect to your database
    sql.connect(config, function (err) {

        if (err) console.log(err);

        // create Request objectnode server.js
        var request = new sql.Request();

        // query to the database and get the records
        request.query('select * from Customers', function (err, rs) {

            if (err) console.log(err)

            // send records as a response
            res.send(rs);

        });
    });
});

//Get Customers Data
app.get('/getEmployees', function (req, res) {
    // connect to your database
    sql.connect(config, function (err) {

        if (err) console.log(err);

        // create Request objectnode server.js
        var request = new sql.Request();

        // query to the database and get the records
        request.query('select EmployeeID,LastName,FirstName,Title,TitleOfCourtesy,BirthDate,HireDate,Address,City,Region,PostalCode,Country,HomePhone,Extension from Employees', function (err, rs) {

            if (err) console.log(err)

            // send records as a response
            res.send(rs);

        });
    });
});

//Get Orders Data
app.get('/getOrders', function (req, res) {
    // connect to your database
    sql.connect(config, function (err) {

        if (err) console.log(err);

        // create Request objectnode server.js
        var request = new sql.Request();

        // query to the database and get the records
        request.query('select * from Orders', function (err, rs) {

            if (err) console.log(err)

            // send records as a response
            res.send(rs);

        });
    });
});


//Get Orders Data
app.get('/getRegion', function (req, res) {
    // connect to your database
    sql.connect(config, function (err) {

        if (err) console.log(err);

        // create Request objectnode server.js
        var request = new sql.Request();

        // query to the database and get the records
        request.query('select * from Region', function (err, rs) {

            if (err) console.log(err)

            // send records as a response
            res.send(rs);

        });
    });
});


//Selecet product where CategoryID=... (Aynı kategoride olan ürünleri listele)
app.post('/getProductByCategory',jsonParser, function (req, res) {

    // connect to your database
    sql.connect(config, function (err) {

        if (err) console.log(err);

        // create Request objectnode server.js
        var request = new sql.Request();

        // query to the database and get the records
        request.query("select ProductID, ProductName from Products where CategoryID='"+req.body.CategoryID+"'", function (err, rs) {

            if (err) console.log(err)

            // send records as a response
            res.send("ürün kaydedildi");

        });
    });
});



//add ProductNmae to Products
app.post('/saveProduct',jsonParser, function (req, res) {
    // connect to your database
    sql.connect(config, function (err) {

        if (err) console.log(err);

        // create Request objectnode server.js
        var request = new sql.Request();

        // query to the database and get the records
        request.query("insert into Products(ProductName) values ('"+req.body.ProductName+"')", function (err, rs) {

            if (err) console.log(err)


            // send records as a response
            res.send("ürün kaydedildi");

        });
    });
});



//add Customer
app.post('/addCustomer',jsonParser, function (req, res) {
    // connect to your database
    sql.connect(config, function (err) {

        if (err) console.log(err);

        // create Request objectnode server.js
        var request = new sql.Request();

        // query to the database and get the records
        request.query("insert into Customers(CustomerID, CompanyName, City, Country) values ('"+req.body.CustomerID+"','"+req.body.CompanyName+"','"+req.body.City+"','"+req.body.Country+"')", function (err, rs) {

            if (err) console.log(err)


            // send records as a response
            res.send("customer eklendi");

        });
    });
});

//delete Customer
app.post('/deleteCustomer',jsonParser, function (req, res) {
    // connect to your database
    sql.connect(config, function (err) {

        if (err) console.log(err);

        // create Request objectnode server.js
        var request = new sql.Request();

        // query to the database and get the records
        request.query("DELETE FROM Customers WHERE CompanyName=('"+req.body.CompanyName+"')", function (err, rs) {

            if (err) console.log(err)


            // send records as a response
            res.send("customer silindi");

        });
    });
});


//add Employees 
app.post('/addEmployees',jsonParser, function (req, res) {
    // connect to your database
    sql.connect(config, function (err) {

        if (err) console.log(err);

        // create Request objectnode server.js
        var request = new sql.Request();

        // query to the database and get the records
        request.query("insert into Employees(FirstName, LastName) values ('"+req.body.FirstName+"', '"+req.body.LastName+"')", function (err, rs) {

            if (err) console.log(err)


            // send records as a response
            res.send("Employee Kaydedildi.");

        });
    });
});


//update productName 'elma'
app.post('/updateProduct',jsonParser, function (req, res) {
    // connect to your database
    sql.connect(config, function (err) {

        if (err) console.log(err);

        // create Request objectnode server.js
        var request = new sql.Request();

        // query to the database and get the records
        request.query("UPDATE Products SET ProductName  = ('"+req.body.ProductName+"') WHERE ProductID =('"+req.body.ProductID+"');", function (err, rs) {

            if (err) console.log(err)


            // send records as a response
            res.send("ürün güncellendi");

        });
    });
});



//update Employee 
app.post('/updateEmployee',jsonParser, function (req, res) {
    // connect to your database
    sql.connect(config, function (err) {

        if (err) console.log(err);

        // create Request objectnode server.js
        var request = new sql.Request();

        // query to the database and get the records
        request.query("UPDATE Employees SET FirstName = ('"+req.body.FirstName+"') WHERE LastName =('"+req.body.LastName+"');", function (err, rs) {

            if (err) console.log(err)


            // send records as a response
            res.send("Employee ismi güncellendi");

        });
    });
});


//customer ıd ALFKI olan kisinin 1998 yılında siparis ettigi ürünleri listele
app.get('/getCustomer_Orders1998', function (req, res) {
    // connect to your database
    sql.connect(config, function (err) {

        if (err) console.log(err);

        // create Request objectnode server.js
        var request = new sql.Request();

        // query to the database and get the records
        request.query("select Customers.CustomerID ,ProductName, Orders.OrderID, orders.OrderDate from Customers inner join Orders on Customers.CustomerID=Orders.CustomerID  inner join [Order Details] on [Order Details].OrderID=orders.OrderID inner join Products on [Order Details].ProductID=Products.ProductID where Customers.CustomerID='ALFKI' and year(OrderDate)=1998", function (err, rs) {

            if (err) console.log(err)

            // send records as a response
            res.send(rs);

        });
    });
});


//arrange localhost:5000
var server = app.listen(5000, function () {
    console.log('Server is running..');
});

