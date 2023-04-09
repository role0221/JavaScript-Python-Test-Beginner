
N=int(input("Enter Number Your FN : "))
print ("N = ",int(N))
t1=1
t2=1
i=0

if N <= 0:
   print("Enter Number > 0 ")
elif N == 1:
   print("FN1 =",N)
   print(t1)
else:
   while i < N-1:      
       nsum = t1 + t2
       t1 = t2
       t2 = nsum
       i += 1
print("FN",i+1," = ",t1)








