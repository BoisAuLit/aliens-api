### The aliens API (written in NodeJS) 
***
#### Basic functionalities:

---

* For admin users
  * Sign up
  * Log in
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
  * Sign up
  * Log in
  * Show personal info, including:
    * Login, name, age, food, race
  * Modify personal info
    * Modify age, name, food, race
  * Followers / followees functionality
    * Show info about
      * His followers
      * Aliens that he followed
    * Follow another alien
    * Unfollow another alien
  * Friends functionality
    * Show friend requests
      * Show friend requets that other aliens sent him (not approved yet by him/her)
      * Show friend requets that he sent to aother aliens (not approved yet by other aliens)
    * Send friend requets to another alien
    * Break up with another alien (stop being friend with a friend)
  
More details about the followers & friends functionality:
  * Followers functionality of this API
    * An alien can follow another alien when he/she wants.
  * Friends functionality of this API
    * An alien can send friend requet to another alien, then the target alien can
    accpet this friend requet or he/she can ignore the friend request.
    
There are the following collections in the MongoDB database:
1. The "aliens" collection stores info about all aliens
2. The "admins" collection stores info about all administrators
3. The "friends" collection stores all friendships of aliens. To be noted: every friendship
  is represented by two documents in the collection, this is to facilitate the searching
  process.
4. The "requests" collection stores all pending friend requets. All accepted friend requets
  will be removed from the "requests" collection.
5. The "followinfos" collection stores all the followers / followees info.
 
---


### How to run the API:

* Step 1: `yarn dev:build`
* Step 2: `yarn dev`

---

PS: You can find the postman requests collection in the "postman" folder.
