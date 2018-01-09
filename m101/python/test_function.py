fruit=['apple','apple','pear','peach','grapes','lemon','lemon']

def analyze_list(l):
    counts = {}
    for item in l:
	if item not in counts:
        	counts[item]=1
	else:
		counts[item]=counts[item] + 1
    return counts

counts=analyze_list(fruit)
print counts
print fruit
