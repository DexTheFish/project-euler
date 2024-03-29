import math
'''
https://projecteuler.net/problem=44
Pentagonal numbers are generated by the formula, P_n = n(3n-1)/2. The first ten pentagonal numbers are: 1, 5, 12, 22, 35, 51, 70, 92, 117, 145, ...

It can be seen that P_4 + P_7 = 22 + 70 = 92 = P_8. However, their difference, 70 - 22 = 48, is not pentagonal.

Find the pair of pentagonal numbers, P_j and P_k, for which their sum and difference are pentagonal, and D = |P_k - P_j| is minimized. What is the value of D?

'''

# if x > 0 is pentagonal, then for some integer n > 0 we can write
#    n = (1 + sqrt(1 + 24x)) / 6
# it follows that sqrt(1 + 24x) is an integer, or in other words 1 + 24x is a square number.
# this precondition allows us to significantly reduce the number of cases considered


def P(n):
    return n * (3 * n - 1) // 2


def isSquare(n):
    sqrt = math.isqrt(n)
    return sqrt ** 2 == n


limit = 5000
for i in range(1, limit):
    for j in range(i, limit):
        sum = P(i) + P(j)
        x = 1 + 24 * sum
        if isSquare(x):
            dif = P(j) - P(i)
            y = 1 + 24 * dif
            if isSquare(y):
                if (1 + math.isqrt(x)) % 6 == 0 and (1 + math.isqrt(y)) % 6 == 0:
                    print(dif)
