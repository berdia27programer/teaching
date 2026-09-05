# def - keyword to define a function

# num1 and num2 - parameters of the function

# num1 = 5
# num2 = 10

# return - keyword to return a value from the function

# def sum_numbers(num1, num2):
#     return num1 + num2

# print(sum_numbers(5, 10))

# def age_in_10y(age):
#     return age + 10

# print(age_in_10y(25))

# შექმენით ფუნქცია, რომელიც იღებს პარამეტრ სახელს, თუ პარამეტრის არგუმენტი არის თაზო მაშინ გამოიტანოს "Hello admin" სხვა შემთხვევაში "Hello {გადმოცემული არგუმენტი}"

# def greet_user(name):
#     if name == "tazo":
#         return "Hello admin"
#     else:
#         return "Hello " + name

# print(greet_user("john"))

# def if_even(number):
#     if number % 2 == 0:
#         return "Even"
#     elif number % 5 == 0:
#         return number * 2
#     elif number % 2 == 0 and number % 5 == 0:
#         return "it even and it does divide by 5"
#     else:
#         return "it not even or doesnt divide by 5"

# print(if_even(5))

# for i in range(1, 151):
#     i += i

# print(i)

# even_sum = 0
# for i in range(1, 51):
#     if i % 2 == 0:
#         even_sum += i

# odd_sum = 0
# for x in range(1, 51):
#     if x % 2 != 0:
#         odd_sum += x
    

# print(i)
# print(x)

# num = int(input("Enter a number: "))

# multipled = 0
# number = 1

# while number <= 5:
#     multipled_value = number * 5
#     multipled += multipled_value
#     number += 1

# number2= 1

# while number2 <= 3:
#     multipled_value3 = number * 3
#     multipled += multipled_value3
#     number2 += 1

# num = int(input("Enter a number: "))

# for i in range(1, num + 1):
#     i += i

# print(i)

# num = int(input("Enter a number: ")) # 5

# total_sum = 0

# for i in range(1, num + 1):
#     total_sum += i

# bla = total_sum / num

# print(bla)

# num = int(input("Enter a number: "))

# for i in range(1, num + 1):
#     i *= i

# print(i)

# num = int(input("Enter a number: "))

# for i in range(1, num + 1):
#     i *= 2

# print(i)

# num = int(input("Enter a number: "))

# for i in range(1, num + 1):
#     i *= num

# print(i)

# name = input("Enter your name: ")
# password = input("Enter your password: ")

# if name != "Berdia" or password != "Berdia123":
#     print("User is not found")
# else:
#     print("Welcome")

# drinks = ["წყალი", "ჩაი", "ლიმონათი", "ყავა", "კოკა კოლა", "წვენი", "ღვინო", "ლუდი", "fuse tea", "lipton", "fanta"]

# print(drinks[2])
# print(drinks[5])

# print(drinks[0:5])

# print(drinks[5:])

# print(drinks[-1])
# print(drinks[-3])

# print(drinks[4:6])

# print(drinks)

# fruits = ["apple", "pineapple", "banana", "dragon fruit", "watermelon", "melon", "tomatos", "lemon"]

# print(fruits[3])
# print(fruits[6])

# print(fruits[1:4])

# print(fruits[5:])

# numbers = []

# for i in range(1, 21):
#     numbers.append(i)

# number = 1
# multipled = 0

# while number <= 3:
#     multipled_value = number * 3
#     multipled += multipled_value
#     number += 1

# projects = ["social media", "to-do list", "interactive comments section"]

# print(f"ჩემი პირველი პროექტი რაც გავაკეთე არის {projects[0]} და ჩემი ბოლო პროექტი რაც გავაკეთე არის {projects[len(projects) - 1]}")
#სახ.= მნიშვნელობა


# print("1" + 1)

# 1.ცვლადის სახელი
# 2.=
# 3.ცვლადის მნიშვნელობა

# name = "berdia"

# print(name)

# name = "berdia"

# print(5 > 10) # False
# print(5 < 10) # True
# print(5 == 5) # True

# # <= - ნაკლებია ან ტოლია
# # >= - მეტია ან ტოლია

# print(5 <= 10) # True
# print(5 >= 10) # False
# print(5 >= 5) # True

# and - "და"
# or - "ან"
# not - "არ"

# print(True and False) # false
# print(False and True) # false
# print(True and True) # True
# print(False and False) # false

# #     >        =
# print(True or False) # True
# print(False or True) # True

# print(True or True) # True
# print(False or False) # False


# while 1 > 5:
#     print("hello")