# API Server

The API server was written in Express and uses sequelize with sqlite. I decided on sqlite due to the relational model present in the data (there would be a lot of nesting within Employee to hold reviewer and reviews information, requiring unwinding if we were to use something like mongodb).

### Initial seed data

The API server drops all data on startup and creates the following:

##### Users

| username | password  | name   |  reviewer for   | admin  |
| -------- | --------- | ------ | :-------------: | ------ |
| user1    | password1 | user 1 |        -        | false  |
| user2    | password2 | user 2 | user1 (q1-2016) | false  |
| user3    | password3 | user 3 |        -        | false  |
| admin    | adminpass | admin  |        -        | *true* |

