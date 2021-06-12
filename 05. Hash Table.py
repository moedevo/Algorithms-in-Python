# demonstrate hashtable usage


#Create a hashtable all at once
items1 = dict({"key1" : 1 , "key2" : 2 , "key3" : 3})
print(items1)

#Create a hashtable progressively
items2 = {}
items2["key1"] = 1
items2["key2"] = 2
items2["key3"] = 3
print(items2)

#Try to access a nonexistent key
#print(items1["key4"])

#Replace an item
items1["key1"] = 6
print(items1)

#Iterate the keys and values in the dictionary
for key,value in items1.items():
    print(key,value)