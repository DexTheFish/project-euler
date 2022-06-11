# -*- coding: utf-8 -*-
"""
Created on Tue Aug 24 10:47:51 2021

@author: Admin
"""
import numpy as np
import matplotlib.pyplot as plt

def get_fibby(n):
    ''' produce a list of the Fibonacci numbers up to n '''
    if not int(n):
        return None
    elif n<=2:
        return [1,2]
    else:
        fibs = [1,2]
        while fibs[-1]+fibs[-2] <= n:
            fibs.append(fibs[-1]+fibs[-2])
        return fibs
        
def evensum(l):
    ''' add up all the even-valued terms of the list l '''
    total = 0
    for t in l:
        if t % 2 == 0:
            total += t
    return total

def sieve(n):
    nums = list(range(3,n,2))
    for i in range(len(nums)):
        if nums[i] != 0:
            t = nums[i]
            j=1
            while i + j*t < len(nums):
                nums[i+j*t]=0
                j +=1
    primes = [2] + [n for n in nums if n != 0]
    return primes
    
def isprime(n):
    ans = True
    if n <= 2 or not(int(n)):
        return 'come on, you can figure this one out.'
    else:
        cap = int(np.sqrt(n))
        x = sieve(cap)
        for y in x:
            if n % y == 0:
                ans = False
    return ans

def palindrome(n):
    ''' test whether a number is a palindrome '''
    digits = str(n)
    if digits == digits[::-1]:
        return True
    else:
        return False


def bigprime(n):
    ''' return the largest prime factor of n '''
    primes = sieve(n)
    x = 0
    j=0
    while x == 0:
        if n % primes[j] == 0:
            x = primes[j]
        else:
            j += 1
    return n//x

def bigprime2(n):
    ''' a more efficient bigprime function'''
    a = n
    smalls = []
    primes = sieve(10000)
    for p in primes:
        while a % p == 0:
            a = a//p
            smalls.append(p)
    return a,smalls
            
              
def gauntlet(n):
    ''' crafting xp from n simulated gauntlet runs '''
    (kc,saph, em, ruby, diamond) = (0,0,0,0,0)
    while kc < 3*n:
        kc += 1
        roll = np.random.randint(1,25)
        if roll == 1:
            saph += np.random.randint(25,66)
        if roll == 2:
            em += np.random.randint(15,61)    
        if roll == 3:
            ruby += np.random.randint(10,41)   
        if roll == 4:
            diamond += np.random.randint(5,16)
    return 50*saph + 67.5*em + 85*ruby + 107.5*diamond



def Project_Euler_4(n,m):
    ''' find biggest palindrome which is product
    of an n-digit and m-digit number '''
    products = []
    pals = []
    for i in range(10**(n-1),10**n):
        for j in range(10**(m-1),10**m):
            products.append(i*j)
    for x in products:
        digits = str(x)
        if digits == digits[::-1]:
            pals.append(x)
    return max(pals)
    
def factor(n):
    '''return prime factorization of n '''
    x = n
    y = sieve2(n)[0]
    factors = []
    for p in y:
        #if p <= np.sqrt(x):
        while x % p == 0:
            factors.append(p)
            x = x // p
    return factors
          




def adjacent_product(n,digits):
    ''' finds n adjacent numbers in digits whose product
    is maximal '''
    zeros = [] #list of indices of zeros
    segments = [] #list of nonzero chunks of digits
    x = string_to_digits(digits)
    for i in range(0,len(x)):
        if x[i]==0:
           zeros.append(i)
    
    segments.append(x[:zeros[0]])
    segments.append(x[zeros[-1]+1:])
    for i in range(len(zeros)-1):
        segments.append(x[zeros[i]+1:zeros[i+1]])
    # make a list of candidate products
    # for each segment:
    # if it's shorter than 14, return the segment's product
    # otherwise, multiply first 0th to 12th, then 1st to 13th,
    # and i'th to (i+12)'th until i+13 = len(segment).      
    P = []
    for s in segments:
        if len(s) >= n:
            for i in range(len(s)-n+1):
                P.append(np.prod(s[i:i+n]))
    return max(P)
    
string='''73167176531330624919225119674426574742355349194934
96983520312774506326239578318016984801869478851843
85861560789112949495459501737958331952853208805511
12540698747158523863050715693290963295227443043557
66896648950445244523161731856403098711121722383113
62229893423380308135336276614282806444486645238749
30358907296290491560440772390713810515859307960866
70172427121883998797908792274921901699720888093776
65727333001053367881220235421809751254540594752243
52584907711670556013604839586446706324415722155397
53697817977846174064955149290862569321978468622482
83972241375657056057490261407972968652414535100474
82166370484403199890008895243450658541227588666881
16427171479924442928230863465674813919123162824586
17866458359124566529476545682848912883142607690042
24219022671055626321111109370544217506941658960408
07198403850962455444362981230987879927244284909188
84580156166097919133875499200524063689912560717606
05886116467109405077541002256983155200055935729725
71636269561882670428252483600823257530420752963450'''
   
string2 = '122467000'
    
def string_to_digits(string):
    digs=[]
    for i in range(len(string)):
        if string[i].isnumeric():
            digs.append(int(string[i]))
    return digs

def Euler8solution(n,s):
    ''' n=13 and s is the 1000-digit number '''
    products = []
    x = string_to_digits(s)
    for i in range(len(x)-n):
        counter = 1
        for j in range(n):
            counter = counter * x[i+j]
        products.append(counter)
    return max(products)

def PythagorasTriplet(n):
    ''' return a product of a pythagorean triplet whose sum is n '''
    for i in range(1, n//3 + 1):
        for j in range(i+1,(n-i)//2):
            if i**2 + j**2 == (n-i-j)**2:
                answer = i*j*(n-i-j)
    return answer


############################# PROBLEM 11: ################
     # find 4 consecutive numbers such that the product
     # is as large as possible. can go across,down,diagonal.

grid11 = np.loadtxt('Project_Euler_Problem11.txt')

def maxproduct(n,grid):
    '''grid is an array, each entry is a row of the grid.'''
    '''return largest product of n adjacent
    numbers in the grid, vert/horiz/diag. '''
    v,h,d = [],[],[]
    # horizontal products:
    for row in grid:
        for i in range(len(row)-n+1):
                h.append(np.product([row[i+j] for j in range(n)]))
    # vertical products:
    for i in range(len(grid)-n+1):
        for j in range(len(grid[0])):
            v.append(np.product([grid[i+k][j] for k in range(n)]))
    # diagonal products in the \ direction
    for i in range(len(grid[0])-n+1):
         for j in range(len(grid)-n+1):
            d.append(np.product([grid[i+k][j+k] for k in range(n)]))
    # diagonal products in the / direction
    for i in range(n-1,len(grid)):
        for j in range(len(grid[0])-n+1):
            d.append(np.product([grid[i-k][j+k] for k in range(n)]))
        #d.append(np.product([row[i]]))
    return max([max(v),max(h),max(d)])


def sieve2(n):
    '''sieves the primes up to n and returns them and their sum'''
    nums = list(range(3,n,2))
    sum = 0
    for i in range(len(nums)):
        if nums[i] != 0:
            sum += nums[i]
            t = nums[i]
            j=1
            while i + j*t < len(nums):
                nums[i+j*t]=0
                j +=1
    primes = [2] + [n for n in nums if n != 0]
    return primes, sum+2
                

#### problem 12 ############

# we have a hundred 50-digit numbers to add up. #####

terms = np.loadtxt('Project_Euler_Problem13.txt')#, dtype=str)

def collatz(n):
    '''returns the collatz sequence starting at n '''
    orbit=[n]
    x = n
    while x > 1:
        if x % 2 == 0:
            x = x//2
            orbit.append(x)
        else:
            x = 3*x + 1
            orbit.append(x)
    return orbit

def longcollatz(n):
    '''returns the number < n with the longest orbit possible '''
    nums = list(range(2,n))
    longest = 1, 1
    for x in nums:
        t = len(collatz(x))
        if t > longest[1]:
            longest = x, t
    return longest
        
########### Problem 12: triangular number with > 500 divisors #########


    
def prime_factorization(n,siv):
    '''returns prime factors and multiplicities'''
    # sieve for candidates first
    # only check up to sqrt(n)
    # for each candidate, update multiplicity on each loop
    facs=[]
    x=n
    i = 0
    m = 0
    while siv[i] < np.sqrt(x):
        m=0
        while x % siv[i] == 0:
            m += 1
            x = x // siv[i]
        if m > 0:
            facs.append([siv[i],m])
        i += 1
    return facs
            
def tri(n):
    '''sum of first n numbers'''
    return int(n*(n+1)/2)       
    
def tau(n,siv):
    '''number of divisors of n. sieve should be at least up to n.'''
    x = prime_factorization(n,siv)
    z=1
    for y in x:
        z = z * (y[1]+1)
    return z

def Project_Euler_Problem12(n):
    ''' first triangular number with over n divisors '''
    s = sieve(100) # starting sieve
    m = 1  # triangular index
    done = False
    while done == False:
        x = tri(m)
        if s[-1] < x:
            s = sieve(2*x)
        if tau(x,s) > n:
            done = True
        m += 1
    return x

 # step 0: make a small sieve 
## step 1: produce triangular number x
 # step 1.5: if sieve < x then update sieve to sieve(2x)
   
## step 2: prime factorize x into p^a * q^b * ...
    
## step 3: multiply (a+1)*(b+1)* ... and see if it's over 500
    
# need to do a real proper job of step 2.
    


def get_pi(n):
    ''' compute pi statistically by throwing n darts at
    a square board and tallying the darts in the inscribed
    circle. '''
    dart = 0
    inside = 0
    while dart < n:
        dart += 1
        x = np.random.randint(-10000,10000)/10000
        y = np.random.randint(-10000,10000)/10000
        if x**2 + y**2 <= 1:
            inside += 1
    
    return 4 * inside / n
 
def number_letter_count(n):
        '''how many letters to spell out all the numbers from 1 
        to n? '''
        A = len('onetwothreefourfivesixseveneightnine')
        B = len('twentythirtyfortyfiftysixtyseventyeightyninety')
        C = len('teneleventwelvethirteenfourteenfifteensixteenseventeeneighteennineteen')
        hundreds_places = 900 * len('hundred')
        ones_places = 90 * A
        thousands_places = len('thousand') #remember to acct. for the one in onethousand
        low_tens_places = 10 * C
        reg_tens_places = 100 * B
        # each hundreds number has a prefix. 100 prefixes of each type one-nine.
        hundred_prefixes = 100 * A
        # each hundreds number uses 'and' to separate from the remainder 
        #except for the multiples of 100.
        ands = 891*len('and')
        return [hundreds_places+ones_places+thousands_places+low_tens_places
                +reg_tens_places + hundred_prefixes + ands + 3]
    
    




