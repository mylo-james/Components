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

    - Each input will create...
      - A key for the input
      - A label for the input
      - A slice of state in the Form component, that will\
        be passed to the onSubmit as a stringified object.
      - placeholders matching the label
      - onChange event and value attribute creating controlled input
      - an id matching the label

  - Pass an onSubmit function as the prop `onSubmit` to the `Form` component\
    and it will run the function when the user submits

  - Added an option to render additional children to Form if needed such as additional buttons

## Example

- An example of how simple the form can look can be found [here](../../Pages/FormExample/Login/Login.js)

[Return Home](https://github.com/mylo-james/Components/)
