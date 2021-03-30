num = int(input())
i = 0
names = []
bids = []

while i < num:
    names.append(input())
    bids.append(input())
    i = i + 1

maxBid = max(bids)
bidIndex = bids.index(maxBid)

print(names[bidIndex])