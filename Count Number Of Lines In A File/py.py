# Function to number the lines in a file
def line_count(filename):
    # Initialize the variables
    count = 0
    # Open the file
    with open(filename) as f:
        # Loop through the file
        for line in f:
            # Increment the count
            count += 1
    # Return the count
    return count
# Main function
def main():
    # Get the input
    filename = input("Enter the filename: ")
    # Print the result
    print("The number of lines in the file is:", line_count(filename))
# Call the main function
main()
# End of file
