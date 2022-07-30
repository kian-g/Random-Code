# Function to search for a pattern in a string
def pattern(s, p):
    # Initialize the variables
    count = 0
    # Loop through the string
    for i in range(len(s)):
        # If the pattern is found
        if s[i:i+len(p)] == p:
            # Increment the count
            count += 1
    # Return the count
    return count
# Main function
def main():
    # Get the input
    s = input("Enter the string: ")
    p = input("Enter the pattern: ")
    # Print the result
    print("The number of occurrences of the pattern is:", pattern(s, p))
# Call the main function
main()
# End of file
