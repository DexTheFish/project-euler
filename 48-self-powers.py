'''
The series, 1^1 + 2^2 + 3^3 + ... + 10^10 = 10405071317.
Find the last ten digits of the series, 1^1 + 2^2 + 3^3 + ... + 1000^1000.
'''


def solution():
    # solve the problem by direct computation of the series
    sum = 0
    n = 1
    while n <= 1000:
        sum += n ** n
        n += 1
    print(str(sum)[-10:])
    return str(sum)[-10:]


def solution2():
    # solve the problem by direct computation
    # at each step, discard all but the last 10 digits to save memory
    sum = 0
    n = 1
    while n <= 1000:
        sum += n ** n
        sum %= 10 ** 10
        n += 1
    print(str(sum)[-10:])
    return str(sum)[-10:]


solution()
solution2()
