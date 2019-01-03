### The aliens API (written in NodeJS) 
***
#### Basic functionalities:

---

* For admin users
  * Sign up as administrator
  * Log in as administrator
  * Operate aliens:
    * Add an alien
    * Delete an alien
    * Modify an alien
    * Show details of an alien
    * Filter aliens by:
      * Login
      * Name
      * Age
      * Food
      * Race
      * Or any combination of above
---

* For aliens
  * Sign up as alien
  * Login as alien
  * Show personal info, personal info includes:
    * Login, name, age, food, race
  * Modify personal info
 
---

### How to test:

---

Import the "alien_api.json" file to postman.

If you want to insert many aliens into the database for testing,
you can any one of the script files in the "python_scripts"
folder.

---

### How to run the API:

* Step 1: `yarn dev:build`
* Step 2: `yarn dev`

---

#### PS: You can find the API test results in the "screenshots" folder.
