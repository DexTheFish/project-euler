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

