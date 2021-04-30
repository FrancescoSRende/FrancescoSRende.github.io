# Returns index of x in arr if present, else -1
def binary_search(arr, low, high, x):
    # Check base case
    if high >= low:
        mid = (high + low) // 2

        # If element is present at the middle itself
        if arr[mid] == x:
            return mid
    
        # If element is smaller than mid, then it can only
        # be present in left subarray
        elif arr[mid] > x:
            return binary_search(arr, low, mid - 1, x)
    
        # Else the element can only be present in right subarray
        else:
            return binary_search(arr, mid + 1, high, x)
 
    else:
        # Element is not present in the array
        return -1


arr = [2, 3, 4, 10, 40]
x = 10
 
# Function call
result = binary_search(arr, 0, len(arr)-1, x)
 
if result != -1:
    print("Element is present at index", str(result))
else:
    print("Element is not present in array")



def binarySearchMario(A, x):
    c = sorted(A)
    left = 0
    right = len(A) - 1
    while left <= right:
        middle = int((left + right) / 2)
        if x == A[middle]:
            return middle
        elif x < A[middle]:
            right = middle - 1
        else:
            left = middle + 1



def binarySearchMiskew(a, value):
    left = 0
    right = len(a) - 1

    while(left <= right):
        middle = (left + right) // 2

        if (a[middle] < value):
            left = middle + 1
        elif (a[middle] > value):
            right = middle - 1
        else:
            return middle
        
    return -1
    # -1 is an invalid index, so if it is returned, we know that we havent found the object

# def myBinarySearch(n, arr):
#     arr = arr.sort()

#     high = len(arr)-1
#     low = 0
#     mid = (high + low) // 2

#     while mid > 0:
#         if arr[mid] == n:
#             return mid
#         elif n > arr[mid]:
#             mid = (high + mid) // 2
#         elif n < arr[mid]:
#             mid = (low + mid) // 2