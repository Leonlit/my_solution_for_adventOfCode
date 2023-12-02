totalSum = 0
numbers = []
fileName = open("inputs.txt", "r")
for text in fileName:
    chars = list(text)
    number = ""
    for c in chars:
        if c.isdigit():
            number += str(c)
            break
    for c in list(reversed(chars)):
        if c.isdigit():
            number += str(c)
            break
    numbers.append(int(number))
print(numbers)

print(sum(numbers))