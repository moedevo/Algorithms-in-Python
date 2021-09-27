def power(num,pwr):
    if pwr == 0:
        return 1
    else:
        return num * power(num,pwr-1)

print(power(3,4))

def factorial(num):
    if num == 0:
        return 1
    else:
        return num * factorial(num - 2)
print(factorial(8))
