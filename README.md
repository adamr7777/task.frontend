# Anagram Arranger

Anagram Arranger is an application that processes a list of words from a .txt file, arranging anagrams on the same line in the output.


## File Structure

- **Frontend:** Collects the .txt file and sends it to the backend.
- **Backend:** Receives the .txt file, processes it, and sends back the rearranged list.

## Main Logic

The main logic for rearranging the list of words is located in the backend main directory at:

`./utils/arrangePermutations.js`

You can view the code [here](https://github.com/adamr7777/task_backend/blob/main/utils/arrangePermutations.js).

## Running the App Locally

If the app is offline, follow these steps to run it locally:

1. Clone the repositories:
    ```bash
    git clone git@github.com:adamr7777/task_backend.git
    git clone git@github.com:adamr7777/task_frontend.git
    ```

2. Set up the backend:
    ```bash
    cd task_backend
    npm install
    npm run dev
    ```

3. Set up the frontend:
    ```bash
    cd task_frontend
    npm install
    npm run dev
    ```

4. Open the app on `localhost` on the appropriate port (typically specified in the backend and frontend configurations).

## Conclusion

With these steps, you should be able to run the Anagram Arranger app locally and process word lists to arrange anagrams effectively.
