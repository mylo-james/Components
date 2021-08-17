# Form Component

## Current Features

- Easily create form using an nested arrays, and and onSubmit function

  - Each input is it's on subarray containing the [label, type]

    ```js
    let inputs = [
      ["Username", "text"],
      ["Password", "password"],
    ];
    ```

  - Pass an onSubmit function as the prop `onSubmit` to the `Form` component\
    and it will run the function when the user submits

## Example

- An example of how simple the form can look is found [here](../../Pages/FormExample/Login/Login.js)
