import os

# Function to search current directory files for a string of text from input

def search_files(search_string):
    # create a list of files
    files = os.listdir()
    # create a counter
    counter = 0
    # loop through the list
    for i in range(len(files)):
        # open the file
        with open(files[i], "r") as f:
            # read the file
            contents = f.read()
            # if the search string is in the file
            if search_string in contents:
                #increment the counter
                counter += 1
                # print the file name
                print(files[i])
    #print the number of files found
    print(counter)

search_files("print")
