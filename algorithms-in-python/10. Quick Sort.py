def quicksort(sequence):
    length = len(sequence)

    if length <= 1:
        return sequence
    else:
        pivot = sequence.pop()

    lower_items = []
    greater_items = []

    for item in sequence:
        if item > pivot:
            greater_items.append(item)
        else:
            lower_items.append(item)
    return quicksort(lower_items) + [pivot] + quicksort(greater_items)
print(quicksort([3,7,2,8,7,1,3,6,5,7,8,9]))

#A quick sort sets a pit point to partition a data set. High and low index values are then used to rearrange data values that are on the "wrong" side of the pivot point.