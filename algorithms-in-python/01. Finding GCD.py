
#Finding GCD Of Two Positve Integers.

def GCD(a,b): #9,4 #9,1
    while b != 0: #True #True #False
        t = a # t = 9 # t = 9
        a = b # a = 4 #a = 1
        b = t % b # b = 1 #b = 0
    return a # retun 1
print(GCD(9,4))

# #Refers To The Algorithm Used Behind Executing This Program