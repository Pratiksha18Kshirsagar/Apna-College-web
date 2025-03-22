const { faker } = require('@faker-js/faker');
const mysql = require("mysql2");
const express = require("express");
const app = express();
const port = "8080";
const path = require("path");
const methodOverride = require("method-override");
const { v4: uuidv4 } = require('uuid');

app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }))
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'delta_app',
    password: 'Pratiksha@18'
});

let getRandomUser = () => {
    return [
        faker.string.uuid(),
        faker.internet.username(),
        faker.internet.email(),
        faker.internet.password(),

    ]
}

// let q = "INSERT INTO user (id,username,email,password) VALUES ?"
// let data = [];
// for (let i = 1; i <= 100; i++) {
//  data.push(getRandomUser());
// }


app.listen(port, () => {
    console.log("App is listening on port 8080!!");
})

app.get("/", (req, res) => {
    let q = "SELECT count(*) FROM user";
    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
            console.log(result);
            let count = result[0]["count(*)"];
            res.render("home.ejs", { count });
        })
    } catch (err) {
        console.log(err);
        res.send("some err in DB");
    }

})

app.get("/user", (req, res) => {
    let q = "SELECT * FROM user"
    try {
        connection.query(q, (err, users) => {
            if (err) throw err;
            res.render("showuser.ejs", { users });
        })
    } catch (err) {
        console.log(err);
        res.send("some err in DB");
    }
})

//edit route
app.get("/user/:id/edit", (req, res) => {
    let { id } = req.params;
    let q = `SELECT * FROM user WHERE id = '${id}'`;
    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
            let user = result[0];
            console.log(user);
            res.render("edit.ejs", { user });
        })
    } catch (err) {
        console.log(err);
        res.send("some err in DB");
    }
})

//update route

app.patch("/user/:id", (req, res) => {
    let { id } = req.params;
    let {  password,  username } = req.body;
   
    console.log(req.body);
    let q = `SELECT * FROM user WHERE id = '${id}'`;
    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
            let user = result[0];
            if (password != user.password) {
                res.send("wrong password!!")
            }
            else {
                let q2 = `UPDATE user SET username = '${username}' WHERE id = '${id}'`;
                connection.query(q2, (err, result) => {
                    if (err) throw err;
                    res.redirect("/user");
                })
            }
        });
    } catch (err) {
        console.log(err);
        res.send("some err in DB");
    }
})

//change password
app.get("/user/:id/editPass", (req, res) => {
    let { id } = req.params;
    let q = `SELECT * FROM user WHERE id = '${id}'`;
    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
            let user = result[0];
            console.log(user);
            res.render("editPass.ejs", { user });
        })
    } catch (err) {
        console.log(err);
        res.send("some err in DB");
    }
})

app.patch("/user/:id/updatePassword", (req, res) => {
    let { id } = req.params;
    let { password , newPassword } = req.body;
    console.log(req.body);
    let q = `SELECT * FROM user WHERE id = '${id}'`;
    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
            let user = result[0];
            if (password != user.password) {
                res.send("wrong password!!")
            }
            else {
                let q2 = `UPDATE user SET password = '${newPassword}' WHERE id = '${id}'`;
                connection.query(q2, (err, result) => {
                    if (err) throw err;
                    res.redirect("/user");
                })
            }
        });
    } catch (err) {
        console.log(err);
        res.send("some err in DB");
    }
})


//add user

app.get("/user/new", (req, res) => {
    res.render("new.ejs");
})

app.post("/user", (req, res) => {
    let { username, email, password } = req.body;
    let id = uuidv4();
    console.log(id)

    let q = `INSERT INTO user (id,email,username,password) VALUES (?, ?, ?, ?)`;
    let newData = [];
    newData.push(id);
    newData.push(email);
    newData.push(username);
    newData.push(password);
    console.log(newData);
    connection.query(q, newData, (err, result) => {
        try {
            if (err) throw err;
            else {
               
                console.log(result);
                res.redirect("/user");
            }
        }
        catch (err) {
            console.log(err);
            res.send("Some error appeared!!")
        }
    })

})


app.get("/user/:id/delete" , (req,res)=>{
    let{id} = req.params;
    console.log(id);
    let q = `SELECT * FROM user WHERE id = '${id}'`;
    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
            let user = result[0];
         
            res.render("delete.ejs", { user });
        })
    } catch (err) {
        console.log(err);
        res.send("some err in DB");
    }
})


app.delete("/user/:id" , (req,res)=>{
    let{id} = req.params;
    console.log(id);
    console.log(req.body);
    let { email: formEmail, password: formPass } = req.body;
   
    let q = `SELECT * FROM user WHERE id = '${id}'`;
    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
            let user = result[0];
            if (formPass != user.password && formEmail != user.email) {
                res.send("wrong password!!")
            }
            else {
                let q2 = `DELETE FROM user  WHERE id = '${id}'`;
                connection.query(q2, (err, result) => {
                    if (err) throw err;
                    res.redirect("/user");
                })
            }
        });
    } catch (err) {
        console.log(err);
        res.send("some err in DB");
    }
})


//delta code for add newUser!

// app.post("/user/new", (req, res) => {
//         let { username, email, password } = req.body;
//         let id = uuidv4();
//         //Query to Insert New User
//         let q = `INSERT INTO user (id, username, email, password) VALUES ('${id}','${username}','${email}','${password}') `;
      
//         try {
//           connection.query(q, (err, result) => {
//             if (err) throw err;
//             console.log("added new user");
//             res.redirect("/user");
//           });
//         } catch (err) {
//           res.send("some error occurred");
//         }
//       });