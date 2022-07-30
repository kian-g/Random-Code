def rearrange(s):
    # Initialize the variables
    count = 0
#     # Loop through the string
    for i in range(len(s)):
#         # If the character is a letter
        if s[i].isalpha():
#             # Increment the count
            count += 1
#     # Return the count
    return count
# # Main function
def main():
#     # Get the input
    s = input("Enter the string: ")
#     # Print the result
    print("The number of letters in the string is:", rearrange(s))
# # Call the main function
main()
