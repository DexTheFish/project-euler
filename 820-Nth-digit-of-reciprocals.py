import math

sum = 0
n = 100
for k in range(1,n) :
  fractionalPartOfX = 1/k - math.floor(1/k)

  sum += (math.floor(fractionalPartOfX * (10 ** n)) % 10)
