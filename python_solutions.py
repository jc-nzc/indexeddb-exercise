# Multiples of 3 or 5
def solution(number):
    return sum(x for x in range(number) if x % 3 ==0 or x % 5 == 0)

# with a full class
class Multiples:
    def __init__(self, maximum):
      self.maximum = maximum

    def sum(self, base):
        count = self.maxiumum // base + 1
        last = base * (count - 1)
        return count * last // 2

def solution(number):
    multiples = Multiples(number - 1)
    return multiples.sum(3) + multiples.sum(5) - multiples.sum(15)

# python program to illustrate nested If statement 
#!/usr/bin/python 
i = 10
if (i == 10): 
    #  First if statement 
    if (i < 15): 
        print ("i is smaller than 15") 
    # Nested - if statement 
    # Will only be executed if statement above 
    # it is true 
    if (i < 12): 
        print ("i is smaller than 12 too") 
    else: 
        print ("i is greater than 15") 
