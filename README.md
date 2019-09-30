# API Documentation

#### Backend delpoyed at [Heroku](https://labs15-lambdanext.herokuapp.com/) <br>

## Getting started

To get the server running locally:

- Clone this repo
- **yarn install** to install all required dependencies
- **yarn server** to start the local server
- **yarn test** to start server using testing environment
- **docker-compose up** to run db locally.

### Express JS

Why did you choose this framework?

- Based off experience alone and also fits perfectly for the project.
- Easy Scalability
- Express makes it easier by having to write less code vs using only node.
- Clear documentation

## Endpoints

#### Admin Routes

| Method | Endpoint                  | Access Control | Description                                           |
| ------ | ------------------------- | -------------- | ----------------------------------------------------- |
| GET    | `/admin/all`              | admins         | Returns the information for all problems.             |
| GET    | `/logout`              | admins         | Logs out the admin             |
| PUT    | `/admin/all/:id`          | admins         | Modify an existing problem by approving/declining it. |
| PUT    | `/admin/all/problems/:id` | ADMIN          | Admins can edit the problem in their view.            |
| DELETE | `/admin/all/:id`          | admins         | Delete a problem.                                     |

#### Problem Routes

| Method | Endpoint               | Access Control | Description                                             |
| ------ | ---------------------- | -------------- | ------------------------------------------------------- |
| GET    | `/problems`            | all users      | Returns info for all problems                           |
| GET    | `/problems/id`         | all users      | Returns all users for an organization.                  |
| GET    | `/problems/popular`    | all users      | Returns top 3 problems                                  |
| POST   | `/problems`            | all users      | Creates a a new problem where users can rate/signup to. |
| POST   | `/problems/:id/signup` | all users      | Users can back a problem by signing up to it.           |
| PUT    | `/problems/:id`        | ADMIN          | Admins can edit the problem in their view.              |
| PUT    | `/problems/:id/rate`   | all users      | Users sends a rating.                                   |
| POST   | `/users/signup`        | all users      | Users can back a problem by signing up to it.           |

# Data Model

🚫This is just an example. Replace this with your data model

#### 2️⃣ ADMIN

---

```
{
    id: UUID,
    email: STRING,
    password: STRING,
    google_id: STRING
}
```

#### PROBLEMS

---

```
{
    id: UUID,
    problem_title: STRING,
    problem_description: STRING,
    problem_category: STRING,
    date_created: STRING,
    created_by: STRING,
    admin_id: UUID foreign key in ADMIN table
    rating: FLOAT,
    numOfRatings: INTEGER,
    isApproved: BOOLEAN defaulted to false,
    isAccepting: BOOLEAN defaulted to true
}
```

#### USERS

---

```
{
    id: UUID,
    full_name: STRING,
    email: STRING,
    problem_id: UUID foreign key in PROBLEMS table
}
```

## Actions

### Users <br>

---

`getUsers()` -> Returns all users signed up to a problem

`getUserEmail()` -> Returns a user's full name and email.

`addUser(user)` -> Adds a new user

`updateUser(id, changes)` -> Update a user by ID

`deleteUser(id)` -> Delete a user by ID

### Admins <br>

---

`getAdmin()` -> Returns all admins

`getAdminByID()` -> Returns specefic admin.

`addAdmin(admin)` -> Adds a new admin

`updateAdmin(id, changes)` -> Update an Admin by ID

`deleteAdmin(id)` -> Delete an admin by ID

`getByEmail(filter)` -> Filters through emails

`add(admin)` -> Adds a new admin

`approveProblem(id,problem)` -> Modify problem by boolean

### Problems <br>

---

`getProblems()` -> Returns a list of problems

`getCreatedBy()` -> Returns problems that have been created by anyone

`insertProblem(problem)` -> Adds a new problem

`updateProblem(id, update)` -> Updates a problem by ID

`deleteProblem(id)` -> Deletes a problem by ID

`rateProblem(id)` -> Rate problem by ID

`updateRating(id, user)` => Update rating by ID

`getPopularProblems()` -> Returns the top 3 problems with the most number of rating

<br>
<br>
<br>

## Environment Variables

In order for the app to function correctly, the user must set up their own environment variables.

create a .env file that includes the following:

    *  STAGING_DB - optional development db for using functionality not available in SQLite
    *  NODE_ENV - set to "development" until ready for "production"
    *  JWT_SECRET - you can generate this by using a python shell and running import random''.join([random.SystemRandom().choice('abcdefghijklmnopqrstuvwxyz0123456789!@#\$%^&amp;*(-*=+)') for i in range(50)])
    *  SENDGRID_API_KEY - this is generated in your Sendgrid account
    *  GOOGLE_CLIENT_ID - this is generated in the google console dev dashboard
    *  GOOGLE_CLIENT_SECRET - this is generated in the google dashboard

#### sample .env file

---

```
PG_HOST=
PG_DB=
PG_USER=
PG_PASS=

STAGING=
S_HOST=
S_DB=
S_USER=
S_PASS=


GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
SEND_KEY=
FRONTEND_URL=


```

## Contributing

When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.

Please note we have a [code of conduct](./code_of_conduct.md). Please follow it in all your interactions with the project.

### Issue/Bug Request

**If you are having an issue with the existing project code, please submit a bug report under the following guidelines:**

- Check first to see if your issue has already been reported.
- Check to see if the issue has recently been fixed by attempting to reproduce the issue using the latest master branch in the repository.
- Create a live example of the problem.
- Submit a detailed bug report including your environment & browser, steps to reproduce the issue, actual and expected outcomes, where you believe the issue is originating from, and any potential solutions you have considered.

### Feature Requests

We would love to hear from you about new features which would improve this app and further the aims of our project. Please provide as much detail and information as possible to show us why you think your new feature should be implemented.

### Pull Requests

If you have developed a patch, bug fix, or new feature that would improve this app, please submit a pull request. It is best to communicate your ideas with the developers first before investing a great deal of time into a pull request to ensure that it will mesh smoothly with the project.

Remember that this project is licensed under the MIT license, and by submitting a pull request, you agree that your work will be, too.

#### Pull Request Guidelines

- Ensure any install or build dependencies are removed before the end of the layer when doing a build.
- Update the README.md with details of changes to the interface, including new plist variables, exposed ports, useful file locations and container parameters.
- Ensure that your code conforms to our existing code conventions and test coverage.
- Include the relevant issue number, if applicable.
- You may merge the Pull Request in once you have the sign-off of two other developers, or if you do not have permission to do that, you may request the second reviewer to merge it for you.

### Attribution

These contribution guidelines have been adapted from [this good-Contributing.md-template](https://gist.github.com/PurpleBooth/b24679402957c63ec426).

## Documentation

See [Frontend Documentation](https://github.com/labs15-lambda-next/frontend) for details on the fronend of our project.
Add DS iOS and/or Andriod links here if applicable.
