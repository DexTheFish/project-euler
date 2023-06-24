'''
https://projecteuler.net/problem=46
It was proposed by Christian Goldbach that every odd composite number can be written as the sum of a prime and twice a square.

9 = 7 + 2 * 1^2
15 = 7 + 2 * 2^2
21 = 3 + 2 * 3^2
25 = 7 + 2 * 3^2
27 = 19 + 2 * 2^2
33 = 31 + 2 * 1^2

It turns out that the conjecture was false.

What is the smallest odd composite that cannot be written as the sum of a prime and twice a square?

'''


def sieve(n):
    sieve = [True] * (n+1)
    sieve[0] = sieve[1] = False
    for i in range(2, int(n**0.5) + 1):
        if sieve[i]:
            for j in range(i*i, n+1, i):
                sieve[j] = False
    return sieve


limit = 10000
s = sieve(2 * limit + 1)
for i in range(limit):
    canBeWrittenAsSum = False
    odd = 2 * i + 1
    k = 1
    if not s[odd]:
        writeableAsSum = False
        k = 1
        while odd > 2 * k ** 2:
            diff = odd - 2 * k ** 2
            if s[diff]:
                writeableAsSum = True
            k += 1
        if not writeableAsSum:
            print(odd)
