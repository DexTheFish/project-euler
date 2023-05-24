#---------------------------------------------------------------------
# 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
# What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
#-----------------------------------------------------------------

def isprime(p):
    ''' returns True iff p is a prime number '''
    if p < 2:
        return False
    for i in range(2,p):
        if p % i == 0:
            return False
    return True
      
def prime_list(n):
    ''' returns a list of the primes <= n. '''  
    primes = []
    i=0
    while i < n+1:
        if isprime(i):
            primes.append(i)
        i += 1
    return primes
            
def least_multiple_upto(n):
    ''' returns the smallest number divisible by 1, ..., n. It should be the 
    product of prime numbers p up to n, with the highest multiplicity that
    preserves p**a <= n. '''
    x = prime_list(n)
    factors = []
    answer = 1
    for p in x:
        i = 0
        while p ** i < n+1:
            z = p ** i
            i += 1
        factors.append(z)
    for factor in factors:
        answer = answer * factor
    return answer
    