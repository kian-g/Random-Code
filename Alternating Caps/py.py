# a funtion that capitalizes every other letter in an alternating pattern and returns the result
def alternating_case(s):
    # create a list of characters
    s_list = list(s)
    # create a counter
    counter = 0
    # loop through the list
    for i in range(len(s_list)):
        # if the counter is even
        if counter % 2 == 0:
            # capitalize the character
            s_list[i] = s_list[i].upper()
        # if the counter is odd
        else:
            # lowercase the character
            s_list[i] = s_list[i].lower()
        # increment the counter
        counter += 1
    # join the list back into a string
    s_string = "".join(s_list)
    # return the string
    return s_string

print(alternating_case("Hello World"))
# Prints "hELLO wORLD"
