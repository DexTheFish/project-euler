# -*- coding: utf-8 -*-
"""
Solutions to some problems from ProjectEuler.net

Also includes some misc. functions, mostly for math.
Declan Davis 2019
"""
import numpy as np
import matplotlib.pyplot as plt
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

#print('the sum of even fibonacci numbers less than', 4*10**6, 'is', 
#      sum_even_fibonacci(4*10**6))

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
    while d <= x and d <= y:
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
    cap = int(p**0.5) + 1
    for i in range(2,cap):
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
    i = 1
    while counter < n:
        i += 1
        while isprime(i) == False:
            i += 1
        counter += 1
    if n > 0:
        return i

# MODIFY to treat 2 as a special prime and in general loop over i +=2
# to cut the runtime in half. That is, exploit the fact that primes are odd.
    
    
#---------------------------------------------------------------------
# Build a list of fibonacci numbers, and sarngadeva numbers.
#---------------------------------------------------------------------

def fibonacci(n):
    ''' list of first n fibonacci numbers.'''
    fib = [1,1]
    i=1
    while i<n-1:
        fib.append(fib[-1] + fib[-2])
        i +=1
    return fib[:n]
        
def sarngadeva(n):
    ''' list of first n sarngadeva numbers '''
    sar = [1,1,2,3,6,10]
    i=1
    while i<n-1:
        sar.append(sar[-1] + sar[-2] + sar[-4] + sar[-6])
        i += 1
    return sar[:n]

def cubes(n):
    ''' first n cubes'''
    return [i ** 3 for i in range(1,n+1)]
#           ^ this is a list comprehension
#    np.arange(1, n+1) ** 3  Bro use this arange function

#--------------------------------------------------------------------
# project idea: write a sudoku solver. Probably doesn't have to be super
# efficient to work.
#----------------------------------------------------------------------
    
def factor(n):
    num = n
    factors = []
    for i in range(2,n+1):
        while num % i == 0:
            factors.append(i)
            num = int(num/i)
    return factors



def circle_area(r):
    inside = 0
    for j in range(0,100000):
        x = np.random.uniform(-r,r)
        y=np.random.uniform(-r,r)
        if x**2 + y**2 < r**2:
            inside += 1
    return (inside / 100000 ) * 4 * r**2

def partition_estimator(r, n):
    inside = 0
    p_x = [-r + 2*r*j/n for j in range(0,n+1)]
    for a in p_x:
        for b in p_x:
            if a**2 + b**2 < r**2:
                inside += 1
    return (inside/(n**2)) * 4 * r**2
                
    



    