import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class PasswordGenerator {
  generatePassword(): string {
    const length = 8; // Minimum password length
    const specialChars = "!@#$%^&*()_+{}:<>?"; // Special characters to include

    const getRandomChar = (characters) =>
      characters.charAt(Math.floor(Math.random() * characters.length));

    let password = getRandomChar(specialChars); // Start with a random special character

    while (password.length < length) {
      const characters =
        "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
      password += getRandomChar(characters);
    }

    return password;
  }
}
