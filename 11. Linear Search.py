#Searching for an item in a list
#Linear Search

items = [89,32,15,16,5,43,6,2,9]

def find_item(item,itemlist):
    for i in range(0,len(items)):
        if item == itemlist[i]:
            return i 
    return None
print(find_item(2,items))