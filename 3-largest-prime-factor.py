# https://projecteuler.net/problem=3

# The prime factors of 13195 are 5, 7, 13 and 29.
# What is the largest prime factor of the number 600851475143 ?

#--------------- SOLUTION --------------------
# we are asked to find the largest prime factor of a very large number, num.
# This program returns the smallest factor p of num, then the smallest factor
# of num/p, and so on. By virtue of being smallest, these factors are naturally
# prime. Runtime is proportional to the size of the largest factor, I think.
# that is, our program took about 7000 steps to find the largest factor of
# a number close to 600 billion. (~ 10 ** 11)

def largest_factor(number):
    ''' returns the largest factor of number, such as 600851475143. (6857) '''
    num = number
    p = 2
    while num > p:
        if num % p == 0:
            num = int(num/p)
        p += 1
    return num

print(largest_factor(600851475143))