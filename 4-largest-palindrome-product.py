# https://projecteuler.net/problem=4

# A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
# Find the largest palindrome made from the product of two 3-digit numbers.

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