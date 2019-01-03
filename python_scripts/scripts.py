
# coding: utf-8

# In[14]:


names_sample = [
"Aaberg"
,
"Aalst"
,
"Aara"
,
"Aaren"
,
"Aarika"
,
"Aaron"
,
"Aaronson"
,
"Ab"
,
"Aba"
,
"Abad"
,
"Abagael"
,
"Abagail"
,
"Abana"
,
"Abate"
,
"Abba"
,
"Abbate"
,
"Abbe"
,
"Abbey"
,
"Abbi"
,
"Abbie"
,
"Abbot"
,
"Abbotsen"
,
"Abbotson"]
names_sample


# In[15]:


food_sample = [
        "apple",
        "apricot",
        "avocado",
        "banana",
        "bell pepper",
        "bilberry",
        "blackberry",
        "blackcurrant",
        "blood orange",
        "blueberry",
        "boysenberry",
        "breadfruit",
        "canary melon",
        "cantaloupe",
        "cherimoya",
        "cherry",
        "chili pepper",
        "clementine",
        "cloudberry",
        "coconut",
        "cranberry",
        "cucumber",
        "currant",
        "damson",
        "date",
        "dragonfruit",
        "durian",
        "eggplant",
        "elderberry",
        "feijoa",
        "fig",
        "goji berry",
        "gooseberry",
        "grape",
        "grapefruit",
        "guava",
        "honeydew",
        "huckleberry",
        "jackfruit",
        "jambul",
        "jujube",
        "kiwi fruit",
        "kumquat",
        "lemon",
        "lime",
        "loquat",
        "lychee",
        "mandarine",
        "mango",
        "mulberry",
        "nectarine",
        "nut",
        "olive",
        "orange",
        "pamelo",
        "papaya",
        "passionfruit",
        "peach",
        "pear",
        "persimmon",
        "physalis",
        "pineapple",
        "plum",
        "pomegranate",
        "pomelo",
        "purple mangosteen",
        "quince",
        "raisin",
        "rambutan",
        "raspberry",
        "redcurrant",
        "rock melon",
        "salal berry",
        "satsuma",
        "star fruit",
        "strawberry",
        "tamarillo",
        "tangerine",
        "tomato",
        "ugli fruit",
        "watermelon"
    ]
food_sample


# In[40]:


for x in range(0, 100):
    
    random_dict = {}
    
    name_index = random.randint(0, len(names_sample) - 1)
    food_index = random.randint(0, len(food_sample) - 1)
    
    random_name = names_sample[name_index]
    random_food = food_sample[food_index]

    random_dict["login"] = "alien_test_" + str(x + 5)
    random_dict["password"] = "Password1"
    random_dict["name"] = random_name
    random_dict["age"] = x * 2 + 1
    random_dict["food"] = random_food
    random_dict["race"] = "Jaad" + str(x * 2 + 1)
    
    print(random_dict)
    
    requests.post("http://localhost:3000/api/v1/aliens/signup", data = random_dict)

