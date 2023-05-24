# -*- coding: utf-8 -*-
"""
Solutions to some problems from ProjectEuler.net
Declan Davis 2019
"""

#-----------------------------------------------------------------
# we are asked to find the largest prime factor of a very large number, num.
# This program returns the smallest factor p of num, then the smallest factor
# of num/p, and so on. By virtue of being smallest, these factors are naturally
# prime. Runtime is proportional to the size of the largest factor, I think.
# that is, our program took about 7000 steps to find the largest factor of
# a number close to 600 billion. (~ 10 ** 11)
#-----------------------------------------------------------------

def largest_factor(number):
    ''' returns the largest factor of number, such as 600851475143. (6857) '''
    num = number
    p = 2
    while num > p:
        if num % p != 0:
            p += 1
        else: 
            num = int(num/p)
            p += 1
    return num
    
#------------------------------------------------------------------
# we are asked to find the sum of fibonacci numbers which are even and under
# four million. The runtime is small as there are relatively few fib nums
# under the given maximum.
#------------------------------------------------------------------

def sum_even_fibonacci(maximum):
    ''' returns the sum of the fibonacci numbers which are both even and less
    than maximum. '''
    fib = [0,1]
    answer = 0
    while fib[-1] + fib[-2] <= maximum:
        fib.append(fib[-2] + fib[-1])
    for term in fib:
        if term % 2 == 0:
            answer += term
    return answer

print('the sum of even fibonacci numbers less than', 4*10**6, 'is', 
      sum_even_fibonacci(4*10**6))

#---------------------------------------------------------------------
# we are asked to find the largest palindromic number which is the product
# of two 3-digit numbers. Palindromic numbers include 9009, 11, 27172, etc.
#---------------------------------------------------------------------

def large_palindrome_product(digits):
    '''returns largest palindromic number which is the product of two numbers
    with the specified number of digits. This function is not efficient.'''
    pal = '1'
    factors = 1, 1
    for i in range(1, 10**digits):
        for j in range(1, 10**digits):
            x = str( i * j)
            y = True
            for k in range(0, len(x)):
                if x[k] != x[-(k+1)]:
                    y = False
            if y and int(x) > int(pal):
                pal = x
                factors = i, j
    return [pal, factors[0], factors[1]]
    
#---------------------------------------------------------------------
# I just wanted a function to compute GCDs to check my homework
#---------------------------------------------------------------------

def gcd(x,y):
    ''' returns the greatest common divisor of natural numbers x and y '''
    d = 1
    divisors = []
    while d < x and d < y:
        if x % d == 0 and y % d == 0:
            divisors.append(d)
        d += 1
    return max(divisors)

#---------------------------------------------------------------------
# what is the smallest number divisible by each of 1, 2, ..., 20?
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
    
#-----------------------------------------------------------------
# what is the 10 001st prime number?
#-----------------------------------------------------------------          

def prime_sequence_term(n):
    ''' returns the nth prime '''
    counter = 0
    i = 0
    while counter < n:
        i += 1
        while isprime(i) == False:
            i += 1
        counter += 1
    if n > 0:
        return i

    
        
    
    
    
    
