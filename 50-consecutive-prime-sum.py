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

# note that the final answer is composed of at least 6 terms
# therefore an upper bound for `start` is 10**6 / 6, approximately 160 000.
# this bound can be refined any time we find a candidate with more terms:
#        start < limit

# while primes[start] + ... + primes[end] < 10**6, increment the end index. Take note of any step where the sum is a prime, and update prime and count accordingly.


limit = 10 ** 3
arr = primesArr(limit)
arrMax = arr[-1]
start = 0    # starting index
end = 0    # ending index
currentSum = 2   # sum(primes[start:end])
mostTermSum = 2    # candidate for final answer
mostTerms = 6       # number of summands that form the candidate


increment = 1
while start < limit / mostTerms:

    if currentSum > arr[-1]:
        case = 1
    # case 1: currentSum exceeds 1 million
        # i. we just incremented 'end' too far. need to increment 'start' once and then start decrementing 'end'
        # ii. we havent yet decremented 'end' enough, and need to continue.

    # case 2: mostTerms exceeds end - start + 1
        # i.
