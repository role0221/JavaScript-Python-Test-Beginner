import math

Server = int(input("Enter the number Server"))
Work = int(input("Enter the number Work "))

Workmos= Work/Server
Workmos=int(math.ceil(Workmos))
#print((Workmos))
if Workmos>=int(Workmos) :
   # print (math.ceil(Workmos))
     Workmos=int(math.ceil(Workmos))
     #print (Workmos)
     
     
    
print("\n")
ServerWork = [[int(input("Enter Number Work: ")) for _ in range(Workmos)] for _ in range(Server)]
print("Server Work", ServerWork)

#ในข้อนี้ทำไม่เสร็จ ทำได้แค่ในกรณีที่ แบ่ง Server ลงตัว และต้องใส่เลขเองจนหมด Work (เรียง1-N ที่ใส่ใน Work)