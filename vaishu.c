#include <stdio.h>

int main() {
    char str[100];
    int i = 0;

    // Taking input from the user
    printf("Enter a string: ");
    fgets(str, sizeof(str), stdin);

    // Loop to print ASCII values of each character
    printf("ASCII values:\n");
    while (str[i] != '\0') {
        if (str[i] != '\n') {  // Ignoring newline character if present
            printf("'%c' : %d\n", str[i], str[i]);
        }
        i++;
    }

    return 0;
}
