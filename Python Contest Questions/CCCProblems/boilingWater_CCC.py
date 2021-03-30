boilingTemp = int(input())
pressure = (5 * boilingTemp) - 400
print(pressure)
if boilingTemp > 100:
    print('-1')
elif boilingTemp == 100:
    print('0')
else:
    print('1')