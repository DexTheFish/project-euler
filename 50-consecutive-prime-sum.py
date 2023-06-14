'''
The prime 41, can be written as the sum of six consecutive primes:
41 = 2 + 3 + 5 + 7 + 11 + 13.
This is the longest sum of consecutive primes that adds to a prime below one-hundred.
The longest sum of consecutive primes below one-thousand that adds to a prime, contains 21 terms, and is equal to 953.
Which prime, below one-million, can be written as the sum of the most consecutive primes?
'''


def primesArr(n):
    arr = [True] * n
    for i in range(2, n):
        if arr[i]:
            for j in range(2, n // i):
                arr[i * j] = False
    primes = []
    for i in range(2, n):
        if arr[i]:
            primes.append(i)
    return primes
