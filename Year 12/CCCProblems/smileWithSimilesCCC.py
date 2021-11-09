n = int(input("Number of adjectives: "))
m = int(input("Number of nouns: "))

adj = []
noun = []

for i in range(0, n, 1):
    adj.append(input("Input an adjective: "))

for i in range(0, m, 1):
    noun.append(input("Input a noun: "))

for i in range(0, n, 1):
    for j in range(0, m, 1):
        print(adj[i] + " as " + noun[j])