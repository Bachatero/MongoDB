
# coding: utf-8

# In[1]:

a=['bamseg','idiot','fucker']


# In[3]:

a[:]


# In[8]:

if "bamseg" in a:
    print "shits"


# In[9]:

colors={'shits':'blue','basmeg':'blue','idiot':'brown'}


# In[18]:

print colors['idiot'] brown['basmeg']


# In[19]:

things = {'animals':['dog','cat','zebra']}


# In[26]:

print things['animals']


# In[25]:

things['animals'].append('bear')


# In[27]:

people = {'name': 'Bob', 'hometown': "Palo Alto", 'favorite_color': 'red'}
for item in people:
    if (item == 'favorite_color'):
        print people[item]


# In[27]:




# In[28]:

fruit=['apple','apple','pear','peach','grapes','lemon','lemon']


# In[31]:

def analyze_list(l):
    counts = {}
    for item in l:
        print counts[item]
    return counts
counts=analyze_list(fruit)
print counts


# In[ ]:




