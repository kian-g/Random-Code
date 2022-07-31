# Basic python program to rearrange letters in alphabetical order and print the result.

def rearrange(str):
    # Create a list of characters in the string.
    lst = list(str)
    # Sort the list.
    lst.sort()
    # Join the list back into a string.
    return "".join(lst)

def main():
    print("This program rearranges the letters in a string.")
    print("Please enter a string:")
    str = input()
    print("The rearranged string is:")
    print(rearrange(str))

main()
