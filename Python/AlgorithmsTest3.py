Apay=input ("Apay : ",)
Bpay=input ("Bpay : ",)
Cpay=input ("Cpay : ",)
sum= float(Apay)+float(Bpay)+float(Cpay)
print ("Sum",sum) #รวม
avg= sum/3 #เฉลี่ย
print ("Avg",float(avg))
result1 = float(Apay)-float(avg)
result2 = float(Bpay)-float(avg)
result3 = float(Cpay)-float(avg)
print(result1,result2,result3)

if result1 < 0 :
    print ("A Pay For Group ",'%.2f' %result1)
elif result1 == 0 :
    print ("A Don Pay For Group ")
elif result1> 0 :
    print ("A Receive For Group ",'%.2f' %result1)

if result2 < 0 :
    print ("B Pay For Group ",'%.2f' %result2)
elif result2 == 0 :
    print ("B Don Pay For Group ")
elif result2> 0 :
    print ("B Receive For Group ",'%.2f' %result2)

if result3 < 0 :
    print ("C Pay For Group ",'%.2f' %result3)
elif result3 == 0 :
    print ("C Don Pay For Group ")
elif result3> 0 :
    print ("C Receive For Group ",'%.2f' %result3)


