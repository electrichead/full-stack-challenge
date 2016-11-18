# Performance reviews

This is a submission for the PayTM Full-stack developer position.

## Requirements

The requirements as understood are produced below.

###### APIs

* POST, PUT, GET, DELETE /api/v1/employees
* POST, PUT, GET /api/v1/employees/{:id}/reviews
* POST, PUT, GET, DELETE /api/v1/employees/{:id}/reviewers

###### Security

* Authentication
* Authorization (admin/employee)

###### Client

* View employees (Admin)
* View employee detail (Admin)
  * List reviewers
  * List possible reviewers
  * Allow assignment of reviewers
  * Show reviews submitted by reviewers
    * View review detail
* View assigned performance reviews (Employee)
  * Add review



## Assumptions

* Employees cannot edit or view reviews once submitted (`List of performance reviews requiring feedback` was specified in requirements)
* When an employee is removed from the reviewers list for another employee, any existing reviews are removed
* User and employee database will be pre-generated since we would need to use emails to actually implement authentication. Validation of users will be skipped for the purpose of this exercise but would normally be supported.
* 4 employees and one admin user will be created: admin, user1, user2, user3, user4
* Unit testing will be provided but not E2E testing (due to time constraints)
* Node v6 and evergreen browsers are assumed
* Clustering, failover etc. is not considered on the server
* Angular material is being used so that I don't have to think about styling for this