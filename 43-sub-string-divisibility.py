"""
https://projecteuler.net/problem=44
The number, 1406357289, is a 0 to 9 pandigital number because it is made up of each of the digits 0 to 9 in some order, but it also has a rather interesting sub-string divisibility property.

Let d1 be the 1st digit, d2 be the 2nd digit, and so on. In this way, we note the following:

d2d3d4=406 is divisible by 2
d3d4d5=063 is divisible by 3
d4d5d6=635 is divisible by 5
d5d6d7=357 is divisible by 7
d6d7d8=572 is divisible by 11
d7d8d9=728 is divisible by 13
d8d9d10=289 is divisible by 17
Find the sum of all 0 to 9 pandigital numbers with this property.
"""

import itertools
pandigitalsRaw = itertools.permutations('0123456789')
pandigitals = filter(lambda p: p[0] != '0', pandigitalsRaw)
primes = [2, 3, 5, 7, 11, 13, 17]
sum = 0

for p in pandigitals:
    pString = ''.join(p)
    pHasDivisibilityProperty = True
    for n in range(2, 9):
        if int(str(pString)[n - 1: n + 2]) % primes[n - 2] != 0:
            pHasDivisibilityProperty = False
    if pHasDivisibilityProperty:
        sum += int(pString)
print(sum)
